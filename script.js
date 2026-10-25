/* =========================================================
   DHIRPURE — site script
   EDIT THIS NUMBER → your WhatsApp business number (with country code, no + or spaces)
   ========================================================= */
const WHATSAPP_NUMBER = "917424918600"; // country code + number, no + or spaces
const BRAND = "DHIRPURE";

/* ---- Product catalogue (edit freely) ---- */
const PRODUCTS = [
  {
    "id": "chandan",
    "sku": "DP-SND-00001",
    "name": "Chandan Dhoop Sticks",
    "fragrance": "Sandalwood",
    "cat": "dhoop",
    "price": 249,
    "mrp": 249,
    "tag": "",
    "motif": "sandal",
    "featured": true,
    "images": [],
    "desc": "Welcome a temple-like atmosphere into your home with Chandan Dhoop Sticks, inspired by Vedic traditions and blended with sacred tirth and Dham Raj.",
    "scent": "Rich, woody, and intensely creamy authentic Mysore Sandalwood aroma with sweet, balsamic undertones that linger for hours.",
    "highlights": "Charcoal-free and bamboo-less, with sacred Dham Raj and a delicate white ash.",
    "packSize": "1 pack · 100 g",
    "netWeight": "100 g",
    "stickSize": "3.5 inches",
    "boxDimensions": "3.5 × 1.5 × 5 inches",
    "ingredients": "Organic Desi Cow Dung Powder, Premium Cedarwood bark Powder, havan herbs, Pure Jigat powder (Natural Binder), Sacred Tirth & Dham's Raj, Premium Indian Attars, and Essential Perfumes and a DHIRPURE special ingredient.",
    "usage": "Hold the tip of the dhoop stick over a flame until it catches fire. Let it burn for a few seconds, then gently blow out the flame. Place it securely in the provided heat-resistant dhoop holder.",
    "safety": "Keep away from flammable objects, children, and pets. Burn only in well-ventilated areas. Never leave a burning incense stick unattended.",
    "stock": null
  },
  {
    "id": "kasturi",
    "sku": "DP-KAS-00003",
    "name": "Kasturi Dhoop Sticks",
    "fragrance": "Kasturi Musk",
    "cat": "dhoop",
    "price": 249,
    "mrp": 249,
    "tag": "",
    "motif": "sandal",
    "featured": true,
    "images": [],
    "desc": "Bring a deep, earthy musk fragrance to your yoga space, meditation corner or daily pooja with sun-dried Kasturi Dhoop Sticks.",
    "scent": "Deep, earthy musk with a subtle warm, amber sweetness.",
    "highlights": "Charcoal-free and bamboo-less, with sacred tirth elements and natural plant-based resins.",
    "packSize": "1 pack · 100 g",
    "netWeight": "100 g",
    "stickSize": "3.5 inches",
    "boxDimensions": "3.5 × 1.5 × 5 inches",
    "ingredients": "Organic Desi Cow Dung Powder, Premium Cedarwood bark Powder, havan herbs, Pure Kasturi Musk Attar Blend, Jigat powder (natural binder), Sacred Dham Raj, and Pure Essential Oils and a DHIRPURE special ingredient.",
    "usage": "Tilt the stick at an angle and light the tip. Wait for it to glow evenly, blow out the active flame, and position it on the incense holder.",
    "safety": "Do not place on painted or plastic surfaces. Ensure the falling white ash lands inside a metallic or ceramic tray. Keep out of reach of children.",
    "stock": null
  },
  {
    "id": "guggal",
    "sku": "DP-GGL-00002",
    "name": "Guggal Dhoop Sticks",
    "fragrance": "Guggal Resin",
    "cat": "dhoop",
    "price": 249,
    "mrp": 249,
    "tag": "",
    "motif": "sandal",
    "featured": true,
    "images": [],
    "desc": "A warm, resinous fragrance inspired by temple rituals, blending Indian Guggal resin with Desi cow dung powder for your daily pooja.",
    "scent": "Warm, intensely resinous, smoky-sweet, and traditional balsamic fragrance reminiscent of ancient temple rituals.",
    "highlights": "Made with premium Indian Guggal resin and Desi cow dung powder, without charcoal.",
    "packSize": "1 pack · 100 g",
    "netWeight": "100 g",
    "stickSize": "3.5 inches",
    "boxDimensions": "3.5 × 1.5 × 5 inches",
    "ingredients": "High-Grade Pure Guggal Resin, Organic Desi Cow Dung Powder, Himalayan Deodar Wood Powder, Kapur Kachri, Nagarmotha, Jigat Binder, and Sacred Tirth Raj, and a DHIRPURE special ingredient.",
    "usage": "Ignite the top end of the stick. Allow the flame to steady for 5 seconds, then blow it out to let the resinous smoke rise gently.",
    "safety": "Place on a stable, fireproof surface. Ensure the ash collector is large enough to safely catch all remnants.",
    "stock": null
  },
  {
    "id": "flower-fulwadi",
    "sku": "DP-FLR-00005",
    "name": "Flower Fulwadi Dhoop Sticks",
    "fragrance": "Floral Bouquet",
    "cat": "dhoop",
    "price": 249,
    "mrp": 249,
    "tag": "",
    "motif": "sandal",
    "featured": true,
    "images": [],
    "desc": "Welcome the fragrance of a blooming garden with Flower Fulwadi Dhoop Sticks, made with dried sacred flower petals and floral attars.",
    "scent": "A refreshing, uplifting bouquet of sacred Indian flowers (Rose, Marigold, Jasmin) beautifully balanced with clean, sweet floral highlights.",
    "highlights": "Made with upcycled sacred flower petals, without bamboo or charcoal.",
    "packSize": "1 pack · 100 g",
    "netWeight": "100 g",
    "stickSize": "3.5 inches",
    "boxDimensions": "3.5 × 1.5 × 5 inches",
    "ingredients": "Dried Sacred Flower Petals, Himalayan Deodar Wood Powder, Organic Cow Dung Powder, Pure Mogra & Rose Attars, Jigat Natural Binder, and Blessed Dham Raj, and a DHIRPURE special ingredient.",
    "usage": "Burn the tip of the stick till a small flame appears. Gently fan or blow out the flame to let the floral essential oils vaporize smoothly.",
    "safety": "Keep away from drafts, open windows, or direct fans to maintain a smooth burn. Do not ingest or place in direct contact with skin.",
    "stock": null
  },
  {
    "id": "guggal-loban-cups",
    "sku": "DP-SHC-00006",
    "name": "Guggal Loban Sambrani Havan Cups",
    "fragrance": "Guggal & Loban",
    "cat": "cups",
    "price": 149,
    "mrp": 199,
    "tag": "",
    "motif": "cup",
    "featured": true,
    "images": [],
    "desc": "Bring a traditional havan fragrance into your space with ready-to-light Guggal Loban Sambrani Havan Cups, filled with resins and herbs.",
    "scent": "Deeply intense, mystical, and traditional wood-resin aroma. The dry, sweet crystallization of Loban merges perfectly with the deep, grounding, sacred notes of pure Guggal.",
    "highlights": "A charcoal-free cup made with herbs and cow dung, filled with Guggal and Loban resins. Includes a complimentary metal/clay burner plate.",
    "packSize": "12 cups + complimentary burner plate",
    "netWeight": null,
    "stickSize": null,
    "boxDimensions": "14 × 10 × 4 cm",
    "ingredients": "Pure Benzoin (Loban Crystals), Premium Guggul Resin, Bhimseni Camphor, Organic Desi Cow Dung Base, Jatamansi, Sugandhi Kokila, and Sprinkled with Sacred Tirth & Dham Raj.",
    "usage": "Hold the bottom of the sambrani cup and tilt it. Light the top outer rim evenly all around using a lighter or matchstick until the rim glows red. Place it upright on the included metal/clay stand and let the inner resin catch fire naturally.",
    "safety": "High smoke output product—ideal for open spaces or rooms with good ventilation. Place exclusively on a steady, fireproof metal or earthenware plate. Do not touch while burning as the outer cup gets extremely hot.",
    "stock": null
  }
];

