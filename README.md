# DHIR PURE — Website

Pure handcrafted dhoop & sambrani brand site. Plain **HTML + CSS + JavaScript** — no build step, ready to deploy.

## 📁 Files
```
dhir-pure/
├── index.html      # Home
├── shop.html       # Shop (filterable product grid)
├── about.html      # Brand story + FAQ
├── contact.html    # Contact + WhatsApp form
├── styles.css      # All styles (brand colors as CSS variables at top)
├── script.js       # Products, filters, nav, WhatsApp links
└── assets/
    └── logo.png    # ⬅️ ADD YOUR LOGO HERE (see below)
```

## ✅ Before you go live — 3 quick edits

1. **Add your logo** → save the circular DHIR PURE logo as `assets/logo.png`.
   *(Until you do, the site shows a clean text wordmark automatically — nothing breaks.)*

2. **Set your WhatsApp number** → open `script.js`, line ~7:
   ```js
   const WHATSAPP_NUMBER = "919999999999"; // ← your number, country code, no + or spaces
   ```
   Example for India: `"919812345678"`.

3. **Update contact details** → search-and-replace these placeholders across the files:
   - `+91 99999 99999` (footer phone)
   - `hello@dhirpure.com` (email)
   - Edit products/prices in the `PRODUCTS` array in `script.js`.

## 🎨 Brand colors
Defined at the top of `styles.css` under `:root` — maroon `#7a1220`, gold `#c9971c`, cream `#fdf9f0`. Change once, applies everywhere.

## 🚀 Deploy to Vercel
1. Push this `dhir-pure` folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Framework preset: **Other** · Root directory: `dhir-pure` (if pushed as a subfolder) or `/` (if pushed alone). No build command needed.
4. **Deploy** → you get a live `*.vercel.app` URL.
5. **Custom domain:** Project → Settings → Domains → add your domain and update DNS as Vercel instructs.

> Tip: if you push only the website, put these files at the repo root so Vercel auto-detects them with zero config.
