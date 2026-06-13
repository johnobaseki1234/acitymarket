// ═══════════════════════════════════════════
// SAMPLE DATA
// ═══════════════════════════════════════════
const SAMPLE_VENDORS = [
    {
        id: 'v1', name: "Bella's Beads & More", studentName: 'Bella Asante', category: 'Beads & Jewelry',
        description: 'Handcrafted waist beads, bracelets, anklets and custom jewelry. Every piece made with love and care.',
        emoji: '📿', level: '300', rating: 4.9, reviews: 42,
        status: 'open', availability: 'always',
        whatsapp: '', phone: '', instagram: 'bellas_beads', tiktok: 'bellasbeads_gh',
        isNew: false, joinDate: '2024-01-10',
        products: [
            { id: 'p1', name: 'Waist Beads Set', price: 45, stock: 12, emoji: '📿', description: 'Handcrafted waist beads — choose your colors' },
            { id: 'p2', name: 'Bracelet Bundle (x3)', price: 25, stock: 8, emoji: '💚', description: '3 matching bracelets, mixed colors' },
            { id: 'p3', name: 'Anklet', price: 15, stock: 0, emoji: '✨', description: 'Dainty gold-toned anklet' },
            { id: 'p4', name: 'Custom Name Necklace', price: 60, stock: 5, emoji: '💎', description: 'Personalized necklace with your name' },
        ]
    },
    {
        id: 'v2', name: "Kojo's Kitchen", studentName: 'Kojo Mensah', category: 'Food',
        description: 'Hot homemade meals ready for pickup. Jollof, waakye, fried rice and more. Order before 12pm!',
        emoji: '🍱', level: '200', rating: 4.7, reviews: 31,
        status: 'open', availability: 'weekdays',
        whatsapp: '', phone: '', instagram: 'kojos_kitchen_ac', tiktok: '',
        isNew: false, joinDate: '2024-02-14',
        products: [
            { id: 'p5', name: 'Jollof + Chicken', price: 35, stock: 20, emoji: '🍚', description: 'Party jollof rice with grilled chicken' },
            { id: 'p6', name: 'Waakye Plate', price: 25, stock: 15, emoji: '🫘', description: 'Full waakye with egg, fish and gari' },
            { id: 'p7', name: 'Fried Rice', price: 30, stock: 10, emoji: '🍳', description: 'Fried rice with veg and chicken' },
        ]
    },
    {
        id: 'v3', name: "Ama's Closet", studentName: 'Ama Owusu', category: 'Fashion',
        description: 'Trendy clothes, curated thrift finds and accessories. Sizes S–XL. DM for your size!',
        emoji: '👗', level: '400', rating: 4.5, reviews: 19,
        status: 'preorder', availability: 'preorder',
        whatsapp: '', phone: '', instagram: 'amas_closet_gh', tiktok: 'amas_closet',
        isNew: false, joinDate: '2024-03-01',
        products: [
            { id: 'p8', name: 'Co-ord Set', price: 120, stock: 3, emoji: '👗', description: 'Matching top and skirt set' },
            { id: 'p9', name: 'Sneakers (38–42)', price: 80, stock: 5, emoji: '👟', description: 'Clean all-white sneakers' },
            { id: 'p10', name: 'Thrift Jeans', price: 40, stock: 7, emoji: '👖', description: 'Good-condition thrift denim' },
        ]
    },
    {
        id: 'v4', name: 'Fridge Vibes', studentName: 'Eric Darko', category: 'Drinks',
        description: 'Cold drinks, smoothies and fresh juices. Always cold, always fresh. Find me at Block C!',
        emoji: '🥤', level: '100', rating: 4.8, reviews: 27,
        status: 'open', availability: 'always',
        whatsapp: '', phone: '', instagram: '', tiktok: 'fridgevibesgh',
        isNew: true, joinDate: '2025-01-05',
        products: [
            { id: 'p11', name: 'Smoothie (500ml)', price: 20, stock: 30, emoji: '🥝', description: 'Fresh fruit smoothie, made daily' },
            { id: 'p12', name: 'Chilled Water (1.5L)', price: 5, stock: 50, emoji: '💧', description: 'Ice-cold bottled water' },
            { id: 'p13', name: 'Fresh Juice', price: 15, stock: 0, emoji: '🧃', description: 'Freshly pressed juice — ask for today\'s flavor' },
        ]
    },
    {
        id: 'v5', name: 'Glam by Serwa', studentName: 'Serwa Boateng', category: 'Beauty & Hair',
        description: 'Knotless braids, twist, hair treatments and makeup. Book your slot in advance — slots fill fast!',
        emoji: '💅', level: 'Alumni', rating: 4.6, reviews: 35,
        status: 'open', availability: 'appointment',
        whatsapp: '', phone: '', instagram: 'glam_by_serwa', tiktok: 'glambyserwa',
        isNew: false, joinDate: '2024-04-20',
        products: [
            { id: 'p14', name: 'Knotless Braids', price: 250, stock: 99, emoji: '💇', description: 'Small to XL knotless braids', isService: true },
            { id: 'p15', name: 'Full Face Makeup', price: 150, stock: 99, emoji: '💄', description: 'Full makeup for events and occasions', isService: true },
            { id: 'p16', name: 'Twist Braids', price: 180, stock: 99, emoji: '🌀', description: 'Medium or large passion twists', isService: true },
        ]
    },
    {
        id: 'v6', name: 'TechFix Campus', studentName: 'James Kweku', category: 'Services',
        description: 'Laptop and phone repairs on campus. Screen replacements, software fixes, fast turnaround. Contact for pricing.',
        emoji: '🔧', level: '300', rating: 4.4, reviews: 14,
        status: 'open', availability: 'weekdays',
        whatsapp: '', phone: '', instagram: '', tiktok: '',
        isNew: true, joinDate: '2025-01-12', isConsultation: true,
        products: [
            { id: 'p17', name: 'Screen Repair', price: 0, stock: 99, emoji: '📱', description: 'Phone or laptop screen replacement', isConsultation: true },
            { id: 'p18', name: 'Software Fix', price: 0, stock: 99, emoji: '💻', description: 'OS reinstall, virus removal, recovery', isConsultation: true },
            { id: 'p19', name: 'Battery Replacement', price: 0, stock: 99, emoji: '🔋', description: 'Phone or laptop battery swap', isConsultation: true },
        ]
    },
    {
        id: 'v7', name: 'Mama Akua Snacks', studentName: 'Akua Asare', category: 'Snacks',
        description: 'Kelewele, chinchinga, popcorn and more hot street snacks. Ready after 4pm every day.',
        emoji: '🍿', level: 'Alumni', rating: 4.3, reviews: 22,
        status: 'open', availability: 'always',
        whatsapp: '', phone: '', instagram: 'mamaakuasnacks', tiktok: '',
        isNew: true, joinDate: '2025-01-18',
        products: [
            { id: 'p20', name: 'Kelewele (Bag)', price: 10, stock: 40, emoji: '🍌', description: 'Spicy fried ripe plantain' },
            { id: 'p21', name: 'Chinchinga (x5)', price: 20, stock: 30, emoji: '🍢', description: '5 grilled kebab skewers' },
            { id: 'p22', name: 'Popcorn', price: 5, stock: 60, emoji: '🍿', description: 'Sweet or salted popcorn bag' },
        ]
    },
    {
        id: 'v8', name: 'Campus Rentals', studentName: 'Nana Adjei', category: 'Rentals',
        description: 'Rent cameras, tripods, speakers and more for events and projects. Contact to check availability.',
        emoji: '📷', level: '400', rating: 4.2, reviews: 9,
        status: 'open', availability: 'appointment',
        whatsapp: '', phone: '', instagram: 'campusrentalsac', tiktok: '',
        isNew: false, joinDate: '2024-06-01', isConsultation: true,
        products: [
            { id: 'p23', name: 'DSLR Camera (per day)', price: 0, stock: 2, emoji: '📷', description: 'Canon DSLR with lens — per day rental', isConsultation: true },
            { id: 'p24', name: 'JBL Speaker (per day)', price: 0, stock: 3, emoji: '🔊', description: 'Portable speaker rental per day', isConsultation: true },
            { id: 'p25', name: 'Tripod', price: 0, stock: 4, emoji: '🎥', description: 'Full-size camera tripod', isConsultation: true },
        ]
    }
];

// ═══════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════
const state = {
    currentUser: null,
    currentUserLevel: null,
    cart: [],
    prevPage: 'home',
    selectedStar: 0,
    votwVendorId: 'v1',
    loggedVendor: null,
    adminLoggedIn: false,
    currentProductId: null,
    currentProductVendorId: null,
    galleryIndex: 0,
    reviewStarSelected: 0,
    appliedPromo: null,
    notifTab: 'foryou',
    lastOrderId: null,   // EC1.3 — track last placed order for WA confirmation
};
let vendorEditProductId = null;
let pendingPhotos = [];
const variantState = { colors: [], sizes: [] };
let pendingVariantItem = null;
let obCurrentSlide = 0;   // moved here from after init() to avoid TDZ crash
const OB_TOTAL = 4;       // moved here from after init() to avoid TDZ crash


// ═══════════════════════════════════════════
// BOOT
// ═══════════════════════════════════════════
async function init() {
  try {
    showLoadingScreen();

    // Load all data from Supabase before rendering anything
    await loadAllData();

    // Restore Supabase auth session (vendor / admin)
    await restoreSupabaseSession();

    // Restore signed-in customer
    const savedUser = safeGetJSON('acm_user', null);
    if (savedUser) {
        if (typeof savedUser === 'object' && savedUser.name) {
            state.currentUser = savedUser.name;
            state.currentUserLevel = savedUser.level || null;
            state.currentUserPhone = savedUser.phone || null;
        } else if (typeof savedUser === 'string') {
            state.currentUser = savedUser; // backward compat
        }
        updateSigninBtn();
    }

    state.cart = safeGetJSON('acm_cart', []);

    // Dark mode — restore saved preference, fall back to OS setting
    const savedDarkMode = localStorage.getItem('acm_dark_mode');
    if (savedDarkMode !== null) {
        if (savedDarkMode === '1') document.body.classList.add('dark-mode');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
    updateDarkModeIcon();

    hideLoadingScreen();
    updateCartBadge();
    updateNotifBadge();
    updateAdminReqBadge();
    renderSavedChips();
    restoreLastPage();

    // SU1.1 — show onboarding on very first visit; after onboarding show welcome choice
    initOnboarding();
    // If already onboarded but not yet welcomed, show welcome screen directly
    if (localStorage.getItem('acm_onboarded') && !localStorage.getItem('acm_welcomed')) {
        setTimeout(() => showWelcome(), 400);
    }

    // Admin control base: accessible via #admin in the URL (not shown to regular users)
    if (window.location.hash === '#admin') {
        window.location.hash = '';  // clean the URL
        setTimeout(() => openAdminLogin(), 400);
    }

    // SP3.2 — scroll listener guarded so it only attaches once
    // (prevents duplicate listeners if init() is ever called again, e.g. after data restore)
    if (!window._acmScrollListenerAttached) {
        window.addEventListener('scroll', () => {
            const btn = document.getElementById('scrollTopBtn');
            if (btn) btn.classList.toggle('visible', window.scrollY > 300);
        }, { passive: true });
        window._acmScrollListenerAttached = true;
    }

  } catch(e) {
    console.error('ACM init error:', e);
    document.body.innerHTML = `<div style="padding:32px;text-align:center;font-family:sans-serif;">
        <h2 style="color:#c0392b;">⚠️ App failed to start</h2>
        <p style="margin:12px 0;color:#555;">There may be a corrupted data issue. Try clearing your browser's site data for this page, then reload.</p>
        <button onclick="location.reload()" style="background:#1e3a5f;color:white;border:none;padding:12px 24px;border-radius:10px;font-size:15px;cursor:pointer;">Reload</button>
    </div>`;
  }
}

// ═══════════════════════════════════════════
// REALTIME HANDLERS (Phase 5D)
// Called by Supabase channel subscriptions in supabase.js
// ═══════════════════════════════════════════

function handleOrderChange(payload) {
    const row = payload.new || {};
    const order = row.data;
    const eventType = payload.eventType;

    if (eventType === 'INSERT' && order) {
        if (!DB.orders.find(o => o.id === order.id)) {
            DB.orders.unshift(order);
        }
    } else if (eventType === 'UPDATE' && order) {
        const idx = DB.orders.findIndex(o => o.id === order.id);
        if (idx !== -1) DB.orders[idx] = order; else DB.orders.unshift(order);
    } else if (eventType === 'DELETE') {
        const delId = payload.old?.id;
        if (delId) DB.orders = DB.orders.filter(o => o.id !== delId);
    }

    // If this order belongs to the logged-in vendor, refresh their dashboard
    if (state.loggedVendor && order?.vendorId === state.loggedVendor.id) {
        updateOrdersBadge();
        const ordersTab = document.getElementById('vtab-orders');
        if (ordersTab && !ordersTab.classList.contains('hidden')) {
            renderVOrders();
        }
        // Toast alert for new incoming order
        if (eventType === 'INSERT') {
            showToast('New order received!');
        }
    }
}

function handleNotificationInsert(payload) {
    const row = payload.new || {};
    const notif = row.data;
    if (!notif) return;

    // Don't duplicate (we may have just added it ourselves)
    if (DB.notifications.find(n => n.id === notif.id)) return;

    DB.notifications.unshift({ ...notif, read: row.read || false });
    updateNotifBadge();

    // Refresh notification list if currently open
    const notifPage = document.getElementById('page-notifications');
    if (notifPage?.classList.contains('active')) {
        renderNotifications();
    }
}

function handleVendorChange(payload) {
    const row = payload.new || {};
    const vendor = row.data;
    const eventType = payload.eventType;

    if (eventType === 'DELETE') {
        const delId = payload.old?.id;
        if (delId) DB.vendors = DB.vendors.filter(v => v.id !== delId);
    } else if (vendor) {
        const idx = DB.vendors.findIndex(v => v.id === vendor.id);
        if (idx !== -1) DB.vendors[idx] = vendor; else DB.vendors.push(vendor);

        // Update logged vendor in state if it's the current vendor's own store
        if (state.loggedVendor?.id === vendor.id) {
            state.loggedVendor = vendor;
        }

        // Re-render vendor detail page if it's currently open for this vendor
        const lastPage = safeGetJSON('acm_last_page', null);
        if (lastPage?.page === 'vendor' && lastPage?.vendorId === vendor.id) {
            const vendorPage = document.getElementById('page-vendor');
            if (vendorPage?.classList.contains('active')) {
                openVendor(vendor.id);
            }
        }
    }

    // Always refresh homepage so stock counts + vendor cards stay accurate
    const homePage = document.getElementById('page-home');
    if (homePage?.classList.contains('active')) {
        renderHomePage();
    }
}

function handleRequestChange(payload) {
    const row = payload.new || {};
    const req = row.data;
    const eventType = payload.eventType;

    if (eventType === 'INSERT' && req) {
        if (!DB.requests.find(r => r.id === req.id)) {
            DB.requests.unshift(req);
        }
    } else if (eventType === 'UPDATE' && req) {
        const idx = DB.requests.findIndex(r => r.id === req.id);
        if (idx !== -1) DB.requests[idx] = req; else DB.requests.unshift(req);
    } else if (eventType === 'DELETE') {
        const delId = payload.old?.id;
        if (delId) DB.requests = DB.requests.filter(r => r.id !== delId);
    }

    updateAdminReqBadge();

    // Refresh requests tab if admin panel is open and on requests tab
    if (state.adminLoggedIn) {
        const reqTab = document.getElementById('atab-requests');
        if (reqTab && !reqTab.classList.contains('hidden')) {
            renderAdminRequests();
        }
    }
}

// ── LOADING SCREEN ──
function showLoadingScreen() {
    const el = document.getElementById('loadingScreen');
    if (el) el.style.display = 'flex';
}
function hideLoadingScreen() {
    const el = document.getElementById('loadingScreen');
    if (el) el.style.display = 'none';
}

// ── SUPABASE SESSION RESTORE ──
// Runs async after init() — restores vendor or admin session from Supabase Auth.
async function restoreSupabaseSession() {
    if (!_supabase) return;
    try {
        const { data: { session } } = await _supabase.auth.getSession();
        if (!session) return;
        const meta = session.user.user_metadata || {};
        if (meta.role === 'admin') {
            state.adminLoggedIn = true;
            // Don't auto-open admin panel on restore — just mark as logged in
        } else if (meta.role === 'vendor') {
            const vendors = getVendors();
            const v = vendors.find(x => x.id === session.user.id);
            if (v) {
                state.loggedVendor = v;
                renderMyStorePage();
            }
        }
        // Listen for sign-out events (e.g. session expired)
        _supabase.auth.onAuthStateChange((event) => {
            if (event === 'SIGNED_OUT') {
                state.loggedVendor = null;
                state.adminLoggedIn = false;
                renderMyStorePage();
            }
        });
    } catch(e) {
        console.warn('Supabase session restore failed:', e);
    }
}

// ═══════════════════════════════════════════
// HOME PAGE RENDER
// ═══════════════════════════════════════════
// UX2.6 — live stats strip in the compact hero
function renderHeroStats() {
    const el = document.getElementById('heroStats');
    if (!el) return;
    const vendors = getPublicVendors();
    const openCount = vendors.filter(v => v.status === 'open').length;
    const threeDaysAgo = Date.now() - 3 * 24 * 60 * 60 * 1000;
    const newCount = vendors.filter(v => v.joinedAt && v.joinedAt > threeDaysAgo).length;
    el.innerHTML = `
        <div class="hero-stat"><strong>${openCount}</strong>open now</div>
        ${newCount > 0 ? `<div class="hero-stat"><strong>${newCount}</strong>new</div>` : ''}
        <div class="hero-stat"><strong>${vendors.length}</strong>stores</div>
    `;
}

// ═══════════════════════════════════════════
// HOMEPAGE PROMO BANNER CAROUSEL (Phase V1)
// Admin-managed slides stored in DB.config.banners.
// ═══════════════════════════════════════════
const BANNER_TYPES = {
    deal:   { label: '🔥 HOT DEAL',     gradient: 'linear-gradient(135deg,#c0392b 0%,#e74c3c 100%)', accent: '#c0392b' },
    new:    { label: '✨ JUST DROPPED',  gradient: 'linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%)', accent: '#1e3a5f' },
    star:   { label: '⭐ CAMPUS STAR',   gradient: 'linear-gradient(135deg,#a16207 0%,#f59e0b 100%)', accent: '#a16207' },
    notice: { label: '📣 ANNOUNCEMENT', gradient: 'linear-gradient(135deg,#15803d 0%,#22c55e 100%)', accent: '#15803d' },
    vendor: { label: '⭐ FEATURED',      gradient: 'linear-gradient(135deg,#5b21b6 0%,#7c3aed 100%)', accent: '#5b21b6' }
};

// Tag chip text for a banner: a vendor banner shows the store name; others use the type label.
function bannerTagLabel(b) {
    const t = BANNER_TYPES[b.type] || BANNER_TYPES.notice;
    return b.storeName ? ('⭐ ' + b.storeName) : t.label;
}

let _bannerIdx = 0, _bannerN = 0, _bannerTimer = null, _bannerTouchX = null;

function getBanners() { return [...(DB.config.banners || [])]; }
function saveBanners(arr) {
    DB.config.banners = arr;
    syncConfig('banners', JSON.stringify(arr)).catch(console.warn);
}

function bannerSlideHTML(b) {
    const t = BANNER_TYPES[b.type] || BANNER_TYPES.notice;
    const hasImg = b.image && b.image.length;
    const bg = hasImg
        ? `background-image:linear-gradient(90deg,rgba(0,0,0,0.55),rgba(0,0,0,0.15)),url('${b.image}');background-size:cover;background-position:center;`
        : `background:${t.gradient};`;
    return `<div class="banner-slide" style="${bg}" onclick="bannerClick('${b.id}')">
        <div class="banner-overlay">
            <span class="banner-tag" style="color:${t.accent};">${escHtml(bannerTagLabel(b))}</span>
            <div class="banner-title">${escHtml(b.title || '')}</div>
            ${b.subtitle ? `<div class="banner-subtitle">${escHtml(b.subtitle)}</div>` : ''}
        </div>
    </div>`;
}

function renderHomeBanner() {
    const sec = document.getElementById('homeBannerSection');
    const track = document.getElementById('bannerTrack');
    const dotsEl = document.getElementById('bannerDots');
    if (!sec || !track) return;

    const banners = getBanners()
        .filter(b => b.active !== false)
        .sort((a, b) => (a.order || 0) - (b.order || 0));
    _bannerN = banners.length;

    if (!_bannerN) {
        sec.classList.add('hidden');
        if (_bannerTimer) { clearInterval(_bannerTimer); _bannerTimer = null; }
        track.innerHTML = '';
        if (dotsEl) dotsEl.innerHTML = '';
        return;
    }

    sec.classList.remove('hidden');
    track.innerHTML = banners.map(bannerSlideHTML).join('');
    if (dotsEl) {
        dotsEl.innerHTML = _bannerN > 1
            ? banners.map((b, i) => `<button class="banner-dot${i === 0 ? ' active' : ''}" onclick="goToBanner(${i})" aria-label="Slide ${i + 1}"></button>`).join('')
            : '';
    }
    _bannerIdx = 0;
    _applyBannerTransform();
    _startBannerAuto();
}

function _applyBannerTransform() {
    const track = document.getElementById('bannerTrack');
    if (track) track.style.transform = `translateX(-${_bannerIdx * 100}%)`;
    document.querySelectorAll('#bannerDots .banner-dot').forEach((d, i) => d.classList.toggle('active', i === _bannerIdx));
}

function goToBanner(i) {
    if (!_bannerN) return;
    _bannerIdx = (i + _bannerN) % _bannerN;
    _applyBannerTransform();
    _startBannerAuto();
}

function _startBannerAuto() {
    if (_bannerTimer) clearInterval(_bannerTimer);
    if (_bannerN > 1) {
        _bannerTimer = setInterval(() => {
            _bannerIdx = (_bannerIdx + 1) % _bannerN;
            _applyBannerTransform();
        }, 4800);
    }
}

function bannerTouchStart(e) { _bannerTouchX = e.changedTouches[0].clientX; }
function bannerTouchEnd(e) {
    if (_bannerTouchX == null) return;
    const dx = e.changedTouches[0].clientX - _bannerTouchX;
    if (Math.abs(dx) > 40) goToBanner(_bannerIdx + (dx < 0 ? 1 : -1));
    _bannerTouchX = null;
}

function bannerClick(id) {
    const b = getBanners().find(x => x.id === id);
    if (!b) return;
    if (b.linkType === 'vendor' && b.linkVendorId) {
        openVendor(b.linkVendorId);
    } else if (b.linkType === 'page' && b.linkPage) {
        showPage(b.linkPage);
        if (b.linkPage === 'announcements') loadAllAnnouncements();
    }
}

function renderHomePage() {
    checkAndUpdateCampusStar();
    renderHomeBanner();
    renderHeroStats();
    renderSponsoredSection();
    const campusStar = getCampusStar();
    const campusStarId = campusStar ? campusStar.id : null;

    const vendors = getPublicVendors();
    const threeDaysAgo = Date.now() - 3 * 24 * 60 * 60 * 1000;

    // Composite score: ratings × reviews + orders + revenue
    const orders = getOrders();
    const orderMap = {};
    orders.forEach(o => {
        if (!orderMap[o.vendorId]) orderMap[o.vendorId] = { count: 0, revenue: 0 };
        if (o.status !== 'cancelled') orderMap[o.vendorId].count++;
        if (o.status === 'fulfilled') orderMap[o.vendorId].revenue += (o.total || 0);
    });
    const score = v => {
        const m = orderMap[v.id] || { count: 0, revenue: 0 };
        return (v.rating * v.reviews * 10) + (m.count * 5) + (m.revenue * 0.1);
    };

    // Trending Vendors: Campus Star always first, then top 4 by score
    // Boosted (Sponsored) vendors are excluded — they already have their own section
    const ranked = [...vendors]
        .filter(v => v.id !== campusStarId && !v.isBoosted)
        .sort((a, b) => score(b) - score(a));
    const campusStarInFeatured = campusStar && !campusStar.isBoosted ? campusStar : null;
    const featured = campusStarInFeatured
        ? [campusStarInFeatured, ...ranked.slice(0, 4)]
        : ranked.slice(0, 5);
    const featuredIds = new Set(featured.map(v => v.id));

    // New on Campus: joined within 3 days, not already featured
    const newVendors = vendors.filter(v => !featuredIds.has(v.id) && v.joinedAt && v.joinedAt > threeDaysAgo);
    const newIds = new Set(newVendors.map(v => v.id));

    // All Businesses: sorted by quality score
    const allOthers = vendors
        .filter(v => !featuredIds.has(v.id) && !newIds.has(v.id))
        .sort((a, b) => score(b) - score(a));

    // Render Trending Products (horizontal scroll)
    renderTrendingProducts(vendors, orderMap);

    // Render Trending Vendors
    const featuredCountEl = document.getElementById('featuredCount');
    if (featuredCountEl) featuredCountEl.textContent = featured.length;
    renderVendorGrid('featuredVendorGrid', featured, campusStarId);

    // Render All Businesses
    const allSection = document.getElementById('allVendorsSection');
    if (allSection) {
        allSection.classList.toggle('hidden', allOthers.length === 0);
        const allCountEl = document.getElementById('allVendorCount');
        if (allCountEl) allCountEl.textContent = allOthers.length;
        renderVendorGrid('allVendorGrid', allOthers, campusStarId);
    }

    // Render New on Campus
    const newSection = document.getElementById('newSection');
    if (newSection) {
        newSection.classList.toggle('hidden', newVendors.length === 0);
        const newCountEl = document.getElementById('newCount');
        if (newCountEl) newCountEl.textContent = newVendors.length;
        renderVendorGrid('newVendorGrid', newVendors, campusStarId);
    }

    renderRecentAnnouncements();
    renderRecentActivity();
}

function renderTrendingProducts(vendors, orderMap) {
    const sec = document.getElementById('trendingProductsSection');
    const scroll = document.getElementById('trendingProductsScroll');
    const countEl = document.getElementById('trendingProductCount');
    if (!sec || !scroll) return;

    // Collect all products across all vendors, score them by vendor order count
    const allProducts = [];
    vendors.forEach(v => {
        if (!v.products) return;
        const vendorOrders = (orderMap[v.id] || {}).count || 0;
        v.products.forEach(p => {
            if (p.isConsult || p.stock === 0) return;
            allProducts.push({ product: p, vendor: v, vendorOrders });
        });
    });

    // Sort by vendor popularity; take top 10
    allProducts.sort((a, b) => b.vendorOrders - a.vendorOrders);
    const top = allProducts.slice(0, 10);

    if (!top.length) { sec.classList.add('hidden'); return; }
    sec.classList.remove('hidden');
    if (countEl) countEl.textContent = top.length;

    scroll.innerHTML = top.map(({ product: p, vendor: v }) => {
        const img = p.image
            ? `<img src="${p.image}" alt="${escHtml(p.name)}" onerror="this.style.display='none'">`
            : `<span style="font-size:32px;">${v.emoji || '🛍️'}</span>`;
        return `<div class="trending-product-card" onclick="openVendor('${v.id}')">
            <div class="trending-product-img">${img}</div>
            <div class="trending-product-body">
                <div class="trending-product-name">${escHtml(p.name)}</div>
                <div class="trending-product-vendor">${escHtml(v.name)}</div>
                <div class="trending-product-price">GH₵${p.price}</div>
            </div>
        </div>`;
    }).join('');
}

function renderRecentActivity() {
    const sec = document.getElementById('recentActivitySection');
    const list = document.getElementById('recentActivityList');
    if (!sec || !list) return;

    const notifications = safeGetJSON('acm_notifications', []);
    const recent = notifications.slice(0, 5);
    if (!recent.length) { sec.classList.add('hidden'); return; }
    sec.classList.remove('hidden');

    // Store routes globally so onclick can reference them by index (avoids JSON double-quote in attribute)
    window._activityRoutes = recent.map(n => n.route || null);

    list.innerHTML = `<div class="notifications-panel">${recent.map((n, i) => {
        const onclk = n.route ? `handleNotifRoute(window._activityRoutes[${i}])` : '';
        return `<div class="notification-item" onclick="${onclk}">
            <span class="notif-icon">${n.icon || ''}</span>
            <div class="notif-text">
                <h4>${escHtml(n.title || '')}</h4>
                <p>${escHtml(n.text || '')}</p>
            </div>
            <span class="notif-time">${n.time || ''}</span>
        </div>`;
    }).join('')}</div>`;
}

function renderFeaturedVendors() {
    const vendors = getPublicVendors();
    let featured = vendors.filter(v => v.featured);
    if (!featured.length) {
        featured = [...vendors]
            .sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews))
            .slice(0, 4);
    } else {
        featured = featured.slice(0, 4);
    }
    const section = document.getElementById('featuredSection');
    const grid = document.getElementById('featuredVendorGrid');
    if (!grid) return;
    if (!featured.length) { section.classList.add('hidden'); return; }
    section.classList.remove('hidden');
    grid.innerHTML = featured.map(v => vendorCardHTML(v)).join('');
}

function openVotwVendor() { showPage('home'); }

