# DHIR PURE

Static website for DHIR PURE, a brand offering handcrafted, charcoal-free dhoop sticks and sambrani cups. The site presents the product catalogue, brand story, contact information, and customer policies. Product enquiries and orders are directed to WhatsApp.

## Technology

The site uses HTML, CSS, and vanilla JavaScript. There is no framework, package manager, build step, or backend. Fonts are loaded from Google Fonts. The repository does not implement a shopping cart, checkout, payment processing, or order storage.

## Repository structure

```text
.
├── index.html                           # Home page and featured products
├── shop.html                            # Product catalogue and category filters
├── about.html                           # Brand story and FAQ
├── contact.html                         # Contact details and WhatsApp enquiry form
├── terms-and-conditions.html            # Terms and conditions
├── privacy-policy.html                  # Privacy policy
├── refund-and-cancellation-policy.html  # Refund and cancellation policy
├── styles.css                           # Shared styles, responsive layouts, policy styles
├── script.js                            # Product data and browser interactions
├── assets/
│   └── logo.png                         # Brand logo
└── README.md
```

## Local development

Open `index.html` directly in a browser, or serve the repository root with a local static server. For example, with Python installed:

```sh
python -m http.server 8000
```

Visit `http://localhost:8000`. Changes to HTML, CSS, or JavaScript can be viewed by refreshing the page.

## Code organization

Each HTML file is a standalone page that loads the shared `styles.css` and `script.js`. Headers, footers, navigation, and contact details are repeated in the page files; update each occurrence when changing shared content.

`script.js` defines the `PRODUCTS` catalogue and renders product cards into the home and shop pages. It also handles category filtering, mobile navigation, WhatsApp links, the FAQ accordion, contact form submission, scroll reveal animations, logo fallback, and the footer year. Product artwork is generated using inline SVG motifs.

WhatsApp links are generated from `WHATSAPP_NUMBER` and the message stored in each element's `data-wa` attribute. The contact form opens WhatsApp with the entered details in a prefilled message; it does not submit data to a server.

`styles.css` defines brand colors, typography, spacing, and other shared tokens in `:root`. Policy pages use the `policy-page` body class and dedicated reading-layout styles near the end of the stylesheet.

## Common changes

- **Products and prices:** Update `PRODUCTS` in `script.js`. The `featured` flag controls inclusion on the home page, and `cat` determines the shop filter category.
- **WhatsApp destination:** Update `WHATSAPP_NUMBER` in `script.js`, then check phone numbers and direct WhatsApp links in the HTML files.
- **Contact information:** Update the relevant page content, repeated footers, and policy text together.
- **Brand styling:** Update the CSS custom properties in `styles.css`. Replace `assets/logo.png` to change the logo.
- **Policies:** Edit the corresponding policy HTML file and its effective date. Policy links are included in every page footer.

## Validation and hosting

There is no automated test suite configured. Before publishing, check all page links, mobile navigation, product filters, FAQ interactions, and WhatsApp messages. Review policy pages at both mobile and desktop widths.

Deploy the website directory to a static hosting service. Use the directory containing `index.html` as the site root and publish the files as-is; no build command is required.
