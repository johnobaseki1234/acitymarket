-- ACity Market — Phase 5C Database Schema
-- Run this in: Supabase → SQL Editor → New query → Paste → Run

-- ── TABLES ──

CREATE TABLE IF NOT EXISTS vendors (
  id TEXT PRIMARY KEY,
  name TEXT,
  status TEXT DEFAULT 'open',
  pending_approval BOOLEAN DEFAULT true,
  data JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  vendor_id TEXT,
  customer_name TEXT,
  status TEXT DEFAULT 'pending',
  placed_at BIGINT,
  data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS announcements (
  id TEXT PRIMARY KEY,
  date TIMESTAMPTZ DEFAULT NOW(),
  data JSONB NOT NULL
);

CREATE TABLE IF NOT EXISTS notifications (
  id TEXT PRIMARY KEY,
  for_user TEXT,
  for_vendor_id TEXT,
  read BOOLEAN DEFAULT false,
  data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS requests (
  id TEXT PRIMARY KEY,
  vendor_id TEXT,
  type TEXT,
  status TEXT DEFAULT 'pending',
  data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS app_config (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── ROW LEVEL SECURITY ──

ALTER TABLE vendors       ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders        ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE requests      ENABLE ROW LEVEL SECURITY;
ALTER TABLE app_config    ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_all" ON vendors       FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow_all" ON orders        FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow_all" ON announcements FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow_all" ON notifications FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow_all" ON requests      FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow_all" ON app_config    FOR ALL USING (true) WITH CHECK (true);

-- ── ENABLE REALTIME ──
-- Allows live updates via Supabase channels (Phase 5D)

ALTER PUBLICATION supabase_realtime ADD TABLE vendors;
ALTER PUBLICATION supabase_realtime ADD TABLE orders;
ALTER PUBLICATION supabase_realtime ADD TABLE notifications;
ALTER PUBLICATION supabase_realtime ADD TABLE requests;

-- ── SEED CONFIG ──

INSERT INTO app_config (key, value) VALUES ('order_counter', '0') ON CONFLICT (key) DO NOTHING;
INSERT INTO app_config (key, value) VALUES ('campus_star', '')    ON CONFLICT (key) DO NOTHING;