function renderVendorGrid(containerId, vendors, campusStarId = null) {
    const el = document.getElementById(containerId);
    if (!el) return;
    if (!vendors.length) {
        el.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><div class="empty-icon"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg></div><h3>No vendors yet</h3><p>Check back soon!</p></div>`;
        return;
    }
    el.innerHTML = vendors.map(v => vendorCardHTML(v, campusStarId)).join('');
}

// ── Trust badge system ──
// Each badge is a small pill shown on the vendor detail page and in cards.
// Pass optional precomputed fulfilledCount to avoid repeated localStorage reads.
function getVendorTrustBadges(v, fulfilledCountOverride) {
    const badges = [];
    const fulfilledCount = (fulfilledCountOverride !== undefined)
        ? fulfilledCountOverride
        : getOrders().filter(o => o.vendorId === v.id && o.status === 'fulfilled').length;

    // Verified Vendor: admin-approved (not pending, not suspended)
    if (!v.pendingApproval && !v.suspended) {
        badges.push({ cls: 'tb-verified-vendor', icon: '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>', label: 'Verified' });
    }
    // Top Rated: 4.5+ stars with 5+ reviews
    if (v.rating >= 4.5 && v.reviews >= 5) {
        badges.push({ cls: 'tb-top-rated', icon: '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>', label: 'Top Rated' });
    }
    // Popular Store: 20+ fulfilled orders
    if (fulfilledCount >= 20) {
        badges.push({ cls: 'tb-popular', icon: '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>', label: 'Popular' });
    }
    // Fast Responder: last active within 2 hours
    if (v.lastActive && (Date.now() - v.lastActive) < 7200000) {
        badges.push({ cls: 'tb-fast-responder', icon: '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>', label: 'Fast Responder' });
    }
    return badges;
}

function trustBadgesHTML(v) {
    const badges = getVendorTrustBadges(v);
    if (!badges.length) return '';
    return `<div class="trust-badges">${badges.map(b =>
        `<span class="trust-badge ${b.cls}">${b.icon} ${b.label}</span>`
    ).join('')}</div>`;
}

function vendorCardHTML(v, campusStarId = null) {
    // EC1.1 — don't show stars until there's at least one real review
    const stars = v.reviews > 0 ? renderStars(v.rating, 12) : '';
    const levelText = v.level && v.level !== 'Alumni' ? ' · Lvl ' + v.level : '';
    const imgContent = v.logo
        ? `<img src="${v.logo}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">`
        : v.emoji;
    const isStar = campusStarId && v.id === campusStarId;
    const badgeHTML = isStar
        ? '<div class="campus-star-badge">Campus Star</div>'
        : v.isBoosted ? '<div class="sponsored-vendor-badge">Sponsored</div>'
        : v.isNew ? '<div class="new-badge">NEW</div>'
        : v.featured ? '<div class="featured-badge">Featured</div>'
        : '';
    const hasPromo = (v.promoCodes || []).some(c => new Date(c.expiry) >= new Date());
    const promoBadgeHTML = hasPromo ? '<div class="promo-vendor-badge">PROMO</div>' : '';
    // SU1.3 — show lowest product price on card so students know if it fits their budget
    const prices = (v.products || []).filter(p => !p.isConsult && p.price > 0).map(p => p.price);
    const priceTag = prices.length
        ? `<span style="font-size:11px;color:var(--text-muted);">From GH₵${Math.min(...prices)}</span>`
        : '';
    // Status badge top-right of image
    const statusStyle = {
        open:        'background:#16a34a;color:#fff;',
        closed:      'background:#dc2626;color:#fff;',
        preorder:    'background:#d97706;color:#fff;',
        appointment: 'background:#2563eb;color:#fff;'
    };
    const statusText = { open: 'Open', closed: 'Closed', preorder: 'Pre-order', appointment: 'By Appt' };
    const sStyle = statusStyle[v.status] || statusStyle.open;
    const sText  = statusText[v.status]  || 'Open';
    const statusTopBadge = `<div style="position:absolute;top:8px;right:8px;${sStyle}font-size:10px;font-weight:700;padding:3px 7px;border-radius:6px;z-index:1;letter-spacing:0.2px;">${sText}</div>`;
    const closedDim = v.status === 'closed' ? 'opacity:0.55;filter:grayscale(30%);' : '';
    // Show max 2 trust badges on card to keep it clean
    const cardTrustBadges = (() => {
        const b = getVendorTrustBadges(v).slice(0, 2);
        if (!b.length) return '';
        return `<div class="trust-badges" style="margin-top:5px;">${b.map(x =>
            `<span class="trust-badge ${x.cls}">${x.icon} ${x.label}</span>`
        ).join('')}</div>`;
    })();
    return `
        <div class="vendor-card" onclick="openVendor('${v.id}')" style="${closedDim}">
            ${badgeHTML}
            ${statusTopBadge}
            ${promoBadgeHTML}
            <div class="vendor-img" style="${v.logo ? 'padding:0;overflow:hidden;' : ''}">${imgContent}</div>
            <div class="vendor-card-body">
                <div class="vendor-name">${escHtml(v.name)}</div>
                <div class="vendor-student">${escHtml(v.studentName || '')}</div>
                <div class="vendor-category">${escHtml(v.category)}${levelText}</div>
                <div class="vendor-meta">
                    <div>
                        ${v.reviews > 0
                            ? `<span class="stars">${stars}</span><span class="review-count">${v.rating} (${v.reviews})</span>`
                            : `<span style="font-size:11px;color:var(--text-muted);font-style:italic;">No reviews yet</span>`}
                    </div>
                    ${priceTag}
                </div>
                ${cardTrustBadges}
            </div>
        </div>`;
}

// ═══════════════════════════════════════════
// VENDOR DETAIL
// ═══════════════════════════════════════════
function openVendor(vendorId) {
    const vendors = getVendors();
    const v = vendors.find(x => x.id === vendorId);
    if (!v) return;
    // EC1.4 — block access to unapproved or suspended vendors from public
    if (!state.adminLoggedIn && state.loggedVendor?.id !== vendorId) {
        if (v.pendingApproval) { showToast('This store is not yet available.'); return; }
        if (v.suspended)       { showToast('This store is currently suspended.'); return; }
    }

    trackRecentlyViewed(vendorId);
    savePageState('vendor', { vendorId });

    const statusLabel = { open: 'Open', closed: 'Closed', preorder: 'Pre-order Only', appointment: 'By Appointment' };
    const availLabel = { always: 'Always Available', weekdays: 'Weekdays Only', preorder: 'Pre-order Only', appointment: 'By Appointment' };

    const contactBtns = [
        v.whatsapp ? `<a class="contact-btn whatsapp" href="https://wa.me/${normalizeWhatsApp(v.whatsapp)}" target="_blank">💬 WhatsApp</a>` : '',
        v.phone    ? `<a class="contact-btn phone" href="tel:${v.phone}">📞 Call</a>` : '',
        v.instagram? `<a class="contact-btn instagram" href="https://instagram.com/${v.instagram}" target="_blank">📸 Instagram</a>` : '',
        v.tiktok   ? `<a class="contact-btn tiktok" href="https://tiktok.com/@${v.tiktok}" target="_blank">🎵 TikTok</a>` : '',
    ].filter(Boolean).join('');

    const productsHTML = renderVendorProducts(v);

    const levelTag = v.level && v.level !== 'Alumni'
        ? `<span class="vendor-tag">Level ${v.level}</span>`
        : `<span class="vendor-tag">Alumni</span>`;

    const campusStar = getCampusStar();
    const isCampusStar = campusStar && campusStar.id === v.id;
    const activeInfo = getLastActiveInfo(v);

    document.getElementById('vendorDetailTitle').textContent = v.name;
    document.getElementById('vendorDetailContent').innerHTML = `
        <div class="vendor-detail-hero">
            <div class="vendor-detail-avatar">${v.logo ? `<img src="${v.logo}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" onerror="this.style.display='none'">` : v.emoji}</div>
            <div class="vendor-detail-info">
                ${isCampusStar ? `<div style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#b8860b,#ffd700);color:#3d2800;font-size:11px;font-weight:800;padding:3px 10px;border-radius:20px;margin-bottom:6px;box-shadow:0 1px 4px rgba(180,130,0,0.35);letter-spacing:0.3px;">Campus Star <span onclick="event.stopPropagation();showToast('Campus Star is automatically awarded to the #1 vendor by fulfilled orders with a 4.5★+ rating. No votes, no payments — purely earned.')" style="cursor:pointer;font-size:13px;font-weight:700;opacity:0.7;" title="What is Campus Star?">ⓘ</span></div>` : ''}
                <h2>${escHtml(v.name)}</h2>
                <div class="student-name-hero">${escHtml(v.studentName || '')}</div>
                <p>${escHtml(v.description)}</p>
                <div class="vendor-tags">
                    <span class="vendor-tag">${escHtml(v.category)}</span>
                    ${levelTag}
                    <span class="vendor-tag">${statusLabel[v.status] || 'Open'}</span>
                    <span class="vendor-tag">${availLabel[v.availability] || 'Always Available'}</span>
                </div>
                ${(() => { const tb = getVendorTrustBadges(v); return tb.length ? `<div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:8px;">${tb.map(b=>`<span class="trust-badge ${b.cls}" style="background:rgba(255,255,255,0.18);color:rgba(255,255,255,0.95);border-color:rgba(255,255,255,0.25);">${b.icon} ${b.label}</span>`).join('')}</div>` : ''; })()}
                <div style="margin-top:10px;">
                    <button id="followBtn" class="follow-btn ${isFollowing(v.id) ? 'following' : ''}" onclick="toggleFollow('${v.id}')">
                        ${isFollowing(v.id) ? '✓ Following' : '+ Follow'}
                    </button>
                </div>
            </div>
        </div>
        <div class="vendor-detail-body">
            <div class="contact-section">
                <h3>Contact Vendor</h3>
                <div class="contact-buttons">${contactBtns || '<span style="color:var(--text-muted);font-size:13px;">No contact info provided</span>'}</div>
            </div>
            <div style="margin:0 16px 16px;background:var(--bg-light);border:1px solid var(--border);border-radius:12px;padding:12px 14px;display:flex;flex-direction:column;gap:8px;">
                ${v.pickupLabel ? `
                <div>
                    <div style="font-size:12px;font-weight:700;color:var(--text-muted);letter-spacing:0.4px;margin-bottom:3px;">PICKUP LOCATION</div>
                    <div style="font-size:13px;font-weight:600;color:var(--text-dark);">${escHtml(v.pickupLabel)}</div>
                    ${v.pickupType === 'offcampus' ? `
                        <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">Contact vendor for directions.</div>
                        ${v.pickupMapsLink ? `<a href="${escHtml(v.pickupMapsLink)}" target="_blank" rel="noopener noreferrer"
                            style="display:inline-flex;align-items:center;gap:5px;margin-top:6px;background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:8px;padding:5px 12px;font-size:12px;font-weight:700;text-decoration:none;">📍 Open in Google Maps</a>` : ''}
                    ` : ''}
                </div>` : ''}
                ${getResponseTimeLabel(v.id) ? `
                <div ${v.pickupLabel ? 'style="border-top:1px solid var(--border);padding-top:8px;"' : ''}>
                    <div style="font-size:12px;font-weight:700;color:var(--text-muted);letter-spacing:0.4px;margin-bottom:3px;">RESPONSE TIME</div>
                    <div style="font-size:13px;font-weight:600;color:var(--text-dark);">${getResponseTimeLabel(v.id)}</div>
                </div>` : ''}
                <div ${(v.pickupLabel || getResponseTimeLabel(v.id)) ? 'style="border-top:1px solid var(--border);padding-top:8px;"' : ''}>
                    <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:0.5px;margin-bottom:2px;">LAST ACTIVE</div>
                    <div style="font-size:14px;font-weight:700;color:${activeInfo.color};">${activeInfo.timeAgo}</div>
                </div>
            </div>
            ${(v.policyRefund || v.policyCutoff || v.policyNotes) ? `
            <div style="margin:0 16px 16px;">
                <button onclick="toggleShopPolicy('shopPolicy_${v.id}')"
                    style="width:100%;display:flex;align-items:center;justify-content:space-between;background:var(--bg-light);border:1px solid var(--border);border-radius:var(--radius-md);padding:12px 14px;cursor:pointer;font-family:inherit;text-align:left;">
                    <div style="font-size:14px;font-weight:700;color:var(--text-dark);">Shop Policy</div>
                    <span id="shopPolicyArrow_${v.id}" style="font-size:14px;color:var(--text-muted);transition:transform 0.2s;">▼</span>
                </button>
                <div id="shopPolicy_${v.id}" class="hidden" style="background:var(--bg-light);border:1px solid var(--border);border-top:none;border-radius:0 0 12px 12px;padding:0 14px 14px;">
                    ${v.policyRefund ? `
                    <div style="padding-top:12px;">
                        <div style="font-size:12px;font-weight:700;color:var(--text-muted);letter-spacing:0.4px;margin-bottom:3px;">REFUND / RETURN POLICY</div>
                        <div style="font-size:13px;color:var(--text-dark);line-height:1.5;">${escHtml(v.policyRefund)}</div>
                    </div>` : ''}
                    ${v.policyCutoff ? `
                    <div style="padding-top:12px;">
                        <div style="font-size:12px;font-weight:700;color:var(--text-muted);letter-spacing:0.4px;margin-bottom:3px;">ORDER CUT-OFF TIME</div>
                        <div style="font-size:13px;color:var(--text-dark);line-height:1.5;">${escHtml(v.policyCutoff)}</div>
                    </div>` : ''}
                    ${v.policyNotes ? `
                    <div style="padding-top:12px;">
                        <div style="font-size:12px;font-weight:700;color:var(--text-muted);letter-spacing:0.4px;margin-bottom:3px;">PICKUP NOTES</div>
                        <div style="font-size:13px;color:var(--text-dark);line-height:1.5;">${escHtml(v.policyNotes)}</div>
                    </div>` : ''}
                </div>
            </div>` : ''}
            <div class="section">
                <div class="section-header"><div class="section-title">Products &amp; Services</div></div>
                <!-- EC2.5 — in-store search/filter -->
                ${(v.products || []).length > 4 ? `
                <div style="padding:0 16px 12px;display:flex;gap:8px;align-items:center;">
                    <div style="flex:1;display:flex;background:var(--bg-light);border:1.5px solid var(--border);border-radius:8px;overflow:hidden;">
                        <input type="text" id="storeSearch_${v.id}" placeholder="Search products…" oninput="filterStoreProducts('${v.id}')"
                            style="flex:1;border:none;background:transparent;padding:8px 12px;font-size:13px;color:var(--text-dark);outline:none;font-family:inherit;">
                        <button onclick="document.getElementById('storeSearch_${v.id}').value='';filterStoreProducts('${v.id}')" style="background:none;border:none;color:var(--text-muted);padding:0 10px;cursor:pointer;font-size:16px;">✕</button>
                    </div>
                </div>` : ''}
                <div id="storeProductsGrid_${v.id}">${productsHTML}</div>
            </div>
            <div id="reviewsSection_${v.id}">${buildReviewsHTML(v)}</div>
            <!-- SU3.3 — Report vendor -->
            <div style="text-align:center;padding:8px 16px 20px;">
                <button onclick="openReportModal('${v.id}','${escHtml(v.name).replace(/'/g,"\\'")}')" style="background:none;border:none;color:#dc2626;font-size:12px;font-weight:500;cursor:pointer;text-decoration:underline;font-family:inherit;opacity:0.7;">🚨 Report this store</button>
            </div>
        </div>`;

    showPage('vendor');
}

// ═══════════════════════════════════════════
// REVIEWS
// ═══════════════════════════════════════════
function buildReviewsHTML(v) {
    const reviews = getReviews(v.id);
    // EC1.1 — only show stars if there's at least one review
    const stars = v.reviews > 0 ? renderStars(v.rating, 15) : '';
    const reviewItems = reviews.length
        ? reviews.map(r => `
            <div style="padding:12px 0;border-bottom:1px solid var(--border);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                    <strong style="font-size:14px;">${escHtml(r.name)}</strong>
                    <span style="font-size:14px;">${renderStars(r.rating, 14)}</span>
                </div>
                <p style="font-size:13px;color:var(--text-muted);">${escHtml(r.comment)}</p>
                <span style="font-size:12px;color:var(--text-muted);">${getTimeAgo(new Date(r.date))}</span>
            </div>`).join('')
        : '<p style="color:var(--text-muted);font-size:13px;padding:12px 0;">No reviews yet. Be the first!</p>';

    // EC1.2 + EC3.1 — only show review form if signed in, has an order, and hasn't reviewed yet
    let writeReview = '';
    if (!state.currentUser) {
        writeReview = `<p style="font-size:13px;color:var(--text-muted);margin-top:12px;"><a href="#" onclick="openSigninModal()" style="color:var(--primary-blue);">Sign in</a> to leave a review.</p>`;
    } else {
        const reviews = getReviews(v.id);
        const alreadyReviewed = reviews.some(r => r.name === state.currentUser);
        const hasOrder = getOrders().some(o => o.vendorId === v.id && o.customerName === state.currentUser && o.status !== 'cancelled');
        if (alreadyReviewed) {
            writeReview = `<p style="font-size:13px;color:var(--text-muted);margin-top:12px;">✅ You've already reviewed this vendor.</p>`;
        } else if (!hasOrder) {
            writeReview = `<p style="font-size:13px;color:var(--text-muted);margin-top:12px;">Order from this vendor to leave a review.</p>`;
        } else {
            writeReview = `<div style="margin-top:16px;">
               <h4 style="font-size:14px;font-weight:600;margin-bottom:10px;">Leave a Review</h4>
               <div class="star-picker" id="starPicker_${v.id}" style="display:flex;gap:4px;margin-bottom:10px;">
                   ${[1,2,3,4,5].map(s=>`<span onclick="selectStar(${s},'${v.id}')" data-val="${s}">★</span>`).join('')}
               </div>
               <div class="form-group" style="margin-bottom:10px;">
                   <textarea id="reviewText_${v.id}" rows="2" placeholder="Write your review..." maxlength="400"></textarea>
               </div>
               <button onclick="submitReview('${v.id}')" style="background:var(--primary-blue);color:white;border:none;padding:10px 20px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">Submit Review</button>
           </div>`;
        }
    }

    return `
        <div class="contact-section" style="margin-top:0;">
            <h3>Reviews ${v.reviews > 0 ? `${stars} <span style="color:var(--text-muted);font-size:13px;">${v.rating} (${v.reviews})</span>` : ''}</h3>
            ${reviewItems}
            ${writeReview}
        </div>`;
}

function selectStar(star, vendorId) {
    state.selectedStar = star;
    const picker = document.getElementById('starPicker_' + vendorId);
    if (!picker) return;
    picker.querySelectorAll('span').forEach((s, i) => {
        s.classList.toggle('lit', i < star);
    });
}

function submitReview(vendorId) {
    if (!state.currentUser) { openSigninModal(); return; }
    if (!state.selectedStar) { showToast('Please select a star rating'); return; }
    const textEl = document.getElementById('reviewText_' + vendorId);
    const text = textEl.value.trim();
    if (!text) { showToast('Please write a review'); return; }

    // EC1.2 — must have placed at least one order from this vendor (any non-cancelled status)
    const hasOrder = getOrders().some(o =>
        o.vendorId === vendorId &&
        o.customerName === state.currentUser &&
        o.status !== 'cancelled'
    );
    if (!hasOrder) {
        showToast('You can only review vendors you\'ve ordered from.');
        return;
    }

    const reviews = getReviews(vendorId);

    // EC3.1 — one review per customer per vendor
    if (reviews.some(r => r.name === state.currentUser)) {
        showToast('You\'ve already reviewed this vendor.');
        return;
    }

    reviews.push({ id: 'r' + Date.now(), vendorId, name: state.currentUser, rating: state.selectedStar, comment: text, date: new Date().toISOString() });
    localStorage.setItem('acm_reviews_' + vendorId, JSON.stringify(reviews));

    const vendors = getVendors();
    const v = vendors.find(x => x.id === vendorId);
    if (v) {
        const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
        v.rating = Math.round(avg * 10) / 10;
        v.reviews = reviews.length;
        saveVendors(vendors);
    }

    state.selectedStar = 0;
    showToast('Review submitted! Thank you.');
    document.getElementById('reviewsSection_' + vendorId).innerHTML = buildReviewsHTML(v || {id:vendorId,rating:0,reviews:0});
}

function getReviews(vendorId) {
    return safeGetJSON('acm_reviews_' + vendorId, []);
}

// ═══════════════════════════════════════════
// CART
// ═══════════════════════════════════════════
function addToCart(vendorId, productId, variant = null) {
    if (!requireCustomer('Sign in to add items to your cart')) return;
    const v = getVendors().find(x => x.id === vendorId);
    const p = v?.products.find(x => x.id === productId);
    if (!p) return;

    const isPreorder = p.stock === 0 && !p.isConsultation && !v.isConsultation;
    const variantStr = variant ? JSON.stringify(variant) : null;
    const existing = state.cart.find(i => i.productId === productId && i.variantStr === variantStr);
    if (existing) {
        if (!isPreorder && existing.qty >= p.stock) { showToast('Max stock reached'); return; }
        existing.qty++;
    } else {
        const cartItemId = 'ci' + Date.now();
        state.cart.push({ cartItemId, vendorId, vendorName: v.name, productId, productName: p.name, price: p.price, qty: 1, emoji: p.emoji, photo: p.photo || null, variant, variantStr, isPreorder });
    }
    safeSetJSON('acm_cart', state.cart);
    updateCartBadge();
    const vLabel = variant ? ` (${[variant.color, variant.size].filter(Boolean).join(', ')})` : '';
    showToast(p.name + vLabel + (isPreorder ? ' added as pre-order' : ' added to cart'));
}

function updateCartBadge() {
    const total = state.cart.reduce((s, i) => s + i.qty, 0);
    const badge = document.getElementById('cartBadge');
    badge.textContent = total;
    badge.classList.toggle('hidden', total === 0);
}

function renderCart() {
    const el = document.getElementById('cartContent');
    if (!state.cart.length) {
        el.innerHTML = `<div class="empty-state"><div class="empty-icon">🛒</div><h3>Your cart is empty</h3><p>Find something you like and tap Add to Cart.</p><button onclick="showPage('home')" style="margin-top:16px;background:var(--primary-blue);color:white;border:none;padding:12px 28px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">Browse Vendors</button></div>`;
        return;
    }
    const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
    const byVendor = {};
    state.cart.forEach(i => {
        if (!byVendor[i.vendorId]) byVendor[i.vendorId] = { name: i.vendorName, items: [] };
        byVendor[i.vendorId].items.push(i);
    });

    const vendorEntries = Object.entries(byVendor);
    const multiVendor = vendorEntries.length > 1;

    const groupsHTML = vendorEntries.map(([vendorId, g]) => {
        const subtotal = g.items.reduce((s, i) => s + i.price * i.qty, 0);
        const itemCount = g.items.reduce((s, i) => s + i.qty, 0);
        const itemsHTML = g.items.map(i => {
            const itemKey = i.cartItemId || i.productId;
            const thumb = i.photo
                ? `<img src="${i.photo}" style="width:40px;height:40px;border-radius:8px;object-fit:cover;flex-shrink:0;" onerror="this.style.display='none'">`
                : `<span style="font-size:26px;">${i.emoji}</span>`;
            const variantLabel = i.variant ? `<div style="font-size:12px;color:var(--text-muted);">${[i.variant.color, i.variant.size].filter(Boolean).join(' · ')}</div>` : '';
            const preorderTag = i.isPreorder ? `<span class="preorder-badge">Pre-order</span>` : '';
            return `
            <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);">
                ${thumb}
                <div style="flex:1;">
                    <div style="font-size:14px;font-weight:600;">${escHtml(i.productName)}${preorderTag}</div>
                    ${variantLabel}
                    <div style="font-size:12px;color:var(--text-muted);">GH₵ ${i.price} each</div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                    <button onclick="changeQty('${itemKey}',-1)" style="width:28px;height:28px;border-radius:50%;border:1.5px solid var(--border);background:white;cursor:pointer;font-size:16px;line-height:1;">−</button>
                    <span style="font-size:14px;font-weight:600;min-width:18px;text-align:center;">${i.qty}</span>
                    <button onclick="changeQty('${itemKey}',1)" style="width:28px;height:28px;border-radius:50%;border:1.5px solid var(--border);background:white;cursor:pointer;font-size:16px;line-height:1;">+</button>
                    <span style="font-size:14px;font-weight:700;min-width:64px;text-align:right;">GH₵ ${i.price * i.qty}</span>
                </div>
            </div>`;
        }).join('');
        return `
        <div style="background:white;border-radius:var(--radius);padding:16px;margin-bottom:12px;box-shadow:var(--shadow);">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
                <h4 style="font-size:14px;font-weight:700;color:var(--primary-blue);">🏪 ${escHtml(g.name)}</h4>
                <!-- EC3.4 — remove just this vendor's items -->
                <button onclick="clearVendorCart('${vendorId}')" style="background:none;border:none;color:var(--text-muted);font-size:12px;cursor:pointer;padding:2px 6px;">✕ Remove</button>
            </div>
            ${itemsHTML}
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px;padding-top:10px;border-top:1px solid var(--border);">
                <div>
                    <div style="font-size:12px;color:var(--text-muted);">Subtotal</div>
                    <div style="font-size:17px;font-weight:700;color:var(--primary-blue);">GH₵ ${subtotal}</div>
                </div>
                <button onclick="openCheckoutModal('${vendorId}')"
                    style="background:var(--primary-blue);color:white;border:none;padding:12px 22px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">
                    Order →
                </button>
            </div>
        </div>`;
    }).join('');

    // UX2.2 / EC2.2 — no grand total shown; each vendor has its own subtotal + checkout
    const multiNote = multiVendor
        ? `<div style="font-size:13px;color:var(--text-muted);text-align:center;padding:4px 0 12px;">Each vendor is ordered and paid separately.</div>`
        : '';

    el.innerHTML = `
        ${multiNote}
        ${groupsHTML}
        <button onclick="clearCart()" style="width:100%;background:#fff0f0;color:var(--primary-red);border:1.5px solid var(--primary-red);padding:12px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;margin-top:4px;">🗑 Clear Cart</button>`;
}

function changeQty(itemKey, delta) {
    const item = state.cart.find(i => i.cartItemId === itemKey) || state.cart.find(i => i.productId === itemKey);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) state.cart = state.cart.filter(i => i !== item);
    safeSetJSON('acm_cart', state.cart);
    updateCartBadge();
    renderCart();
}

function clearCart() {
    if (!confirm('Clear your entire cart?')) return;
    state.cart = [];
    localStorage.removeItem('acm_cart');
    updateCartBadge();
    renderCart();
}

// EC3.4 — remove only one vendor's items from cart
function clearVendorCart(vendorId) {
    const vName = state.cart.find(i => i.vendorId === vendorId)?.vendorName || 'vendor';
    if (!confirm('Remove all items from ' + vName + '?')) return;
    state.cart = state.cart.filter(i => i.vendorId !== vendorId);
    safeSetJSON('acm_cart', state.cart);
    updateCartBadge();
    renderCart();
}

// ═══════════════════════════════════════════
// CHECKOUT FLOW
// ═══════════════════════════════════════════
function startCheckout() {
    if (!state.cart.length) return;
    // SU1.2 — require sign-in before checkout with a friendly explanation
    if (!state.currentUser) {
        openSigninModal('You\'re almost there! Sign in to confirm your order. Your cart is saved.');
        return;
    }

    const byVendor = {};
    state.cart.forEach(i => {
        if (!byVendor[i.vendorId]) byVendor[i.vendorId] = { id: i.vendorId, name: i.vendorName, items: [] };
        byVendor[i.vendorId].items.push(i);
    });
    const vendorGroups = Object.values(byVendor);

    if (vendorGroups.length === 1) {
        openCheckoutModal(vendorGroups[0].id);
    } else {
        document.getElementById('vendorSelectList').innerHTML = vendorGroups.map(g => {
            const subtotal = g.items.reduce((s, i) => s + i.price * i.qty, 0);
            const itemCount = g.items.reduce((s, i) => s + i.qty, 0);
            return `
                <button onclick="closeModal('vendorSelectModal'); openCheckoutModal('${g.id}')"
                    style="width:100%;background:white;border:1.5px solid var(--border);border-radius:12px;padding:14px;margin-bottom:10px;cursor:pointer;text-align:left;display:flex;justify-content:space-between;align-items:center;">
                    <div>
                        <div style="font-size:14px;font-weight:700;">${escHtml(g.name)}</div>
                        <div style="font-size:12px;color:var(--text-muted);">${itemCount} item${itemCount !== 1 ? 's' : ''}</div>
                    </div>
                    <div style="font-size:15px;font-weight:700;color:var(--primary-blue);">GH₵ ${subtotal}</div>
                </button>`;
        }).join('');
        document.getElementById('vendorSelectModal').classList.remove('hidden');
    }
}

function applyPromoAtCheckout(vendorId, subtotal) {
    const input = document.getElementById('promoCodeInput');
    if (!input) return;
    const promo = validatePromoCode(vendorId, input.value);
    if (!promo) { showToast('Invalid or expired promo code'); return; }
    const discount = Math.round(subtotal * promo.discountPct / 100);
    const newTotal = subtotal - discount;
    state.appliedPromo = { promoId: promo.id, code: promo.code, discountPct: promo.discountPct, discountAmount: discount, vendorId };
    const totalEl = document.getElementById('checkoutTotal');
    if (totalEl) totalEl.innerHTML = `<span style="text-decoration:line-through;color:var(--text-muted);font-size:14px;">GH₵${subtotal}</span> <span style="color:#16a34a;">GH₵${newTotal}</span>`;
    const successRow = document.getElementById('promoSuccessRow');
    if (successRow) successRow.innerHTML = `<div class="promo-success" style="margin-top:8px;">✅ ${promo.code} applied — GH₵${discount} off!</div>`;
}

function openCheckoutModal(vendorId) {
    state.appliedPromo = null;
    const vendors = getVendors();
    const vendor = vendors.find(v => v.id === vendorId);
    if (!vendor) return;

    const cartItems = state.cart.filter(i => i.vendorId === vendorId);
    const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

    const stockWarnings = cartItems
        .filter(ci => !ci.isPreorder)
        .map(ci => {
            const p = vendor.products.find(p => p.id === ci.productId);
            if (p && !p.isConsultation && ci.qty > p.stock) {
                return p.stock === 0
                    ? `${escHtml(ci.productName)} is now out of stock.`
                    : `Only ${p.stock} of ${escHtml(ci.productName)} left (you have ${ci.qty} in cart).`;
            }
            return null;
        }).filter(Boolean);

    const warnHTML = stockWarnings.length
        ? `<div class="stock-warn">⚠️ ${stockWarnings.join(' ')}<br><small>Remove or reduce these items before confirming.</small></div>`
        : '';
    // SU2.3 — warn the student if this vendor only takes appointments or pre-orders
    const availWarn = vendor.status === 'appointment'
        ? `<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;margin-bottom:12px;font-size:13px;color:#1e40af;">🔵 <strong>By Appointment Only</strong> — this vendor doesn't accept direct orders. After placing, message them on WhatsApp to confirm a time.</div>`
        : vendor.status === 'preorder'
        ? `<div style="background:#fefce8;border:1px solid #fde68a;border-radius:8px;padding:10px 12px;margin-bottom:12px;font-size:13px;color:#854d0e;">🟡 <strong>Pre-orders Only</strong> — this vendor makes items to order. Expect a wait before pickup.</div>`
        : '';

    const orderLines = cartItems.map(i => `${escHtml(i.productName)}${i.isPreorder ? ' [Pre-order]' : ''} x${i.qty} = GH₵${i.price * i.qty}`).join('%0A');
    const waText = encodeURIComponent(`Hi! I'd like to order from ${vendor.name}:\n\n`) + orderLines + encodeURIComponent(`\n\nTotal: GH₵${subtotal}\n\nSent from ACity Market`);
    const waLink = vendor.whatsapp ? `https://wa.me/${normalizeWhatsApp(vendor.whatsapp)}?text=${waText}` : null;

    const itemsHTML = cartItems.map(i => `
        <div class="checkout-item-row">
            <div style="display:flex;align-items:center;gap:10px;">
                <span style="font-size:22px;">${i.emoji}</span>
                <div>
                    <div style="font-size:14px;font-weight:600;">${escHtml(i.productName)}${i.isPreorder ? '<span class="preorder-badge">Pre-order</span>' : ''}</div>
                    <div style="font-size:12px;color:var(--text-muted);">GH₵${i.price} × ${i.qty}</div>
                </div>
            </div>
            <div style="font-size:14px;font-weight:700;">GH₵${i.price * i.qty}</div>
        </div>`).join('');

    const hasCodes = (vendor.promoCodes || []).some(c => new Date(c.expiry) >= new Date());

    document.getElementById('checkoutContent').innerHTML = `
        <h2 style="margin-bottom:4px;">Checkout</h2>
        <p style="color:var(--text-muted);font-size:13px;margin-bottom:16px;">From ${escHtml(vendor.name)}</p>
        ${availWarn}
        ${warnHTML}
        <div style="background:var(--bg-light);border-radius:10px;padding:14px;margin-bottom:16px;">
            ${itemsHTML}
            <div style="display:flex;justify-content:space-between;font-size:17px;font-weight:700;margin-top:10px;padding-top:10px;border-top:1px solid var(--border);">
                <span>Total</span>
                <span style="color:var(--primary-blue);" id="checkoutTotal">GH₵${subtotal}</span>
            </div>
            <div id="promoSuccessRow"></div>
        </div>

        ${hasCodes ? `
        <div class="promo-row">
            <input type="text" id="promoCodeInput" placeholder="Promo code" oninput="this.value=this.value.toUpperCase()">
            <button onclick="applyPromoAtCheckout('${vendorId}',${subtotal})">Apply</button>
        </div>` : ''}

        <div class="checkout-notice">
            📦 Placing your order notifies the vendor. Sort out payment with them directly — they will mark your order as fulfilled once payment is received.
        </div>

        <button class="btn-confirm" onclick="confirmCheckoutPayment('${vendorId}')">Place Order</button>
        <button class="btn-cancel-small" onclick="closeModal('checkoutModal')">Cancel</button>
    `;

    document.getElementById('checkoutModal').classList.remove('hidden');
}

function confirmCheckoutPayment(vendorId) {
    const vendors = getVendors();
    const vendor = vendors.find(v => v.id === vendorId);
    if (!vendor) return;

    const cartItems = state.cart.filter(i => i.vendorId === vendorId);

    // Block if any regular (non-preorder) item exceeds live stock
    for (const ci of cartItems) {
        if (ci.isPreorder) continue;
        const product = vendor.products.find(p => p.id === ci.productId);
        if (product && !product.isConsultation && !vendor.isConsultation && ci.qty > product.stock) {
            showToast(product.stock === 0
                ? `${ci.productName} is now out of stock — remove it or pre-order.`
                : `Only ${product.stock} of "${ci.productName}" left. Reduce qty first.`);
            return;
        }
    }

    const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

    // Apply promo code discount
    let promoDiscount = 0;
    let promoCode = null;
    if (state.appliedPromo && state.appliedPromo.vendorId === vendorId) {
        const promo = validatePromoCode(vendorId, state.appliedPromo.code);
        if (promo) {
            promoDiscount = Math.round(subtotal * promo.discountPct / 100);
            promoCode = promo.code;
        }
    }

    // Apply bundle discount — check if any bundle pairs are both in cart
    let bundleDiscount = 0;
    let appliedBundles = [];
    const cartProductIds = cartItems.map(i => i.productId);
    (vendor.bundles || []).forEach(b => {
        if (cartProductIds.includes(b.productAId) && cartProductIds.includes(b.productBId)) {
            const pA = vendor.products.find(p => p.id === b.productAId);
            const pB = vendor.products.find(p => p.id === b.productBId);
            if (pA && pB) {
                const bundleBase = pA.price + pB.price;
                bundleDiscount += Math.round(bundleBase * b.discountPct / 100);
                appliedBundles.push(`${pA.name} + ${pB.name} (${b.discountPct}% off)`);
            }
        }
    });

    const totalDiscount = promoDiscount + bundleDiscount;
    const finalTotal = Math.max(0, subtotal - totalDiscount);

    // Deduct stock for regular items only
    cartItems.forEach(ci => {
        if (ci.isPreorder) return;
        const product = vendor.products.find(p => p.id === ci.productId);
        if (product && !product.isConsult && !vendor.isConsult) {
            product.stock = Math.max(0, product.stock - ci.qty);
            if (product.stock === 0) {
                notifyFollowers(vendor.id, '⚠️', `${product.name} is out of stock`, `${vendor.name}'s ${product.name} just sold out. Check their other products!`);
                // Global alert (once per sell-out event, reset by restock)
                if (!product.soldOutAlertSent) {
                    product.soldOutAlertSent = true;
                    addNotification('⚠️', `${product.name} — Sold Out`, `${vendor.name}'s "${product.name}" just sold out. Follow the store to be notified when it's back.`, { type: 'vendor', id: vendor.id });
                }
            } else if (product.stock <= 3 && !product.lowStockAlertSent) {
                product.lowStockAlertSent = true;
                notifyFollowers(vendor.id, '🔥', `Only ${product.stock} left — ${product.name}`, `${vendor.name}'s ${product.name} is almost gone. Grab it before it sells out!`);
                // Global low-stock alert (everyone, once per threshold crossing)
                addNotification('🔥', `Running Low — ${product.name}`, `Only ${product.stock} left at ${vendor.name}. First come, first served!`, { type: 'vendor', id: vendor.id });
            }
        }
    });
    saveVendors(vendors);

    // Save order record
    const orders = getOrders();
    const hasPreorder = cartItems.some(i => i.isPreorder);
    const orderNumber = getNextOrderNumber();
    orders.push({
        id: 'ord' + Date.now(),
        orderNumber,
        vendorId: vendor.id,
        vendorName: vendor.name,
        customerName: state.currentUser || 'Guest',
        date: new Date().toISOString(),
        items: cartItems.map(i => ({
            productId: i.productId,
            productName: i.productName,
            qty: i.qty,
            price: i.price,
            variant: i.variant || null,
            isPreorder: i.isPreorder || false
        })),
        subtotal,
        promoCode: promoCode || null,
        promoDiscount: promoDiscount || 0,
        bundleDiscount: bundleDiscount || 0,
        total: finalTotal,
        status: hasPreorder ? 'preorder' : 'pending',
        placedAt: Date.now(),
        whatsappSent: false    // EC1.3 — customer must confirm they sent the WA message
    });
    saveOrders(orders);

    state.cart = state.cart.filter(i => i.vendorId !== vendorId);
    state.appliedPromo = null;
    safeSetJSON('acm_cart', state.cart);
    updateCartBadge();

    // Auto-open WhatsApp
    const orderLines = cartItems.map(i => `${i.productName}${i.isPreorder ? ' [Pre-order]' : ''} x${i.qty} = GH₵${i.price * i.qty}`).join('\n');
    const discountNote = totalDiscount > 0 ? `\nDiscount: -GH₵${totalDiscount}${promoCode ? ` (${promoCode})` : ''}` : '';
    const waMsg = encodeURIComponent(`Hi! I just placed an order on ACity Market from ${vendor.name}:\n\n${orderLines}${discountNote}\n\nTotal: GH₵${finalTotal}\n\nPlease confirm payment details.`);
    const waLink = vendor.whatsapp ? `https://wa.me/${normalizeWhatsApp(vendor.whatsapp)}?text=${waMsg}` : null;
    if (waLink) window.open(waLink, '_blank');

    // Store the orderId so receipt can confirm WhatsApp
    state.lastOrderId = orders[orders.length - 1].id;
    closeModal('checkoutModal');
    showReceipt(vendor, cartItems, finalTotal, orderNumber, { promoCode, promoDiscount, bundleDiscount, appliedBundles });
}

