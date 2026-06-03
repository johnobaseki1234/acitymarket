// ═══════════════════════════════════════════
// SUPABASE CLIENT
// ═══════════════════════════════════════════

const SUPABASE_URL = 'https://qvteganlzuepwhzashfk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2dGVnYW5senVlcHdoemFzaGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0Nzc1MjEsImV4cCI6MjA5NjA1MzUyMX0.lRCwscV2hc8BJoj63Mbsb5hwVGbQLXZoG8CjG8XE3kw';

const _supabase = window.supabase
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

// ═══════════════════════════════════════════
// IN-MEMORY DATA CACHE
// All app reads come from DB (synchronous).
// All writes update DB immediately, then sync to Supabase in the background.
// ═══════════════════════════════════════════
const DB = {
    vendors:       [],
    orders:        [],
    announcements: [],
    notifications: [],
    requests:      [],
    config: {
        campus_star:   null,
        order_counter: 0
    }
};

// ── LOAD ALL DATA FROM SUPABASE ──
async function loadAllData() {
    if (!_supabase) return;
    try {
        const [vendors, orders, announcements, notifications, requests, config] = await Promise.all([
            _supabase.from('vendors').select('data').order('updated_at', { ascending: false }),
            _supabase.from('orders').select('data').order('placed_at', { ascending: false }),
            _supabase.from('announcements').select('data').order('date', { ascending: false }),
            _supabase.from('notifications').select('data, read').order('created_at', { ascending: false }),
            _supabase.from('requests').select('data').order('created_at', { ascending: false }),
            _supabase.from('app_config').select('*')
        ]);
        DB.vendors       = (vendors.data       || []).map(r => r.data);
        DB.orders        = (orders.data        || []).map(r => r.data);
        DB.announcements = (announcements.data || []).map(r => r.data);
        DB.notifications = (notifications.data || []).map(r => ({ ...r.data, read: r.read }));
        DB.requests      = (requests.data      || []).map(r => r.data);
        (config.data || []).forEach(row => {
            if (row.key === 'campus_star')   DB.config.campus_star   = row.value || null;
            if (row.key === 'order_counter') DB.config.order_counter = parseInt(row.value) || 0;
        });

        // Seed 5 sample vendors on very first load (empty database)
        if (DB.vendors.length === 0) {
            await seedSampleVendors();
        }

        // Start realtime after data is in cache
        startRealtimeSubscriptions();

        // Migrate any remaining base64 images to Storage in background
        migrateImagesToStorage().catch(console.warn);
    } catch(e) {
        console.warn('loadAllData error:', e);
    }
}

// ── SEED SAMPLE VENDORS (first load only) ──
async function seedSampleVendors() {
    if (!_supabase || typeof SAMPLE_VENDORS === 'undefined') return;
    const five = SAMPLE_VENDORS.slice(0, 5);
    for (const v of five) {
        const vendor = { ...v, pendingApproval: false, joinedAt: Date.now(), lastActive: Date.now() };
        await _supabase.from('vendors').upsert({
            id: vendor.id, name: vendor.name,
            status: vendor.status || 'open',
            pending_approval: false,
            data: vendor,
            updated_at: new Date().toISOString()
        });
        DB.vendors.push(vendor);
    }
    // Seed a welcome notification
    const welcomeNotif = {
        id: 'n_welcome', icon: '🏪', title: 'Welcome to ACity Market!',
        text: '5 campus vendors are now live. Browse and start ordering!',
        time: 'Just now', read: false, route: null, forUser: null, forVendorId: null
    };
    await _supabase.from('notifications').upsert({
        id: welcomeNotif.id, for_user: null, for_vendor_id: null,
        read: false, data: welcomeNotif, created_at: new Date().toISOString()
    });
    DB.notifications.push(welcomeNotif);
}

// ═══════════════════════════════════════════
// SYNC FUNCTIONS (fire-and-forget background writes)
// ═══════════════════════════════════════════

async function syncVendor(vendor) {
    if (!_supabase) return;
    await _supabase.from('vendors').upsert({
        id: vendor.id, name: vendor.name,
        status: vendor.status || 'open',
        pending_approval: vendor.pendingApproval || false,
        data: vendor,
        updated_at: new Date().toISOString()
    });
}

async function syncOrder(order) {
    if (!_supabase) return;
    await _supabase.from('orders').upsert({
        id: order.id,
        vendor_id: order.vendorId || null,
        customer_name: order.customerName || null,
        status: order.status || 'pending',
        placed_at: order.placedAt || Date.now(),
        data: order
    });
}

async function syncAnnouncement(ann) {
    if (!_supabase) return;
    await _supabase.from('announcements').upsert({
        id: ann.id,
        date: ann.date || new Date().toISOString(),
        data: ann
    });
}

async function deleteAnnouncementFromDB(id) {
    if (!_supabase) return;
    await _supabase.from('announcements').delete().eq('id', id);
}

async function syncNotification(notif) {
    if (!_supabase) return;
    await _supabase.from('notifications').upsert({
        id: notif.id,
        for_user: notif.forUser || null,
        for_vendor_id: notif.forVendorId || null,
        read: notif.read || false,
        data: notif,
        created_at: new Date().toISOString()
    });
}