/* ---- Tiny SVG motifs used as placeholder product art (swap for real photos later) ---- */
function motifSVG(kind) {
  const flame = `<path d="M50 18c10 14 18 20 18 34a18 18 0 1 1-36 0c0-7 4-12 8-18 3 6 6 8 10 8-4-8-4-16 0-24z" fill="url(#g)"/>`;
  const petals = `<g fill="none" stroke="url(#g)" stroke-width="3">
      <path d="M50 70c-16 0-26-10-30-24 14-2 24 4 30 14 6-10 16-16 30-14-4 14-14 24-30 24z"/>
      <path d="M50 66c-9-2-15-9-16-20 9 1 14 6 16 13 2-7 7-12 16-13-1 11-7 18-16 20z"/>
    </g>`;
  const stick = `<g stroke="url(#g)" stroke-width="3" stroke-linecap="round">
      <line x1="34" y1="80" x2="44" y2="24"/><line x1="50" y1="82" x2="50" y2="22"/><line x1="66" y1="80" x2="56" y2="24"/>
      <circle cx="44" cy="22" r="3" fill="url(#g)" stroke="none"/><circle cx="50" cy="20" r="3" fill="url(#g)" stroke="none"/><circle cx="56" cy="22" r="3" fill="url(#g)" stroke="none"/>
    </g>`;
  const cup = `<g fill="none" stroke="url(#g)" stroke-width="3">
      <path d="M32 58h36l-5 22a6 6 0 0 1-6 5H43a6 6 0 0 1-6-5z"/><path d="M50 52c8-6 4-16-2-22 1 8-6 10-4 18" stroke-linecap="round"/>
    </g>`;
  const inner = kind === "cup" ? cup : kind === "combo" ? stick : kind === "saffron" ? flame : petals;
  return `<svg class="motif" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#b07d12"/><stop offset=".5" stop-color="#e8c25a"/><stop offset="1" stop-color="#c9971c"/>
    </linearGradient></defs>${inner}</svg>`;
}