function showReceipt(vendor, items, total, orderNumber, discounts = {}) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GH', { day: 'numeric', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-GH', { hour: '2-digit', minute: '2-digit' });

    const itemsHTML = items.map(i => `
        <div style="display:flex;justify-content:space-between;font-size:13px;padding:5px 0;">
            <span>${escHtml(i.productName)} × ${i.qty}</span>
            <span style="font-weight:600;">GH₵${i.price * i.qty}</span>
        </div>`).join('');

    // SU3.2 — resend WhatsApp link (in case they closed without sending)
    const orderLines = items.map(i => `${i.productName}${i.isPreorder ? ' [Pre-order]' : ''} x${i.qty} = GH₵${i.price * i.qty}`).join('\n');
    const resendMsg = encodeURIComponent(`Hi! I just placed Order #${orderNumber} on ACity Market from ${vendor.name}:\n\n${orderLines}\n\nTotal: GH₵${total}\n\nPlease confirm payment details.`);
    const resendLink = vendor.whatsapp ? `https://wa.me/${normalizeWhatsApp(vendor.whatsapp)}?text=${resendMsg}` : null;

    const mapsBtn = (vendor.pickupType === 'offcampus' && vendor.pickupMapsLink)
        ? `<a href="${escHtml(vendor.pickupMapsLink)}" target="_blank" rel="noopener noreferrer"
               style="display:inline-flex;align-items:center;gap:4px;margin-top:5px;background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:7px;padding:4px 10px;font-size:12px;font-weight:700;text-decoration:none;">📍 Open in Google Maps</a>`
        : '';
    const pickupLine = vendor.pickupLabel
        ? `<div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;padding:7px 0;border-bottom:1px solid var(--border);">
               <span style="font-size:18px;flex-shrink:0;">🏠</span>
               <div><div><strong>Collect from:</strong> ${escHtml(vendor.pickupLabel)}</div>${mapsBtn}</div>
           </div>`
        : '';

    document.getElementById('receiptContent').innerHTML = `
        <div class="receipt-header" style="padding:20px 0 12px;">
            <div style="font-size:52px;margin-bottom:8px;">✅</div>
            <h2 style="color:#15803d;margin-bottom:4px;">Order Saved!</h2>
            ${orderNumber ? `<div style="font-size:15px;font-weight:700;color:var(--primary-blue);letter-spacing:1px;margin-bottom:4px;">Order #${orderNumber}</div>` : ''}
            <p style="color:var(--text-muted);font-size:12px;">${dateStr} at ${timeStr}</p>
        </div>

        <!-- EC1.3 + SU3.2 — WhatsApp confirmation step -->
        <div id="waConfirmBox" style="background:#fff8e1;border:1.5px solid #f59e0b;border-radius:12px;padding:14px;margin-bottom:14px;">
            <div style="font-size:12px;font-weight:700;color:#92400e;letter-spacing:.5px;margin-bottom:8px;">⚠️ CONFIRM YOUR ORDER</div>
            <p style="font-size:13px;color:#78350f;margin-bottom:10px;">The vendor won't see your order until you <strong>send the WhatsApp message</strong>. Didn't send it yet?</p>
            <div style="display:flex;gap:8px;">
                ${resendLink ? `<a href="${resendLink}" target="_blank" onclick="setTimeout(()=>showWaConfirmed(),2000)" style="flex:1;text-align:center;background:#f59e0b;color:white;border-radius:8px;padding:10px;font-size:13px;font-weight:700;text-decoration:none;">📤 Open WhatsApp</a>` : ''}
                <button onclick="confirmWhatsApp()" style="flex:1;background:#16a34a;color:white;border:none;border-radius:8px;padding:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;" id="waConfirmedBtn">✅ I Sent It</button>
            </div>
        </div>
        <div id="waConfirmedBox" class="hidden" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:14px;margin-bottom:14px;">
            <div style="font-size:12px;font-weight:700;color:#166534;letter-spacing:.5px;margin-bottom:10px;">WHAT HAPPENS NEXT</div>
            <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;padding:7px 0;border-bottom:1px solid #bbf7d0;">
                <span style="font-size:18px;flex-shrink:0;">⏳</span>
                <span><strong>Wait for the vendor to confirm</strong> your order — they'll reply on WhatsApp.</span>
            </div>
            ${pickupLine}
            <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;padding:7px 0;">
                <span style="font-size:18px;flex-shrink:0;">💰</span>
                <span><strong>Sort out payment</strong> directly with the vendor (cash or MoMo).</span>
            </div>
        </div>

        <div class="receipt-block">
            <div class="receipt-label">ORDER SUMMARY</div>
            ${itemsHTML}
            ${discounts.promoDiscount > 0 ? `<div style="display:flex;justify-content:space-between;font-size:13px;color:#16a34a;margin-top:4px;padding-top:4px;"><span>🏷️ Promo (${escHtml(discounts.promoCode)})</span><span>-GH₵${discounts.promoDiscount}</span></div>` : ''}
            ${discounts.bundleDiscount > 0 ? `<div style="display:flex;justify-content:space-between;font-size:13px;color:#6d28d9;margin-top:4px;"><span>🎁 Bundle discount</span><span>-GH₵${discounts.bundleDiscount}</span></div>` : ''}
            <div style="display:flex;justify-content:space-between;font-size:16px;font-weight:700;margin-top:8px;padding-top:8px;border-top:1px solid var(--border);">
                <span>Order Total</span>
                <span style="color:var(--primary-blue);">GH₵${total}</span>
            </div>
        </div>

        <div class="receipt-block">
            <div class="receipt-label">FROM</div>
            <div style="font-size:14px;font-weight:600;margin-bottom:2px;">${escHtml(vendor.name)}</div>
            ${vendor.studentName ? `<div style="font-size:12px;color:var(--primary-blue);margin-bottom:4px;">${escHtml(vendor.studentName)}</div>` : ''}
        </div>

        <button onclick="openMyOrders()" style="width:100%;background:var(--primary-blue);color:white;border:none;padding:12px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;margin-top:4px;font-family:inherit;">
            📋 Track My Orders
        </button>
    `;
    document.getElementById('receiptModal').classList.remove('hidden');
}

function finishReceipt() {
    closeModal('receiptModal');
    renderCart();
}

// EC1.3 — customer confirms they sent the WhatsApp message
function confirmWhatsApp() {
    if (state.lastOrderId) {
        const orders = getOrders();
        const o = orders.find(x => x.id === state.lastOrderId);
        if (o) { o.whatsappSent = true; saveOrders(orders); }
    }
    showWaConfirmed();
}
function showWaConfirmed() {
    const box = document.getElementById('waConfirmBox');
    const done = document.getElementById('waConfirmedBox');
    if (box) box.classList.add('hidden');
    if (done) done.classList.remove('hidden');
}

// ═══════════════════════════════════════════
// POSTS (Products / Jobs)
// ═══════════════════════════════════════════
function renderRecentAnnouncements() {
    const list = getAnnouncements().slice(0, 3);
    const el = document.getElementById('announcementList');
    el.innerHTML = list.length
        ? list.map(a => announcementCardHTML(a)).join('')
        : '<p style="color:var(--text-muted);font-size:13px;padding:8px 0;">No posts yet. Be the first to post!</p>';
}

function loadAllAnnouncements() {
    const list = getAnnouncements();
    const el = document.getElementById('allAnnouncementsList');
    el.innerHTML = list.length
        ? list.map(a => announcementCardHTML(a, true)).join('')
        : `<div class="empty-state"><h3>No posts yet</h3><p>Be the first to post!</p></div>`;
}

function announcementCardHTML(a, showDelete = false) {
    const tags = a.tags || [];
    const badgeMap = {
        'Product':      { cls: 'feed-badge-product',    label: 'Product' },
        'Job Alert':    { cls: 'feed-badge-job',        label: 'Job Alert' },
        'Internship':   { cls: 'feed-badge-internship', label: 'Internship' },
        'Volunteering': { cls: 'feed-badge-volunteer',  label: 'Volunteering' },
    };
    const badgesHTML = tags.length
        ? tags.map(t => { const b = badgeMap[t] || { cls: 'feed-badge-product', label: t }; return `<span class="feed-badge ${b.cls}">${b.label}</span>`; }).join('')
        : '';

    const isJob = tags.some(t => ['Job Alert','Internship','Volunteering'].includes(t));
    const briefcaseSVG = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`;
    const tagSVG       = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`;

    const visualHTML = a.photo
        ? `<div class="feed-visual"><img src="${a.photo}" onclick="openPostDetail('${a.id}')" onerror="this.parentElement.style.display='none'"></div>`
        : `<div class="feed-visual"><div class="feed-icon-placeholder">${isJob ? briefcaseSVG : tagSVG}</div></div>`;

    const userSVG  = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
    const clockSVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    const trashSVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6M9 6V4h6v2"/></svg>`;

    const deleteBtn = showDelete
        ? `<button onclick="deleteAnnouncement('${a.id}')" style="background:none;border:none;color:var(--text-muted);cursor:pointer;padding:2px;flex-shrink:0;" title="Delete">${trashSVG}</button>`
        : '';

    return `
        <div class="announcement-card">
            ${visualHTML}
            <div class="feed-meta">
                <div class="feed-badges">${badgesHTML}</div>
                <div class="feed-title">${escHtml(a.title)}</div>
                ${a.desc ? `<div class="feed-desc">${escHtml(a.desc)}</div>` : ''}
                <div class="feed-attribution">
                    ${userSVG}<span>${escHtml(a.contact)}</span>
                    <span style="margin:0 3px;">·</span>
                    ${clockSVG}<span>${getTimeAgo(new Date(a.date))}</span>
                </div>
            </div>
            ${deleteBtn}
        </div>`;
}

function getAnnouncements() {
    const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
    return DB.announcements
        .filter(a => new Date(a.date).getTime() > cutoff)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function openPostModal() {
    clearPostPhoto();
    document.getElementById('announcementModal').classList.remove('hidden');
}

function previewPostPhoto(input) {
    const file = input.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { showToastError('Photo is too large (max 5 MB)'); input.value = ''; return; }
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById('photoPreviewImg').src = e.target.result;
        document.getElementById('photoPreview').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function clearPostPhoto() {
    const inp = document.getElementById('announcPhoto');
    if (inp) inp.value = '';
    const preview = document.getElementById('photoPreview');
    if (preview) preview.style.display = 'none';
    const img = document.getElementById('photoPreviewImg');
    if (img) img.src = '';
}

function toggleTag(btn) {
    btn.classList.toggle('selected');
}

function getSelectedTags() {
    const tags = [];
    document.querySelectorAll('.tag-option.selected').forEach(b => tags.push(b.dataset.tag));
    return tags;
}

async function postAnnouncement() {
    const title   = document.getElementById('announcTitle').value.trim();
    const desc    = document.getElementById('announcDesc').value.trim();
    const contact = document.getElementById('announcContact').value.trim();
    const tags    = getSelectedTags();
    if (!title || !contact) { showToast('Title and contact are required'); return; }

    const photoFile = document.getElementById('announcPhoto').files[0];
    let photo = null;
    const id = 'a' + Date.now();
    if (photoFile) {
        try {
            const dataUrl = await compressImage(photoFile, 900, 0.78);
            photo = await uploadImage(dataUrl, 'posts', id) || dataUrl;
        } catch(e) { showToastError(e.message); return; }
    }
    const newAnn = { id, title, desc, contact, tags, photo, date: new Date().toISOString() };
    DB.announcements.unshift(newAnn);
    syncAnnouncement(newAnn).catch(console.warn);

    let icon = '📋', notifTitle = 'New Post';
    if (tags.includes('Internship'))        { icon = '🎓'; notifTitle = 'New Internship'; }
    else if (tags.includes('Job Alert'))    { icon = '💼'; notifTitle = 'New Job Alert'; }
    else if (tags.includes('Volunteering')) { icon = '🤝'; notifTitle = 'Volunteer Opportunity'; }
    else if (tags.includes('Product'))      { icon = '📦'; notifTitle = 'New Product Drop'; }

    addNotification(icon, notifTitle, title, { type: 'announcement', id });

    ['announcTitle','announcDesc','announcContact'].forEach(elId => document.getElementById(elId).value = '');
    document.querySelectorAll('.tag-option.selected').forEach(b => b.classList.remove('selected'));
    clearPostPhoto();
    closeModal('announcementModal');
    showToast('Posted!');
    renderRecentAnnouncements();
}

function deleteAnnouncement(id) {
    DB.announcements = DB.announcements.filter(a => a.id !== id);
    deleteAnnouncementFromDB(id).catch(console.warn);
    loadAllAnnouncements();
    renderRecentAnnouncements();
    showToast('Post removed');
}

function openPostDetail(id) {
    const announcements = DB.announcements;
    const a = announcements.find(x => x.id === id);
    if (!a) return;

    const tags = a.tags || [];
    const tagColors = { 'Product': 'tag-Product', 'Job Alert': 'tag-Job', 'Internship': 'tag-Internship', 'Volunteering': 'tag-Volunteering' };
    const tagsHTML = tags.length
        ? `<div style="display:flex;gap:6px;flex-wrap:wrap;margin:10px 0;">${tags.map(t => `<span class="tag-badge ${tagColors[t] || ''}">${t}</span>`).join('')}</div>`
        : '';

    document.getElementById('postDetailContent').innerHTML = `
        ${a.photo ? `<img src="${a.photo}" style="width:100%;border-radius:12px;max-height:260px;object-fit:cover;margin-bottom:16px;" onerror="this.style.display='none'">` : ''}
        <h2 style="font-size:18px;margin-bottom:4px;">${escHtml(a.title)}</h2>
        ${tagsHTML}
        ${a.desc ? `<p style="font-size:14px;color:var(--text-muted);margin:12px 0;line-height:1.6;">${escHtml(a.desc)}</p>` : ''}
        <div style="font-size:13px;color:var(--text-muted);margin-top:8px;">📞 ${escHtml(a.contact)}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">${getTimeAgo(new Date(a.date))}</div>
    `;
    document.getElementById('postDetailModal').classList.remove('hidden');
}

// ═══════════════════════════════════════════
// NOTIFICATIONS
// ═══════════════════════════════════════════
function getNotifications() { return DB.notifications; }
function saveNotifications(newNotifs) {
    const old = DB.notifications.slice();
    DB.notifications = newNotifs;
    // Only sync read-state changes and new items (avoid mass upserts for deletions)
    newNotifs.forEach(n => {
        const o = old.find(x => x.id === n.id);
        if (!o || o.read !== n.read) syncNotification(n).catch(console.warn);
    });
    // Delete removed notifications from DB
    old.filter(o => !newNotifs.find(n => n.id === o.id))
       .forEach(o => _supabase?.from('notifications').delete().eq('id', o.id).catch(console.warn));
}

// SU2.4 — switch active tab and re-render
function switchNotifTab(tab) {
    state.notifTab = tab;
    const tabFy = document.getElementById('notif-tab-foryou');
    const tabCa = document.getElementById('notif-tab-campus');
    if (tabFy && tabCa) {
        const activeStyle  = `flex:1;padding:10px;font-size:13px;font-weight:700;background:none;border:none;cursor:pointer;color:var(--primary-blue);border-bottom:2px solid var(--primary-blue);margin-bottom:-2px;`;
        const inactiveStyle = `flex:1;padding:10px;font-size:13px;font-weight:600;background:none;border:none;cursor:pointer;color:var(--text-muted);border-bottom:2px solid transparent;margin-bottom:-2px;`;
        tabFy.style.cssText = tab === 'foryou' ? activeStyle : inactiveStyle;
        tabCa.style.cssText = tab === 'campus' ? activeStyle : inactiveStyle;
    }
    renderNotifications();
}

function renderNotifications() {
    const allNotifs = getNotifications();
    const tab = state.notifTab || 'foryou';

    // "For You": personal alerts (tied to this user/vendor) — no forUser & no forVendorId means legacy global, treated as campus
    // A notif is personal if it has forUser === currentUser OR forVendorId === loggedVendor.id
    const isPersonal = n =>
        (n.forUser && n.forUser === state.currentUser) ||
        (n.forVendorId && state.loggedVendor && n.forVendorId === state.loggedVendor.id);

    // "Campus": no targeting (global broadcasts)
    const isGlobal = n => !n.forUser && !n.forVendorId;

    const visible = allNotifs.filter(n => {
        if (tab === 'foryou') return isPersonal(n);
        if (tab === 'campus') return isGlobal(n);
        return false;
    });

    const el = document.getElementById('notificationsContent');
    if (!visible.length) {
        const emptyMsg = tab === 'foryou'
            ? 'No personal notifications yet. Orders and vendor updates will appear here.'
            : 'No campus-wide announcements yet.';
        const emptyAction = tab === 'foryou'
            ? `<button onclick="showPage('home')" style="margin-top:14px;background:var(--bg-light);color:var(--primary-blue);border:1.5px solid var(--primary-blue);padding:10px 22px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">Browse Vendors</button>`
            : '';
        el.innerHTML = `<div class="empty-state"><div class="empty-icon">🔔</div><h3>All clear</h3><p style="font-size:13px;color:var(--text-muted);">${emptyMsg}</p>${emptyAction}</div>`;
        return;
    }
    el.innerHTML = `<div class="notifications-panel">${visible.map(n => `
        <div class="notification-item" style="${!n.read ? 'background:#f0f4ff;' : ''}" onclick="handleNotifClickById('${n.id}')">
            <div class="notif-icon">${n.icon}</div>
            <div class="notif-text"><h4>${escHtml(n.title)}</h4><p>${escHtml(n.text)}</p></div>
            <div class="notif-time">${n.time} <span style="font-size:12px;color:var(--primary-blue);">›</span></div>
        </div>`).join('')}</div>`;
    // Mark visible ones as read
    const visibleIds = new Set(visible.map(n => n.id));
    allNotifs.forEach(n => { if (visibleIds.has(n.id)) n.read = true; });
    saveNotifications(allNotifs);
    updateNotifBadge();
}

function handleNotifClickById(id) {
    const notifs = getNotifications();
    const n = notifs.find(x => x.id === id);
    if (!n || !n.route) return;
    if (n.route.type === 'vendor') {
        openVendor(n.route.id);
    } else if (n.route.type === 'votw') {
        showPage('home');
        setTimeout(() => document.getElementById('votwSection').scrollIntoView({ behavior: 'smooth' }), 100);
    } else if (n.route.type === 'announcement') {
        openPostDetail(n.route.id);
    } else if (n.route.type === 'myorders') {
        openMyOrders();
    }
}

// Route-based navigation used by recent-activity and notification items
function handleNotifRoute(route) {
    if (!route) return;
    if (route.type === 'vendor')       openVendor(route.id);
    else if (route.type === 'votw')    { showPage('home'); setTimeout(() => document.getElementById('votwSection')?.scrollIntoView({ behavior: 'smooth' }), 100); }
    else if (route.type === 'announcement') openPostDetail(route.id);
    else if (route.type === 'myorders') openMyOrders();
}

function addNotification(icon, title, text, route, forUser = null, forVendorId = null) {
    const notif = { id: 'n' + Date.now(), icon, title, text, time: 'Just now', read: false, route: route || null, forUser, forVendorId };
    DB.notifications.unshift(notif);
    syncNotification(notif).catch(console.warn);
    updateNotifBadge();
}

function clearNotifications() {
    if (!confirm('Clear all notifications?')) return;
    // Only clear notifications belonging to current user/vendor context
    const toKeep = DB.notifications.filter(n => {
        if (n.forUser && n.forUser === state.currentUser) return false;
        if (n.forVendorId && state.loggedVendor && n.forVendorId === state.loggedVendor.id) return false;
        if (!n.forUser && !n.forVendorId) return false; // global
        return true; // keep others
    });
    const toDelete = DB.notifications.filter(n => !toKeep.find(k => k.id === n.id));
    DB.notifications = toKeep;
    toDelete.forEach(n => _supabase?.from('notifications').delete().eq('id', n.id).catch(console.warn));
    updateNotifBadge();
    renderNotifications();
}

function updateNotifBadge() {
    // Badge only counts unread personal ("For You") notifications — global noise ignored
    const unread = getNotifications().filter(n => {
        if (n.read) return false;
        if (n.forUser && n.forUser === state.currentUser) return true;
        if (n.forVendorId && state.loggedVendor && n.forVendorId === state.loggedVendor.id) return true;
        return false;
    }).length;
    const badge = document.getElementById('notifBadge');
    badge.textContent = unread;
    badge.classList.toggle('hidden', unread === 0);
}

// ═══════════════════════════════════════════
// SEARCH & FILTER
// ═══════════════════════════════════════════
// ─── helper: show/hide all home sections during search ───
function _setHomeSectionsVisible(show) {
    const ids = ['featuredSection','sponsoredSection','allVendorsSection','newSection',
                 'trendingProductsSection','recentActivitySection'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (show) {
            // Restore if we previously hid it for search
            if (el.dataset.searchHidden === '1') { el.classList.remove('hidden'); delete el.dataset.searchHidden; }
        } else {
            // Remember its visibility state before hiding
            if (!el.classList.contains('hidden')) { el.dataset.searchHidden = '1'; el.classList.add('hidden'); }
        }
    });
    // Jobs & Opportunities section — no id, match by position
    document.querySelectorAll('#page-home main .section').forEach(sec => {
        if (!sec.id) sec.classList.toggle('hidden', !show);
    });
}

function handleSearch() {
    const q = document.getElementById('searchInput').value.trim().toLowerCase();
    const inSearch = !!q;
    document.getElementById('searchResultsSection').classList.toggle('hidden', !inSearch);
    _setHomeSectionsVisible(!inSearch);
    if (inSearch) {
        applyFilters(q);
        savePageState('search', { query: q });
    } else {
        savePageState('home');
    }
    updateSaveSearchBtn();
}

// Back-compat shim — the chip row was replaced by the search-bar dropdown.
function filterCategory(cat, el) { pickCategory(cat); }

function applyFilters(searchQuery) {
    const q = (searchQuery || document.getElementById('searchInput').value).trim().toLowerCase();
    const sort   = (document.getElementById('sortFilter') || {}).value || 'default';
    const status = (document.getElementById('statusFilter') || {}).value || 'all';

    const allVendors = getPublicVendors();
    const announcements = DB.announcements;

    // ── Vendors ──
    let matchedVendors = allVendors.filter(v =>
        v.name.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q) ||
        (v.studentName || '').toLowerCase().includes(q)
    );

    // ── Products (from vendors) ──
    const matchedProducts = [];
    allVendors.forEach(v => {
        (v.products || []).forEach(p => {
            if (p.name.toLowerCase().includes(q) || (p.description || '').toLowerCase().includes(q)) {
                matchedProducts.push({ product: p, vendor: v });
            }
        });
    });

    // ── Jobs / Internships / Posts ──
    const matchedPosts = announcements.filter(a =>
        (a.title || '').toLowerCase().includes(q) ||
        (a.description || '').toLowerCase().includes(q) ||
        (a.vendorName || '').toLowerCase().includes(q)
    );

    if (status !== 'all') matchedVendors = matchedVendors.filter(v => v.status === status || v.availability === status);
    if (sort === 'rating')  matchedVendors.sort((a, b) => b.rating - a.rating);
    else if (sort === 'newest') matchedVendors.sort((a, b) => (b.joinedAt||0) - (a.joinedAt||0));
    else if (sort === 'name')   matchedVendors.sort((a, b) => a.name.localeCompare(b.name));

    const totalCount = matchedVendors.length + matchedProducts.length + matchedPosts.length;
    const countEl = document.getElementById('searchCount');
    if (countEl) countEl.textContent = totalCount;
    const noResults = document.getElementById('noResults');
    if (noResults) noResults.classList.toggle('hidden', totalCount > 0);

    // Build categorized results HTML
    let html = '';

    if (matchedProducts.length) {
        html += `<div class="search-category-header">Products (${matchedProducts.length})</div>`;
        html += matchedProducts.slice(0, 8).map(({ product: p, vendor: v }) => {
            const img = p.image
                ? `<img src="${p.image}" alt="${escHtml(p.name)}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">`
                : `<span style="font-size:22px;">${v.emoji || '🛍️'}</span>`;
            return `<div class="search-result-product-row" onclick="openVendor('${v.id}')">
                <div class="search-result-thumb">${img}</div>
                <div style="flex:1;min-width:0;">
                    <div class="search-result-name">${escHtml(p.name)}</div>
                    <div class="search-result-sub">${escHtml(v.name)} · ${escHtml(v.category)}</div>
                    <div class="search-result-price">GH₵${p.price}</div>
                </div>
            </div>`;
        }).join('');
    }

    if (matchedVendors.length) {
        html += `<div class="search-category-header" style="margin-top:${matchedProducts.length ? '8px' : '0'}">Vendors (${matchedVendors.length})</div>`;
        html += `<div class="vendor-grid">${matchedVendors.map(v => vendorCardHTML(v)).join('')}</div>`;
    }

    if (matchedPosts.length) {
        html += `<div class="search-category-header" style="margin-top:${(matchedProducts.length || matchedVendors.length) ? '8px' : '0'}">Posts &amp; Opportunities (${matchedPosts.length})</div>`;
        html += `<div class="announcement-list">${matchedPosts.slice(0, 5).map(a => announcementCardHTML(a)).join('')}</div>`;
    }

    const grid = document.getElementById('searchResultsGrid');
    if (grid) grid.innerHTML = html;
}

function showAllVendors() {
    const input = document.getElementById('searchInput');
    if (input) input.value = '';
    _setHomeSectionsVisible(false);
    document.getElementById('searchResultsSection').classList.remove('hidden');
    const vendors = getPublicVendors().sort((a,b) => (b.rating*b.reviews)-(a.rating*a.reviews));
    const countEl = document.getElementById('searchCount');
    if (countEl) countEl.textContent = vendors.length;
    const grid = document.getElementById('searchResultsGrid');
    if (grid) grid.innerHTML = `<div class="vendor-grid">${vendors.map(v => vendorCardHTML(v)).join('')}</div>`;
}

// ═══════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════
// ── CUSTOMER ACCOUNTS (name + PIN system) ──
function getCustomers()    { return safeGetJSON('acm_customers', []); }
function saveCustomers(c)  { safeSetJSON('acm_customers', c); }

function switchSigninMode(mode) {
    const isNew = mode === 'new';
    document.getElementById('signin-returning').style.display = isNew ? 'none' : '';
    document.getElementById('signin-new').style.display      = isNew ? '' : 'none';
    document.getElementById('signinModalTitle').textContent   = isNew ? 'Create Account' : 'Welcome Back';
    document.getElementById('signinModalSubtitle').textContent = isNew
        ? 'Your name + PIN keeps your orders private, even if someone else has the same name.'
        : 'Enter your name and PIN to sign in.';
}

function openSigninModal(contextMsg = null) {
    if (state.currentUser) {
        const levelText = state.currentUserLevel ? ' (Level ' + state.currentUserLevel + ')' : '';
        document.getElementById('signoutTitle').textContent = 'Hi, ' + state.currentUser + levelText + '!';
        document.getElementById('signoutMsg').textContent = 'You are signed in. Would you like to sign out?';
        document.getElementById('signoutModal').classList.remove('hidden');
        return;
    }
    // Reset to returning mode
    switchSigninMode('returning');
    document.getElementById('customerNameInput').value = '';
    document.getElementById('customerPinInput').value  = '';
    // Show contextual message if provided (e.g. from checkout)
    const ctx = document.getElementById('signinModalContext');
    if (contextMsg) { ctx.textContent = contextMsg; ctx.style.display = ''; }
    else { ctx.style.display = 'none'; }
    document.getElementById('signinModal').classList.remove('hidden');
    setTimeout(() => document.getElementById('customerNameInput').focus(), 300);
}

async function signIn() {
    const name = document.getElementById('customerNameInput').value.trim();
    const pin  = document.getElementById('customerPinInput').value;
    if (!name) { showToast('Please enter your name'); return; }
    if (!pin || pin.length < 4) { showToast('Enter your 4-digit PIN'); return; }
    const customers = getCustomers();
    const customer  = customers.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (!customer) {
        showToast('Name not found — tap "Create an account" to register');
        return;
    }
    const pinOk = isHashed(customer.pin)
        ? (await hashPassword(pin)) === customer.pin
        : pin === customer.pin;
    if (!pinOk) { showToastError('Incorrect PIN'); return; }
    state.currentUser      = customer.name;
    state.currentUserLevel = customer.level || null;
    state.currentUserPhone = customer.phone || null;
    safeSetJSON('acm_user', { name: customer.name, phone: customer.phone || null, email: customer.email || null, level: customer.level || null });
    updateSigninBtn();
    closeModal('signinModal');
    if (window._welcomePendingAction) { window._welcomePendingAction(); window._welcomePendingAction = null; }
    showToast('Welcome back, ' + customer.name.split(' ')[0] + '!');
}

async function createAccount() {
    const name    = document.getElementById('newCustomerName').value.trim();
    const phone   = document.getElementById('newCustomerPhone')?.value.trim() || '';
    const email   = document.getElementById('newCustomerEmail')?.value.trim() || '';
    const level   = document.getElementById('customerLevelInput').value || '';
    const pin     = document.getElementById('newCustomerPin').value;
    const confirm = document.getElementById('newCustomerPinConfirm').value;
    if (!name)               { showToast('Please enter your name'); return; }
    if (!phone)              { showToast('Please enter your phone number'); return; }
    if (!level)              { showToast('Please select your level'); return; }
    if (pin.length < 4)      { showToast('PIN must be exactly 4 digits'); return; }
    if (!/^\d{4}$/.test(pin)){ showToast('PIN must be 4 numbers only'); return; }
    if (pin !== confirm)     { showToast('PINs do not match'); return; }
    const customers = getCustomers();
    if (customers.find(c => c.name.toLowerCase() === name.toLowerCase())) {
        showToast('This name is already taken — try signing in instead'); return;
    }
    const hashedPin = await hashPassword(pin);
    customers.push({ name, phone, email, level: level || null, pin: hashedPin });
    saveCustomers(customers);
    state.currentUser      = name;
    state.currentUserLevel = level || null;
    state.currentUserPhone = phone;
    safeSetJSON('acm_user', { name, phone, email, level: level || null });
    updateSigninBtn();
    closeModal('signinModal');
    // If there's a welcome overlay pending action, complete it
    if (window._welcomePendingAction) { window._welcomePendingAction(); window._welcomePendingAction = null; }
    showToast('Account created! Welcome, ' + name.split(' ')[0] + '!');
}

function signOut() {
    state.currentUser = null;
    state.currentUserLevel = null;
    localStorage.removeItem('acm_user');
    updateMenuBtn();
    closeMenuDrawer();
    closeModal('signoutModal');
    showToast('Signed out');
}

function updateSigninBtn() {
    updateMenuBtn();
}

// ── Menu button & drawer ──
function updateMenuBtn() {
    const btn = document.getElementById('menuBtn');
    if (!btn) return;
    if (state.currentUser) {
        const initial = state.currentUser.charAt(0).toUpperCase();
        btn.innerHTML = `<span style="background:var(--primary-blue);color:#fff;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;">${initial}</span>`;
        btn.title = state.currentUser;
    } else {
        btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
        btn.title = 'Menu';
    }
}

function openMenuDrawer() {
    updateMenuDrawer();
    document.getElementById('menuDrawerOverlay').classList.add('open');
    document.getElementById('menuDrawerPanel').classList.add('open');
}

function closeMenuDrawer() {
    document.getElementById('menuDrawerOverlay').classList.remove('open');
    document.getElementById('menuDrawerPanel').classList.remove('open');
}

function updateMenuDrawer() {
    const isSignedIn = !!state.currentUser;
    const isDark = document.body.classList.contains('dark-mode');
    const moonIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    const sunIcon  = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
    const ordersIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>';
    const lockIcon   = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';

    let html = '';

    if (isSignedIn) {
        const levelText = state.currentUserLevel ? ' · Level ' + state.currentUserLevel : '';
        html += `
        <div class="drawer-user-section">
            <div class="drawer-avatar">${state.currentUser.charAt(0).toUpperCase()}</div>
            <div>
                <div class="drawer-user-name">${state.currentUser}</div>
                <div class="drawer-user-sub">Student${levelText}</div>
            </div>
        </div>
        <div class="drawer-divider"></div>
        <button class="drawer-item" onclick="closeMenuDrawer(); openMyOrders()">
            ${ordersIcon} My Orders
        </button>`;
    } else {
        html += `
        <div class="drawer-user-section">
            <div class="drawer-avatar-guest"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
            <div>
                <div class="drawer-user-name">Not signed in</div>
                <div class="drawer-user-sub">Sign in to place orders</div>
            </div>
        </div>
        <div style="padding:0 20px 16px;">
            <button class="btn-primary" style="width:100%;padding:11px;" onclick="closeMenuDrawer(); openSigninModal()">Sign In</button>
        </div>`;
    }

    html += `
    <div class="drawer-divider"></div>
    <div class="drawer-toggle-row">
        <div class="drawer-toggle-label">${isDark ? sunIcon : moonIcon} <span>${isDark ? 'Light Mode' : 'Dark Mode'}</span></div>
        <button class="dm-toggle ${isDark ? 'on' : ''}" onclick="toggleDarkMode()" aria-label="Toggle dark mode"></button>
    </div>`;

    if (isSignedIn) {
        html += `
        <div class="drawer-divider"></div>
        <button class="drawer-item drawer-signout" onclick="signOut()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sign Out
        </button>`;
    }

    // Admin access: only visible in the drawer when already logged in as admin
    if (state.adminLoggedIn) {
        html += `
    <div style="flex:1;min-height:32px;"></div>
    <div class="drawer-divider"></div>
    <button class="drawer-item drawer-admin-item" onclick="closeMenuDrawer(); showPage('admin'); switchATab('vendors')">
        ${lockIcon} Admin Control Base
    </button>`;
    } else {
        html += `<div style="flex:1;min-height:32px;"></div>`;
    }

    document.getElementById('drawerBody').innerHTML = html;
}

function goToVendorPortal() {
    showPage('mystore');
    renderMyStorePage();
}

// ═══════════════════════════════════════════
// PHASE 2A — VENDOR PORTAL
// ═══════════════════════════════════════════

function renderMyStorePage() {
    const loggedIn = !!state.loggedVendor;
    document.getElementById('vs-guest').classList.toggle('hidden', loggedIn);
    document.getElementById('vs-dashboard').classList.toggle('hidden', !loggedIn);
    document.getElementById('vs-logout-btn').classList.toggle('hidden', !loggedIn);
    document.getElementById('vs-header-title').textContent = loggedIn ? state.loggedVendor.name : 'My Store';
    if (loggedIn) {
        switchVTab('summary');
        updateOrdersBadge();
    }
}

function switchVTab(tab) {
    ['summary','products','orders','deals','analytics'].forEach(t => {
        document.getElementById('vtab-' + t).classList.toggle('hidden', t !== tab);
        document.getElementById('vtab-btn-' + t).classList.toggle('active', t === tab);
    });
    if (tab === 'summary') renderVSummary();
    if (tab === 'products') renderVProducts();
    if (tab === 'orders') renderVOrders();
    if (tab === 'deals') renderDealsTab();
    if (tab === 'analytics') renderVAnalytics();
    updateOrdersBadge();
}