async function syncRequest(req) {
    if (!_supabase) return;
    await _supabase.from('requests').upsert({
        id: req.id,
        vendor_id: req.vendorId || null,
        type: req.type || null,
        status: req.status || 'pending',
        data: req
    });
}

async function deleteRequestFromDB(id) {
    if (!_supabase) return;
    await _supabase.from('requests').delete().eq('id', id);
}

async function syncConfig(key, value) {
    if (!_supabase) return;
    await _supabase.from('app_config').upsert({
        key, value: value == null ? '' : String(value),
        updated_at: new Date().toISOString()
    });
}

// ═══════════════════════════════════════════
// REALTIME SUBSCRIPTIONS (Phase 5D)
// Started after loadAllData() — handlers are defined in app.js
// ═══════════════════════════════════════════
function startRealtimeSubscriptions() {
    if (!_supabase) return;

    // Orders: vendor dashboard updates instantly on new/changed orders
    _supabase.channel('acm-orders')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' },
            payload => typeof handleOrderChange === 'function' && handleOrderChange(payload))
        .subscribe();

    // Notifications: badge + list updates instantly for all users
    _supabase.channel('acm-notifications')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications' },
            payload => typeof handleNotificationInsert === 'function' && handleNotificationInsert(payload))
        .subscribe();

    // Vendors: homepage + vendor detail + stock counts update live
    _supabase.channel('acm-vendors')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'vendors' },
            payload => typeof handleVendorChange === 'function' && handleVendorChange(payload))
        .subscribe();

    // Requests: admin panel badge + requests tab update live
    _supabase.channel('acm-requests')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'requests' },
            payload => typeof handleRequestChange === 'function' && handleRequestChange(payload))
        .subscribe();
}

// ── SAVE HELPERS WITH DIFF DETECTION ──
// Only syncs rows that actually changed — avoids upserting everything on every save.

// ═══════════════════════════════════════════
// SUPABASE STORAGE — IMAGE UPLOAD & MIGRATION
// ═══════════════════════════════════════════

async function ensureStorageBucket() {
    if (!_supabase) return;
    await _supabase.storage.createBucket('acm-images', { public: true }).catch(() => {});
}

// Upload a base64 dataURL to Supabase Storage. Returns public URL or null on failure.
async function uploadImage(dataUrl, folder, filename) {
    if (!_supabase || !dataUrl) return null;
    try {
        const res = await fetch(dataUrl);
        const blob = await res.blob();
        const ext = blob.type === 'image/png' ? 'png' : 'jpg';
        const path = `${folder}/${filename || Date.now()}.${ext}`;
        const { error } = await _supabase.storage.from('acm-images').upload(path, blob, { upsert: true });
        if (error) { console.warn('uploadImage storage error:', error); return null; }
        const { data } = _supabase.storage.from('acm-images').getPublicUrl(path);
        return data.publicUrl || null;
    } catch(e) {
        console.warn('uploadImage error:', e);
        return null;
    }
}

// Migrate existing base64 images in DB to Supabase Storage (runs once in background on load).
async function migrateImagesToStorage() {
    if (!_supabase) return;
    await ensureStorageBucket();

    // Vendors: logos + product photos
    const vendors = DB.vendors;
    for (const v of vendors) {
        let dirty = false;

        if (v.logo && v.logo.startsWith('data:')) {
            const url = await uploadImage(v.logo, 'logos', v.id);
            if (url) { v.logo = url; dirty = true; }
        }

        for (const p of (v.products || [])) {
            if (p.photos && p.photos.length) {
                for (let i = 0; i < p.photos.length; i++) {
                    if (p.photos[i] && p.photos[i].startsWith('data:')) {
                        const url = await uploadImage(p.photos[i], 'products', `${v.id}_${p.id}_${i}`);
                        if (url) { p.photos[i] = url; dirty = true; }
                    }
                }
                if (dirty) p.photo = p.photos[0];
            } else if (p.photo && p.photo.startsWith('data:')) {
                const url = await uploadImage(p.photo, 'products', `${v.id}_${p.id}_0`);
                if (url) { p.photo = url; p.photos = [url]; dirty = true; }
            }
        }

        if (dirty) await syncVendor(v).catch(console.warn);
    }

    // Announcements + posts
    for (const a of DB.announcements) {
        if (a.photo && a.photo.startsWith('data:')) {
            const url = await uploadImage(a.photo, 'posts', a.id);
            if (url) { a.photo = url; await syncAnnouncement(a).catch(console.warn); }
        }
    }
}

function _diffSync(newArr, oldArr, syncFn, deleteFn, idKey = 'id') {
    // Upsert changed/new items
    newArr.forEach(item => {
        const old = oldArr.find(o => o[idKey] === item[idKey]);
        if (!old || JSON.stringify(old) !== JSON.stringify(item)) {
            syncFn(item).catch(console.warn);
        }
    });
    // Delete removed items
    if (deleteFn) {
        oldArr
            .filter(o => !newArr.find(n => n[idKey] === o[idKey]))
            .forEach(o => deleteFn(o[idKey]).catch(console.warn));
    }
}