function mediaBg() {
  return "linear-gradient(160deg, #fdf9f0 0%, #f7efe0 60%, #f0e3c9 100%)";
}

function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function productCard(p) {
  const msg = `Namaste ${BRAND} 🙏, I'd like to order: ${p.name} — ${p.packSize} (SKU: ${p.sku}) — ₹${p.price}.`;
  const details = [
    ["Fragrance", p.scent], ["What makes it distinctive", p.highlights],
    ["Pack size", p.packSize], ["Net weight", p.netWeight],
    ["Stick size", p.stickSize], ["Box dimensions", p.boxDimensions],
    ["Ingredients", p.ingredients], ["How to use", p.usage],
    ["Safety precautions", p.safety], ["SKU", p.sku]
  ].filter(([, value]) => value);
  return `
  <article class="card reveal">
    <div class="card-media" style="background:${mediaBg()}">
      ${p.images.length ? `<img src="${escapeHTML(p.images[0])}" alt="${escapeHTML(p.name)}" loading="lazy" />` : motifSVG(p.motif)}
    </div>
    <div class="card-body">
      <span class="fragrance">${escapeHTML(p.fragrance)}</span>
      <h3>${escapeHTML(p.name)}</h3>
      <p class="product-pack">${escapeHTML(p.packSize)}</p>
      <p class="desc">${escapeHTML(p.desc)}</p>
      <div class="card-meta">
        <span class="price">₹${p.price}${p.mrp > p.price ? `<small><span class="sr-only">MRP </span>₹${p.mrp}</small>` : ""}</span>
      </div>
      <details class="product-details">
        <summary>Product details</summary>
        <dl>${details.map(([label, value]) => `<dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value)}</dd>`).join("")}</dl>
      </details>
      <a class="btn btn-wa btn-sm" href="${waLink(msg)}" target="_blank" rel="noopener">
        ${waGlyph()} Order on WhatsApp
      </a>
    </div>
  </article>`;
}

function waGlyph() {
  return `<svg class="wa-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.13c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg>`;
}

/* ---- Render product grids ---- */
function renderProducts() {
  const featuredEl = document.getElementById("featured-grid");
  if (featuredEl) {
    featuredEl.innerHTML = PRODUCTS.filter(p => p.featured).map(productCard).join("");
  }
  const shopEl = document.getElementById("shop-grid");
  if (shopEl) {
    shopEl.innerHTML = PRODUCTS.map(productCard).join("");
    setupFilters();
  }
}

/* ---- Shop filters ---- */
function setupFilters() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => btn.addEventListener("click", () => {
    btns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.cat;
    const list = cat === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
    document.getElementById("shop-grid").innerHTML = list.map(productCard).join("");
    observeReveals();
  }));
}

/* ---- Mobile nav ---- */
function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    toggle.classList.remove("open"); links.classList.remove("open");
  }));
}

/* ---- Set every WhatsApp link on the page ---- */
function setupWhatsApp() {
  const defaultMsg = `Namaste ${BRAND} 🙏, I'd like to know more about your dhoop products.`;
  document.querySelectorAll("[data-wa]").forEach(el => {
    const custom = el.getAttribute("data-wa");
    el.setAttribute("href", waLink(custom && custom.length > 1 ? custom : defaultMsg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

/* ---- FAQ accordion ---- */
function setupFAQ() {
  document.querySelectorAll(".faq-q").forEach(q => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("open");
        i.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!open) {
        item.classList.add("open");
        item.querySelector(".faq-a").style.maxHeight = item.querySelector(".faq-a").scrollHeight + "px";
      }
    });
  });
}

/* ---- Contact form (no backend → opens WhatsApp with details) ---- */
function setupForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
    const msg = `Namaste ${BRAND} 🙏%0A%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener");
  });
}

/* ---- Scroll reveal ---- */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); } });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
}

/* ---- Logo fallback (if assets/logo.png is missing, show wordmark) ---- */
function setupLogoFallback() {
  document.querySelectorAll(".brand-logo").forEach(img => {
    img.addEventListener("error", () => {
      const wrap = document.createElement("span");
      wrap.className = "brand-text";
      wrap.innerHTML = `<b>DHIRPURE</b><span>Blessings of God</span>`;
      img.replaceWith(wrap);
    });
  });
}

/* ---- Footer year ---- */
function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupNav();
  setupWhatsApp();
  setupFAQ();
  setupForm();
  setupLogoFallback();
  setYear();
  observeReveals();
});