function renderVSummary() {
    const v = state.loggedVendor;
    if (!v) return;

    const levelLabel = v.level && v.level !== 'Alumni' ? 'Level ' + v.level : 'Alumni';
    const avatarHTML = v.logo
        ? `<img src="${v.logo}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">`
        : v.emoji || '🏪';

    // EC2.6 — show temp-close expiry if active
    const tempCloseInfo = v.tempClosedUntil
        ? ` · Temp closed until ${new Date(v.tempClosedUntil).toLocaleTimeString('en-GH', { hour: '2-digit', minute: '2-digit' })}`
        : '';
    const statusLabels = { open: 'Open', closed: 'Closed', preorder: 'Pre-order', appointment: 'By Appt' };
    const statusColors = { open: '#16a34a', closed: '#dc2626', preorder: '#d97706', appointment: '#2563eb' };
    const sColor = statusColors[v.status] || '#16a34a';
    const sLabel = statusLabels[v.status] || 'Open';

    document.getElementById('vs-store-card').innerHTML = `
        <div class="store-avatar">${avatarHTML}</div>
        <div style="flex:1;min-width:0;">
            <div style="font-size:16px;font-weight:700;margin-bottom:2px;">${escHtml(v.name)}</div>
            <div style="font-size:13px;color:var(--primary-blue);font-weight:500;margin-bottom:2px;">${escHtml(v.studentName || '')}</div>
            <div style="font-size:12px;color:var(--text-muted);">${escHtml(v.category)} · ${levelLabel}</div>
            <div style="margin-top:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                <span style="background:${sColor};color:white;font-size:11px;font-weight:700;padding:3px 9px;border-radius:20px;">${sLabel}${tempCloseInfo}</span>
                <select onchange="setVendorStatus(this.value)" style="font-size:12px;border:1.5px solid var(--border);border-radius:7px;padding:4px 8px;background:var(--bg-light);color:var(--text-dark);font-family:inherit;cursor:pointer;">
                    <option value="">Change status…</option>
                    <option value="open">🟢 Open</option>
                    <option value="closed">🔴 Closed</option>
                    <option value="preorder">🟡 Pre-order Only</option>
                    <option value="appointment">🔵 By Appointment</option>
                    <option value="temp1h">⏱ Temp Close 1h</option>
                    <option value="temp2h">⏱ Temp Close 2h</option>
                    <option value="temp4h">⏱ Temp Close 4h</option>
                    <option value="tempday">⏱ Closed for Today</option>
                </select>
            </div>
        </div>`;

    const stats = getVendorStats(v.id);
    document.getElementById('vs-stats').innerHTML = `
        <div class="stat-card">
            <div class="stat-value">GH₵${stats.revenue}</div>
            <div class="stat-label">Revenue</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${stats.itemsSold}</div>
            <div class="stat-label">Items Sold</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${stats.orderCount}</div>
            <div class="stat-label">Orders</div>
        </div>`;

    // Pickup location section
    const pickupSection = document.getElementById('vs-pickup-section');
    if (pickupSection) {
        if (v.pickupLabel) {
            pickupSection.innerHTML = `
                <div style="background:var(--bg-light);border:1px solid var(--border);border-radius:10px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;">
                    <div>
                        <div style="font-size:10px;font-weight:700;color:var(--text-muted);letter-spacing:0.4px;">PICKUP LOCATION</div>
                        <div style="font-size:13px;font-weight:600;color:var(--text-dark);margin-top:2px;">${escHtml(v.pickupLabel)}</div>
                    </div>
                    <button onclick="openPickupEditModal()" style="font-size:12px;color:var(--light-blue);background:none;border:none;cursor:pointer;font-weight:600;padding:4px;">Edit</button>
                </div>`;
        } else {
            pickupSection.innerHTML = `
                <div style="background:#fff8e1;border:1px solid #ffe082;border-radius:10px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;">
                    <div>
                        <div style="font-size:13px;font-weight:600;color:#f57f17;">⚠️ No pickup location set</div>
                        <div style="font-size:12px;color:#f9a825;margin-top:2px;">Customers won't know where to collect orders.</div>
                    </div>
                    <button onclick="openPickupEditModal()" style="font-size:12px;color:var(--light-blue);background:none;border:none;cursor:pointer;font-weight:600;padding:4px;">Set Now</button>
                </div>`;
        }
    }

    // Shop Policy section
    const policySection = document.getElementById('vs-policy-section');
    if (policySection) {
        const hasPolicy = v.policyRefund || v.policyCutoff || v.policyNotes;
        policySection.innerHTML = `
            <div style="background:var(--bg-light);border:1px solid var(--border);border-radius:10px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;">
                <div>
                    <div style="font-size:10px;font-weight:700;color:var(--text-muted);letter-spacing:0.4px;">SHOP POLICY</div>
                    <div style="font-size:13px;color:var(--text-dark);margin-top:2px;">${hasPolicy ? '📋 Policy set' : 'No policy set yet'}</div>
                </div>
                <button onclick="openPolicyEditModal()" style="font-size:12px;color:var(--light-blue);background:none;border:none;cursor:pointer;font-weight:600;padding:4px;">${hasPolicy ? 'Edit' : 'Add'}</button>
            </div>`;
    }

    // Shop sections management
    const sectionsSection = document.getElementById('vs-sections-section');
    if (sectionsSection) {
        const sections = v.sections || [];
        sectionsSection.innerHTML = `
        <div style="background:var(--bg-light);border:1px solid var(--border);border-radius:10px;padding:10px 14px;">
            <div style="display:flex;justify-content:space-between;align-items:center;${sections.length ? 'margin-bottom:10px;' : ''}">
                <div>
                    <div style="font-size:10px;font-weight:700;color:var(--text-muted);letter-spacing:0.4px;">SHOP SECTIONS</div>
                    <div style="font-size:13px;color:var(--text-dark);margin-top:2px;">${sections.length ? `${sections.length} section${sections.length > 1 ? 's' : ''}` : 'No sections — products shown flat'}</div>
                </div>
                ${sections.length < 8 ? `<button onclick="addShopSection()" style="font-size:12px;color:var(--light-blue);background:none;border:none;cursor:pointer;font-weight:600;padding:4px;">+ Add</button>` : ''}
            </div>
            ${sections.map(s => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-top:1px solid var(--border);">
                <span style="font-size:13px;font-weight:600;color:var(--text-dark);">📂 ${escHtml(s.name)}</span>
                <button onclick="deleteShopSection('${s.id}')" style="font-size:12px;color:var(--primary-red);background:none;border:none;cursor:pointer;font-family:inherit;">Remove</button>
            </div>`).join('')}
        </div>`;
    }

    // Last active warning
    const activitySection = document.getElementById('vs-activity-section');
    if (activitySection) {
        const daysInactive = v.lastActive ? Math.floor((Date.now() - v.lastActive) / 86400000) : 999;
        if (daysInactive >= 30) {
            activitySection.innerHTML = `<div style="background:#fce4ec;border:1px solid #ef9a9a;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px;">
                <span style="font-size:18px;">⚠️</span>
                <div>
                    <div style="font-size:13px;font-weight:600;color:#c62828;">You've been inactive for ${daysInactive} days</div>
                    <div style="font-size:12px;color:#d32f2f;">Log in regularly so customers know your store is still active.</div>
                </div>
            </div>`;
        } else {
            activitySection.innerHTML = '';
        }
    }

    // EC1.4 — pending approval banner (shown above ID banner)
    const approvalBanner = document.getElementById('vs-approval-banner');
    if (approvalBanner) {
        if (v.pendingApproval) {
            approvalBanner.innerHTML = `<div style="background:#fff8e1;border:1.5px solid #f59e0b;border-radius:10px;padding:12px 14px;display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                <span style="font-size:22px;">⏳</span>
                <div>
                    <div style="font-size:13px;font-weight:700;color:#92400e;">Awaiting Admin Approval</div>
                    <div style="font-size:12px;color:#78350f;margin-top:2px;">Your store is not yet visible to customers. Admin will review and approve it shortly. This usually takes a few hours.</div>
                </div>
            </div>`;
        } else {
            approvalBanner.innerHTML = '';
        }
    }

    // ID Verification status banner
    const idBanner = document.getElementById('vs-id-banner');
    if (idBanner) {
        if (v.idStatus === 'approved') {
            idBanner.innerHTML = `<div style="background:#e8f5e9;border:1px solid #a5d6a7;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px;">
                <span style="font-size:18px;">✅</span>
                <div><div style="font-size:13px;font-weight:600;color:#2e7d32;">ID Approved</div>
                <div style="font-size:12px;color:#388e3c;">Your student ID has been verified.</div></div>
            </div>`;
        } else if (v.idStatus === 'rejected') {
            idBanner.innerHTML = `<div style="background:#fce4ec;border:1px solid #ef9a9a;border-radius:10px;padding:10px 14px;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                    <span style="font-size:18px;">❌</span>
                    <div><div style="font-size:13px;font-weight:600;color:#c62828;">ID Rejected</div>
                    <div style="font-size:12px;color:#d32f2f;">Your ID photo was not accepted. Please re-upload a clearer photo.</div></div>
                </div>
                <button onclick="reuploadIdPhoto('${v.id}')" style="width:100%;padding:8px;background:#c62828;color:white;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">🪪 Re-upload ID Photo</button>
            </div>`;
        } else {
            idBanner.innerHTML = `<div style="background:#fff8e1;border:1px solid #ffe082;border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px;">
                <span style="font-size:18px;">🕐</span>
                <div><div style="font-size:13px;font-weight:600;color:#f57f17;">ID Pending Review</div>
                <div style="font-size:12px;color:#f9a825;">Admin is reviewing your student ID. This usually takes a short while.</div></div>
            </div>`;
        }
    }
    renderBoostSection();
    renderTrendSection();
}

// EC2.6 — vendor status quick-setter with temp-close support
function setVendorStatus(value) {
    if (!value || !state.loggedVendor) return;
    const vendors = getVendors();
    const v = vendors.find(x => x.id === state.loggedVendor.id);
    if (!v) return;

    const tempMap = { temp1h: 3600000, temp2h: 7200000, temp4h: 14400000, tempday: null };
    if (value.startsWith('temp')) {
        const ms = tempMap[value];
        const until = ms ? Date.now() + ms : (() => {
            const end = new Date(); end.setHours(23, 59, 59, 999); return end.getTime();
        })();
        v._statusBeforeTempClose = v.status === 'closed' ? 'open' : v.status;
        v.tempClosedUntil = until;
        v.status = 'closed';
        const label = value === 'tempday' ? 'rest of today' : value.replace('temp','');
        showToast(`Store set to Closed for ${label}`);
    } else {
        v.status = value;
        delete v.tempClosedUntil;
        delete v._statusBeforeTempClose;
        showToast('Status updated to ' + value);
    }
    saveVendors(vendors);
    state.loggedVendor = v;
    renderVSummary();
    renderHomePage();
}

function getVendorStats(vendorId) {
    const orders = getOrders()
        .filter(o => o.vendorId === vendorId);
    const revenue = orders.reduce((s, o) => s + o.total, 0);
    const itemsSold = orders.reduce((s, o) => s + o.items.reduce((ss, i) => ss + i.qty, 0), 0);
    return { revenue, itemsSold, orderCount: orders.length };
}

function updateOrdersBadge() {
    const badge = document.getElementById('ordersTabBadge');
    if (!badge || !state.loggedVendor) return;
    const count = getOrders()
        .filter(o => o.vendorId === state.loggedVendor.id && (o.status === 'pending' || o.status === 'preorder'))
        .length;
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
}

function updateOrderStatus(orderId, newStatus) {
    const orders = getOrders();
    const o = orders.find(x => x.id === orderId);
    if (!o) return;

    if (newStatus === 'cancelled') {
        const vendors = getVendors();
        const vendor = vendors.find(v => v.id === o.vendorId);
        if (vendor) {
            o.items.forEach(item => {
                if (item.isPreorder) return;
                const product = vendor.products.find(p => p.id === item.productId);
                if (product && !product.isConsultation) {
                    product.stock += item.qty;
                }
            });
            saveVendors(vendors);
        }
    }

    o.status = newStatus;
    if ((newStatus === 'fulfilled' || newStatus === 'cancelled') && o.placedAt && !o.respondedAt) {
        o.respondedAt = Date.now();
    }
    saveOrders(orders);

    if (o.customerName && o.customerName !== 'Guest') {
        const num = o.orderNumber ? `#${o.orderNumber}` : '';
        if (newStatus === 'fulfilled') {
            addNotification('✅', `Order ${num} Confirmed!`,
                `Your order from ${o.vendorName} has been confirmed. Enjoy!`,
                { type: 'myorders' }, o.customerName);
        } else if (newStatus === 'cancelled') {
            addNotification('❌', `Order ${num} Cancelled`,
                `Your order from ${o.vendorName} was cancelled by the vendor.`,
                { type: 'myorders' }, o.customerName);
        }
    }

    checkAndUpdateCampusStar();
    renderVOrders();
    renderVSummary();
    updateOrdersBadge();
    renderHomePage();
    showToast('Order marked as ' + newStatus);
}

