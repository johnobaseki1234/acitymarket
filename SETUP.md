# ACity Market — Phase 5A Setup Guide

Follow these steps in order. Each step tells you exactly where to click.

---

## Step 1 — Create your Supabase project

1. Go to https://supabase.com and sign up (free).
2. Click **New project**.
3. Name it `acitymarket`. Choose any region (pick one close to Ghana, e.g. **Europe West**).
4. Set a strong database password and save it somewhere safe.
5. Wait ~2 minutes for the project to finish setting up.

---

## Step 2 — Get your API keys

1. In your Supabase project, click **Project Settings** (gear icon, bottom left).
2. Click **API** in the sidebar.
3. Copy two values:
   - **Project URL** — looks like `https://xxxx.supabase.co`
   - **anon / public key** — a long string starting with `eyJ...`

4. Open `supabase.js` and replace:
   ```
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   ```
   with your actual values.

---

## Step 3 — Push to GitHub

1. Go to https://github.com and create a **new repository** called `acitymarket`.
   - Set it to **Public** (required for free Vercel hosting).
   - Do NOT add a README (the repo should start empty).

2. Open a terminal in the `acitymarket` folder and run:
   ```
   git init
   git add index.html styles.css app.js supabase.js .gitignore
   git commit -m "Phase 5A: split into multi-file project"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/acitymarket.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 4 — Deploy on Vercel

1. Go to https://vercel.com and sign up with your GitHub account.
2. Click **Add New → Project**.
3. Find `acitymarket` in the list and click **Import**.
4. Leave all settings as default — Vercel will detect it as a static site.
5. Click **Deploy**.
6. In ~30 seconds you'll get a live URL like `acitymarket.vercel.app`.

---

## Step 5 — Test

Open your Vercel URL. The app should look and work exactly like the local HTML file.
At this stage it still uses localStorage — Supabase integration comes in Phase 5B.

---

## Files in this project

| File | Purpose |
|------|---------|
| `index.html` | App HTML structure |
| `styles.css` | All styling and dark mode |
| `app.js` | All app logic (5,500+ lines) |
| `supabase.js` | Supabase client (fill in your keys) |
