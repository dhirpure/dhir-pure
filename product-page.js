/* Dedicated product pages share the catalogue and gallery in script.js. */
function productPageMarkup(p) {
  const e = escapeHTML;
  const variants = p.cat === "cups" ? PRODUCTS.filter(item => item.cat === "cups") : [];
  const saving = p.mrp > p.price ? Math.round((1 - p.price / p.mrp) * 100) : 0;
  const specs = [["Pack", p.packSize], ["Net weight", p.netWeight], ["Stick length", p.stickSize], ["Box dimensions", p.boxDimensions], ["Product code", p.sku]].filter(([,value]) => value);
  const related = PRODUCTS.filter(item => item.id !== p.id).sort((a,b) => Number(b.cat === p.cat) - Number(a.cat === p.cat)).slice(0,4);
  return `
    <nav class="product-breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="shop.html">Collection</a><span>/</span><span>${e(p.name)}</span></nav>
    <section class="product-layout" aria-labelledby="product-title">
      <div class="product-visual">${productGallery(p)}<p class="image-hint">${p.images.length > 1 ? "Select a view · Click the image to see it full size" : p.images.length ? "Click the image to see it full size" : "Product photography coming soon"}</p></div>
      <div class="product-summary">
        <p class="product-kicker">DHIRPURE™ · ${p.cat === "cups" ? "Sambrani Havan Cups" : p.cat === "combo" ? "Fragrance Collection" : "Dhoop Sticks"}</p>
        <h1 id="product-title">${e(p.name)}</h1>
        <p class="product-scent">${e(p.fragrance)}</p>
        <div class="product-price-row"><strong>₹${p.price}</strong>${saving ? `<del>₹${p.mrp}</del><span class="product-saving">${saving}% OFF</span>` : ""}</div>
        <p class="tax-note">Inclusive of all taxes</p>
        <p class="product-intro">${e(p.desc)}</p>
        <div class="product-pack-selector"><h2>Pack size</h2>${variants.length ? `<div class="pack-options">${variants.map(item => `<a href="product.html?id=${encodeURIComponent(item.id)}" class="pack-option${item.id === p.id ? " selected" : ""}" ${item.id === p.id ? 'aria-current="true"' : ""}>${e(item.packSize.split(" +")[0])}</a>`).join("")}</div>` : `<p class="pack-option selected">${e(p.packSize)}</p>`}</div>
        <form class="product-order-form" id="product-order-form">
          <label for="product-quantity">Quantity</label>
          <div class="order-row"><div class="quantity-stepper"><button type="button" data-quantity-change="-1" aria-label="Decrease quantity">−</button><input id="product-quantity" name="quantity" type="number" min="1" max="99" step="1" value="1" required /><button type="button" data-quantity-change="1" aria-label="Increase quantity">+</button></div><button type="submit" class="btn product-order-button">${waGlyph()} Order on WhatsApp</button></div>
          <p class="order-total" id="order-total" aria-live="polite">Total: ₹${p.price}</p>
        </form>
        <div class="product-assurances"><div><b>Charcoal-free</b><span>Inspired by sacred traditions</span></div><div><b>Nationwide delivery</b><span>Free shipping above ₹699</span></div><div><b>Here to help</b><a href="contact.html">Contact our team ↗</a></div></div>
      </div>
    </section>
    <section class="product-information" aria-label="Product information">
      <div class="product-tabs" role="tablist" aria-label="Product details">${[["details","Details"],["ingredients","Ingredients"],["usage","Usage & Safety"],["delivery","Shipping & Returns"]].map(([id,label],index) => `<button id="tab-${id}" type="button" role="tab" aria-selected="${index === 0}" aria-controls="panel-${id}" tabindex="${index === 0 ? 0 : -1}">${label}</button>`).join("")}</div>
      <div class="product-information-layout"><div class="product-panels">
        <section id="panel-details" role="tabpanel" aria-labelledby="tab-details" tabindex="0"><h2>A fragrance for your daily ritual</h2><p>${e(p.highlights)}</p><p>${e(p.scent)}</p><dl class="product-specs">${specs.map(([label,value])=>`<div><dt>${e(label)}</dt><dd>${e(value)}</dd></div>`).join("")}</dl></section>
        <section id="panel-ingredients" role="tabpanel" aria-labelledby="tab-ingredients" tabindex="0" hidden><h2>What's inside</h2><p>${e(p.ingredients)}</p></section>
        <section id="panel-usage" role="tabpanel" aria-labelledby="tab-usage" tabindex="0" hidden><h2>How to use</h2><p>${e(p.usage)}</p><h3>Use with care</h3><p>${e(p.safety)}</p></section>
        <section id="panel-delivery" role="tabpanel" aria-labelledby="tab-delivery" tabindex="0" hidden><h2>Delivery & support</h2><p>We ship across India. Free shipping applies to orders above ₹699. Contact us on WhatsApp for delivery details.</p><p>You can cancel within 12 hours of ordering or before dispatch, whichever comes first. Opened or used products cannot be returned or exchanged. Please report damaged, missing or incorrect items within 48 hours of delivery with your Order ID, photos and an unboxing video.</p><a href="refund-and-cancellation-policy.html">Read the full Refund & Cancellation Policy ↗</a></section>
      </div><aside class="product-story"><span class="product-kicker">Blessings of God</span><h2>A little stillness.<br>A sacred moment.</h2><p>Discover the inspiration behind DHIRPURE and the fragrances we bring to your home.</p><a href="about.html">Our story ↗</a></aside></div>
    </section>
    <section class="related-products" aria-labelledby="related-title"><div class="related-heading"><h2 id="related-title">You may also like</h2><a href="shop.html">View collection ↗</a></div><div class="product-grid">${related.map(productCard).join("")}</div></section>`;
}

function setupProductPage() {
  const root = document.getElementById("product-page");
  if (!root) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) {
    document.title = "Product not found — DHIRPURE™";
    root.innerHTML = '<section class="product-not-found"><h1>Product not found</h1><p>Explore our collection to find your fragrance.</p><a class="btn btn-primary" href="shop.html">Browse collection</a></section>';
    return;
  }
  document.title = `${p.name} — DHIRPURE™`;
  document.querySelector('meta[name="description"]').content = p.desc;
  root.innerHTML = productPageMarkup(p);
  const quantity = document.getElementById("product-quantity");
  const total = document.getElementById("order-total");
  root.querySelectorAll("[data-quantity-change]").forEach(button => button.addEventListener("click", () => {
    quantity.value = Math.max(1, Math.min(99, (Number(quantity.value) || 1) + Number(button.dataset.quantityChange)));
    total.textContent = `Total: ₹${p.price * Number(quantity.value)}`;
  }));
  quantity.addEventListener("input", () => {
    total.textContent = quantity.validity.valid ? `Total: ₹${p.price * Number(quantity.value)}` : "Choose a quantity from 1 to 99.";
  });
  document.getElementById("product-order-form").addEventListener("submit", event => {
    event.preventDefault();
    if (!quantity.reportValidity()) return;
    const count = Number(quantity.value);
    window.open(waLink(`Namaste ${BRAND}, I'd like to order ${count} × ${p.name} (${p.packSize}). SKU: ${p.sku}. Price: ₹${p.price} each. Product total: ₹${p.price * count}. Please confirm delivery and final order details.`), "_blank", "noopener");
  });
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  function selectTab(tab) {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute("aria-controls")).hidden = !active;
    });
  }
  tabs.forEach((tab,index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", event => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault(); selectTab(tabs[next]); tabs[next].focus();
    });
  });
  observeReveals();
}

document.addEventListener("DOMContentLoaded", setupProductPage);