function openMyOrders() {
    if (!state.currentUser) { openSigninModal(); return; }
    const orders = getOrders()
        .filter(o => o.customerName === state.currentUser)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const statusLabel = { pending: 'Pending', fulfilled: 'Fulfilled', cancelled: 'Cancelled', preorder: 'Pre-order' };
    const statusClass = { pending: 'ord-pending', fulfilled: 'ord-fulfilled', cancelled: 'ord-cancelled', preorder: 'ord-preorder' };

    document.getElementById('myOrdersContent').innerHTML = orders.length ? orders.map(o => {
        const canCancel = o.status === 'pending' || o.status === 'preorder';
        return `
        <div style="background:var(--bg-light);border-radius:12px;padding:14px;margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-weight:700;font-size:14px;">${escHtml(o.vendorName)}</span>
                <span style="font-size:12px;color:var(--text-muted);">${o.orderNumber ? `#${o.orderNumber} · ` : ''}${new Date(o.date).toLocaleDateString()}</span>
            </div>
            <div style="font-size:13px;color:var(--text-muted);margin-bottom:8px;">
                ${o.items.map(i => `${escHtml(i.productName)}${i.isPreorder ? ' <span class="preorder-badge">Pre-order</span>' : ''} × ${i.qty}`).join(' · ')}
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <span style="font-weight:700;color:var(--primary-blue);">GH₵${o.total.toFixed(2)}</span>
                <div style="display:flex;align-items:center;gap:8px;">
                    ${canCancel ? `<button onclick="customerCancelOrder('${o.id}')" style="background:#fce4ec;color:#c62828;border:none;padding:5px 10px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;">Cancel</button>` : ''}
                    <span class="ord-badge ${statusClass[o.status] || 'ord-pending'}">${statusLabel[o.status] || 'Pending'}</span>
                </div>
            </div>
        </div>`;
    }).join('')
        : `<div class="empty-state"><div class="empty-icon">🧾</div><h3>No orders yet</h3><p>Your completed checkouts will appear here.</p><button onclick="closeModal('myOrdersModal');showPage('home')" style="margin-top:14px;background:var(--primary-blue);color:white;border:none;padding:10px 24px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">Browse Vendors</button></div>`;

    document.getElementById('myOrdersModal').classList.remove('hidden');
}

function getNextOrderNumber() {
    const n = (DB.config.order_counter || 0) + 1;
    DB.config.order_counter = n;
    syncConfig('order_counter', n).catch(console.warn);
    return String(n).padStart(6, '0');
}

// EC2.3 — customer can cancel their own pending/preorder order
function customerCancelOrder(orderId) {
    if (!confirm('Cancel this order? This cannot be undone.')) return;
    const orders = getOrders();
    const o = orders.find(x => x.id === orderId);
    if (!o || (o.status !== 'pending' && o.status !== 'preorder')) return;

    // Restore stock for non-preorder items
    const vendors = getVendors();
    const vendor = vendors.find(v => v.id === o.vendorId);
    if (vendor) {
        o.items.forEach(item => {
            if (item.isPreorder) return;
            const product = vendor.products.find(p => p.id === item.productId);
            if (product && !product.isConsultation) product.stock += item.qty;
        });
        saveVendors(vendors);
    }

    o.status = 'cancelled';
    o.cancelledBy = 'customer';
    saveOrders(orders);
    showToast('Order cancelled.');
    openMyOrders(); // refresh the modal
}

// ── VENDOR REGISTER ──
function openVendorRegister() {
    resetPickupPicker();
    showVregStep(1);
    document.getElementById('vendorRegisterModal').classList.remove('hidden');
}

async function submitVendorRegister() {
    const storeName   = document.getElementById('vr-storeName').value.trim();
    const desc        = document.getElementById('vr-desc').value.trim();
    const category    = document.getElementById('vr-category').value;
    const availability= document.getElementById('vr-availability').value;
    const studentName = document.getElementById('vr-studentName').value.trim();
    const level       = document.getElementById('vr-level').value;
    const whatsapp    = document.getElementById('vr-whatsapp').value.trim();
    const phone       = document.getElementById('vr-phone').value.trim();
    const instagram   = document.getElementById('vr-instagram').value.trim();
    const tiktok      = document.getElementById('vr-tiktok').value.trim();
    const emoji         = document.getElementById('vr-emoji').value.trim() || '🏪';
    const policyRefund  = document.getElementById('vr-policy-refund').value.trim();
    const policyCutoff  = document.getElementById('vr-policy-cutoff').value.trim();
    const policyNotes   = document.getElementById('vr-policy-notes').value.trim();
    const email         = document.getElementById('vr-email').value.trim().toLowerCase();
    const password      = document.getElementById('vr-password').value;
    const confirm       = document.getElementById('vr-confirm').value;

    if (!storeName || !desc || !category || !studentName || !email || !password) {
        showToast('Please fill in all required fields'); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Please enter a valid email address'); return; }
    if (password !== confirm) { showToast('Passwords do not match'); return; }
    if (password.length < 6)  { showToast('Password must be at least 6 characters'); return; }

    const pickupLabel = getPickupLabel();
    if (!pickupLabel) { showToast('Please set your pickup location'); return; }

    const idPhotoFile = document.getElementById('vr-idPhoto').files[0];
    if (!idPhotoFile) { showToast('Please upload your Student ID photo'); return; }

    if (getVendors().some(v => v.name.toLowerCase() === storeName.toLowerCase())) {
        showToast('A store with this name already exists'); return;
    }
    if (!_supabase) { showToastError('Cannot register: app is not connected to the server. Please try again later.'); return; }

    // SP1.2 — compress images before storing
    const logoFile = document.getElementById('vr-logo').files[0];
    let logoDataUrl = null;
    if (logoFile) {
        try { logoDataUrl = await compressImage(logoFile, 400, 0.75); }
        catch(e) { showToastError(e.message); return; }
    }

    let idPhoto;
    try { idPhoto = await compressImage(idPhotoFile, 1000, 0.8); }
    catch(e) { showToastError(e.message); return; }

    // Register with Supabase Auth first — this handles email uniqueness and secure password storage
    const { data: authData, error: authError } = await _supabase.auth.signUp({
        email,
        password,
        options: { data: { role: 'vendor', storeName } }
    });
    if (authError) {
        if (authError.message.includes('already registered')) {
            showToastError('That email is already registered — please sign in instead.');
        } else {
            showToastError('Registration failed: ' + authError.message);
        }
        return;
    }
    const vendorId = authData.user.id;
    let logo = null;
    if (logoDataUrl) {
        logo = await uploadImage(logoDataUrl, 'logos', vendorId) || logoDataUrl;
    }
    // Update Supabase metadata with the confirmed vendor ID
    await _supabase.auth.updateUser({ data: { role: 'vendor', vendorId } });

    const newVendor = {
        id: vendorId,
        name: storeName, studentName, category, description: desc,
        emoji, logo, level,
        rating: 0, reviews: 0,
        status: 'open', availability,
        whatsapp, phone, instagram, tiktok,
        isNew: true, joinDate: new Date().toISOString().split('T')[0], joinedAt: Date.now(), lastActive: Date.now(),
        idPhoto, idStatus: 'pending',
        pendingApproval: true,  // EC1.4 — hidden from public until admin approves
        pickupType: pickupState.type,
        pickupHostel: pickupState.hostel || null,
        pickupFloor: pickupState.floor || null,
        pickupRoom: pickupState.room || null,
        pickupLabel,
        pickupMapsLink: pickupState.type === 'offcampus'
            ? (document.getElementById('pickup-maps-link')?.value.trim() || null)
            : null,
        policyRefund, policyCutoff, policyNotes,
        products: []
    };

    const vendors = getVendors();
    vendors.push(newVendor);
    saveVendors(vendors);

    // EC1.4 — notify the vendor their registration is under review (NOT campus-wide)
    addNotification('🏪', 'Registration Received!', `Your store "${storeName}" is now under review. You'll be notified as soon as admin approves it.`, null, null, newVendor.id);

    state.loggedVendor = newVendor;

    closeModal('vendorRegisterModal');
    showToast('Store registered! Admin will review and approve your store shortly.');
    renderHomePage();
    renderMyStorePage();
}

// ── VENDOR LOGIN ──
function openVendorLogin() {
    document.getElementById('vendorLoginModal').classList.remove('hidden');
}

async function submitVendorLogin() {
    const email    = document.getElementById('vl-email').value.trim().toLowerCase();
    const password = document.getElementById('vl-password').value;
    if (!email || !password) { showToast('Enter your email and password'); return; }
    if (!_supabase) { showToastError('Cannot sign in: app is not connected to the server.'); return; }

    const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
    if (error) { showToastError('Incorrect email or password'); return; }

    const meta = data.user.user_metadata || {};
    if (meta.role === 'admin') { showToastError('Use the admin login instead.'); await _supabase.auth.signOut(); return; }

    const vendors = getVendors();
    const vendor = vendors.find(v => v.id === data.user.id);
    if (!vendor) { showToast('Store not found — please register'); await _supabase.auth.signOut(); return; }

    vendor.lastActive = Date.now();
    saveVendors(vendors);
    state.loggedVendor = vendor;

    document.getElementById('vl-email').value = '';
    document.getElementById('vl-password').value = '';
    closeModal('vendorLoginModal');
    showToast('Welcome back, ' + vendor.name + '!');
    renderMyStorePage();
}

// ── VENDOR LOGOUT ──
async function vendorLogout() {
    if (!confirm('Log out of your store?')) return;
    if (_supabase) await _supabase.auth.signOut();
    state.loggedVendor = null;
    renderMyStorePage();
    showToast('Logged out of your store');
}

// ── LOGO PREVIEW ──
function previewVendorLogo(input) {
    const file = input.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { showToastError('Logo is too large (max 5 MB)'); input.value = ''; return; }
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById('vr-logo-img').src = e.target.result;
        document.getElementById('vr-logo-preview').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function clearVendorLogo() {
    document.getElementById('vr-logo').value = '';
    document.getElementById('vr-logo-preview').style.display = 'none';
    document.getElementById('vr-logo-img').src = '';
}

// ── SHOP POLICY ──
function toggleShopPolicy(sectionId) {
    const section = document.getElementById(sectionId);
    const vendorId = sectionId.replace('shopPolicy_', '');
    const arrow = document.getElementById('shopPolicyArrow_' + vendorId);
    if (!section) return;
    const isHidden = section.classList.toggle('hidden');
    if (arrow) arrow.style.transform = isHidden ? '' : 'rotate(180deg)';
}

function openPolicyEditModal() {
    const v = state.loggedVendor;
    document.getElementById('pe-refund').value  = v.policyRefund  || '';
    document.getElementById('pe-cutoff').value  = v.policyCutoff  || '';
    document.getElementById('pe-notes').value   = v.policyNotes   || '';
    document.getElementById('policyEditModal').classList.remove('hidden');
}

function savePolicyEdit() {
    const vendors = getVendors();
    const v = vendors.find(x => x.id === state.loggedVendor.id);
    if (!v) return;
    v.policyRefund = document.getElementById('pe-refund').value.trim();
    v.policyCutoff = document.getElementById('pe-cutoff').value.trim();
    v.policyNotes  = document.getElementById('pe-notes').value.trim();
    saveVendors(vendors);
    state.loggedVendor = v;
    closeModal('policyEditModal');
    renderVSummary();
    showToast('Shop policy updated!');
}

// ── PICKUP LOCATION PICKER ──
let pickupState = { type: null, hostel: null, floor: null, room: null };

function selectPickupType(type) {
    pickupState = { type, hostel: null, floor: null, room: null };
    document.getElementById('pickup-btn-oncampus').classList.toggle('active', type === 'oncampus');
    document.getElementById('pickup-btn-offcampus').classList.toggle('active', type === 'offcampus');
    document.getElementById('pickup-oncampus-picker').classList.toggle('hidden', type !== 'oncampus');
    document.getElementById('pickup-offcampus-note').classList.toggle('hidden', type !== 'offcampus');
    document.getElementById('pickup-step-floor').classList.add('hidden');
    document.getElementById('pickup-step-room').classList.add('hidden');
    document.getElementById('pickup-summary').classList.add('hidden');
    ['A','B'].forEach(h => document.getElementById('pickup-hostel-' + h).classList.remove('active'));
    if (type === 'offcampus') {
        document.getElementById('pickup-summary-text').textContent = '📍 Off Campus · via WhatsApp';
        document.getElementById('pickup-summary').classList.remove('hidden');
    }
}

function selectPickupHostel(hostel) {
    pickupState.hostel = hostel;
    pickupState.floor = null;
    pickupState.room = null;
    ['A','B'].forEach(h => document.getElementById('pickup-hostel-' + h).classList.toggle('active', h === hostel));
    document.getElementById('pickup-step-floor').classList.remove('hidden');
    document.getElementById('pickup-step-room').classList.add('hidden');
    document.getElementById('pickup-summary').classList.add('hidden');
    ['A','B','C','D'].forEach(f => document.getElementById('pickup-floor-' + f).classList.remove('active'));
}

function selectPickupFloor(floor) {
    pickupState.floor = floor;
    pickupState.room = null;
    ['A','B','C','D'].forEach(f => document.getElementById('pickup-floor-' + f).classList.toggle('active', f === floor));
    const maxRoom = pickupState.hostel === 'A' ? 42 : 48;
    let html = '';
    for (let i = 1; i <= maxRoom; i++) {
        html += `<button type="button" class="pickup-room-btn" id="pickup-room-${i}" onclick="selectPickupRoom(${i})">${floor}${i}</button>`;
    }
    document.getElementById('pickup-room-grid').innerHTML = html;
    document.getElementById('pickup-step-room').classList.remove('hidden');
    document.getElementById('pickup-summary').classList.add('hidden');
}

function selectPickupRoom(room) {
    pickupState.room = room;
    document.querySelectorAll('.pickup-room-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('pickup-room-' + room);
    if (btn) btn.classList.add('active');
    const label = getPickupLabel();
    document.getElementById('pickup-summary-text').textContent = label;
    document.getElementById('pickup-summary').classList.remove('hidden');
}

function resetPickupPicker() {
    pickupState = { type: null, hostel: null, floor: null, room: null };
    ['oncampus','offcampus'].forEach(t => {
        const btn = document.getElementById('pickup-btn-' + t);
        if (btn) btn.classList.remove('active');
    });
    const onPicker = document.getElementById('pickup-oncampus-picker');
    const offNote  = document.getElementById('pickup-offcampus-note');
    const summary  = document.getElementById('pickup-summary');
    const stepFloor= document.getElementById('pickup-step-floor');
    const stepRoom = document.getElementById('pickup-step-room');
    if (onPicker) onPicker.classList.add('hidden');
    if (offNote)  offNote.classList.add('hidden');
    if (summary)  summary.classList.add('hidden');
    if (stepFloor)stepFloor.classList.add('hidden');
    if (stepRoom) stepRoom.classList.add('hidden');
    const mapsInput = document.getElementById('pickup-maps-link');
    if (mapsInput) mapsInput.value = '';
}

function getPickupLabel() {
    if (!pickupState.type) return null;
    if (pickupState.type === 'offcampus') return '📍 Off Campus · via WhatsApp';
    if (!pickupState.hostel || !pickupState.floor || !pickupState.room) return null;
    return `🏠 Hostel ${pickupState.hostel} · Floor ${pickupState.floor} · Room ${pickupState.floor}${pickupState.room}`;
}

// ── PICKUP EDIT MODAL (dashboard) ──
let editPickupState = { type: null, hostel: null, floor: null, room: null };

function openPickupEditModal() {
    const v = state.loggedVendor;
    // Pre-fill with current values
    editPickupState = {
        type:   v.pickupType   || null,
        hostel: v.pickupHostel || null,
        floor:  v.pickupFloor  || null,
        room:   v.pickupRoom   || null
    };
    // Reset UI
    ['oncampus','offcampus'].forEach(t => document.getElementById('epickup-btn-' + t).classList.remove('active'));
    document.getElementById('epickup-oncampus-picker').classList.add('hidden');
    document.getElementById('epickup-offcampus-note').classList.add('hidden');
    document.getElementById('epickup-step-floor').classList.add('hidden');
    document.getElementById('epickup-step-room').classList.add('hidden');
    document.getElementById('epickup-summary').classList.add('hidden');
    // Restore current selection if exists
    if (editPickupState.type) eSelectPickupType(editPickupState.type, true);
    // Pre-fill maps link for off-campus vendors
    const mapsInput = document.getElementById('epickup-maps-link');
    if (mapsInput) mapsInput.value = v.pickupMapsLink || '';
    document.getElementById('pickupEditModal').classList.remove('hidden');
}

function eSelectPickupType(type, silent) {
    editPickupState.type = type;
    if (!silent) { editPickupState.hostel = null; editPickupState.floor = null; editPickupState.room = null; }
    document.getElementById('epickup-btn-oncampus').classList.toggle('active', type === 'oncampus');
    document.getElementById('epickup-btn-offcampus').classList.toggle('active', type === 'offcampus');
    document.getElementById('epickup-oncampus-picker').classList.toggle('hidden', type !== 'oncampus');
    document.getElementById('epickup-offcampus-note').classList.toggle('hidden', type !== 'offcampus');
    if (!silent) {
        document.getElementById('epickup-step-floor').classList.add('hidden');
        document.getElementById('epickup-step-room').classList.add('hidden');
        document.getElementById('epickup-summary').classList.add('hidden');
        ['A','B'].forEach(h => document.getElementById('epickup-hostel-' + h).classList.remove('active'));
    }
    if (type === 'offcampus') {
        document.getElementById('epickup-summary-text').textContent = '📍 Off Campus · via WhatsApp';
        document.getElementById('epickup-summary').classList.remove('hidden');
    }
    if (silent && editPickupState.hostel) eSelectPickupHostel(editPickupState.hostel, true);
}

function eSelectPickupHostel(hostel, silent) {
    editPickupState.hostel = hostel;
    if (!silent) { editPickupState.floor = null; editPickupState.room = null; }
    ['A','B'].forEach(h => document.getElementById('epickup-hostel-' + h).classList.toggle('active', h === hostel));
    document.getElementById('epickup-step-floor').classList.remove('hidden');
    if (!silent) {
        document.getElementById('epickup-step-room').classList.add('hidden');
        document.getElementById('epickup-summary').classList.add('hidden');
        ['A','B','C','D'].forEach(f => document.getElementById('epickup-floor-' + f).classList.remove('active'));
    }
    if (silent && editPickupState.floor) eSelectPickupFloor(editPickupState.floor, true);
}

function eSelectPickupFloor(floor, silent) {
    editPickupState.floor = floor;
    if (!silent) editPickupState.room = null;
    ['A','B','C','D'].forEach(f => document.getElementById('epickup-floor-' + f).classList.toggle('active', f === floor));
    const maxRoom = editPickupState.hostel === 'A' ? 42 : 48;
    let html = '';
    for (let i = 1; i <= maxRoom; i++) {
        html += `<button type="button" class="pickup-room-btn" id="epickup-room-${i}" onclick="eSelectPickupRoom(${i})">${floor}${i}</button>`;
    }
    document.getElementById('epickup-room-grid').innerHTML = html;
    document.getElementById('epickup-step-room').classList.remove('hidden');
    if (!silent) document.getElementById('epickup-summary').classList.add('hidden');
    if (silent && editPickupState.room) eSelectPickupRoom(editPickupState.room);
}

function eSelectPickupRoom(room) {
    editPickupState.room = room;
    document.querySelectorAll('#epickup-room-grid .pickup-room-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('epickup-room-' + room);
    if (btn) btn.classList.add('active');
    const label = getEditPickupLabel();
    document.getElementById('epickup-summary-text').textContent = label;
    document.getElementById('epickup-summary').classList.remove('hidden');
}

function getEditPickupLabel() {
    if (!editPickupState.type) return null;
    if (editPickupState.type === 'offcampus') return '📍 Off Campus · via WhatsApp';
    if (!editPickupState.hostel || !editPickupState.floor || !editPickupState.room) return null;
    return `🏠 Hostel ${editPickupState.hostel} · Floor ${editPickupState.floor} · Room ${editPickupState.floor}${editPickupState.room}`;
}

function savePickupLocation() {
    const label = getEditPickupLabel();
    if (!label) { showToast('Please complete your pickup location selection'); return; }
    const vendors = getVendors();
    const v = vendors.find(x => x.id === state.loggedVendor.id);
    if (!v) return;
    v.pickupType   = editPickupState.type;
    v.pickupHostel = editPickupState.hostel || null;
    v.pickupFloor  = editPickupState.floor  || null;
    v.pickupRoom   = editPickupState.room   || null;
    v.pickupLabel  = label;
    v.pickupMapsLink = editPickupState.type === 'offcampus'
        ? (document.getElementById('epickup-maps-link')?.value.trim() || null)
        : null;
    saveVendors(vendors);
    state.loggedVendor = v;
    closeModal('pickupEditModal');
    renderVSummary();
    showToast('Pickup location updated!');
}

function previewIdPhoto(input) {
    const file = input.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { showToastError('ID photo is too large (max 5 MB)'); input.value = ''; return; }
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById('vr-id-img').src = e.target.result;
        document.getElementById('vr-id-preview').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function clearIdPhoto() {
    document.getElementById('vr-idPhoto').value = '';
    document.getElementById('vr-id-preview').style.display = 'none';
    document.getElementById('vr-id-img').src = '';
}

function reuploadIdPhoto(vendorId) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async function() {
        const file = input.files[0];
        if (!file) return;
        let idPhoto;
        try { idPhoto = await compressImage(file, 1000, 0.8); }
        catch(e) { showToastError(e.message); return; }
        const vendors = getVendors();
        const v = vendors.find(x => x.id === vendorId);
        if (!v) return;
        v.idPhoto = idPhoto;
        v.idStatus = 'pending';
        saveVendors(vendors);
        state.loggedVendor = v;
        renderVSummary();
        showToast('ID photo re-uploaded. Admin will review it shortly.');
    };
    input.click();
}

// ═══════════════════════════════════════════
// VENDOR PRODUCTS (Phase 2B)
// ═══════════════════════════════════════════
function renderVProducts() {
    const v = state.loggedVendor;
    if (!v) return;
    const vendors = getVendors();
    const fresh = vendors.find(x => x.id === v.id);
    if (!fresh) return;
    state.loggedVendor = fresh;
    const products = fresh.products || [];

    // Low stock alerts (< 3 stock, visible to vendor only)
    const lowStock = products.filter(p => !p.isConsult && p.stock < 3);
    // SU2.1 — nudge vendor if products have no photo
    const noPhoto = products.filter(p => !p.photo && !(p.photos && p.photos.length));
    const alertsEl = document.getElementById('vs-low-stock-alerts');
    let alertHTML = '';
    if (lowStock.length) alertHTML += `<div class="ls-alert">⚠️ Low Stock: ${lowStock.map(p => `<strong>${escHtml(p.name)}</strong> (${p.stock} left)`).join(', ')}</div>`;
    if (noPhoto.length)  alertHTML += `<div class="ls-alert" style="background:#fff7ed;border-color:#fb923c;color:#9a3412;">📷 ${noPhoto.length} product${noPhoto.length > 1 ? 's have' : ' has'} no photo — adding photos helps you get more orders.</div>`;
    alertsEl.innerHTML = alertHTML;

    // Product list
    const listEl = document.getElementById('vs-products-list');
    if (!products.length) {
        listEl.innerHTML = `<div style="text-align:center;padding:32px 20px;color:var(--text-muted);"><div style="font-size:44px;margin-bottom:12px;">📦</div><div style="font-size:16px;font-weight:600;color:var(--text-dark);margin-bottom:6px;">No products yet</div><div style="font-size:14px;margin-bottom:16px;">Add your first product so customers can start ordering.</div><button onclick="openVendorProductModal(null)" style="background:var(--primary-blue);color:white;border:none;padding:12px 28px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">+ Add First Product</button></div>`;
        return;
    }
    listEl.innerHTML = products.map(p => {
        const thumb = p.photo
            ? `<img src="${p.photo}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;flex-shrink:0;" onerror="this.style.display='none'">`
            : `<div style="width:48px;height:48px;border-radius:8px;background:var(--bg-light);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">${p.emoji || '📦'}</div>`;
        const priceLabel = p.isConsult ? '<em style="color:var(--text-muted);">Contact for Pricing</em>' : `<strong>GH₵${p.price}</strong>`;
        const stockLabel = p.isConsult ? '' : (p.stock < 3
            ? `<span style="color:var(--primary-red);font-size:12px;">⚠ ${p.stock} left</span>`
            : `<span style="font-size:12px;color:var(--text-muted);">${p.stock} in stock</span>`);
        const variantBadge = (p.variants && (p.variants.colors?.length || p.variants.sizes?.length))
            ? `<span style="font-size:12px;background:#e8f0fe;color:var(--primary-blue);padding:2px 6px;border-radius:10px;margin-left:4px;">Variants</span>` : '';
        const boostBtnLabel = p.isBoosted ? '⭐ Featured' : 'Boost';
        const boostBtnStyle = p.isBoosted
            ? 'background:#fef3c7;color:#92400e;'
            : 'background:#eff6ff;color:#1d4ed8;';
        return `<div class="vp-card">
            ${thumb}
            <div style="flex:1;min-width:0;">
                <div style="font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(p.name)}${variantBadge}</div>
                <div style="font-size:13px;margin-top:2px;">${priceLabel}</div>
                <div style="margin-top:3px;">${stockLabel}</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;">
                <button class="btn-secondary" style="padding:5px 12px;font-size:12px;" onclick="openVendorProductModal('${p.id}')">Edit</button>
                ${!p.isConsult ? `<button class="btn-secondary" style="padding:5px 12px;font-size:12px;" onclick="openRestockModal('${p.id}')">Restock</button>` : ''}
                <button style="padding:5px 10px;font-size:12px;border:none;border-radius:8px;cursor:pointer;${boostBtnStyle}" onclick="toggleProductBoost('${p.id}')">${boostBtnLabel}</button>
                <button style="padding:5px 10px;font-size:12px;border:none;border-radius:8px;background:#ffeaea;color:var(--primary-red);cursor:pointer;" onclick="deleteVendorProduct('${p.id}')">Delete</button>
            </div>
        </div>`;
    }).join('');
}

function openVendorProductModal(productId) {
    vendorEditProductId = productId || null;
    variantState.colors = [];
    variantState.sizes = [];
    pendingPhotos = [];

    const modal = document.getElementById('vendorProductModal');
    document.getElementById('vpm-title').textContent = productId ? 'Edit Product' : 'Add Product';
    document.getElementById('vpm-name').value = '';
    document.getElementById('vpm-desc').value = '';
    document.getElementById('vpm-price').value = '';
    document.getElementById('vpm-stock').value = '';
    document.getElementById('vpm-emoji').value = '';
    document.getElementById('vpm-consultation').checked = false;
    const negEl = document.getElementById('vpm-negotiable');
    if (negEl) negEl.checked = false;
    toggleConsultPrice();

    // Populate section dropdown
    const secEl = document.getElementById('vpm-section');
    if (secEl) {
        const sections = state.loggedVendor.sections || [];
        secEl.innerHTML = '<option value="">No section</option>' +
            sections.map(s => `<option value="${s.id}">${escHtml(s.name)}</option>`).join('');
    }

    if (productId) {
        const v = state.loggedVendor;
        const p = v.products.find(x => x.id === productId);
        if (!p) return;
        document.getElementById('vpm-name').value = p.name || '';
        document.getElementById('vpm-desc').value = p.description || '';
        document.getElementById('vpm-price').value = p.price || '';
        document.getElementById('vpm-stock').value = p.stock || '';
        document.getElementById('vpm-emoji').value = p.emoji || '';
        document.getElementById('vpm-consultation').checked = !!p.isConsult;
        toggleConsultPrice();
        if (secEl && p.sectionId) secEl.value = p.sectionId;
        if (negEl) negEl.checked = !!p.isNegotiable;
        // Load existing photos
        pendingPhotos = [...(p.photos || (p.photo ? [p.photo] : []))];
        if (p.variants) {
            variantState.colors = p.variants.colors ? [...p.variants.colors] : [];
            variantState.sizes = p.variants.sizes ? [...p.variants.sizes] : [];
        }
    }
    renderPhotoThumbs();
    renderVariantChips('color');
    renderVariantChips('size');
    modal.classList.remove('hidden');
}

async function saveVendorProduct() {
    // SP2.3 — prevent double-tap race condition by disabling the button immediately
    const saveBtn = document.getElementById('vpm-save-btn');
    if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = 'Saving…'; }
    try {
        const name  = document.getElementById('vpm-name').value.trim();
        const desc  = document.getElementById('vpm-desc').value.trim();
        const emoji = document.getElementById('vpm-emoji').value.trim() || '📦';
        const isConsult = document.getElementById('vpm-consultation').checked;
        const priceRaw  = document.getElementById('vpm-price').value.trim();
        const stockRaw  = document.getElementById('vpm-stock').value.trim();

        if (!name) { showToast('Product name is required'); return; }
        if (!isConsult) {
            if (!priceRaw || isNaN(Number(priceRaw)) || Number(priceRaw) < 0) {
                showToast('Enter a valid price'); return;
            }
            if (!stockRaw || isNaN(Number(stockRaw)) || Number(stockRaw) < 0) {
                showToast('Enter a valid stock quantity'); return;
            }
        }

        if (!state.loggedVendor) { showToast('No vendor session — please log in again'); return; }

        const sectionId = document.getElementById('vpm-section')?.value || null;
        const isNegotiable = document.getElementById('vpm-negotiable')?.checked || false;
        const vendors = getVendors();
        const vIdx = vendors.findIndex(x => x.id === state.loggedVendor.id);
        if (vIdx === -1) { showToast('Vendor not found — please log in again'); return; }
        if (!vendors[vIdx].products) vendors[vIdx].products = [];

        const _targetProductId = vendorEditProductId || ('p' + Date.now());
        const uploadedPhotos = await Promise.all(pendingPhotos.map(async (ph, i) => {
            if (typeof ph === 'string' && ph.startsWith('data:')) {
                const url = await uploadImage(ph, 'products', `${state.loggedVendor.id}_${_targetProductId}_${i}`);
                return url || ph;
            }
            return ph;
        }));

        const productData = {
            name, description: desc, emoji, isConsult,
            price: isConsult ? 0 : Number(priceRaw),
            stock: isConsult ? 99 : Number(stockRaw),
            photos: uploadedPhotos,
            photo: uploadedPhotos[0] || null,
            sectionId: sectionId || null,
            isNegotiable: !!isNegotiable,
            variants: {
                colors: [...variantState.colors],
                sizes: [...variantState.sizes]
            }
        };

        if (vendorEditProductId) {
            const pIdx = vendors[vIdx].products.findIndex(x => x.id === vendorEditProductId);
            if (pIdx !== -1) {
                vendors[vIdx].products[pIdx] = { ...vendors[vIdx].products[pIdx], ...productData };
            } else {
                vendors[vIdx].products.push({ id: 'p' + Date.now(), ...productData });
            }
        } else {
            vendors[vIdx].products.push({ id: 'p' + Date.now(), ...productData });
        }

        saveVendors(vendors);
        state.loggedVendor = vendors[vIdx];
        closeModal('vendorProductModal');
        showToast(vendorEditProductId ? 'Product updated!' : 'Product added!');
        if (!vendorEditProductId) {
            notifyFollowers(vendors[vIdx].id, '🆕', `New at ${vendors[vIdx].name}`, `${name} is now available — check it out!`);
        }
        renderVProducts();
    } catch (err) {
        showToastError('Error saving product: ' + err.message);
    } finally {
        // SP2.3 — always re-enable the button whether save succeeded or failed
        if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = 'Save Product'; }
    }
}

function deleteVendorProduct(productId) {
    if (!confirm('Delete this product? This cannot be undone.')) return;
    const vendors = getVendors();
    const vIdx = vendors.findIndex(x => x.id === state.loggedVendor.id);
    if (vIdx === -1) return;
    vendors[vIdx].products = vendors[vIdx].products.filter(p => p.id !== productId);
    saveVendors(vendors);
    state.loggedVendor = vendors[vIdx];
    showToast('Product deleted');
    renderVProducts();
}

function toggleConsultPrice() {
    const isConsult = document.getElementById('vpm-consultation').checked;
    document.getElementById('vpm-price-row').style.display = isConsult ? 'none' : '';
    document.getElementById('vpm-stock-row').style.display = isConsult ? 'none' : '';
}

function addVariantChip(type) {
    const inputId = type === 'color' ? 'vpm-color-input' : 'vpm-size-input';
    const raw = document.getElementById(inputId).value.trim();
    if (!raw) return;
    const arr = type === 'color' ? variantState.colors : variantState.sizes;
    const vals = raw.split(',').map(v => v.trim()).filter(v => v.length > 0);
    let added = 0;
    vals.forEach(v => {
        if (!arr.includes(v)) { arr.push(v); added++; }
    });
    document.getElementById(inputId).value = '';
    renderVariantChips(type);
    if (added === 0) showToast('Already added');
}

function removeVariantChip(type, idx) {
    const arr = type === 'color' ? variantState.colors : variantState.sizes;
    arr.splice(idx, 1);
    renderVariantChips(type);
}

function renderVariantChips(type) {
    const arr = type === 'color' ? variantState.colors : variantState.sizes;
    const containerId = type === 'color' ? 'vpm-color-chips' : 'vpm-size-chips';
    document.getElementById(containerId).innerHTML = arr.map((val, i) =>
        `<span class="chip-item">${escHtml(val)}<span class="chip-remove" onclick="removeVariantChip('${type}',${i})">×</span></span>`
    ).join('');
}

function previewProductPhoto(input) {
    const file = input.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { showToastError('Photo is too large (max 5 MB)'); input.value = ''; return; }
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById('vpm-photo-img').src = e.target.result;
        document.getElementById('vpm-photo-preview').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function clearProductPhoto() {
    document.getElementById('vpm-photo').value = '';
    document.getElementById('vpm-photo-preview').style.display = 'none';
    document.getElementById('vpm-photo-img').src = '';
}

// ── RESTOCK ──
function openRestockModal(productId) {
    document.getElementById('vr-restock-id').value = productId;
    const v = state.loggedVendor;
    const p = v.products.find(x => x.id === productId);
    document.getElementById('vr-restock-name').textContent = p ? p.name : '';
    document.getElementById('vr-restock-qty').value = '';
    document.getElementById('vendorRestockModal').classList.remove('hidden');
}

function submitRestock() {
    const productId = document.getElementById('vr-restock-id').value;
    const qty = parseInt(document.getElementById('vr-restock-qty').value, 10);
    if (!qty || qty <= 0) { showToast('Enter a valid quantity'); return; }

    const vendors = getVendors();
    const vIdx = vendors.findIndex(x => x.id === state.loggedVendor.id);
    if (vIdx === -1) return;
    const pIdx = vendors[vIdx].products.findIndex(x => x.id === productId);
    if (pIdx === -1) return;
    const wasOutOfStock = vendors[vIdx].products[pIdx].stock === 0;
    const productName = vendors[vIdx].products[pIdx].name;
    vendors[vIdx].products[pIdx].stock += qty;
    // Reset stock alert flags so next sell-out triggers fresh notifications
    delete vendors[vIdx].products[pIdx].lowStockAlertSent;
    delete vendors[vIdx].products[pIdx].soldOutAlertSent;
    saveVendors(vendors);
    state.loggedVendor = vendors[vIdx];
    closeModal('vendorRestockModal');
    showToast(`Restocked! New stock: ${vendors[vIdx].products[pIdx].stock}`);
    if (wasOutOfStock) {
        notifyFollowers(vendors[vIdx].id, '🔔', `${escHtml(productName)} is back in stock!`,
            `${vendors[vIdx].name} has restocked "${productName}". Grab it before it sells out again!`);
    } else {
        notifyFollowers(vendors[vIdx].id, '📦', `${vendors[vIdx].name} restocked`,
            `${vendors[vIdx].name} just topped up their stock — check out what's available!`);
    }
    renderVProducts();
}

// ── VARIANT SELECTION (customer-side) ──
function tryAddToCart(vendorId, productId) {
    const v = getVendors().find(x => x.id === vendorId);
    const p = v?.products.find(x => x.id === productId);
    if (!p) return;
    const hasColors = p.variants?.colors?.length > 0;
    const hasSizes  = p.variants?.sizes?.length > 0;
    if (hasColors || hasSizes) {
        openVariantModal(vendorId, productId);
    } else {
        addToCart(vendorId, productId, null);
    }
}

function openVariantModal(vendorId, productId) {
    const v = getVendors().find(x => x.id === vendorId);
    const p = v?.products.find(x => x.id === productId);
    if (!p) return;
    pendingVariantItem = { vendorId, productId };

    document.getElementById('variant-product-name').textContent = p.name;

    let html = '';
    if (p.variants?.colors?.length) {
        html += `<div style="margin-bottom:14px;">
            <div style="font-size:13px;font-weight:600;margin-bottom:8px;color:var(--text-muted);">COLOUR</div>
            <div id="vm-colors">${p.variants.colors.map(c =>
                `<button class="variant-chip" onclick="selectVariantChip(this,'color')" data-val="${escHtml(c)}">${escHtml(c)}</button>`
            ).join('')}</div>
        </div>`;
    }
    if (p.variants?.sizes?.length) {
        html += `<div style="margin-bottom:14px;">
            <div style="font-size:13px;font-weight:600;margin-bottom:8px;color:var(--text-muted);">SIZE</div>
            <div id="vm-sizes">${p.variants.sizes.map(s =>
                `<button class="variant-chip" onclick="selectVariantChip(this,'size')" data-val="${escHtml(s)}">${escHtml(s)}</button>`
            ).join('')}</div>
        </div>`;
    }
    document.getElementById('variant-content').innerHTML = html;
    document.getElementById('variantModal').classList.remove('hidden');
}

function selectVariantChip(btn, group) {
    const container = document.getElementById(group === 'color' ? 'vm-colors' : 'vm-sizes');
    if (container) container.querySelectorAll('.variant-chip').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function addToCartWithVariant() {
    if (!pendingVariantItem) return;
    const { vendorId, productId } = pendingVariantItem;
    const v = getVendors().find(x => x.id === vendorId);
    const p = v?.products.find(x => x.id === productId);
    if (!p) return;

    const hasColors = p.variants?.colors?.length > 0;
    const hasSizes  = p.variants?.sizes?.length > 0;

    const colorBtn = document.querySelector('#vm-colors .variant-chip.selected');
    const sizeBtn  = document.querySelector('#vm-sizes .variant-chip.selected');

    if (hasColors && !colorBtn) { showToast('Please select a colour'); return; }
    if (hasSizes  && !sizeBtn)  { showToast('Please select a size'); return; }

    const variant = {};
    if (colorBtn) variant.color = colorBtn.dataset.val;
    if (sizeBtn)  variant.size  = sizeBtn.dataset.val;

    closeModal('variantModal');
    addToCart(vendorId, productId, Object.keys(variant).length ? variant : null);
    pendingVariantItem = null;
}

// ── VENDOR ORDERS TAB ──
function exportVendorOrders() {
    const v = state.loggedVendor;
    if (!v) return;
    const orders = getOrders()
        .filter(o => o.vendorId === v.id)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    if (!orders.length) { showToast('No orders to export'); return; }
    const rows = [['Order #','Date','Customer','Items','Total (GH₵)','Status']];
    orders.forEach(o => {
        const items = o.items.map(i => `${i.productName} x${i.qty}${i.variant ? ` (${[i.variant.color,i.variant.size].filter(Boolean).join('/')})` : ''}`).join('; ');
        rows.push([o.orderNumber || o.id, new Date(o.date).toLocaleDateString(), o.customerName, `"${items}"`, o.total.toFixed(2), o.status]);
    });
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${v.name.replace(/\s+/g,'-')}-orders-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
    showToast('Orders exported!');
}

function renderVOrders() {
    const v = state.loggedVendor;
    if (!v) return;
    const orders = getOrders()
        .filter(o => o.vendorId === v.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const el = document.getElementById('vtab-orders');
    if (!orders.length) {
        el.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted);">No orders yet</div>`;
        return;
    }
    const statusLabel = { pending: 'Pending', fulfilled: 'Fulfilled', cancelled: 'Cancelled', preorder: 'Pre-order' };
    const statusClass = { pending: 'ord-pending', fulfilled: 'ord-fulfilled', cancelled: 'ord-cancelled', preorder: 'ord-preorder' };

    el.innerHTML = `<div style="text-align:right;margin-bottom:12px;">
        <button onclick="exportVendorOrders()" style="background:none;border:1.5px solid var(--border);border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:var(--text-muted);cursor:pointer;">⬇ Export CSV</button>
    </div>` + orders.map(o => {
        // EC1.3 — flag orders where customer hasn't confirmed WhatsApp yet
        const waPending = (o.status === 'pending' || o.status === 'preorder') && o.whatsappSent === false;
        const badge = waPending
            ? `<span class="ord-badge" style="background:#fef3c7;color:#92400e;">⏳ WA Not Confirmed</span>`
            : `<span class="ord-badge ${statusClass[o.status] || 'ord-pending'}">${statusLabel[o.status] || 'Pending'}</span>`;
        const actionBtns = (o.status === 'pending' || o.status === 'preorder') ? `
            <div style="display:flex;gap:8px;margin-top:10px;">
                <button onclick="updateOrderStatus('${o.id}','fulfilled')"
                    style="flex:1;background:#e8f5e9;color:#2e7d32;border:none;padding:8px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">✅ Fulfilled</button>
                <button onclick="updateOrderStatus('${o.id}','cancelled')"
                    style="flex:1;background:#fce4ec;color:#b71c1c;border:none;padding:8px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">✖ Cancel</button>
            </div>` : '';
        return `
        <div style="background:white;border-radius:12px;padding:14px;margin-bottom:10px;box-shadow:var(--shadow);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-weight:600;font-size:14px;">${escHtml(o.customerName)}</span>
                <span style="font-size:12px;color:var(--text-muted);">${o.orderNumber ? `#${o.orderNumber} · ` : ''}${new Date(o.date).toLocaleDateString()}</span>
            </div>
            <div style="font-size:13px;color:var(--text-muted);margin-bottom:8px;">
                ${o.items.map(i => `${escHtml(i.productName)}${i.isPreorder ? ' <span class="preorder-badge">Pre-order</span>' : ''} × ${i.qty}${i.variant ? ` (${[i.variant.color,i.variant.size].filter(Boolean).join(', ')})` : ''}`).join(' · ')}
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <div style="font-weight:700;color:var(--primary-blue);">GH₵${o.total.toFixed(2)}</div>
                ${badge}
            </div>
            ${actionBtns}
        </div>`;
    }).join('');
}

// ═══════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════
function showPage(page) {
    state.prevPage = document.querySelector('.page.active')?.id.replace('page-','') || 'home';
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navEl = document.getElementById('nav-' + page);
    if (navEl) navEl.classList.add('active');
    window.scrollTo(0, 0);
    // page persistence — save where the user is (vendor/product handled by openVendor/openProduct)
    if (page !== 'vendor' && page !== 'product') savePageState(page);
}

function goBack() {
    showPage(state.prevPage || 'home');
}

// ═══════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════
// ── SAFE LOCALSTORAGE WRAPPERS (SP2.1) ──
// Prevents a single corrupted key from crashing the whole app.
// safeSetJSON catches QuotaExceededError and warns the user instead of silently failing.
function safeGetJSON(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch(e) {
        console.warn('ACM: could not read', key, e);
        return fallback;
    }
}
function safeSetJSON(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch(e) {
        if (e.name === 'QuotaExceededError' || e.code === 22 || e.code === 1014) {
            showToastError('⚠️ Storage is full! Go to Admin → Settings and export a backup, then clear your browser data.');
        } else {
            console.error('ACM: could not save', key, e);
        }
    }
}

function getVendors() { return [...DB.vendors]; } // returns a copy so push/mutations don't fool the diff
function saveVendors(newVendors) {
    const removedIds = DB.vendors
        .filter(v => !newVendors.find(n => n.id === v.id))
        .map(v => v.id);
    DB.vendors = newVendors;
    // Always sync all — mutations on shared object references would be missed by a diff.
    // After Phase 5E (images move to Storage), vendor objects are tiny so this is fast.
    newVendors.forEach(v => syncVendor(v).catch(console.warn));
    removedIds.forEach(id => _supabase?.from('vendors').delete().eq('id', id).catch(console.warn));
}

function getOrders() { return [...DB.orders]; }
function saveOrders(newOrders) {
    DB.orders = newOrders;
    newOrders.forEach(o => syncOrder(o).catch(console.warn));
}
// EC1.4 / EC2.6 — public view filters out suspended, pending-approval, AND auto-clears expired temp-closes
function getPublicVendors() {
    const now = Date.now();
    const vendors = getVendors();
    let changed = false;
    vendors.forEach(v => {
        if (v.tempClosedUntil && now >= v.tempClosedUntil) {
            v.status = v._statusBeforeTempClose || 'open';
            delete v.tempClosedUntil;
            delete v._statusBeforeTempClose;
            changed = true;
        }
    });
    if (changed) saveVendors(vendors);
    return vendors.filter(v => !v.suspended && !v.pendingApproval);
}

// ── SECURITY UTILS ──

// SP1.1 — SHA-256 hash via Web Crypto API (returns 64-char hex string)
async function hashPassword(pw) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pw));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Returns true if a stored password string looks like a SHA-256 hex hash
function isHashed(s) { return typeof s === 'string' && /^[0-9a-f]{64}$/.test(s); }

// SP1.2 — Compress an image File to a data URL
// maxDim: max width or height in pixels; quality: JPEG quality 0–1
// Rejects if file exceeds 5 MB before compression
async function compressImage(file, maxDim = 800, quality = 0.75) {
    const MAX_BYTES = 5 * 1024 * 1024;
    if (file.size > MAX_BYTES) throw new Error('Image is too large (max 5 MB). Please choose a smaller file.');
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error('Could not read image file.'));
        reader.onload = e => {
            const img = new Image();
            img.onerror = () => reject(new Error('Could not decode image.'));
            img.onload = () => {
                let w = img.width, h = img.height;
                if (w > maxDim || h > maxDim) {
                    if (w >= h) { h = Math.round(h * maxDim / w); w = maxDim; }
                    else        { w = Math.round(w * maxDim / h); h = maxDim; }
                }
                const canvas = document.createElement('canvas');
                canvas.width = w; canvas.height = h;
                canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                resolve(canvas.toDataURL('image/jpeg', quality));
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

// ── WISHLIST ──
function getWishlist()   { return safeGetJSON('acm_wishlist', []); }
function saveWishlist(w) { safeSetJSON('acm_wishlist', w); }

function isWishlisted(productId) {
    const user = state.currentUser;
    if (!user) return false;
    return getWishlist().some(w => w.userId === user && w.productId === productId);
}

function toggleWishlist(vendorId, productId) {
    if (!state.currentUser) { showToast('Sign in to save to wishlist'); return; }
    const vendor = getVendors().find(v => v.id === vendorId);
    const product = vendor ? (vendor.products || []).find(p => p.id === productId) : null;
    let wl = getWishlist();
    const idx = wl.findIndex(w => w.userId === state.currentUser && w.productId === productId);
    if (idx !== -1) {
        wl.splice(idx, 1);
        showToast('Removed from wishlist');
    } else {
        wl.push({
            id: 'wl' + Date.now(), userId: state.currentUser,
            vendorId, productId,
            productName: product ? product.name : '',
            vendorName: vendor ? vendor.name : '',
            price: product ? (product.price || 0) : 0,
            emoji: product ? (product.emoji || '📦') : '📦',
            photo: null
        });
        showToast('Added to wishlist ❤️');
    }
    saveWishlist(wl);
    const btn = document.querySelector(`.wish-btn[data-pid="${productId}"]`);
    if (btn) btn.classList.toggle('wishlisted', idx === -1);
}

function renderWishlistPage() {
    const el = document.getElementById('wishlistContent');
    if (!el) return;
    const user = state.currentUser;
    const wl = user ? getWishlist().filter(w => w.userId === user) : [];
    const follows = user ? getFollows().filter(f => f.userId === user) : [];
    const vendors = getVendors();

    const wlHTML = wl.length ? wl.map(w => {
        const thumb = w.photo
            ? `<img src="${w.photo}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">`
            : w.emoji;
        const priceLabel = w.price ? `GH₵ ${w.price}` : 'Contact for pricing';
        return `
        <div class="wl-item">
            <div class="wl-item-img">${thumb}</div>
            <div style="flex:1;">
                <div style="font-size:14px;font-weight:600;color:var(--text-dark);">${escHtml(w.productName)}</div>
                <div style="font-size:12px;color:var(--text-muted);">${escHtml(w.vendorName)}</div>
                <div style="font-size:13px;font-weight:700;color:var(--primary-blue);margin-top:2px;">${priceLabel}</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;">
                <button onclick="openVendor('${w.vendorId}')" style="font-size:12px;font-weight:600;color:var(--light-blue);background:none;border:none;cursor:pointer;padding:0;">View Store →</button>
                <button onclick="removeFromWishlist('${w.productId}')" style="font-size:12px;color:var(--text-muted);background:none;border:none;cursor:pointer;padding:0;">Remove</button>
            </div>
        </div>`;
    }).join('') : `<div class="empty-state"><div class="empty-icon">❤️</div><h3>No saved items</h3><p>Tap the ❤️ on any product to save it here.</p></div>`;

    const followedVendors = follows.map(f => vendors.find(v => v.id === f.vendorId)).filter(Boolean);
    const followHTML = followedVendors.length ? followedVendors.map(v => {
        const img = v.logo
            ? `<img src="${v.logo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.style.display='none'">`
            : `<span style="font-size:26px;">${v.emoji}</span>`;
        return `
        <div style="display:flex;align-items:center;gap:12px;background:var(--white);border-radius:var(--radius);padding:12px;margin-bottom:10px;box-shadow:var(--shadow);">
            <div style="width:48px;height:48px;border-radius:50%;background:var(--bg-light);border:2px solid var(--border);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;">${img}</div>
            <div style="flex:1;">
                <div style="font-size:14px;font-weight:600;color:var(--text-dark);">${escHtml(v.name)}</div>
                <div style="font-size:12px;color:var(--text-muted);">${escHtml(v.category)}</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;">
                <button onclick="openVendor('${v.id}')" style="font-size:12px;font-weight:600;color:var(--light-blue);background:none;border:none;cursor:pointer;padding:0;">Visit →</button>
                <button onclick="toggleFollow('${v.id}'); renderWishlistPage();" style="font-size:12px;color:var(--text-muted);background:none;border:none;cursor:pointer;padding:0;">Unfollow</button>
            </div>
        </div>`;
    }).join('') : '';

    el.innerHTML = `
        <div style="padding:16px;">
            <div style="font-size:15px;font-weight:700;color:var(--text-dark);margin-bottom:12px;">Saved Products</div>
            ${wlHTML}
            ${followedVendors.length ? `
            <div style="font-size:15px;font-weight:700;color:var(--text-dark);margin:20px 0 12px;">Followed Stores</div>
            ${followHTML}` : ''}
            ${!user ? `<div class="empty-state"><div class="empty-icon">🔒</div><h3>Sign in first</h3><p>Sign in as a customer to use your wishlist.</p></div>` : ''}
        </div>`;
}

function removeFromWishlist(productId) {
    let wl = getWishlist();
    wl = wl.filter(w => !(w.userId === state.currentUser && w.productId === productId));
    saveWishlist(wl);
    renderWishlistPage();
    showToast('Removed from wishlist');
}

// ── FOLLOWS ──
function getFollows()    { return safeGetJSON('acm_follows', []); }
function saveFollows(f)  { safeSetJSON('acm_follows', f); }

function isFollowing(vendorId) {
    if (!state.currentUser) return false;
    return getFollows().some(f => f.userId === state.currentUser && f.vendorId === vendorId);
}

function getFollowers(vendorId) {
    return getFollows().filter(f => f.vendorId === vendorId).map(f => f.userId);
}

function toggleFollow(vendorId) {
    if (!requireCustomer('Sign in to follow this store')) return;
    const vendorName = (getVendors().find(v => v.id === vendorId) || {}).name || 'store';
    let follows = getFollows();
    const idx = follows.findIndex(f => f.userId === state.currentUser && f.vendorId === vendorId);
    if (idx !== -1) {
        follows.splice(idx, 1);
        saveFollows(follows);
        showToast('Unfollowed');
    } else {
        follows.push({ userId: state.currentUser, vendorId });
        saveFollows(follows);
        showToast(`Following ${vendorName} ✅`);
    }
    const btn = document.getElementById('followBtn');
    if (btn) {
        const nowFollowing = isFollowing(vendorId);
        btn.textContent = nowFollowing ? '✓ Following' : '+ Follow';
        btn.classList.toggle('following', nowFollowing);
    }
}

function notifyFollowers(vendorId, icon, title, text) {
    const followers = getFollowers(vendorId);
    followers.forEach(userId => addNotification(icon, title, text, { type: 'vendor', id: vendorId }, userId, null));
}

// ── RECENTLY VIEWED ──
function trackRecentlyViewed(vendorId) {
    let rv = safeGetJSON('acm_recently_viewed', []);
    rv = rv.filter(id => id !== vendorId);
    rv.unshift(vendorId);
    rv = rv.slice(0, 5);
    localStorage.setItem('acm_recently_viewed', JSON.stringify(rv));
}

// V2a — categories live here now (chip row removed). Shown when the
// search bar is focused, alongside any recently-viewed vendors.
const HOME_CATEGORIES = ['All','Food','Drinks','Fashion','Beads & Jewelry','Beauty & Hair','Electronics','Services','Snacks','Rentals'];

function showRVDropdown() {
    const dropdown = document.getElementById('rvDropdown');
    if (!dropdown) return;

    // ── Browse Categories (always shown) ──
    const active = state.activeCategory || 'All';
    const catHTML = `<div class="rv-dropdown-label">BROWSE CATEGORIES</div>
        <div class="cat-dd-grid">` +
        HOME_CATEGORIES.map(c =>
            `<button class="cat-dd-chip${c === active ? ' active' : ''}" onmousedown="event.preventDefault();pickCategory('${c.replace(/'/g, "\\'")}')">${c}</button>`
        ).join('') + `</div>`;

    // ── Recently Viewed (only if any) ──
    let rvHTML = '';
    const rv = safeGetJSON('acm_recently_viewed', []);
    if (rv.length) {
        const vendors = getVendors();
        const items = rv.map(id => vendors.find(v => v.id === id)).filter(Boolean);
        if (items.length) {
            rvHTML = `<div class="rv-dropdown-label" style="margin-top:4px;">RECENTLY VIEWED</div>` +
                items.map(v => {
                    const img = v.logo
                        ? `<img src="${v.logo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.style.display='none'">`
                        : `<span style="font-size:18px;">${v.emoji}</span>`;
                    return `<div class="rv-dropdown-item" onmousedown="openVendor('${v.id}')">
                        <div class="rv-dropdown-icon">${img}</div>
                        <div>
                            <div style="font-size:13px;font-weight:600;color:var(--text-dark);">${escHtml(v.name)}</div>
                            <div style="font-size:12px;color:var(--text-muted);">${escHtml(v.category)}</div>
                        </div>
                    </div>`;
                }).join('');
        }
    }

    dropdown.innerHTML = catHTML + rvHTML;
    dropdown.classList.add('open');
    document.addEventListener('click', hideRVDropdownOutside);
}

// Filter the home page to a single category (or show everything for 'All').
function pickCategory(cat) {
    state.activeCategory = cat;
    hideRVDropdown();
    const input = document.getElementById('searchInput');
    if (input) { input.value = ''; input.blur(); }

    if (cat === 'All') {
        document.getElementById('searchResultsSection').classList.add('hidden');
        _setHomeSectionsVisible(true);
        renderSponsoredSection();
        savePageState('home');
        return;
    }

    _setHomeSectionsVisible(false);
    document.getElementById('searchResultsSection').classList.remove('hidden');

    const vendors = getPublicVendors().filter(v => v.category === cat);
    const countEl = document.getElementById('searchCount');
    if (countEl) countEl.textContent = vendors.length;
    document.getElementById('noResults').classList.toggle('hidden', vendors.length > 0);
    const grid = document.getElementById('searchResultsGrid');
    if (grid) {
        grid.innerHTML = vendors.length
            ? `<div class="vendor-grid">${vendors.map(v => vendorCardHTML(v)).join('')}</div>`
            : '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideRVDropdown() {
    const dropdown = document.getElementById('rvDropdown');
    if (dropdown) dropdown.classList.remove('open');
    document.removeEventListener('click', hideRVDropdownOutside);
}

function hideRVDropdownOutside(e) {
    if (!e.target.closest('.search-bar')) hideRVDropdown();
}

// ── SAVE SEARCH ──
function getSavedSearches() { return safeGetJSON('acm_saved_searches', []); }
function saveSavedSearches(arr) { safeSetJSON('acm_saved_searches', arr); }

function toggleSaveSearch() {
    const q = document.getElementById('searchInput').value.trim();
    if (!q) return;
    let saved = getSavedSearches();
    const idx = saved.findIndex(s => s.toLowerCase() === q.toLowerCase());
    if (idx !== -1) {
        saved.splice(idx, 1);
    } else {
        saved.unshift(q);
        if (saved.length > 5) saved = saved.slice(0, 5);
    }
    saveSavedSearches(saved);
    updateSaveSearchBtn();
    renderSavedChips();
}

function updateSaveSearchBtn() {
    const q = document.getElementById('searchInput')?.value.trim() || '';
    const btn = document.getElementById('saveSearchBtn');
    if (!btn) return;
    if (!q) { btn.style.display = 'none'; return; }
    btn.style.display = 'flex';
    const saved = getSavedSearches();
    const isSaved = saved.some(s => s.toLowerCase() === q.toLowerCase());
    btn.classList.toggle('saved', isSaved);
    btn.innerHTML = isSaved ? '&#9829;' : '&#9825;'; // filled vs outline heart
    btn.title = isSaved ? 'Remove saved search' : 'Save this search';
}

function renderSavedChips() {
    const strip = document.getElementById('savedSearchesStrip');
    if (!strip) return;
    const saved = getSavedSearches();
    if (!saved.length) { strip.classList.add('hidden'); return; }
    strip.classList.remove('hidden');
    strip.innerHTML = `<span class="saved-searches-label">Saved</span>` +
        saved.map(q => `
            <span class="saved-search-chip">
                <span onclick="runSavedSearch('${q.replace(/'/g,"\\'")}')"> ${q}</span>
                <button class="chip-del" onclick="deleteSavedSearch('${q.replace(/'/g,"\\'")}')">&#x2715;</button>
            </span>`).join('');
}

function runSavedSearch(q) {
    document.getElementById('searchInput').value = q;
    handleSearch();
    updateSaveSearchBtn();
}

function deleteSavedSearch(q) {
    let saved = getSavedSearches().filter(s => s !== q);
    saveSavedSearches(saved);
    renderSavedChips();
    updateSaveSearchBtn();
}

// ── PAGE PERSISTENCE ──
function savePageState(page, extra) {
    safeSetJSON('acm_last_page', Object.assign({ page }, extra || {}));
}

function restoreLastPage() {
    renderHomePage();
    try {
        const last = safeGetJSON('acm_last_page', null);
        if (!last || last.page === 'home') return;
        if (last.page === 'vendor' && last.vendorId) {
            openVendor(last.vendorId);
        } else if (last.page === 'product' && last.vendorId && last.productId) {
            openProduct(last.vendorId, last.productId);
        } else if (last.page === 'wishlist') {
            showPage('wishlist'); renderWishlistPage();
        } else if (last.page === 'search' && last.query) {
            document.getElementById('searchInput').value = last.query;
            handleSearch();
        } else if (last.page === 'cart') {
            showPage('cart'); renderCart();
        } else if (last.page === 'notifications') {
            showPage('notifications'); renderNotifications();
        } else if (last.page === 'announcements') {
            showPage('announcements'); loadAllAnnouncements();
        } else {
            const el = document.getElementById('page-' + last.page);
            if (el) showPage(last.page);
        }
    } catch(e) {
        console.warn('ACM: could not restore last page', e);
    }
}

// ══════════════════════════════════════════════════════
// PRODUCT DETAIL PAGE
// ══════════════════════════════════════════════════════
function getProductPhotos(p) {
    if (p.photos && p.photos.length) return p.photos;
    if (p.photo) return [p.photo];
    return [];
}

function productCardHTML(v, p) {
    const oos = p.stock === 0;
    const isConsult = p.isConsult || v.isConsult;
    const lowStock = !isConsult && !oos && p.stock < 3;
    const photos = getProductPhotos(p);
    const imgContent = photos.length
        ? `<img src="${photos[0]}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">`
        : p.emoji;
    const wishlisted = isWishlisted(p.id);
    const wishBtn = !isConsult ? `<button class="wish-btn ${wishlisted ? 'wishlisted' : ''}" data-pid="${p.id}" onclick="event.stopPropagation();toggleWishlist('${v.id}','${p.id}')">♥</button>` : '';
    const priceHTML = isConsult
        ? `<div class="product-price" style="color:var(--primary-red);font-size:13px;">Contact for pricing</div>`
        : `<div class="product-price">GH₵ ${p.price}${p.isNegotiable ? '<span class="negotiable-badge">Negotiable</span>' : ''}</div>`;
    const stockHTML = !isConsult
        ? `<div class="product-stock ${lowStock ? 'low-stock-text' : ''}">${oos ? 'Out of stock' : lowStock ? `⚠️ Only ${p.stock} left!` : `${p.stock} in stock`}</div>`
        : '';
    return `
    <div class="product-card" onclick="openProduct('${v.id}','${p.id}')">
        <div class="product-img" style="${photos.length ? 'padding:0;overflow:hidden;' : ''}">
            ${imgContent}
            ${oos ? '<div class="out-of-stock-overlay">OUT OF STOCK</div>' : ''}
            ${p.isBoosted ? '<div class="boost-badge">⭐ Featured</div>' : ''}
            ${wishBtn}
        </div>
        <div class="product-body">
            <div class="product-name">${escHtml(p.name)}</div>
            <div class="product-desc">${escHtml(p.description)}</div>
            ${priceHTML}${stockHTML}
        </div>
    </div>`;
}

function renderVendorProducts(v, filterQuery = '') {
    const allProducts = v.products || [];
    if (!allProducts.length) return `<div style="text-align:center;padding:24px;color:var(--text-muted);">
        <div style="font-size:32px;margin-bottom:8px;">🏷️</div>
        <p style="font-size:13px;">No products listed yet.</p></div>`;
    // EC2.5 — apply search filter if provided
    let filtered = filterQuery
        ? allProducts.filter(p => p.name.toLowerCase().includes(filterQuery.toLowerCase()) || (p.description || '').toLowerCase().includes(filterQuery.toLowerCase()))
        : allProducts;
    if (!filtered.length) return `<div style="text-align:center;padding:24px;color:var(--text-muted);font-size:13px;">No products match "<strong>${escHtml(filterQuery)}</strong>"</div>`;
    // EC2.4 — boosted first, then in-stock, then OOS at the bottom
    const boosted = filtered.filter(p => p.isBoosted);
    const inStock = filtered.filter(p => !p.isBoosted && (p.isConsult || p.isConsultation || p.stock > 0));
    const oos     = filtered.filter(p => !p.isBoosted && !p.isConsult && !p.isConsultation && p.stock === 0);
    const products = [...boosted, ...inStock, ...oos];
    // Bundle deals section
    const bundles = v.bundles || [];
    let bundleHTML = '';
    if (bundles.length) {
        const bundleCards = bundles.map(b => {
            const pA = allProducts.find(p => p.id === b.productAId);
            const pB = allProducts.find(p => p.id === b.productBId);
            if (!pA || !pB) return '';
            return `
            <div class="bundle-deal-card" style="margin-bottom:8px;">
                <div style="font-size:12px;font-weight:700;color:#6d28d9;margin-bottom:4px;">🎁 Bundle Deal — ${b.discountPct}% off</div>
                <div style="font-size:13px;font-weight:600;color:var(--text-dark);margin-bottom:8px;">${escHtml(pA.name)} + ${escHtml(pB.name)}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <div style="font-size:12px;color:var(--text-muted);">GH₵${pA.price} + GH₵${pB.price} → <strong style="color:#6d28d9;">GH₵${Math.round((pA.price + pB.price) * (1 - b.discountPct/100))}</strong></div>
                    <button onclick="addBundleToCart('${v.id}','${b.id}')" style="background:#6d28d9;color:white;border:none;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;">Add Bundle 🛒</button>
                </div>
            </div>`;
        }).filter(Boolean).join('');
        if (bundleCards) bundleHTML = `<div class="deals-section"><div class="deals-section-title">Bundle Deals</div>${bundleCards}</div>`;
    }
    const sections = v.sections || [];
    let productHTML;
    if (!sections.length) {
        productHTML = `<div class="product-grid">${products.map(p => productCardHTML(v, p)).join('')}</div>`;
    } else {
        const grouped = {};
        const unsectioned = [];
        products.forEach(p => {
            if (p.sectionId && sections.find(s => s.id === p.sectionId)) {
                if (!grouped[p.sectionId]) grouped[p.sectionId] = [];
                grouped[p.sectionId].push(p);
            } else { unsectioned.push(p); }
        });
        productHTML = '';
        sections.forEach(s => {
            const prods = grouped[s.id] || [];
            if (!prods.length) return;
            productHTML += `<div class="shop-section-header">${escHtml(s.name)}</div><div class="product-grid">${prods.map(p => productCardHTML(v, p)).join('')}</div>`;
        });
        if (unsectioned.length) {
            if (Object.keys(grouped).length) productHTML += `<div class="shop-section-header">Other</div>`;
            productHTML += `<div class="product-grid">${unsectioned.map(p => productCardHTML(v, p)).join('')}</div>`;
        }
    }
    return bundleHTML + productHTML;
}

// EC2.5 — real-time in-store product search
function filterStoreProducts(vendorId) {
    const input = document.getElementById('storeSearch_' + vendorId);
    const grid  = document.getElementById('storeProductsGrid_' + vendorId);
    if (!input || !grid) return;
    const query = input.value.trim();
    const v = getVendors().find(x => x.id === vendorId);
    if (!v) return;
    grid.innerHTML = renderVendorProducts(v, query);
}

function openProduct(vendorId, productId) {
    const vendors = getVendors();
    const v = vendors.find(x => x.id === vendorId);
    if (!v) return;
    const p = (v.products || []).find(x => x.id === productId);
    if (!p) return;
    state.currentProductVendorId = vendorId;
    state.currentProductId = productId;
    state.galleryIndex = 0;
    state.reviewStarSelected = 0;
    savePageState('product', { vendorId, productId });
    document.getElementById('productPageTitle').textContent = p.name;
    renderProductPage(v, p);
    showPage('product');
}

function renderProductPage(v, p) {
    const isConsult = p.isConsult || v.isConsult;
    const oos = p.stock === 0;
    const lowStock = !isConsult && !oos && p.stock < 3;
    const photos = getProductPhotos(p);

    const galleryHTML = photos.length ? `
    <div class="product-gallery">
        ${photos.map((ph, i) => `<div class="gallery-slide ${i === 0 ? 'active' : ''}" style="background-image:url('${ph}');"></div>`).join('')}
        ${photos.length > 1 ? `
        <button class="gallery-nav-btn prev" onclick="changeGalleryPhoto(-1)">&#8249;</button>
        <button class="gallery-nav-btn next" onclick="changeGalleryPhoto(1)">&#8250;</button>
        <div class="gallery-dots">${photos.map((_, i) => `<span class="gallery-dot ${i === 0 ? 'active' : ''}" onclick="goToGalleryPhoto(${i})"></span>`).join('')}</div>` : ''}
    </div>` : `<div class="gallery-emoji">${p.emoji || '📦'}</div>`;

    const colors = p.variants?.colors || [];
    const sizes = p.variants?.sizes || [];
    const colorHTML = colors.length ? `
    <div class="product-option-row">
        <label class="product-option-label">COLOR</label>
        <select class="product-option-select" id="pdColorSelect">
            <option value="">Select colour</option>
            ${colors.map(c => `<option value="${escHtml(c)}">${escHtml(c)}</option>`).join('')}
        </select>
    </div>` : '';
    const sizeHTML = sizes.length ? `
    <div class="product-option-row">
        <label class="product-option-label">SIZE</label>
        <select class="product-option-select" id="pdSizeSelect">
            <option value="">Select size</option>
            ${sizes.map(s => `<option value="${escHtml(s)}">${escHtml(s)}</option>`).join('')}
        </select>
    </div>` : '';

    const ctaHTML = isConsult
        ? `<a class="btn-primary" style="display:block;text-align:center;text-decoration:none;" href="https://wa.me/${normalizeWhatsApp(v.whatsapp)}" target="_blank">Contact Vendor on WhatsApp</a>`
        : oos
            ? `<button onclick="addProductToCart('${v.id}','${p.id}',true)" class="btn-primary" style="background:#64748b;">Pre-order Next Batch</button>`
            : `<button onclick="addProductToCart('${v.id}','${p.id}',false)" class="btn-primary">Add to Cart</button>`;

    const stockTag = !isConsult ? `<div style="font-size:12px;font-weight:600;color:${oos?'var(--primary-red)':lowStock?'#ca8a04':'var(--text-muted)'};">${oos?'Out of stock':lowStock?`⚠️ Only ${p.stock} left!`:`${p.stock} in stock`}</div>` : '';

    const wishlisted = isWishlisted(p.id);

    // Bundle deals for this product
    const bundles = getBundlesForProduct(v.id, p.id);
    const bundleCTAHTML = bundles.length ? bundles.map(b => {
        const otherId = b.productAId === p.id ? b.productBId : b.productAId;
        const other = (v.products || []).find(x => x.id === otherId);
        if (!other) return '';
        const bundlePrice = Math.round((p.price + other.price) * (1 - b.discountPct / 100));
        return `
        <div class="bundle-deal-card" style="margin-top:10px;">
            <div style="font-size:12px;font-weight:700;color:#6d28d9;margin-bottom:4px;">🎁 BUNDLE DEAL — ${b.discountPct}% OFF</div>
            <div style="font-size:13px;font-weight:600;color:var(--text-dark);margin-bottom:6px;">Bundle with <span style="color:#6d28d9;">${escHtml(other.name)}</span></div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <div style="font-size:13px;color:var(--text-muted);">Together: <strong style="color:#6d28d9;">GH₵${bundlePrice}</strong> <span style="text-decoration:line-through;font-size:12px;">GH₵${p.price + other.price}</span></div>
                <button onclick="addBundleToCart('${v.id}','${b.id}')" style="background:#6d28d9;color:white;border:none;padding:7px 12px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;">Add Bundle 🛒</button>
            </div>
        </div>`;
    }).filter(Boolean).join('') : '';

    document.getElementById('productPageContent').innerHTML = `
        ${galleryHTML}
        <div style="padding:16px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:6px;">
                <div style="flex:1;">
                    <h2 style="font-size:19px;font-weight:700;color:var(--text-dark);">${escHtml(p.name)}</h2>
                </div>
                <button class="wish-btn ${wishlisted?'wishlisted':''}" data-pid="${p.id}" onclick="toggleWishlist('${v.id}','${p.id}')" style="position:static;background:var(--bg-light);width:36px;height:36px;flex-shrink:0;">♥</button>
            </div>
            ${!isConsult ? `<div style="font-size:22px;font-weight:800;color:var(--primary-blue);margin-bottom:2px;">GH₵ ${p.price}${p.isNegotiable ? '<span class="negotiable-badge" style="font-size:12px;font-weight:700;vertical-align:middle;margin-left:6px;">Negotiable</span>' : ''}</div>` : `<div style="font-size:14px;color:var(--primary-red);font-weight:600;margin-bottom:4px;">Contact for pricing</div>`}
            ${stockTag}
            ${colorHTML}${sizeHTML}
            <div style="margin-top:4px;">${ctaHTML}</div>
            ${bundleCTAHTML}
            ${p.description ? `<p style="font-size:14px;color:var(--text-muted);margin:12px 0 4px;line-height:1.6;">${escHtml(p.description)}</p>` : ''}
            <button onclick="openVendor('${v.id}')" style="width:100%;margin-top:10px;background:transparent;border:1.5px solid var(--border);color:var(--text-dark);padding:11px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">Visit ${escHtml(v.name)} →</button>
        </div>
        <div style="padding:0 16px 16px;">
            <div style="font-size:16px;font-weight:700;color:var(--text-dark);margin-bottom:12px;">Reviews</div>
            <div id="productReviewsArea">${renderProductReviewsHTML(v.id, p.id)}</div>
        </div>
        ${getRecommendationsHTML(v.category, v.id)}`;
}

function changeGalleryPhoto(dir) {
    const p = getCurrentProduct();
    if (!p) return;
    const photos = getProductPhotos(p);
    if (photos.length < 2) return;
    state.galleryIndex = (state.galleryIndex + dir + photos.length) % photos.length;
    updateGalleryDisplay();
}
function goToGalleryPhoto(idx) { state.galleryIndex = idx; updateGalleryDisplay(); }
function updateGalleryDisplay() {
    document.querySelectorAll('.gallery-slide').forEach((s, i) => s.classList.toggle('active', i === state.galleryIndex));
    document.querySelectorAll('.gallery-dot').forEach((d, i) => d.classList.toggle('active', i === state.galleryIndex));
}
function getCurrentProduct() {
    const v = getVendors().find(x => x.id === state.currentProductVendorId);
    return v ? (v.products || []).find(x => x.id === state.currentProductId) : null;
}

function addProductToCart(vendorId, productId, isPreorder) {
    const v = getVendors().find(x => x.id === vendorId);
    const p = v?.products.find(x => x.id === productId);
    if (!v || !p) return;
    const colors = p.variants?.colors || [];
    const sizes = p.variants?.sizes || [];
    const colorSel = document.getElementById('pdColorSelect');
    const sizeSel = document.getElementById('pdSizeSelect');
    if (colors.length && colorSel && !colorSel.value) { showToast('Please select a colour'); return; }
    if (sizes.length && sizeSel && !sizeSel.value) { showToast('Please select a size'); return; }
    const variant = (colors.length || sizes.length) ? { color: colorSel?.value || null, size: sizeSel?.value || null } : null;
    const variantStr = variant ? JSON.stringify(variant) : null;
    // Check if item already in cart — increment qty instead of duplicating
    const existing = state.cart.find(i => i.productId === productId && i.variantStr === variantStr);
    if (existing) {
        if (!isPreorder && existing.qty >= p.stock) { showToast('Max stock reached'); return; }
        existing.qty++;
        safeSetJSON('acm_cart', state.cart);
        updateCartBadge();
        showToast(p.name + ' qty updated 🛒');
        return;
    }
    const photos = getProductPhotos(p);
    state.cart.push({ cartItemId: 'ci' + Date.now(), vendorId: v.id, vendorName: v.name, productId: p.id, productName: p.name, price: p.price, qty: 1, emoji: p.emoji, photo: photos[0] || null, variant, variantStr, isPreorder: !!isPreorder });
    safeSetJSON('acm_cart', state.cart);
    updateCartBadge();
    showToast('Added to cart! 🛒');
    // Remove from wishlist if there
    let wl = getWishlist();
    const wi = wl.findIndex(w => w.userId === state.currentUser && w.productId === productId);
    if (wi !== -1) { wl.splice(wi, 1); saveWishlist(wl); }
}

// ── PRODUCT REVIEWS ──
function getProductReviews()   { return safeGetJSON('acm_product_reviews', []); }
function saveProductReviews(r) { safeSetJSON('acm_product_reviews', r); }

function canLeaveReview(vendorId, productId) {
    if (!state.currentUser) return false;
    const orders = getOrders();
    const ordered = orders.some(o => o.vendorId === vendorId && o.customerName === state.currentUser && o.status === 'fulfilled' && o.items.some(i => i.productId === productId));
    if (!ordered) return false;
    return !getProductReviews().some(r => r.productId === productId && r.userId === state.currentUser);
}

function renderProductReviewsHTML(vendorId, productId) {
    const reviews = getProductReviews().filter(r => r.productId === productId);
    const canLeave = canLeaveReview(vendorId, productId);
    const formHTML = canLeave ? `
    <div style="background:var(--bg-light);border-radius:10px;padding:12px;margin-bottom:14px;">
        <div style="font-size:13px;font-weight:600;color:var(--text-dark);margin-bottom:8px;">Write a Review</div>
        <div style="display:flex;gap:6px;margin-bottom:10px;" id="reviewStarsRow">
            ${[1,2,3,4,5].map(n => `<span style="font-size:28px;cursor:pointer;color:#d1d5db;line-height:1;" onclick="setReviewStar(${n})" data-star="${n}">★</span>`).join('')}
        </div>
        <textarea id="reviewTextInput" placeholder="Share your experience (optional)" maxlength="400" style="width:100%;border:1.5px solid var(--border);border-radius:8px;padding:10px;font-size:13px;font-family:inherit;background:var(--white);color:var(--text-dark);resize:none;height:72px;outline:none;"></textarea>
        <button onclick="submitProductReview('${vendorId}','${productId}')" style="margin-top:8px;width:100%;background:var(--primary-blue);color:white;border:none;padding:11px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">Submit Review</button>
    </div>` : (!state.currentUser ? `<div style="font-size:13px;color:var(--text-muted);text-align:center;padding:8px 0 14px;">Sign in and order this product to leave a review.</div>` : '');
    const reviewsHTML = reviews.length ? reviews.map(r => `
    <div class="product-review-item">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <span style="font-size:13px;font-weight:600;color:var(--text-dark);">${escHtml(r.userId)}</span>
            <span style="font-size:14px;">${renderStars(r.rating, 14)}</span>
        </div>
        ${r.text ? `<div style="font-size:13px;color:var(--text-muted);line-height:1.5;">${escHtml(r.text)}</div>` : ''}
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">${r.date || ''}</div>
    </div>`).join('') : `<div style="font-size:13px;color:var(--text-muted);text-align:center;padding:12px 0;">No reviews yet.</div>`;
    return formHTML + reviewsHTML;
}

function setReviewStar(n) {
    state.reviewStarSelected = n;
    document.querySelectorAll('#reviewStarsRow [data-star]').forEach(s => {
        s.style.color = parseInt(s.dataset.star) <= n ? '#f59e0b' : '#d1d5db';
    });
}

function submitProductReview(vendorId, productId) {
    if (!requireCustomer('Sign in to leave a review')) return;
    if (!state.reviewStarSelected) { showToast('Please tap a star to rate'); return; }
    const text = document.getElementById('reviewTextInput')?.value.trim() || '';
    getProductReviews(); // ensure array exists
    const reviews = getProductReviews();
    reviews.push({ id: 'pr' + Date.now(), productId, vendorId, userId: state.currentUser, rating: state.reviewStarSelected, text, date: new Date().toLocaleDateString() });
    saveProductReviews(reviews);
    state.reviewStarSelected = 0;
    showToast('Review submitted! Thank you ⭐');
    document.getElementById('productReviewsArea').innerHTML = renderProductReviewsHTML(vendorId, productId);
}

// ── MULTI-PHOTO UPLOAD ──
function previewProductPhotos(input) {
    const files = Array.from(input.files);
    if (!files.length) return;
    const remaining = 4 - pendingPhotos.length;
    if (remaining <= 0) { showToast('Maximum 4 photos'); return; }
    // SP1.2 — compress product photos before storing
    const toProcess = files.slice(0, remaining);
    let done = 0;
    toProcess.forEach(f => {
        compressImage(f, 800, 0.78)
            .then(dataUrl => { pendingPhotos.push(dataUrl); })
            .catch(e => showToast(e.message))
            .finally(() => { done++; if (done === toProcess.length) renderPhotoThumbs(); });
    });
    input.value = '';
}
function renderPhotoThumbs() {
    const el = document.getElementById('vpm-photo-thumbs');
    if (!el) return;
    el.innerHTML = pendingPhotos.map((ph, i) => `
        <div class="photo-thumb">
            <img src="${ph}">
            <button type="button" class="remove-photo-btn" onclick="removeProductPhoto(${i})">✕</button>
        </div>`).join('') +
        (pendingPhotos.length < 4 ? `<div class="add-photo-thumb" onclick="document.getElementById('vpm-photos').click()">📷</div>` : '');
}
function removeProductPhoto(idx) { pendingPhotos.splice(idx, 1); renderPhotoThumbs(); }

// ── SHOP SECTIONS ──
function addShopSection() {
    const name = prompt('Section name (e.g. "Snacks", "Accessories"):');
    if (!name || !name.trim()) return;
    const vendors = getVendors();
    const vIdx = vendors.findIndex(x => x.id === state.loggedVendor.id);
    if (vIdx === -1) return;
    if (!vendors[vIdx].sections) vendors[vIdx].sections = [];
    if (vendors[vIdx].sections.length >= 8) { showToast('Maximum 8 sections'); return; }
    vendors[vIdx].sections.push({ id: 's' + Date.now(), name: name.trim() });
    saveVendors(vendors);
    state.loggedVendor = vendors[vIdx];
    notifyFollowers(vendors[vIdx].id, '🗂️', `${vendors[vIdx].name} organised their shop`, `${vendors[vIdx].name} just added a new section — "${name.trim()}". Check out what's new!`);
    renderMyStorePage();
    showToast('Section added!');
}
function deleteShopSection(sectionId) {
    if (!confirm('Remove this section? Products in it become unsectioned.')) return;
    const vendors = getVendors();
    const vIdx = vendors.findIndex(x => x.id === state.loggedVendor.id);
    if (vIdx === -1) return;
    vendors[vIdx].sections = (vendors[vIdx].sections || []).filter(s => s.id !== sectionId);
    vendors[vIdx].products.forEach(p => { if (p.sectionId === sectionId) p.sectionId = null; });
    saveVendors(vendors);
    state.loggedVendor = vendors[vIdx];
    renderMyStorePage();
    showToast('Section removed');
}

// ═══════════════════════════════════════════
// PHASE E4: SALES & PROMOTIONS
// ═══════════════════════════════════════════

// ── PROMO CODES ──
let editingPromoId = null;

function renderDealsTab() {
    if (!state.loggedVendor) return;
    const v = state.loggedVendor;
    const codes = v.promoCodes || [];
    const bundles = v.bundles || [];
    const products = (v.products || []).filter(p => !p.isConsult);

    // Promo codes section
    const promoEl = document.getElementById('vd-promo-section');
    if (promoEl) {
        promoEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <div style="font-size:15px;font-weight:700;color:var(--text-dark);">🏷️ Promo Codes</div>
            <button onclick="openPromoCodeModal(null)" style="background:var(--primary-red);color:white;border:none;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">+ New Code</button>
        </div>
        ${codes.length ? codes.map(c => {
            const expired = new Date(c.expiry) < new Date();
            return `
            <div style="background:var(--bg-light);border:1px solid var(--border);border-radius:10px;padding:10px 14px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <div style="font-size:14px;font-weight:700;color:var(--text-dark);letter-spacing:1px;">${escHtml(c.code)}</div>
                    <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">${c.discountPct}% off · Expires ${new Date(c.expiry).toLocaleDateString()}${expired ? ' <span style="color:var(--primary-red);font-weight:600;">· Expired</span>' : ''}</div>
                </div>
                <div style="display:flex;gap:6px;">
                    <button onclick="openPromoCodeModal('${c.id}')" style="font-size:12px;color:var(--light-blue);background:none;border:none;cursor:pointer;font-weight:600;">Edit</button>
                    <button onclick="deletePromoCode('${c.id}')" style="font-size:12px;color:var(--primary-red);background:none;border:none;cursor:pointer;font-weight:600;">Delete</button>
                </div>
            </div>`;
        }).join('') : '<p style="font-size:13px;color:var(--text-muted);">No promo codes yet. Create one to offer discounts to customers.</p>'}`;
    }

    // Bundle deals section
    const bundleEl = document.getElementById('vd-bundle-section');
    if (bundleEl) {
        bundleEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <div style="font-size:15px;font-weight:700;color:var(--text-dark);">🎁 Bundle Deals</div>
            ${products.length >= 2 ? `<button onclick="openBundleModal()" style="background:var(--primary-red);color:white;border:none;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">+ New Bundle</button>` : ''}
        </div>
        ${products.length < 2 ? '<p style="font-size:13px;color:var(--text-muted);">You need at least 2 non-consultation products to create bundle deals.</p>' :
            bundles.length ? bundles.map(b => {
                const pA = products.find(p => p.id === b.productAId);
                const pB = products.find(p => p.id === b.productBId);
                if (!pA || !pB) return '';
                return `
                <div class="bundle-deal-card" style="display:flex;justify-content:space-between;align-items:center;">
                    <div>
                        <div style="font-size:13px;font-weight:700;color:var(--text-dark);">${escHtml(pA.name)} + ${escHtml(pB.name)}</div>
                        <div style="font-size:12px;color:#6d28d9;margin-top:2px;">${b.discountPct}% off when ordered together</div>
                    </div>
                    <button onclick="deleteBundleDeal('${b.id}')" style="font-size:12px;color:var(--primary-red);background:none;border:none;cursor:pointer;font-weight:600;">Remove</button>
                </div>`;
            }).join('') : '<p style="font-size:13px;color:var(--text-muted);">No bundles yet. Bundle two products together to offer a discount.</p>'
        }`;
    }
}

function openPromoCodeModal(promoId) {
    editingPromoId = promoId || null;
    const v = state.loggedVendor;
    document.getElementById('promo-modal-title').textContent = promoId ? 'Edit Promo Code' : 'Add Promo Code';
    document.getElementById('pm-code').value = '';
    document.getElementById('pm-discount').value = '';
    document.getElementById('pm-expiry').value = '';
    if (promoId) {
        const c = (v.promoCodes || []).find(x => x.id === promoId);
        if (c) {
            document.getElementById('pm-code').value = c.code;
            document.getElementById('pm-discount').value = c.discountPct;
            document.getElementById('pm-expiry').value = c.expiry;
        }
    }
    document.getElementById('promoCodeModal').classList.remove('hidden');
}

function savePromoCode() {
    const code = document.getElementById('pm-code').value.trim().toUpperCase();
    const discountPct = Number(document.getElementById('pm-discount').value);
    const expiry = document.getElementById('pm-expiry').value;
    if (!code) { showToast('Enter a promo code'); return; }
    if (!discountPct || discountPct < 1 || discountPct > 90) { showToast('Discount must be 1–90%'); return; }
    if (!expiry) { showToast('Set an expiry date'); return; }
    const vendors = getVendors();
    const vIdx = vendors.findIndex(x => x.id === state.loggedVendor.id);
    if (vIdx === -1) return;
    if (!vendors[vIdx].promoCodes) vendors[vIdx].promoCodes = [];
    if (editingPromoId) {
        const cIdx = vendors[vIdx].promoCodes.findIndex(x => x.id === editingPromoId);
        if (cIdx !== -1) vendors[vIdx].promoCodes[cIdx] = { ...vendors[vIdx].promoCodes[cIdx], code, discountPct, expiry };
    } else {
        // Unique code check for this vendor
        if (vendors[vIdx].promoCodes.some(x => x.code === code)) { showToast('Code already exists'); return; }
        vendors[vIdx].promoCodes.push({ id: 'promo' + Date.now(), code, discountPct, expiry });
    }
    saveVendors(vendors);
    state.loggedVendor = vendors[vIdx];
    closeModal('promoCodeModal');
    renderDealsTab();
    // Broadcast new promo to global notifications (new codes only, not edits)
    if (!editingPromoId) {
        const vName = vendors[vIdx].name;
        addNotification('🏷️', `Promo at ${vName}!`,
            `Use code ${code} for ${discountPct}% off — valid until ${expiry}. Order from ${vName} now!`,
            { type: 'vendor', id: vendors[vIdx].id });
    }
    showToast('Promo code saved!');
}

function deletePromoCode(promoId) {
    if (!confirm('Delete this promo code?')) return;
    const vendors = getVendors();
    const vIdx = vendors.findIndex(x => x.id === state.loggedVendor.id);
    if (vIdx === -1) return;
    vendors[vIdx].promoCodes = (vendors[vIdx].promoCodes || []).filter(x => x.id !== promoId);
    saveVendors(vendors);
    state.loggedVendor = vendors[vIdx];
    renderDealsTab();
    showToast('Code deleted');
}

function validatePromoCode(vendorId, codeInput) {
    const vendor = getVendors().find(v => v.id === vendorId);
    if (!vendor || !vendor.promoCodes) return null;
    const code = codeInput.trim().toUpperCase();
    const promo = vendor.promoCodes.find(c => c.code === code);
    if (!promo) return null;
    if (new Date(promo.expiry) < new Date()) return null;
    return promo;
}

// ── BUNDLE DEALS ──
function openBundleModal() {
    const v = state.loggedVendor;
    const products = (v.products || []).filter(p => !p.isConsult);
    const opts = products.map(p => `<option value="${p.id}">${escHtml(p.name)}</option>`).join('');
    document.getElementById('bm-product-a').innerHTML = `<option value="">Select product A</option>${opts}`;
    document.getElementById('bm-product-b').innerHTML = `<option value="">Select product B</option>${opts}`;
    document.getElementById('bm-discount').value = '';
    document.getElementById('bundleModal').classList.remove('hidden');
}

function saveBundleDeal() {
    const productAId = document.getElementById('bm-product-a').value;
    const productBId = document.getElementById('bm-product-b').value;
    const discountPct = Number(document.getElementById('bm-discount').value);
    if (!productAId || !productBId) { showToast('Select both products'); return; }
    if (productAId === productBId) { showToast('Choose two different products'); return; }
    if (!discountPct || discountPct < 1 || discountPct > 90) { showToast('Discount must be 1–90%'); return; }
    const vendors = getVendors();
    const vIdx = vendors.findIndex(x => x.id === state.loggedVendor.id);
    if (vIdx === -1) return;
    if (!vendors[vIdx].bundles) vendors[vIdx].bundles = [];
    // No duplicate pairs
    const dup = vendors[vIdx].bundles.some(b =>
        (b.productAId === productAId && b.productBId === productBId) ||
        (b.productAId === productBId && b.productBId === productAId));
    if (dup) { showToast('This bundle already exists'); return; }
    vendors[vIdx].bundles.push({ id: 'bun' + Date.now(), productAId, productBId, discountPct });
    saveVendors(vendors);
    state.loggedVendor = vendors[vIdx];
    closeModal('bundleModal');
    renderDealsTab();
    showToast('Bundle deal created!');
}

function deleteBundleDeal(bundleId) {
    if (!confirm('Remove this bundle deal?')) return;
    const vendors = getVendors();
    const vIdx = vendors.findIndex(x => x.id === state.loggedVendor.id);
    if (vIdx === -1) return;
    vendors[vIdx].bundles = (vendors[vIdx].bundles || []).filter(x => x.id !== bundleId);
    saveVendors(vendors);
    state.loggedVendor = vendors[vIdx];
    renderDealsTab();
    showToast('Bundle removed');
}

function getBundlesForProduct(vendorId, productId) {
    const vendor = getVendors().find(v => v.id === vendorId);
    if (!vendor || !vendor.bundles) return [];
    return vendor.bundles.filter(b => b.productAId === productId || b.productBId === productId);
}

function addBundleToCart(vendorId, bundleId) {
    const vendor = getVendors().find(v => v.id === vendorId);
    if (!vendor) return;
    const bundle = (vendor.bundles || []).find(b => b.id === bundleId);
    if (!bundle) return;
    const pA = (vendor.products || []).find(p => p.id === bundle.productAId);
    const pB = (vendor.products || []).find(p => p.id === bundle.productBId);
    if (!pA || !pB) return;
    [pA, pB].forEach(p => {
        const already = state.cart.find(c => c.vendorId === vendorId && c.productId === p.id);
        if (!already) {
            const photos = getProductPhotos(p);
            state.cart.push({ cartItemId: 'ci' + Date.now() + p.id, vendorId: vendor.id, vendorName: vendor.name, productId: p.id, productName: p.name, price: p.price, qty: 1, emoji: p.emoji, photo: photos[0] || null, variant: null, isPreorder: false });
        }
    });
    safeSetJSON('acm_cart', state.cart);
    updateCartBadge();
    showToast(`Bundle added! ${bundle.discountPct}% off applied at checkout 🎁`);
}

// ── PRODUCT BOOST ──
function toggleProductBoost(productId) {
    const vendors = getVendors();
    const vIdx = vendors.findIndex(x => x.id === state.loggedVendor.id);
    if (vIdx === -1) return;
    const isCurrentlyBoosted = (vendors[vIdx].products || []).find(p => p.id === productId)?.isBoosted;
    // Un-boost all, then toggle the selected one
    (vendors[vIdx].products || []).forEach(p => { p.isBoosted = false; });
    if (!isCurrentlyBoosted) {
        const p = vendors[vIdx].products.find(x => x.id === productId);
        if (p) p.isBoosted = true;
    }
    saveVendors(vendors);
    state.loggedVendor = vendors[vIdx];
    renderVProducts();
    showToast(isCurrentlyBoosted ? 'Product boost removed' : '⭐ Product boosted to top of your page!');
}

// ── STORE BOOST (paid, admin approves) ──
function requestStoreBoost() {
    if (!state.loggedVendor) return;
    const reqs = getRequests();
    const already = reqs.find(r => r.type === 'boost' && r.vendorId === state.loggedVendor.id && r.status === 'pending');
    if (already) { showToast('You already have a pending boost request'); return; }
    reqs.push({
        id: 'req' + Date.now(),
        type: 'boost',
        from: state.loggedVendor.name,
        vendorId: state.loggedVendor.id,
        message: `${state.loggedVendor.name} is requesting a homepage boost (sponsored listing). Please confirm payment and approve.`,
        date: new Date().toISOString(),
        status: 'pending'
    });
    saveRequests(reqs);
    updateAdminReqBadge();
    addNotification('📤', 'Boost Request Sent', 'Your homepage boost request has been sent to admin. They will contact you to confirm payment.', null, null, state.loggedVendor.id);
    renderBoostSection();
    showToast('Boost request sent to admin!');
}

function removeStoreBoost(vendorId) {
    const vendors = getVendors();
    const vIdx = vendors.findIndex(v => v.id === vendorId);
    if (vIdx === -1) return;
    vendors[vIdx].isBoosted = false;
    saveVendors(vendors);
    addNotification('📢', 'Homepage Boost Removed', 'Your sponsored listing on the homepage has been removed by admin.', null, null, vendorId);
    renderAdminVendors();
    renderHomePage();
    showToast('Boost removed');
}

function renderBoostSection() {
    const el = document.getElementById('vs-boost-section');
    if (!el || !state.loggedVendor) return;
    const v = state.loggedVendor;
    const reqs = getRequests();
    const pendingBoost = reqs.find(r => r.type === 'boost' && r.vendorId === v.id && r.status === 'pending');
    el.innerHTML = `
    <div style="background:var(--bg-light);border:1px solid var(--border);border-radius:10px;padding:10px 14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
                <div style="font-size:10px;font-weight:700;color:var(--text-muted);letter-spacing:0.4px;">HOMEPAGE BOOST</div>
                <div style="font-size:13px;color:var(--text-dark);margin-top:2px;">${v.isBoosted ? 'Active — your store is in the Sponsored section' : pendingBoost ? 'Request pending admin approval' : 'Not active'}</div>
            </div>
            ${!v.isBoosted && !pendingBoost ? `<button onclick="requestStoreBoost()" style="font-size:12px;color:var(--light-blue);background:none;border:none;cursor:pointer;font-weight:600;padding:4px;">Request</button>` : ''}
        </div>
        ${!v.isBoosted && !pendingBoost ? `<div style="font-size:12px;color:var(--text-muted);margin-top:4px;">Paid feature — admin confirms payment before approving.</div>` : ''}
    </div>`;
}

// ── VENDOR: TREND ON CAMPUS (banner request, Phase V2b) ──
// Returns the vendor's currently-live banner, if any.
function vendorActiveBanner(vendorId) {
    return getBanners().find(b => b.vendorBanner && b.linkVendorId === vendorId && b.active !== false);
}

function renderTrendSection() {
    const el = document.getElementById('vs-trend-section');
    if (!el || !state.loggedVendor) return;
    const v = state.loggedVendor;
    const pending = getRequests().find(r => r.type === 'banner' && r.vendorId === v.id && r.status === 'pending');
    const active = vendorActiveBanner(v.id);
    const statusText = active
        ? 'Live — your banner is on the homepage'
        : pending ? 'Request pending admin approval' : 'Not active';
    el.innerHTML = `
    <div style="background:var(--bg-light);border:1px solid var(--border);border-radius:10px;padding:10px 14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
                <div style="font-size:10px;font-weight:700;color:var(--text-muted);letter-spacing:0.4px;">TREND ON CAMPUS</div>
                <div style="font-size:13px;color:var(--text-dark);margin-top:2px;">${statusText}</div>
            </div>
            ${!active && !pending ? `<button onclick="openTrendModal()" style="font-size:12px;color:var(--light-blue);background:none;border:none;cursor:pointer;font-weight:600;padding:4px;">Create banner</button>` : ''}
        </div>
        ${!active && !pending ? `<div style="font-size:12px;color:var(--text-muted);margin-top:4px;">A homepage banner with your store name. Admin reviews it before it goes live.</div>` : ''}
    </div>`;
}

function openTrendModal() {
    if (!state.loggedVendor) return;
    document.getElementById('trend-title').value = '';
    document.getElementById('trend-subtitle').value = '';
    updateTrendPreview();
    document.getElementById('trendModal').classList.remove('hidden');
}

function updateTrendPreview() {
    const t = BANNER_TYPES.vendor;
    const title = document.getElementById('trend-title').value;
    const subtitle = document.getElementById('trend-subtitle').value;
    const store = state.loggedVendor ? state.loggedVendor.name : 'Your store';
    const slide = document.getElementById('trend-preview-slide');
    slide.style.cssText = 'cursor:default;background:' + t.gradient + ';';
    const tagEl = document.getElementById('trend-preview-tag');
    tagEl.textContent = '⭐ ' + store;
    tagEl.style.color = t.accent;
    document.getElementById('trend-preview-title').textContent = title || 'Your headline here';
    const subEl = document.getElementById('trend-preview-subtitle');
    subEl.textContent = subtitle;
    subEl.style.display = subtitle ? '' : 'none';
}

function submitTrendRequest() {
    if (!state.loggedVendor) return;
    const v = state.loggedVendor;
    const title = document.getElementById('trend-title').value.trim();
    const subtitle = document.getElementById('trend-subtitle').value.trim();
    if (!title) { showToast('Please enter a headline'); return; }

    if (vendorActiveBanner(v.id)) { showToast('You already have a live banner'); return; }
    const reqs = getRequests();
    if (reqs.find(r => r.type === 'banner' && r.vendorId === v.id && r.status === 'pending')) {
        showToast('You already have a banner request pending'); return;
    }

    reqs.push({
        id: 'req' + Date.now(),
        type: 'banner',
        from: v.name,
        vendorId: v.id,
        vendorName: v.name,
        bannerTitle: title,
        bannerSubtitle: subtitle,
        message: `${v.name} wants to trend on campus with a homepage banner.`,
        date: new Date().toISOString(),
        status: 'pending'
    });
    saveRequests(reqs);
    updateAdminReqBadge();
    addNotification('📤', 'Banner Request Sent', 'Your "Trend on Campus" banner was sent to admin for review.', null, null, v.id);
    closeModal('trendModal');
    renderTrendSection();
    showToast('Sent to admin for review!');
}

// ── SPONSORED SECTION ON HOMEPAGE ──
function renderSponsoredSection() {
    const boosted = getPublicVendors().filter(v => v.isBoosted);
    const sec = document.getElementById('sponsoredSection');
    if (!sec) return;
    if (!boosted.length) { sec.classList.add('hidden'); return; }
    sec.classList.remove('hidden');
    renderVendorGrid('sponsoredVendorGrid', boosted, getCampusStar()?.id || null);
}

// ── E5: VENDOR ANALYTICS ──
function renderVAnalytics() {
    const v = state.loggedVendor;
    if (!v) return;
    const el = document.getElementById('vd-analytics-content');
    if (!el) return;

    const allOrders = getOrders();
    const vendorOrders = allOrders.filter(o => o.vendorId === v.id);
    const fulfilledOrders = vendorOrders.filter(o => o.status === 'fulfilled');

    const weekMs = 7 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    const NUM_WEEKS = 6;

    // Build weekly buckets (0 = this week, 1 = last week, ...)
    const weekRevenue = Array(NUM_WEEKS).fill(0);
    const weekOrderCnt = Array(NUM_WEEKS).fill(0);
    vendorOrders.forEach(o => {
        const w = Math.floor((now - (o.placedAt || new Date(o.date).getTime())) / weekMs);
        if (w < NUM_WEEKS) weekOrderCnt[w]++;
    });
    fulfilledOrders.forEach(o => {
        const w = Math.floor((now - (o.placedAt || new Date(o.date).getTime())) / weekMs);
        if (w < NUM_WEEKS) weekRevenue[w] += (o.total || 0);
    });

    // Revenue forecast — avg of last 4 weeks × weeks in this month
    const last4Rev = weekRevenue.slice(0, 4).reduce((s, x) => s + x, 0);
    const avgWeekly = last4Rev / 4;
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const dayOfMonth = today.getDate();
    const projected = Math.round(avgWeekly * (daysInMonth / 7));
    const monthPct = Math.round((dayOfMonth / daysInMonth) * 100);

    // Display arrays oldest→newest
    const weekLabels = [];
    for (let i = NUM_WEEKS - 1; i >= 0; i--) {
        weekLabels.push(i === 0 ? 'This wk' : i === 1 ? 'Last wk' : i + 'w ago');
    }
    const revDisplay = [...weekRevenue].reverse();
    const ordDisplay = [...weekOrderCnt].reverse();
    const maxRev = Math.max(...weekRevenue, 1);
    const maxOrd = Math.max(...weekOrderCnt, 1);

    // Top products
    const prodRev = {}, prodQty = {};
    fulfilledOrders.forEach(o => (o.items || []).forEach(item => {
        prodRev[item.productName] = (prodRev[item.productName] || 0) + item.price * item.qty;
        prodQty[item.productName] = (prodQty[item.productName] || 0) + item.qty;
    }));
    const topProducts = Object.keys(prodRev)
        .map(name => ({ name, revenue: prodRev[name], qty: prodQty[name] }))
        .sort((a, b) => b.revenue - a.revenue).slice(0, 5);

    // Top customers
    const custMap = {};
    vendorOrders.forEach(o => {
        const c = o.customerName || 'Guest';
        custMap[c] = (custMap[c] || 0) + 1;
    });
    const topCustomers = Object.keys(custMap)
        .map(name => ({ name, count: custMap[name] }))
        .sort((a, b) => b.count - a.count).slice(0, 5);

    const noData = '<div style="text-align:center;padding:18px;color:var(--text-muted);font-size:13px;">No data yet — complete some orders to see this.</div>';

    // Revenue forecast card
    const forecastHTML = fulfilledOrders.length === 0 ? noData : `
        <div style="display:flex;align-items:flex-start;gap:12px;flex-wrap:wrap;">
            <div>
                <div class="analytics-stat-big">GH₵ ${projected.toLocaleString()}</div>
                <div class="analytics-stat-sub">Projected this month</div>
            </div>
            <div style="flex:1;min-width:120px;text-align:right;">
                <div style="font-size:14px;font-weight:700;color:var(--text-dark);">GH₵ ${Math.round(avgWeekly)}<span style="font-size:12px;font-weight:500;color:var(--text-muted);">/wk avg</span></div>
                <div style="font-size:12px;color:var(--text-muted);">Based on last 4 weeks</div>
            </div>
        </div>
        <div style="margin-top:12px;background:var(--bg-light);border-radius:6px;height:7px;overflow:hidden;">
            <div style="background:#16a34a;height:100%;width:${monthPct}%;border-radius:6px;"></div>
        </div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:5px;">Day ${dayOfMonth} of ${daysInMonth} this month</div>`;

    // Revenue bars
    const revBars = vendorOrders.length ? revDisplay.map((rev, i) => `
        <div class="analytics-bar-row">
            <div class="analytics-bar-label">${weekLabels[i]}</div>
            <div class="analytics-bar-track"><div class="analytics-bar-fill" style="width:${Math.round(rev/maxRev*100)}%;background:var(--primary-blue);"></div></div>
            <div class="analytics-bar-value">GH₵ ${rev}</div>
        </div>`).join('') : noData;

    // Order bars
    const ordBars = vendorOrders.length ? ordDisplay.map((cnt, i) => `
        <div class="analytics-bar-row">
            <div class="analytics-bar-label">${weekLabels[i]}</div>
            <div class="analytics-bar-track"><div class="analytics-bar-fill" style="width:${Math.round(cnt/maxOrd*100)}%;background:#6d28d9;"></div></div>
            <div class="analytics-bar-value">${cnt} order${cnt !== 1 ? 's' : ''}</div>
        </div>`).join('') : noData;

    // Top products rows
    const topProdRows = topProducts.length ? topProducts.map(p => `
        <div class="analytics-row">
            <div style="flex:1;min-width:0;">
                <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(p.name)}</div>
                <div style="font-size:12px;color:var(--text-muted);">${p.qty} unit${p.qty !== 1 ? 's' : ''} sold</div>
            </div>
            <div style="font-size:14px;font-weight:700;color:var(--text-dark);flex-shrink:0;">GH₵ ${p.revenue}</div>
        </div>`).join('') : noData;

    // Top customer rows
    const topCustRows = topCustomers.length ? topCustomers.map(c => `
        <div class="analytics-row">
            <div style="font-size:13px;font-weight:600;">${escHtml(c.name)}</div>
            <div style="font-size:13px;color:var(--text-muted);">${c.count} order${c.count !== 1 ? 's' : ''}</div>
        </div>`).join('') : noData;

    // Summary stats
    const totalRevenue = fulfilledOrders.reduce((s, o) => s + (o.total || 0), 0);
    const fulfillmentRate = vendorOrders.length
        ? Math.round((fulfilledOrders.length / vendorOrders.length) * 100)
        : 0;
    const avgOrderVal = fulfilledOrders.length
        ? Math.round(totalRevenue / fulfilledOrders.length)
        : 0;
    const followerCount = (safeGetJSON('acm_follows', [])).filter(f => f === v.id).length;
    const cancelledOrders = vendorOrders.filter(o => o.status === 'cancelled').length;
    const pendingOrders = vendorOrders.filter(o => o.status === 'pending').length;

    const summaryStats = `
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:16px;">
            <div class="analytics-stat-tile">
                <div class="analytics-stat-big" style="font-size:20px;">GH₵ ${totalRevenue.toLocaleString()}</div>
                <div class="analytics-stat-sub">Total Revenue</div>
            </div>
            <div class="analytics-stat-tile">
                <div class="analytics-stat-big" style="font-size:20px;">${vendorOrders.length}</div>
                <div class="analytics-stat-sub">Total Orders</div>
            </div>
            <div class="analytics-stat-tile">
                <div class="analytics-stat-big" style="font-size:20px;color:${fulfillmentRate >= 70 ? '#16a34a' : fulfillmentRate >= 40 ? '#d97706' : '#dc2626'};">${fulfillmentRate}%</div>
                <div class="analytics-stat-sub">Fulfillment Rate</div>
            </div>
            <div class="analytics-stat-tile">
                <div class="analytics-stat-big" style="font-size:20px;">GH₵ ${avgOrderVal}</div>
                <div class="analytics-stat-sub">Avg Order Value</div>
            </div>
            <div class="analytics-stat-tile">
                <div class="analytics-stat-big" style="font-size:20px;">${followerCount}</div>
                <div class="analytics-stat-sub">Followers</div>
            </div>
            <div class="analytics-stat-tile">
                <div class="analytics-stat-big" style="font-size:20px;color:${pendingOrders > 0 ? '#d97706' : 'var(--text-dark)'};">${pendingOrders}</div>
                <div class="analytics-stat-sub">Pending Orders</div>
            </div>
        </div>`;

    el.innerHTML = `
        <div class="analytics-card">
            <div class="analytics-card-title">Store Overview</div>
            ${summaryStats}
        </div>
        <div class="analytics-card">
            <div class="analytics-card-title">Revenue Forecast</div>
            ${forecastHTML}
        </div>
        <div class="analytics-card">
            <div class="analytics-card-title">Revenue — Last 6 Weeks</div>
            ${revBars}
        </div>
        <div class="analytics-card">
            <div class="analytics-card-title">Order Trends — Last 6 Weeks</div>
            ${ordBars}
        </div>
        <div class="analytics-card">
            <div class="analytics-card-title">🏆 Top Products</div>
            ${topProdRows}
        </div>
        <div class="analytics-card">
            <div class="analytics-card-title">👥 Top Customers</div>
            ${topCustRows}
        </div>`;
}

// ── E5: RECOMMENDATIONS ──
function getRecommendationsHTML(category, currentVendorId) {
    const peers = getPublicVendors().filter(v => v.id !== currentVendorId && v.category === category);
    const matches = [];
    peers.forEach(v => (v.products || []).forEach(p => {
        if (!p.isConsult) matches.push({ v, p });
    }));
    if (!matches.length) return '';
    // Shuffle (Fisher-Yates)
    for (let i = matches.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [matches[i], matches[j]] = [matches[j], matches[i]];
    }
    const picks = matches.slice(0, 4);
    const cards = picks.map(({ v, p }) => {
        const photos = getProductPhotos(p);
        const imgHTML = photos[0]
            ? `<img src="${photos[0]}" style="width:100%;aspect-ratio:1/1;object-fit:cover;" onerror="this.style.display='none'">`
            : `<div style="width:100%;aspect-ratio:1/1;background:linear-gradient(135deg,#e8eaf6,#fce4ec);display:flex;align-items:center;justify-content:center;font-size:28px;">${p.emoji || '📦'}</div>`;
        return `
            <div onclick="showPage('product');renderProductPage('${v.id}','${p.id}')" style="background:var(--white);border-radius:10px;overflow:hidden;box-shadow:var(--shadow);cursor:pointer;">
                <div style="overflow:hidden;">${imgHTML}</div>
                <div style="padding:8px;">
                    <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(p.name)}</div>
                    <div style="font-size:12px;color:var(--text-muted);margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(v.name)}</div>
                    <div style="font-size:13px;font-weight:700;color:var(--primary-blue);">GH₵ ${p.price}</div>
                </div>
            </div>`;
    }).join('');
    return `
        <div style="padding:0 16px 20px;">
            <div style="font-size:15px;font-weight:700;color:var(--text-dark);margin-bottom:12px;">✨ You might also like</div>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">${cards}</div>
        </div>`;
}

function getLastActiveInfo(v) {
    if (!v.lastActive) {
        return { cardLabel: 'Inactive', timeAgo: 'Never active', color: '#ef4444', isActive: false };
    }
    const ms    = Date.now() - v.lastActive;
    const mins  = Math.floor(ms / 60000);
    const hours = Math.floor(ms / 3600000);
    const days  = Math.floor(ms / 86400000);
    const weeks = Math.floor(days / 7);

    let timeAgo, color, isActive;

    if (mins < 2) {
        timeAgo = 'Just now';                                      color = '#16a34a'; isActive = true;
    } else if (mins < 60) {
        timeAgo = `${mins} min${mins > 1 ? 's' : ''} ago`;        color = '#16a34a'; isActive = true;
    } else if (hours < 6) {
        timeAgo = `${hours} hour${hours > 1 ? 's' : ''} ago`;     color = '#16a34a'; isActive = true;
    } else if (hours < 24) {
        timeAgo = `${hours} hour${hours > 1 ? 's' : ''} ago`;     color = '#ca8a04'; isActive = false;
    } else if (days === 1) {
        timeAgo = 'Yesterday';                                     color = '#ca8a04'; isActive = false;
    } else if (days < 7) {
        timeAgo = `${days} days ago`;                              color = '#ca8a04'; isActive = false;
    } else if (weeks < 5) {
        timeAgo = `${weeks} week${weeks > 1 ? 's' : ''} ago`;     color = '#ef4444'; isActive = false;
    } else {
        const months = Math.floor(days / 30);
        timeAgo = months >= 2 ? `${months} months ago` : 'Over a month ago';
        color = '#ef4444'; isActive = false;
    }

    return { cardLabel: isActive ? 'Active' : 'Inactive', timeAgo, color, isActive };
}

// ── RESPONSE TIME ──
function getResponseTimeLabel(vendorId) {
    const orders = getOrders()
        .filter(o => o.vendorId === vendorId && o.placedAt && o.respondedAt);
    if (orders.length < 3) return null;
    const avgMs = orders.reduce((s, o) => s + (o.respondedAt - o.placedAt), 0) / orders.length;
    const hrs = avgMs / (1000 * 60 * 60);
    if (hrs < 1)   return '⚡ Responds in under an hour';
    if (hrs < 3)   return '🕐 Usually responds within a few hours';
    if (hrs < 6)   return '🕑 Usually responds within half a day';
    if (hrs < 24)  return '🕒 Usually responds within a day';
    if (hrs < 72)  return '🕓 Usually responds within 1–3 days';
    return             '🕔 Usually responds within a few days';
}

// ── CAMPUS STAR ──
function getCampusStar() {
    const orders = getOrders();
    const fulfilledMap = {};
    orders.filter(o => o.status === 'fulfilled').forEach(o => {
        fulfilledMap[o.vendorId] = (fulfilledMap[o.vendorId] || 0) + 1;
    });
    const qualifying = getPublicVendors()
        .filter(v => v.rating >= 4.5 && (fulfilledMap[v.id] || 0) >= 20)
        .sort((a, b) => {
            const diff = (fulfilledMap[b.id] || 0) - (fulfilledMap[a.id] || 0);
            return diff !== 0 ? diff : b.rating - a.rating;
        });
    return qualifying[0] || null;
}

function checkAndUpdateCampusStar() {
    const star   = getCampusStar();
    const newId  = star ? star.id : null;
    const prevId = DB.config.campus_star || null;
    if (newId === prevId) return;
    if (prevId) {
        addNotification('⭐', 'Campus Star Lost',
            'Another vendor has overtaken you. Keep selling to reclaim the Campus Star badge!',
            null, null, prevId);
    }
    if (newId) {
        addNotification('⭐', 'You\'re the Campus Star!',
            'You are now the #1 vendor on ACity Market! Your store appears first on the homepage.',
            null, null, newId);
        DB.config.campus_star = newId;
        syncConfig('campus_star', newId).catch(console.warn);
    } else {
        DB.config.campus_star = null;
        syncConfig('campus_star', '').catch(console.warn);
    }
}

function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function showToast(msg) {
    document.querySelector('.toast')?.remove();
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2700);
}

// UX2.5 — error variant: longer duration, red background, tap to dismiss
function showToastError(msg) {
    document.querySelector('.toast')?.remove();
    const t = document.createElement('div');
    t.className = 'toast toast-error';
    t.textContent = msg;
    t.addEventListener('click', () => t.remove());
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 4600);
}

function getTimeAgo(date) {
    const diff = Date.now() - date.getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1) return 'Just now';
    if (m < 60) return m + 'm ago';
    const h = Math.floor(m / 60);
    if (h < 24) return h + 'h ago';
    return Math.floor(h / 24) + 'd ago';
}

function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// UX3.3 — render N stars using filled ★ with colour variation instead of ★/☆ mix
function renderStars(rating, size = 13) {
    const filled = Math.round(rating);
    return [1,2,3,4,5].map(i =>
        `<span style="color:${i <= filled ? '#f39c12' : '#d1d5db'};font-size:${size}px;line-height:1;">★</span>`
    ).join('');
}

// SU3.1 — Normalise any WhatsApp number to international digits (no +) for wa.me links
// Handles: 0241234567 → 233241234567 | +233241234567 → 233241234567 | 00233... → 233... | bare 9-digit → 233...
function normalizeWhatsApp(raw) {
    if (!raw) return '';
    const digits = String(raw).replace(/\D/g, ''); // strip everything except digits
    if (digits.startsWith('233') && digits.length >= 12) return digits; // already correct
    if (digits.startsWith('00233')) return digits.slice(2);             // 00233... → 233...
    if (digits.startsWith('0') && digits.length >= 10) return '233' + digits.slice(1); // 0XX... → 233XX...
    if (digits.length === 9) return '233' + digits;                     // 9-digit local (no leading 0)
    return digits; // fallback — return as-is, wa.me will handle the error
}

document.querySelectorAll('.modal-overlay').forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) o.classList.add('hidden'); });
});

