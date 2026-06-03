// ═══════════════════════════════════════════
// SUPABASE CLIENT
// Replace the two values below after you create your Supabase project.
// Dashboard → Project Settings → API
// ═══════════════════════════════════════════

const SUPABASE_URL = 'https://qvteganlzuepwhzashfk.supabase.co';       // e.g. https://xxxx.supabase.co
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2dGVnYW5senVlcHdoemFzaGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0Nzc1MjEsImV4cCI6MjA5NjA1MzUyMX0.lRCwscV2hc8BJoj63Mbsb5hwVGbQLXZoG8CjG8XE3kw'; // public anon key (safe to expose)

// Supabase client — available globally as `_supabase`
const _supabase = window.supabase
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

// Phase 5B: Supabase Auth is now active for vendor and admin login/register.
// All auth calls go through _supabase.auth.*
