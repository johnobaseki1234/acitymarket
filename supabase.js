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