// SP2.1 — Global safety net for uncaught async errors
window.addEventListener('unhandledrejection', e => {
    console.error('ACM unhandled promise rejection:', e.reason);
    showToastError('Something went wrong. Refresh if the app seems stuck.');
});

init();

// ═══════════════════════════════════════════
// PHASE 3A: ADMIN
// ═══════════════════════════════════════════

function getAdminCreds() { return safeGetJSON('acm_admin_creds', null); }

function getRequests() { return [...DB.requests]; }
function saveRequests(newRequests) {
    const removedIds = DB.requests
        .filter(r => !newRequests.find(n => n.id === r.id))
        .map(r => r.id);
    DB.requests = newRequests;
    newRequests.forEach(r => syncRequest(r).catch(console.warn));
    removedIds.forEach(id => deleteRequestFromDB(id).catch(console.warn));
}

// ── ADMIN LOGIN / LOGOUT ──
function openAdminLogin() {
    if (state.adminLoggedIn) { showPage('admin'); switchATab('vendors'); return; }
    // First run: no admin account yet — go straight to setup
    if (!DB.config.admin_created) {
        document.getElementById('adminSetupModal').classList.remove('hidden');
        return;
    }
    document.getElementById('adminUser').value = '';
    document.getElementById('adminPass').value = '';
    document.getElementById('adminLoginModal').classList.remove('hidden');
    setTimeout(() => document.getElementById('adminUser').focus(), 300);
}

async function submitAdminLogin() {
    const email = document.getElementById('adminUser').value.trim().toLowerCase();
    const p     = document.getElementById('adminPass').value;
    if (!email || !p) { showToast('Enter your email and password'); return; }
    if (!_supabase) { showToastError('Cannot sign in: app is not connected to the server.'); return; }

    const { data, error } = await _supabase.auth.signInWithPassword({ email, password: p });
    if (error) { showToastError('Incorrect email or password'); return; }

    const meta = data.user.user_metadata || {};
    if (meta.role !== 'admin') {
        showToastError('This account is not an admin account.');
        await _supabase.auth.signOut();
        return;
    }
    state.adminLoggedIn = true;
    closeModal('adminLoginModal');
    showPage('admin');
    switchATab('vendors');
}

// First-run admin account creation — registers the admin in Supabase Auth
async function submitAdminSetup() {
    const email    = document.getElementById('as-username').value.trim().toLowerCase();
    const password = document.getElementById('as-password').value;
    const confirm  = document.getElementById('as-confirm').value;
    if (!email || !password) { showToast('Please fill in all fields'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Please enter a valid email address'); return; }
    if (password.length < 6)    { showToast('Password must be at least 6 characters'); return; }
    if (password !== confirm)   { showToast('Passwords do not match'); return; }
    if (!_supabase) { showToastError('Cannot create admin: app is not connected to the server.'); return; }

    const { data, error } = await _supabase.auth.signUp({
        email,
        password,
        options: { data: { role: 'admin' } }
    });
    if (error) { showToastError('Setup failed: ' + error.message); return; }

    DB.config.admin_created = true;
    await syncConfig('admin_created', 'true').catch(console.warn);
    closeModal('adminSetupModal');
    state.adminLoggedIn = true;
    showPage('admin');
    switchATab('vendors');
    showToast('Admin account created! Save your email and password in a safe place.');
}

function exitAdmin() {
    state.adminLoggedIn = false;
    showPage('home');
}

// ── ADMIN TABS ──
function switchATab(tab) {
    ['vendors','requests','banners','posts','analytics','settings'].forEach(t => {
        document.getElementById('atab-' + t).classList.toggle('hidden', t !== tab);
        document.getElementById('atab-btn-' + t).classList.toggle('active', t === tab);
    });
    if (tab === 'vendors')   renderAdminVendors();
    if (tab === 'requests')  renderAdminRequests();
    if (tab === 'banners')   renderAdminBanners();
    if (tab === 'posts')     renderAdminPosts();
    if (tab === 'analytics') renderAdminAnalytics();
    if (tab === 'settings')  renderAdminSettings();
}

// ── ADMIN: VENDORS ──
function renderAdminVendors() {
    const vendors = getVendors();
    const el = document.getElementById('atab-vendors');
    if (!vendors.length) {
        el.innerHTML = `<div class="empty-state"><div class="empty-icon"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg></div><h3>No vendors yet</h3></div>`;
        return;
    }
    // EC1.4 — pending-approval vendors shown in a separate section at the top
    const pending = vendors.filter(v => v.pendingApproval);
    const approved = vendors.filter(v => !v.pendingApproval);
    const pendingSection = pending.length ? `
        <div style="background:#fff8e1;border:1.5px solid #f59e0b;border-radius:12px;padding:12px;margin-bottom:16px;">
            <div style="font-size:13px;font-weight:700;color:#92400e;margin-bottom:10px;">⏳ Awaiting Approval (${pending.length})</div>
            ${pending.map(v => `
            <div style="background:white;border-radius:10px;padding:12px;margin-bottom:8px;">
                <div style="font-size:14px;font-weight:700;">${escHtml(v.name)} <span style="font-size:11px;color:var(--text-muted);font-weight:400;">${escHtml(v.category)} · ${escHtml(v.studentName || '')}</span></div>
                <div style="font-size:12px;color:var(--text-muted);margin:4px 0;">${escHtml(v.description || '').slice(0, 80)}…</div>
                ${v.idPhoto ? `<img src="${v.idPhoto}" style="width:72px;height:48px;object-fit:cover;border-radius:6px;border:1px solid var(--border);margin:4px 0;cursor:pointer;" onclick="viewVendorId('${v.id}')">` : '<span style="font-size:12px;color:#c62828;">No ID uploaded</span>'}
                <div style="display:flex;gap:8px;margin-top:8px;">
                    <button onclick="approveVendor('${v.id}')" style="flex:1;background:#e8f5e9;color:#2e7d32;border:none;padding:8px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">✅ Approve Store</button>
                    <button onclick="rejectVendor('${v.id}')" style="flex:1;background:#fce4ec;color:#c62828;border:none;padding:8px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">✖ Reject</button>
                </div>
            </div>`).join('')}
        </div>` : '';
    el.innerHTML = pendingSection + approved.map(v => {
        const idBadgeClass = v.idStatus === 'approved' ? 'ord-fulfilled' : v.idStatus === 'rejected' ? 'ord-cancelled' : 'ord-pending';
        const idBadgeText  = v.idStatus === 'approved' ? 'ID Approved' : v.idStatus === 'rejected' ? 'ID Rejected' : 'ID Pending';
        const idSection = v.idPhoto
            ? `<div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border);">
                <div style="font-size:12px;font-weight:700;color:var(--text-muted);margin-bottom:6px;">STUDENT ID</div>
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                    <img src="${v.idPhoto}" style="width:72px;height:48px;object-fit:cover;border-radius:6px;border:1px solid var(--border);cursor:pointer;" onclick="viewVendorId('${v.id}')" title="Click to view full size">
                    <span class="ord-badge ${idBadgeClass}">${idBadgeText}</span>
                    ${v.idStatus === 'pending' ? `
                        <button onclick="approveVendorId('${v.id}')" style="background:#e8f5e9;color:#2e7d32;border:none;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">✅ Approve</button>
                        <button onclick="rejectVendorId('${v.id}')" style="background:#fce4ec;color:#c62828;border:none;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">❌ Reject</button>
                    ` : v.idStatus === 'rejected' ? `
                        <button onclick="approveVendorId('${v.id}')" style="background:#e8f5e9;color:#2e7d32;border:none;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">✅ Approve</button>
                    ` : ''}
                </div>
               </div>`
            : `<div style="margin-top:8px;font-size:12px;color:var(--text-muted);">⚠️ No ID photo uploaded</div>`;
        return `
        <div class="admin-vendor-card ${v.suspended ? 'suspended' : ''}">
            <div style="flex:1;min-width:0;">
                <div style="font-size:15px;font-weight:700;">${escHtml(v.name)}
                    ${v.suspended ? '<span class="suspended-tag">Suspended</span>' : ''}
                    ${v.isBoosted ? '<span style="background:#eff6ff;color:#1d4ed8;font-size:10px;font-weight:700;padding:2px 7px;border-radius:6px;margin-left:4px;">Sponsored</span>' : ''}
                    ${v.featured ? '<span style="background:#ede9fe;color:#5b21b6;font-size:10px;font-weight:700;padding:2px 7px;border-radius:8px;margin-left:4px;">Featured</span>' : ''}
                </div>
                <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">${escHtml(v.category)} · ${escHtml(v.studentName || '')} · Level ${escHtml(v.level || '—')}</div>
                <div style="font-size:12px;color:var(--text-muted);">${v.products ? v.products.length : 0} products · ${v.rating} stars (${v.reviews} reviews)</div>
                ${idSection}
                <div class="admin-action-row">
                    ${v.suspended
                        ? `<button class="admin-btn admin-btn-reinstate" onclick="reinstateVendor('${v.id}')">Reinstate</button>`
                        : `<button class="admin-btn admin-btn-suspend" onclick="suspendVendor('${v.id}')">Suspend</button>`
                    }
                    ${!v.suspended ? `<button class="admin-btn ${v.featured ? 'admin-btn-unfeature' : 'admin-btn-feature'}" onclick="toggleFeaturedVendor('${v.id}')">${v.featured ? 'Unfeature' : 'Feature'}</button>` : ''}
                    ${v.isBoosted ? `<button class="admin-btn" style="background:#fee2e2;color:#b91c1c;" onclick="removeStoreBoost('${v.id}')">Remove Boost</button>` : ''}
                    <button class="admin-btn" style="background:#e8eaf6;color:#3949ab;" onclick="openResetVendorPass('${v.id}')">Reset Password</button>
                    <button class="admin-btn admin-btn-delete" onclick="deleteVendor('${v.id}')">Delete</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

// EC1.4 — admin approves a pending vendor
function approveVendor(vendorId) {
    const vendors = getVendors();
    const v = vendors.find(x => x.id === vendorId);
    if (!v) return;
    v.pendingApproval = false;
    saveVendors(vendors);
    addNotification('✅', 'Store Approved!', 'Your store has been approved by admin and is now live on ACity Market. Students can find you!', null, null, vendorId);
    renderAdminVendors();
    renderHomePage();
    showToast(v.name + ' approved and is now live!');
}

// EC1.4 — admin rejects a pending vendor
function rejectVendor(vendorId) {
    const reason = prompt('Reason for rejection (will be sent to vendor):');
    if (reason === null) return; // cancelled
    const vendors = getVendors();
    const v = vendors.find(x => x.id === vendorId);
    if (!v) return;
    v.suspended = true;
    v.pendingApproval = false;
    saveVendors(vendors);
    addNotification('❌', 'Store Not Approved', reason || 'Your store registration was not approved. Contact admin for more details.', null, null, vendorId);
    renderAdminVendors();
    showToast(v.name + ' rejected');
}

function suspendVendor(vendorId) {
    if (!confirm('Suspend this vendor? They will be hidden from the marketplace and pending orders will be cancelled.')) return;
    const vendors = getVendors();
    const v = vendors.find(x => x.id === vendorId);
    if (!v) return;
    v.suspended = true;
    saveVendors(vendors);

    // EC3.2 — auto-cancel pending orders from this vendor and notify customers
    const orders = getOrders();
    let cancelledCount = 0;
    orders.forEach(o => {
        if (o.vendorId === vendorId && (o.status === 'pending' || o.status === 'preorder')) {
            o.status = 'cancelled';
            o.cancelledBy = 'admin_suspend';
            cancelledCount++;
            if (o.customerName && o.customerName !== 'Guest') {
                const num = o.orderNumber ? `#${o.orderNumber}` : '';
                addNotification('❌', `Order ${num} Cancelled`, `Your order from ${v.name} was cancelled because the store has been temporarily suspended.`, { type: 'myorders' }, o.customerName);
            }
        }
    });
    if (cancelledCount > 0) saveOrders(orders);

    addNotification('⏸', 'Store Suspended', 'Your store has been suspended by admin and is temporarily hidden from the marketplace. Contact admin for more info.', null, null, v.id);
    renderAdminVendors();
    renderHomePage();
    showToast(v.name + ' suspended' + (cancelledCount > 0 ? ` — ${cancelledCount} pending order(s) cancelled` : ''));
}

function reinstateVendor(vendorId) {
    const vendors = getVendors();
    const v = vendors.find(x => x.id === vendorId);
    if (!v) return;
    v.suspended = false;
    saveVendors(vendors);
    addNotification('✅', 'Store Reinstated', 'Your store is back on the marketplace! Customers can find you again.', null, null, v.id);
    renderAdminVendors();
    renderHomePage();
    showToast(v.name + ' reinstated');
}

function deleteVendor(vendorId) {
    const vendors = getVendors();
    const v = vendors.find(x => x.id === vendorId);
    if (!v) return;
    if (!confirm(`Permanently delete "${v.name}"? This cannot be undone.`)) return;
    saveVendors(vendors.filter(x => x.id !== vendorId));
    renderAdminVendors();
    renderHomePage();
    showToast(v.name + ' deleted');
}

function toggleFeaturedVendor(vendorId) {
    const vendors = getVendors();
    const v = vendors.find(x => x.id === vendorId);
    if (!v) return;
    v.featured = !v.featured;
    saveVendors(vendors);
    renderAdminVendors();
    renderHomePage();
    showToast(v.featured ? v.name + ' is now featured' : v.name + ' removed from featured');
}

// ── ADMIN: ID VERIFICATION ──
function approveVendorId(vendorId) {
    const vendors = getVendors();
    const v = vendors.find(x => x.id === vendorId);
    if (!v) return;
    v.idStatus = 'approved';
    saveVendors(vendors);
    addNotification('✅', 'ID Approved', 'Your student ID has been verified. Your store is now confirmed on ACity Market!', null, null, vendorId);
    renderAdminVendors();
    showToast('ID approved for ' + v.name);
}

function rejectVendorId(vendorId) {
    const vendors = getVendors();
    const v = vendors.find(x => x.id === vendorId);
    if (!v) return;
    v.idStatus = 'rejected';
    saveVendors(vendors);
    addNotification('❌', 'ID Rejected', 'Your student ID photo was not accepted. Please re-upload a clearer photo from your store dashboard.', null, null, vendorId);
    renderAdminVendors();
    showToast('ID rejected for ' + v.name);
}

function viewVendorId(vendorId) {
    const v = getVendors().find(x => x.id === vendorId);
    if (!v || !v.idPhoto) return;
    const win = window.open('', '_blank');
    win.document.write(`<html><body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;min-height:100vh;">
        <img src="${v.idPhoto}" style="max-width:100%;max-height:100vh;object-fit:contain;">
    </body></html>`);
    win.document.close();
}

// ── ADMIN: REQUESTS ──
function updateAdminReqBadge() {
    const badge = document.getElementById('adminReqBadge');
    if (!badge) return;
    const count = getRequests().filter(r => r.status === 'pending').length;
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
}

function renderAdminRequests() {
    const reqs = getRequests().sort((a, b) => new Date(b.date) - new Date(a.date));
    const el = document.getElementById('atab-requests');
    if (!reqs.length) {
        el.innerHTML = `<div class="empty-state"><div class="empty-icon"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><h3>No requests yet</h3><p>Vendor category requests and customer feedback will appear here.</p></div>`;
        return;
    }
    el.innerHTML = reqs.map(r => {
        const isPending = r.status === 'pending';
        const statusBadge = isPending
            ? ''
            : r.status === 'suspended'
                ? `<span class="ord-badge ord-cancelled" style="margin-left:6px;">Vendor Suspended</span>`
                : `<span class="ord-badge ${r.status === 'approved' ? 'ord-fulfilled' : 'ord-cancelled'}" style="margin-left:6px;">${r.status === 'approved' ? 'Approved' : 'Dismissed'}</span>`;
        const actions = isPending ? `
            <div style="display:flex;gap:8px;margin-top:10px;">
                <button onclick="resolveRequest('${r.id}','approved')" style="flex:1;background:#e8f5e9;color:#2e7d32;border:none;padding:8px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">✅ Approve</button>
                <button onclick="resolveRequest('${r.id}','rejected')" style="flex:1;background:#fce4ec;color:#b71c1c;border:none;padding:8px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">✖ Reject</button>
            </div>` : '';
        // Report type gets Dismiss + Suspend actions instead of Approve/Reject
        const reportActions = isPending && r.type === 'report' ? `
            <div style="display:flex;gap:8px;margin-top:10px;">
                <button onclick="resolveRequest('${r.id}','rejected')" style="flex:1;background:#f3f4f6;color:#374151;border:none;padding:8px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">Dismiss</button>
                <button onclick="resolveRequest('${r.id}','suspend')" style="flex:1;background:#fce4ec;color:#b71c1c;border:none;padding:8px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">🚫 Suspend Vendor</button>
            </div>` : '';
        const typeTag =
            r.type === 'category' ? 'Category Request' :
            r.type === 'boost'    ? 'Boost Request' :
            r.type === 'banner'   ? '⭐ Trend Banner' :
            r.type === 'report'   ? 'Vendor Report' :
                                    '💬 Feedback / Help';
        const typeClass =
            r.type === 'category' ? 'req-category' :
            r.type === 'boost'    ? 'req-boost' :
            r.type === 'banner'   ? 'req-boost' :
            r.type === 'report'   ? 'req-report' :
                                    'req-feedback';
        // Trend-banner requests get a live gradient preview of what would go live
        const bannerPreview = r.type === 'banner' ? `
            <div class="banner-carousel" style="margin:8px 0;box-shadow:none;">
                <div class="banner-track"><div class="banner-slide" style="cursor:default;height:110px;background:${BANNER_TYPES.vendor.gradient};">
                    <div class="banner-overlay">
                        <span class="banner-tag" style="color:${BANNER_TYPES.vendor.accent};">⭐ ${escHtml(r.vendorName || r.from)}</span>
                        <div class="banner-title" style="font-size:17px;">${escHtml(r.bannerTitle || '')}</div>
                        ${r.bannerSubtitle ? `<div class="banner-subtitle">${escHtml(r.bannerSubtitle)}</div>` : ''}
                    </div>
                </div></div>
            </div>` : '';
        return `
        <div class="request-card">
            <span class="request-type-tag ${typeClass}">${typeTag}</span>${statusBadge}
            <div style="font-size:13px;font-weight:600;margin-bottom:4px;">${escHtml(r.from)}</div>
            <div style="font-size:13px;color:var(--text-muted);margin-bottom:4px;">${escHtml(r.message)}</div>
            ${bannerPreview}
            ${r.extra ? `<div style="font-size:12px;color:var(--text-muted);font-style:italic;">${escHtml(r.extra)}</div>` : ''}
            <div style="font-size:12px;color:var(--text-muted);margin-top:6px;">${new Date(r.date).toLocaleDateString()}</div>
            ${r.type === 'report' ? reportActions : actions}
        </div>`;
    }).join('');
}

function resolveRequest(reqId, status) {
    const reqs = getRequests();
    const r = reqs.find(x => x.id === reqId);
    if (!r) return;
    r.status = status;
    saveRequests(reqs);
    if (r.type === 'category' && r.categoryName) {
        if (status === 'approved') {
            addNotification('✅', 'Category Request Approved!',
                `Your request for "${r.categoryName}" has been approved by admin.`,
                null, null, r.vendorId);
        } else {
            addNotification('❌', 'Category Request Rejected',
                `Your request for "${r.categoryName}" was not approved this time.`,
                null, null, r.vendorId);
        }
    } else if (r.type === 'feedback') {
        if (status === 'approved') {
            addNotification('💬', 'Feedback Received',
                'Admin has reviewed your feedback. Thank you for helping improve ACity Market!',
                null, r.from);
        } else {
            addNotification('💬', 'Feedback Reviewed',
                'Admin has reviewed your message. Thank you for reaching out.',
                null, r.from);
        }
    } else if (r.type === 'boost') {
        if (status === 'approved') {
            const vendors = getVendors();
            const vIdx = vendors.findIndex(v => v.id === r.vendorId);
            if (vIdx !== -1) {
                vendors[vIdx].isBoosted = true;
                saveVendors(vendors);
            }
            addNotification('🔵', 'Homepage Boost Approved!',
                'Your store is now featured in the Sponsored section on the homepage!',
                null, null, r.vendorId);
            // Campus-wide announcement so all students see the featured store
            const boostedV = vendors.find(bv => bv.id === r.vendorId);
            if (boostedV) {
                addNotification('🔵', `${boostedV.name} is now Featured!`,
                    `${boostedV.name} has a sponsored spot on the homepage this week. Check out their store!`,
                    { type: 'vendor', id: r.vendorId });
            }
            renderHomePage();
        } else {
            addNotification('❌', 'Boost Request Rejected',
                'Your homepage boost request was not approved this time. Contact admin for details.',
                null, null, r.vendorId);
        }
    } else if (r.type === 'banner') {
        if (status === 'approved') {
            const banners = getBanners();
            const maxOrder = banners.reduce((m, b) => Math.max(m, b.order || 0), -1);
            banners.push({
                id: 'b_v' + Date.now(),
                type: 'vendor',
                title: r.bannerTitle || '',
                subtitle: r.bannerSubtitle || '',
                image: null,
                linkType: 'vendor',
                linkVendorId: r.vendorId,
                linkPage: null,
                active: true,
                order: maxOrder + 1,
                vendorBanner: true,
                storeName: r.vendorName || r.from
            });
            saveBanners(banners);
            renderHomeBanner();
            addNotification('🎉', "You're trending on campus!",
                `Your banner "${r.bannerTitle}" is now live on the homepage.`,
                { type: 'vendor', id: r.vendorId }, null, r.vendorId);
        } else {
            addNotification('❌', 'Banner Not Approved',
                'Your "Trend on Campus" banner request was not approved this time.',
                null, null, r.vendorId);
        }
    } else if (r.type === 'report') {
        if (status === 'suspend' && r.vendorId) {
            const vendors = getVendors();
            const vIdx = vendors.findIndex(v => v.id === r.vendorId);
            if (vIdx !== -1) {
                vendors[vIdx].suspended = true;
                saveVendors(vendors);
                addNotification('🚫', 'Store Suspended',
                    'Your store has been suspended following a customer report. Contact ACity Market admin for details.',
                    null, null, r.vendorId);
                renderHomePage();
            }
            r.status = 'suspended'; // distinct from 'approved' so UI can show the right label
            saveRequests(reqs);
            showToast('Vendor suspended');
        } else {
            showToast('Report dismissed');
        }
    }
    renderAdminRequests();
    updateAdminReqBadge();
    if (r.type !== 'report') showToast('Request ' + status);
}

// ── ADMIN: POSTS ──
// ── ADMIN: BANNERS (Phase V1) ──
function renderAdminBanners() {
    const banners = getBanners().sort((a, b) => (a.order || 0) - (b.order || 0));
    const el = document.getElementById('atab-banners');
    const addBtn = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div style="font-size:12px;color:var(--text-muted);">Banners rotate at the top of the homepage.</div>
        <button onclick="openBannerModal(null)" style="background:var(--primary-red);color:white;border:none;padding:9px 16px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;flex-shrink:0;">+ Add Banner</button>
    </div>`;
    if (!banners.length) {
        el.innerHTML = addBtn + `<div class="empty-state"><h3 style="margin-top:8px;">No banners yet</h3><p>Add one to feature deals, new vendors, or announcements.</p></div>`;
        return;
    }
    el.innerHTML = addBtn + banners.map((b, i) => {
        const t = BANNER_TYPES[b.type] || BANNER_TYPES.notice;
        const preview = b.image
            ? `background-image:linear-gradient(90deg,rgba(0,0,0,0.5),rgba(0,0,0,0.1)),url('${b.image}');background-size:cover;background-position:center;`
            : `background:${t.gradient};`;
        const linkLabel = b.linkType === 'vendor'
            ? '→ Vendor store'
            : (b.linkType === 'page' ? '→ ' + (b.linkPage === 'announcements' ? 'Posts page' : 'Home') : 'No link');
        const btn = (label, handler, extra = '') => `<button onclick="${handler}" ${extra} style="background:var(--bg-light);color:var(--text-dark);border:1px solid var(--border);padding:6px 11px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;">${label}</button>`;
        return `<div style="background:white;border-radius:var(--radius);box-shadow:var(--shadow);margin-bottom:10px;overflow:hidden;${b.active === false ? 'opacity:0.55;' : ''}">
            <div style="height:78px;${preview}display:flex;align-items:flex-end;padding:9px 11px;">
                <span style="background:#fff;color:${t.accent};font-size:10px;font-weight:800;padding:2px 8px;border-radius:20px;">${t.label}</span>
            </div>
            <div style="padding:11px 13px;">
                <div style="font-weight:700;font-size:14px;margin-bottom:2px;">${escHtml(b.title || '(no title)')}</div>
                <div style="font-size:12px;color:var(--text-muted);margin-bottom:3px;">${escHtml(b.subtitle || '')}</div>
                <div style="font-size:11px;color:var(--text-muted);margin-bottom:11px;">${linkLabel}${b.active === false ? ' · Hidden' : ''}</div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;">
                    ${btn('↑', `moveBanner('${b.id}',-1)`, i === 0 ? 'disabled style="opacity:0.4;"' : '')}
                    ${btn('↓', `moveBanner('${b.id}',1)`, i === banners.length - 1 ? 'disabled style="opacity:0.4;"' : '')}
                    ${btn(b.active === false ? 'Show' : 'Hide', `toggleBannerActive('${b.id}')`)}
                    ${btn('Edit', `openBannerModal('${b.id}')`)}
                    <button onclick="deleteBanner('${b.id}')" style="background:#fce4ec;color:#b71c1c;border:none;padding:6px 11px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;">Delete</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

let _bannerPendingImage = undefined; // undefined = unchanged, null = removed, string = new dataUrl

function openBannerModal(id) {
    _bannerPendingImage = undefined;
    const banners = getBanners();
    const b = id ? banners.find(x => x.id === id) : null;

    document.getElementById('bannerModalTitle').textContent = b ? 'Edit Banner' : 'Add Banner';
    document.getElementById('banner-id').value = b ? b.id : '';
    document.getElementById('banner-type').value = b ? (b.type || 'notice') : 'deal';
    document.getElementById('banner-title').value = b ? (b.title || '') : '';
    document.getElementById('banner-subtitle').value = b ? (b.subtitle || '') : '';
    document.getElementById('banner-image').value = '';
    document.getElementById('banner-image-note').textContent = b && b.image ? 'Current image kept. Pick a new file to replace it.' : '';
    document.getElementById('banner-linkType').value = b ? (b.linkType || 'none') : 'none';

    // Populate vendor dropdown with public (approved, not suspended) vendors
    const vendorSel = document.getElementById('banner-vendor');
    vendorSel.innerHTML = getPublicVendors()
        .map(v => `<option value="${v.id}">${escHtml(v.name)}</option>`).join('');
    if (b && b.linkVendorId) vendorSel.value = b.linkVendorId;
    document.getElementById('banner-page').value = b && b.linkPage ? b.linkPage : 'announcements';

    onBannerLinkTypeChange();
    updateBannerPreview();
    document.getElementById('bannerModal').classList.remove('hidden');
}

function onBannerLinkTypeChange() {
    const lt = document.getElementById('banner-linkType').value;
    document.getElementById('banner-vendor-row').classList.toggle('hidden', lt !== 'vendor');
    document.getElementById('banner-page-row').classList.toggle('hidden', lt !== 'page');
}

function onBannerImagePick(input) {
    const file = input.files[0];
    if (!file) return;
    compressImage(file, 1200, 0.8).then(dataUrl => {
        _bannerPendingImage = dataUrl;
        document.getElementById('banner-image-note').textContent = 'New image selected.';
        updateBannerPreview();
    }).catch(e => showToastError(e.message));
}

function updateBannerPreview() {
    const type = document.getElementById('banner-type').value;
    const t = BANNER_TYPES[type] || BANNER_TYPES.notice;
    const title = document.getElementById('banner-title').value;
    const subtitle = document.getElementById('banner-subtitle').value;

    // Resolve which image to preview: new pick > existing (on edit) > none
    let img = _bannerPendingImage;
    if (img === undefined) {
        const id = document.getElementById('banner-id').value;
        const existing = id ? getBanners().find(x => x.id === id) : null;
        img = existing ? existing.image : null;
    }

    const slide = document.getElementById('banner-preview-slide');
    slide.style.cssText = 'cursor:default;' + (img
        ? `background-image:linear-gradient(90deg,rgba(0,0,0,0.55),rgba(0,0,0,0.15)),url('${img}');background-size:cover;background-position:center;`
        : `background:${t.gradient};`);
    const tagEl = document.getElementById('banner-preview-tag');
    tagEl.textContent = t.label;
    tagEl.style.color = t.accent;
    document.getElementById('banner-preview-title').textContent = title || 'Your banner title';
    const subEl = document.getElementById('banner-preview-subtitle');
    subEl.textContent = subtitle;
    subEl.style.display = subtitle ? '' : 'none';
}

async function saveBanner() {
    const title = document.getElementById('banner-title').value.trim();
    if (!title) { showToast('Please enter a title'); return; }

    const id = document.getElementById('banner-id').value;
    const type = document.getElementById('banner-type').value;
    const subtitle = document.getElementById('banner-subtitle').value.trim();
    const linkType = document.getElementById('banner-linkType').value;
    const linkVendorId = linkType === 'vendor' ? document.getElementById('banner-vendor').value : null;
    const linkPage = linkType === 'page' ? document.getElementById('banner-page').value : null;

    const banners = getBanners();
    const existing = id ? banners.find(x => x.id === id) : null;

    // Resolve image: new pick uploads to Storage; otherwise keep existing
    let image = existing ? existing.image : null;
    if (_bannerPendingImage !== undefined && _bannerPendingImage) {
        const saveBtn = document.getElementById('banner-save-btn');
        saveBtn.disabled = true; saveBtn.textContent = 'Uploading…';
        image = await uploadImage(_bannerPendingImage, 'banners', id || ('b' + Date.now())) || _bannerPendingImage;
        saveBtn.disabled = false; saveBtn.textContent = 'Save Banner';
    }

    if (existing) {
        Object.assign(existing, { type, title, subtitle, image, linkType, linkVendorId, linkPage });
    } else {
        const maxOrder = banners.reduce((m, b) => Math.max(m, b.order || 0), -1);
        banners.push({
            id: 'b' + Date.now(), type, title, subtitle, image,
            linkType, linkVendorId, linkPage, active: true, order: maxOrder + 1
        });
    }
    saveBanners(banners);
    closeModal('bannerModal');
    renderAdminBanners();
    renderHomeBanner();
    showToast(existing ? 'Banner updated' : 'Banner added');
}

function deleteBanner(id) {
    if (!confirm('Delete this banner? This cannot be undone.')) return;
    saveBanners(getBanners().filter(b => b.id !== id));
    renderAdminBanners();
    renderHomeBanner();
    showToast('Banner deleted');
}

function toggleBannerActive(id) {
    const banners = getBanners();
    const b = banners.find(x => x.id === id);
    if (!b) return;
    b.active = b.active === false;
    saveBanners(banners);
    renderAdminBanners();
    renderHomeBanner();
}

function moveBanner(id, dir) {
    const banners = getBanners().sort((a, b) => (a.order || 0) - (b.order || 0));
    const idx = banners.findIndex(b => b.id === id);
    const swap = idx + dir;
    if (idx < 0 || swap < 0 || swap >= banners.length) return;
    [banners[idx], banners[swap]] = [banners[swap], banners[idx]];
    banners.forEach((b, i) => b.order = i); // renumber
    saveBanners(banners);
    renderAdminBanners();
    renderHomeBanner();
}

function renderAdminPosts() {
    const posts = getAnnouncements();
    const el = document.getElementById('atab-posts');
    if (!posts.length) {
        el.innerHTML = `<div class="empty-state"><h3 style="margin-top:8px;">No posts yet</h3></div>`;
        return;
    }
    el.innerHTML = posts.map(a => `
        <div style="background:white;border-radius:var(--radius);padding:14px;box-shadow:var(--shadow);margin-bottom:10px;display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
            <div style="flex:1;min-width:0;">
                <div style="font-size:14px;font-weight:700;margin-bottom:4px;">${escHtml(a.title)}</div>
                <div style="font-size:12px;color:var(--text-muted);margin-bottom:4px;">${escHtml(a.contact || '')}</div>
                <div style="font-size:12px;color:var(--text-muted);">${new Date(a.date).toLocaleDateString()}</div>
            </div>
            <button onclick="adminDeletePost('${a.id}')" style="background:#fce4ec;color:#b71c1c;border:none;padding:8px 12px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;flex-shrink:0;">🗑 Delete</button>
        </div>`).join('');
}

function adminDeletePost(postId) {
    if (!confirm('Delete this post? This cannot be undone.')) return;
    DB.announcements = DB.announcements.filter(a => a.id !== postId);
    deleteAnnouncementFromDB(postId).catch(console.warn);
    renderAdminPosts();
    renderRecentAnnouncements();
    showToast('Post deleted');
}

// ── FEEDBACK / HELP ──
function openFeedbackModal() {
    document.getElementById('fb-name').value = state.currentUser || '';
    document.getElementById('fb-message').value = '';
    document.getElementById('feedbackModal').classList.remove('hidden');
}

function submitFeedback() {
    const name = document.getElementById('fb-name').value.trim() || 'Anonymous';
    const message = document.getElementById('fb-message').value.trim();
    if (!message) { showToast('Please enter a message'); return; }
    const reqs = getRequests();
    reqs.push({ id: 'req' + Date.now(), type: 'feedback', from: name, message, date: new Date().toISOString(), status: 'pending' });
    saveRequests(reqs);
    updateAdminReqBadge();
    closeModal('feedbackModal');
    showToast('Feedback sent — thank you!');
}

// ── SU3.3 — REPORT VENDOR ──
function openReportModal(vendorId, vendorName) {
    document.getElementById('report-vendorId').value = vendorId;
    document.getElementById('report-vendorName').value = vendorName;
    document.getElementById('report-reason').value = '';
    document.getElementById('report-details').value = '';
    document.getElementById('reportVendorModal').classList.remove('hidden');
}

function submitVendorReport() {
    const vendorId   = document.getElementById('report-vendorId').value;
    const vendorName = document.getElementById('report-vendorName').value;
    const reason     = document.getElementById('report-reason').value;
    const details    = document.getElementById('report-details').value.trim();
    if (!reason) { showToast('Please select a reason'); return; }
    const reporter = state.currentUser || 'Anonymous student';
    const reqs = getRequests();
    reqs.push({
        id: 'req' + Date.now(),
        type: 'report',
        from: reporter,
        vendorId,
        vendorName,
        message: `Report against "${vendorName}": ${reason}`,
        extra: details || null,
        date: new Date().toISOString(),
        status: 'pending'
    });
    saveRequests(reqs);
    updateAdminReqBadge();
    closeModal('reportVendorModal');
    showToast('Report submitted. Admin will review it.');
}

// ── VENDOR: REQUEST CATEGORY ──
function submitCategoryRequest() {
    const name = document.getElementById('rc-name').value.trim();
    const reason = document.getElementById('rc-reason').value.trim();
    if (!name) { showToast('Please enter a category name'); return; }
    if (!state.loggedVendor) { showToast('You must be logged in as a vendor'); return; }
    const reqs = getRequests();
    const already = reqs.find(r => r.type === 'category' && r.categoryName?.toLowerCase() === name.toLowerCase() && r.vendorName === state.loggedVendor.name && r.status === 'pending');
    if (already) { showToast('You already have a pending request for this category'); return; }
    reqs.push({
        id: 'req' + Date.now(),
        type: 'category',
        from: state.loggedVendor.name,
        vendorName: state.loggedVendor.name,
        vendorId: state.loggedVendor.id,
        categoryName: name,
        message: `Requesting new category: "${name}"`,
        extra: reason || null,
        date: new Date().toISOString(),
        status: 'pending'
    });
    saveRequests(reqs);
    updateAdminReqBadge();
    closeModal('reqCategoryModal');
    showToast('Category request sent to admin');
}

// ── ADMIN: ANALYTICS ──
function renderAdminAnalytics() {
    const orders = getOrders();
    const vendors = getVendors();

    const total       = orders.length;
    const fulfilled   = orders.filter(o => o.status === 'fulfilled');
    const pending     = orders.filter(o => o.status === 'pending' || o.status === 'preorder').length;
    const cancelled   = orders.filter(o => o.status === 'cancelled').length;
    const revenue     = fulfilled.reduce((s, o) => s + (o.total || 0), 0);
    const itemsSold   = fulfilled.reduce((s, o) => s + o.items.reduce((ss, i) => ss + i.qty, 0), 0);

    const votwVendors = [...vendors].sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
    const votw = votwVendors[0];

    const vendorRows = vendors.map(v => {
        const vOrders    = orders.filter(o => o.vendorId === v.id);
        const vFulfilled = vOrders.filter(o => o.status === 'fulfilled');
        const vRevenue   = vFulfilled.reduce((s, o) => s + (o.total || 0), 0);
        const vItems     = vFulfilled.reduce((s, o) => s + o.items.reduce((ss, i) => ss + i.qty, 0), 0);
        return { v, total: vOrders.length, fulfilled: vFulfilled.length, revenue: vRevenue, items: vItems };
    }).sort((a, b) => b.revenue - a.revenue);

    document.getElementById('atab-analytics').innerHTML = `
        <div style="margin-bottom:20px;">
            <div style="font-size:13px;font-weight:700;color:var(--text-muted);margin-bottom:10px;letter-spacing:0.5px;">APP OVERVIEW</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
                <div class="stat-card"><div class="stat-value">GH₵${revenue.toLocaleString()}</div><div class="stat-label">Total Revenue</div></div>
                <div class="stat-card"><div class="stat-value">${total}</div><div class="stat-label">All Orders</div></div>
                <div class="stat-card"><div class="stat-value">${itemsSold}</div><div class="stat-label">Items Sold</div></div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
                <div class="stat-card"><div class="stat-value" style="color:#2e7d32;">${fulfilled.length}</div><div class="stat-label">Fulfilled</div></div>
                <div class="stat-card"><div class="stat-value" style="color:#e65100;">${pending}</div><div class="stat-label">Pending</div></div>
                <div class="stat-card"><div class="stat-value" style="color:#b71c1c;">${cancelled}</div><div class="stat-label">Cancelled</div></div>
            </div>
        </div>

        ${votw ? `
        <div style="margin-bottom:20px;">
            <div style="font-size:13px;font-weight:700;color:var(--text-muted);margin-bottom:10px;letter-spacing:0.5px;">🏆 VENDOR OF THE WEEK</div>
            <div style="background:white;border-radius:var(--radius);padding:14px;box-shadow:var(--shadow);display:flex;align-items:center;gap:12px;">
                <div style="font-size:32px;">${votw.logo ? `<img src="${votw.logo}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'">` : votw.emoji}</div>
                <div>
                    <div style="font-weight:700;font-size:15px;">${escHtml(votw.name)}</div>
                    <div style="font-size:12px;color:var(--text-muted);">⭐ ${votw.rating} · ${votw.reviews} reviews · Score: ${(votw.rating * votw.reviews).toFixed(0)}</div>
                    <div style="font-size:12px;color:var(--primary-blue);margin-top:2px;">Auto-selected by rating × reviews</div>
                </div>
            </div>
        </div>` : ''}

        <div>
            <div style="font-size:13px;font-weight:700;color:var(--text-muted);margin-bottom:10px;letter-spacing:0.5px;">VENDOR BREAKDOWN</div>
            ${vendorRows.map(r => `
            <div style="background:white;border-radius:var(--radius);padding:12px 14px;box-shadow:var(--shadow);margin-bottom:8px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                    <span style="font-weight:600;font-size:14px;">${r.v.emoji || '🏪'} ${escHtml(r.v.name)}${r.v.suspended ? ' <span class="suspended-tag">Suspended</span>' : ''}</span>
                    <span style="font-weight:700;color:var(--primary-blue);">GH₵${r.revenue.toLocaleString()}</span>
                </div>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;">
                    <div style="text-align:center;background:var(--bg-light);border-radius:8px;padding:6px;">
                        <div style="font-size:15px;font-weight:700;">${r.total}</div>
                        <div style="font-size:10px;color:var(--text-muted);">Orders</div>
                    </div>
                    <div style="text-align:center;background:var(--bg-light);border-radius:8px;padding:6px;">
                        <div style="font-size:15px;font-weight:700;color:#2e7d32;">${r.fulfilled}</div>
                        <div style="font-size:10px;color:var(--text-muted);">Fulfilled</div>
                    </div>
                    <div style="text-align:center;background:var(--bg-light);border-radius:8px;padding:6px;">
                        <div style="font-size:15px;font-weight:700;">${r.items}</div>
                        <div style="font-size:10px;color:var(--text-muted);">Items Sold</div>
                    </div>
                </div>
            </div>`).join('')}
        </div>`;
}

// ── ADMIN: SETTINGS ──
function renderAdminSettings() {
    document.getElementById('atab-settings').innerHTML = `
        <div style="background:white;border-radius:var(--radius);padding:16px;box-shadow:var(--shadow);margin-bottom:16px;">
            <div style="font-size:13px;font-weight:700;color:var(--text-muted);margin-bottom:14px;letter-spacing:0.5px;">CHANGE ADMIN PASSWORD</div>
            <div class="form-group">
                <label>Current Password</label>
                <input type="password" id="ap-current" placeholder="Current password">
            </div>
            <div class="form-group">
                <label>New Password</label>
                <input type="password" id="ap-new" placeholder="New password (min. 4 chars)">
            </div>
            <div class="form-group">
                <label>Confirm New Password</label>
                <input type="password" id="ap-confirm" placeholder="Repeat new password">
            </div>
            <button class="btn-primary" onclick="changeAdminPassword()">Update Password</button>
        </div>
        <div style="background:white;border-radius:var(--radius);padding:16px;box-shadow:var(--shadow);margin-bottom:16px;">
            <div style="font-size:13px;font-weight:700;color:var(--text-muted);margin-bottom:6px;letter-spacing:0.5px;">DATA BACKUP & CROSS-DEVICE SYNC</div>
            <p style="font-size:13px;color:var(--text-muted);margin-bottom:14px;">All data is stored on this device only. To use the admin panel on another device or phone: <strong>Export Backup</strong> here, then open the app on the other device and <strong>Import Backup</strong>. <strong>Import overwrites all existing data.</strong></p>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
                <button class="btn-primary" onclick="exportAllData()" style="flex:1;min-width:120px;">⬇ Export Backup</button>
                <label class="btn-secondary" style="flex:1;min-width:120px;cursor:pointer;text-align:center;display:block;">
                    ⬆ Import Backup
                    <input type="file" accept=".json" style="display:none;" onchange="importAllData(this)">
                </label>
            </div>
        </div>`;
}

// SP1.4 — Export all ACM localStorage keys as a downloadable JSON file
function exportAllData() {
    const backup = {};
    const keys = ['acm_vendors','acm_announcements','acm_notifications','acm_orders','acm_order_counter',
                   'acm_requests','acm_admin_creds','acm_vendor_creds','acm_votw','acm_campus_star',
                   'acm_wishlist','acm_follows','acm_product_reviews','acm_flash_deals','acm_promo_codes',
                   'acm_recently_viewed','acm_saved_searches','acm_last_page','acm_dark_mode'];
    keys.forEach(k => { const v = localStorage.getItem(k); if (v !== null) backup[k] = v; });
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `acitymarket-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    showToast('Backup downloaded!');
}

// SP1.4 — Import a backup file and restore all keys
function importAllData(input) {
    const file = input.files[0];
    if (!file) return;
    if (!confirm('This will overwrite ALL current app data with the backup. Are you sure?')) { input.value = ''; return; }
    const reader = new FileReader();
    reader.onload = e => {
        try {
            const backup = JSON.parse(e.target.result);
            Object.entries(backup).forEach(([k, v]) => localStorage.setItem(k, v));
            showToast('Data restored! Reloading...');
            setTimeout(() => location.reload(), 1200);
        } catch(err) {
            showToast('Invalid backup file');
        }
    };
    reader.readAsText(file);
    input.value = '';
}

async function changeAdminPassword() {
    const current = document.getElementById('ap-current').value;
    const newPass = document.getElementById('ap-new').value;
    const confirm = document.getElementById('ap-confirm').value;
    if (newPass.length < 6)  { showToast('New password must be at least 6 characters'); return; }
    if (newPass !== confirm)  { showToast('Passwords do not match'); return; }
    if (!_supabase) { showToastError('Not connected to server.'); return; }

    // Re-authenticate with current password first to verify identity
    const { data: { session } } = await _supabase.auth.getSession();
    if (!session) { showToast('Session expired — please log in again'); return; }
    const { error: verifyErr } = await _supabase.auth.signInWithPassword({
        email: session.user.email, password: current
    });
    if (verifyErr) { showToast('Current password is incorrect'); return; }

    const { error } = await _supabase.auth.updateUser({ password: newPass });
    if (error) { showToastError('Password update failed: ' + error.message); return; }
    showToast('Password updated successfully');
    document.getElementById('ap-current').value = '';
    document.getElementById('ap-new').value = '';
    document.getElementById('ap-confirm').value = '';
}

// ── ADMIN: RESET VENDOR PASSWORD ──
// SP3.1 — vendor name is now looked up from data instead of passed through an onclick string
// (user-controlled strings in onclick attributes are an injection risk)
function openResetVendorPass(vendorId) {
    const vendor = getVendors().find(v => v.id === vendorId);
    document.getElementById('rvp-vendorId').value = vendorId;
    document.getElementById('rvp-vendorName').textContent = vendor ? vendor.name : 'Unknown';
    document.getElementById('rvp-newPass').value = '';
    document.getElementById('rvp-confirmPass').value = '';
    document.getElementById('resetVendorPassModal').classList.remove('hidden');
}

async function confirmResetVendorPass() {
    // Resetting another user's password requires a server-side function with Supabase's
    // service role key — this will be enabled in a later phase when the backend is set up.
    showToast('Password reset via admin panel coming in a future update. Ask the vendor to use "Forgot Password" when that feature is added.');
    closeModal('resetVendorPassModal');
}

// ═══════════════════════════════════════════
// VENDOR REGISTRATION WIZARD
// ═══════════════════════════════════════════
let vregCurrentStep = 1;
const VREG_TOTAL = 6;
const VREG_LABELS = ['Store Identity', 'Look & Feel', 'Pickup', 'Contact', 'ID & Account', 'Shop Policy'];

function showVregStep(n) {
    vregCurrentStep = n;
    for (let i = 1; i <= VREG_TOTAL; i++) {
        const block = document.getElementById('vreg-s' + i);
        if (block) block.classList.toggle('active', i === n);
    }
    for (let i = 1; i <= VREG_TOTAL; i++) {
        const dot = document.getElementById('vdot-' + i);
        if (!dot) continue;
        dot.classList.remove('active', 'done');
        if (i < n)      dot.classList.add('done');
        else if (i === n) dot.classList.add('active');
    }
    for (let i = 1; i < VREG_TOTAL; i++) {
        const line = document.getElementById('vline-' + i);
        if (line) line.classList.toggle('done', i < n);
    }
    const label = document.getElementById('vregStepLabel');
    if (label) label.textContent = `Step ${n} of ${VREG_TOTAL} — ${VREG_LABELS[n - 1]}`;
    const back = document.getElementById('vregBackBtn');
    if (back) back.classList.toggle('hidden', n === 1);
    const next = document.getElementById('vregNextBtn');
    if (next) next.textContent = n === VREG_TOTAL ? 'Register Store' : 'Next →';
    // Scroll modal body to top when changing steps
    const modalBody = document.querySelector('#vendorRegisterModal .modal-body');
    if (modalBody) modalBody.scrollTop = 0;
}

function vregBack() {
    if (vregCurrentStep > 1) showVregStep(vregCurrentStep - 1);
}

function vregNext() {
    const n = vregCurrentStep;

    if (n === 1) {
        const storeName = document.getElementById('vr-storeName').value.trim();
        const category  = document.getElementById('vr-category').value;
        const desc      = document.getElementById('vr-desc').value.trim();
        const name      = document.getElementById('vr-studentName').value.trim();
        if (!storeName) { showToast('Please enter your store name'); return; }
        if (!category)  { showToast('Please select a category'); return; }
        if (!desc)      { showToast('Please add a short description'); return; }
        if (!name)      { showToast('Please enter your full name'); return; }
    }

    // Step 2 — all optional (logo, emoji, availability have defaults)

    if (n === 3) {
        const pickupLabel = getPickupLabel();
        if (!pickupLabel) { showToast('Please set your pickup or delivery location'); return; }
    }

    if (n === 4) {
        const wa = document.getElementById('vr-whatsapp').value.trim();
        if (!wa) { showToast('WhatsApp number is required so customers can reach you'); return; }
    }

    if (n === 5) {
        const idFile   = document.getElementById('vr-idPhoto').files[0];
        const email    = document.getElementById('vr-email').value.trim();
        const password = document.getElementById('vr-password').value;
        const confirm  = document.getElementById('vr-confirm').value;
        if (!idFile)              { showToast('Please upload your student ID photo'); return; }
        if (!email)               { showToast('Please enter your email address'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Please enter a valid email address'); return; }
        if (password.length < 6)  { showToast('Password must be at least 6 characters'); return; }
        if (password !== confirm)  { showToast('Passwords do not match'); return; }
    }

    if (n === VREG_TOTAL) {
        submitVendorRegister();
        return;
    }

    showVregStep(n + 1);
}

// ═══════════════════════════════════════════
// ONBOARDING
// ═══════════════════════════════════════════
// obCurrentSlide and OB_TOTAL are declared earlier (near global state) to avoid TDZ crash

function initOnboarding() {
    if (localStorage.getItem('acm_onboarded')) return;
    const overlay = document.getElementById('onboardingOverlay');
    if (!overlay) return;
    overlay.classList.remove('hidden');
    showObSlide(0);
    // Touch swipe support
    let _touchStartX = 0;
    overlay.addEventListener('touchstart', e => { _touchStartX = e.touches[0].clientX; }, { passive: true });
    overlay.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - _touchStartX;
        if (Math.abs(dx) < 40) return; // ignore small taps
        if (dx < 0 && obCurrentSlide < OB_TOTAL - 1) showObSlide(obCurrentSlide + 1); // swipe left → next
        if (dx > 0 && obCurrentSlide > 0) showObSlide(obCurrentSlide - 1);             // swipe right → prev
    }, { passive: true });
}

function showObSlide(n) {
    obCurrentSlide = n;
    const track = document.getElementById('obTrack');
    if (track) track.style.transform = `translateX(calc(${n} * -100vw))`;
    for (let i = 0; i < OB_TOTAL; i++) {
        const dot = document.getElementById('ob-dot-' + i);
        if (dot) dot.classList.toggle('active', i === n);
    }
    const btn = document.getElementById('obNextBtn');
    if (btn) btn.textContent = n === OB_TOTAL - 1 ? "Let's Go!" : 'Next';
    // Toggle skip button + dots style based on dark/light slide (0 and 2 are dark)
    const isDark = n === 0 || n === 2;
    const skipBtn = document.querySelector('.ob-skip');
    if (skipBtn) skipBtn.classList.toggle('ob-skip-light', !isDark);
    const dotsEl = document.querySelector('.ob-dots');
    if (dotsEl) {
        dotsEl.style.background = isDark ? 'transparent' : '';
        dotsEl.querySelectorAll('.ob-dot').forEach(d => {
            d.style.background = d.classList.contains('active')
                ? (isDark ? 'white' : '')
                : (isDark ? 'rgba(255,255,255,0.35)' : '');
        });
    }
    const footer = document.querySelector('.ob-footer');
    if (footer) {
        footer.style.background = isDark ? 'linear-gradient(160deg,#1e3a5f,#2563eb)' : '';
        footer.querySelectorAll('button').forEach(b => {
            b.style.color = isDark ? 'white' : '';
            b.style.background = isDark ? 'white' : '';
            b.style.color = isDark && b.id === 'obNextBtn' ? '#1e3a5f' : '';
        });
    }
}

function obNext() {
    if (obCurrentSlide < OB_TOTAL - 1) {
        showObSlide(obCurrentSlide + 1);
    } else {
        obFinish();
    }
}

function obSkip() { obFinish(); }

function obFinish() {
    localStorage.setItem('acm_onboarded', '1');
    const overlay = document.getElementById('onboardingOverlay');
    if (overlay) {
        overlay.style.transition = 'opacity 0.35s';
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.classList.add('hidden'); overlay.style.opacity = ''; showWelcome(); }, 350);
    }
}

// ── WELCOME CHOICE OVERLAY ──
function showWelcome() {
    if (localStorage.getItem('acm_welcomed')) return;
    const el = document.getElementById('welcomeOverlay');
    if (el) { el.classList.remove('hidden'); el.style.opacity = '0'; requestAnimationFrame(() => { el.style.transition = 'opacity 0.3s'; el.style.opacity = '1'; }); }
}

function dismissWelcome() {
    localStorage.setItem('acm_welcomed', '1');
    const el = document.getElementById('welcomeOverlay');
    if (el) { el.style.transition = 'opacity 0.3s'; el.style.opacity = '0'; setTimeout(() => el.classList.add('hidden'), 300); }
}

function welcomeChooseCustomer() {
    dismissWelcome();
    setTimeout(() => openSigninModal(), 350);
}

function welcomeChooseVendor() {
    document.querySelectorAll('#welcomeOverlay > div:not(#welcomeVendorOptions)').forEach(el => el.style.display = 'none');
    document.getElementById('welcomeVendorOptions').style.display = '';
}

function welcomeBackToMain() {
    document.getElementById('welcomeVendorOptions').style.display = 'none';
    document.querySelectorAll('#welcomeOverlay > div:not(#welcomeVendorOptions)').forEach(el => el.style.display = '');
}

function welcomeVendorRegister() {
    dismissWelcome();
    setTimeout(() => { showPage('mystore'); openVendorRegister(); }, 350);
}

function welcomeVendorLogin() {
    dismissWelcome();
    setTimeout(() => { showPage('mystore'); openVendorLogin(); }, 350);
}

function welcomeSkip() {
    dismissWelcome();
}

// ── SIGN-IN GATE ──
function requireCustomer(msg) {
    if (state.currentUser) return true;
    openSigninModal(msg || 'Sign in to continue');
    return false;
}

// ═══════════════════════════════════════════
// ADMIN SECRET ACCESS — 5 taps on the logo
// ═══════════════════════════════════════════
let _logoTaps = 0, _logoTapTimer = null;
function handleLogoTap() {
    _logoTaps++;
    clearTimeout(_logoTapTimer);
    _logoTapTimer = setTimeout(() => { _logoTaps = 0; }, 1200);
    if (_logoTaps >= 5) {
        _logoTaps = 0;
        openAdminLogin();
    }
}

// ═══════════════════════════════════════════
// DARK MODE
// ═══════════════════════════════════════════
function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('acm_dark_mode', isDark ? '1' : '0');
    updateDarkModeIcon();
}

function updateDarkModeIcon() {
    // Refresh the drawer toggle if the drawer is currently open
    if (document.getElementById('menuDrawerOverlay')?.classList.contains('open')) {
        updateMenuDrawer();
    }
}