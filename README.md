# Vfilmz Portfolio

A premium photography portfolio website for **Vfilmz** — built with plain HTML, CSS, and JavaScript. No frameworks, no installations needed. Just open the files and it works.

---

## Live Website

🌐 [vfilmz.netlify.app](https://vfilmz.netlify.app)

---

## Project Structure

```
vfilmz-portfolio/
├── index.html     → The entire website structure (all sections)
├── style.css      → All visual design, colors, layout, animations
├── app.js         → All interactive behavior and gallery logic
└── README.md      → This file
```

> Think of it like a human body:
> - `index.html` = the skeleton (structure)
> - `style.css` = the skin and clothes (appearance)
> - `app.js` = the brain and muscles (behavior)

---

## How to Run Locally

No installation needed. Just:
1. Download or clone this repo
2. Open `index.html` in any browser (Chrome, Edge, Firefox)
3. Done ✅

---

---

# File-by-File Code Explanation

---

## 1. index.html — The Structure

This file defines **what appears on the page** — every section, button, text, and form. It is written in **HTML (HyperText Markup Language)**.

### What is HTML?
HTML uses **tags** like `<div>`, `<section>`, `<p>` to create building blocks on a webpage. Every tag has an opening `<tag>` and a closing `</tag>`.

---

### Head Section
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Vfilmz | Premium Photography</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/..." rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/.../font-awesome/.../all.min.css"/>
</head>
```

| Line | What it does |
|------|-------------|
| `charset="UTF-8"` | Supports all characters including ₹, emojis, etc. |
| `viewport` | Makes the site look good on mobile phones |
| `<title>` | Text shown on the browser tab |
| `href="style.css"` | Connects the CSS file to this HTML file |
| `fonts.googleapis.com` | Loads the fonts: **Playfair Display** (headings) and **Raleway** (body text) from Google |
| `font-awesome` | Loads icon library — used for Instagram, WhatsApp, arrow icons etc. |

---

### Settings Panel
```html
<div class="settings-toggle" id="settingsToggle">
  <i class="fa-solid fa-sliders"></i>
</div>
<div class="settings-panel" id="settingsPanel">
  <button class="sw active" data-theme="dark">Dark / Gold</button>
  <button class="sw" data-theme="light">Light / Silver</button>
  <button class="sw active" data-gallery="masonry">Masonry Grid</button>
  ...
</div>
```

| Part | What it does |
|------|-------------|
| `id="settingsToggle"` | The gear icon button (bottom right of screen) |
| `id="settingsPanel"` | The popup panel that appears when gear is clicked |
| `data-theme="dark"` | Custom attribute — JavaScript reads this to switch themes |
| `data-gallery="masonry"` | Custom attribute — JavaScript reads this to switch gallery layout |
| `class="sw active"` | `sw` = switch button style, `active` = currently selected |

---

### Navigation Bar
```html
<nav id="navbar">
  <div class="logo">V<span>filmz</span></div>
  <ul>
    <li><a href="#hero">Home</a></li>
    <li><a href="#about">About</a></li>
    ...
  </ul>
  <div class="hamburger" id="hamburger">
    <span></span><span></span><span></span>
  </div>
</nav>
```

| Part | What it does |
|------|-------------|
| `<nav>` | Semantic tag that tells browser "this is a navigation menu" |
| `href="#hero"` | `#` means scroll to the element with `id="hero"` on the same page |
| `class="logo"` | Styles the Vfilmz brand name |
| `<span>filmz</span>` | Wraps "filmz" separately so CSS can color it differently (gold/silver) |
| `id="hamburger"` | The 3-line menu icon shown on mobile screens |

---

### Hero Section
```html
<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <p class="hero-sub">Premium Photography</p>
    <h1>Capturing<br/><em>Timeless</em> Moments</h1>
    <a href="#gallery" class="btn-gold">Explore the Collections</a>
  </div>
</section>
```

| Part | What it does |
|------|-------------|
| `id="hero"` | Unique name so nav links can scroll to this section |
| `class="hero-bg"` | Empty div — CSS adds the background photo to it |
| `<em>Timeless</em>` | Makes the word italic AND applies the gold/silver accent color |
| `class="btn-gold"` | Styles the button with a gold border |
| `<br/>` | Line break — forces "Moments" to the next line |

---

### Gallery Section
```html
<section id="gallery">
  <div class="gallery-wrap" id="galleryWrap">
    <!-- cards injected by JS -->
  </div>
</section>
```

| Part | What it does |
|------|-------------|
| `id="galleryWrap"` | Empty container — `app.js` fills this with photo/video cards automatically |
| `<!-- comment -->` | HTML comment — not visible on the website, just a note for developers |

> **Important:** You do NOT add photos here manually. Photos are fetched from **Cloudinary** (cloud storage) by JavaScript automatically.

---

### Services Section
```html
<div class="service-card flip-card">
  <div class="flip-inner">
    <div class="flip-front">
      <i class="fa-solid fa-user"></i>
      <h3>Portrait</h3>
      <p>Expressive portraits...</p>
      <span class="price">From ₹1,000</span>
    </div>
    <div class="flip-back">
      <h3>Portrait</h3>
      <p>Natural lighting · Studio sessions...</p>
    </div>
  </div>
</div>
```

| Part | What it does |
|------|-------------|
| `class="flip-card"` | Enables the 3D flip animation on click |
| `class="flip-front"` | What you see before clicking |
| `class="flip-back"` | What you see after clicking (details) |
| `class="featured"` | Adds gold border to highlight the Wedding card |
| `<i class="fa-solid fa-user">` | Font Awesome icon (the person icon) |

---

### Contact Form
```html
<form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="1056db64-..."/>
  <input type="text" name="name" placeholder="Your Name" required/>
  <select name="service" id="serviceSelect">
    <option value="Wedding">Wedding</option>
  </select>
  <button type="submit" class="btn-gold">Send Message</button>
</form>
```

| Part | What it does |
|------|-------------|
| `action="https://api.web3forms.com/submit"` | Where the form data is sent (Web3Forms service) |
| `method="POST"` | Sends data securely (not visible in URL) |
| `type="hidden"` | Invisible field — sends the Web3Forms API key |
| `required` | Browser won't submit if this field is empty |
| `placeholder` | Grey hint text shown inside the input box |

---

### Footer
```html
<footer>
  <div class="logo">V<span>filmz</span></div>
  <div style="display:flex; flex-direction:column; align-items:center;">
    <p>© 2026 Vfilmz. All rights reserved.</p>
    <p>Built by <span style="color:var(--accent);">SedhuTech</span></p>
    <div class="social">
      <a href="https://wa.me/qr/..." target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
      <a href="https://www.instagram.com/codex_builds" target="_blank"><i class="fa-brands fa-instagram"></i></a>
    </div>
  </div>
</footer>
```

| Part | What it does |
|------|-------------|
| `target="_blank"` | Opens the link in a new browser tab |
| `var(--accent)` | Uses the CSS theme color variable (gold in dark, silver in light) |
| `fa-brands fa-whatsapp` | WhatsApp icon from Font Awesome |

---

---

## 2. style.css — The Design

This file controls **how everything looks** — colors, fonts, sizes, spacing, animations, and layout. Written in **CSS (Cascading Style Sheets)**.

### What is CSS?
CSS uses **selectors** to target HTML elements and apply **properties**. Example:
```css
h1 { color: red; font-size: 2rem; }
```
This means: "Find all `<h1>` tags and make them red and large."

---

### Theme Variables
```css
body.theme-dark {
  --bg: #0a0a0a;
  --text: #e8e0d0;
  --accent: #c9a84c;
  --border: rgba(201,168,76,.2);
}
body.theme-light {
  --bg: #f5f3ef;
  --text: #1a1a1a;
  --accent: #555;
}
```

| Part | What it does |
|------|-------------|
| `--bg` | CSS variable for background color. Used everywhere as `var(--bg)` |
| `--accent` | The gold (dark theme) or silver/dark (light theme) highlight color |
| `--text2` | Secondary text color — used for descriptions, subtitles |
| `rgba(201,168,76,.2)` | Gold color at 20% opacity — used for subtle borders |

> **How to change theme colors:** Just edit the hex values here (`#c9a84c` = gold). All elements using `var(--accent)` will update automatically.

---

### Navigation Styles
```css
#navbar { position: fixed; top: 0; width: 100%; z-index: 900; }
#navbar.scrolled { background: var(--nav-bg); box-shadow: 0 2px 20px rgba(0,0,0,.3); }
```

| Part | What it does |
|------|-------------|
| `position: fixed` | Keeps the navbar stuck at the top while scrolling |
| `z-index: 900` | Makes navbar appear above other elements (higher number = on top) |
| `.scrolled` | Class added by JavaScript when user scrolls — adds background to navbar |

---

### Hero Section
```css
.hero-bg {
  background: url('https://images.unsplash.com/...') center/cover no-repeat;
  animation: heroZoom 8s ease-in-out infinite alternate;
}
@keyframes heroZoom {
  from { transform: scale(1.15); }
  to   { transform: scale(1); }
}
```

| Part | What it does |
|------|-------------|
| `center/cover` | Centers the image and makes it cover the full area without stretching |
| `animation: heroZoom 8s` | Runs the zoom animation every 8 seconds |
| `infinite alternate` | Loops forever, alternating between zoom-in and zoom-out |
| `@keyframes` | Defines the animation — from (start) to (end) |

---

### Gallery Layouts
```css
body[data-gallery="masonry"] .gallery-wrap { columns: 3; column-gap: 1rem; }
body[data-gallery="simple"]  .gallery-wrap { display: grid; grid-template-columns: repeat(3, 1fr); }
body[data-gallery="lightbox"] .gallery-wrap { display: grid; grid-template-columns: repeat(3, 1fr); }
```

| Part | What it does |
|------|-------------|
| `body[data-gallery="masonry"]` | Only applies when the body has `data-gallery="masonry"` attribute |
| `columns: 3` | Pinterest-style layout — 3 columns, images flow naturally |
| `display: grid` | CSS Grid — equal-sized boxes in rows and columns |
| `repeat(3, 1fr)` | 3 columns, each taking equal (`1fr` = 1 fraction) of the space |

---

### Flip Card (Services)
```css
.flip-card { perspective: 1000px; }
.flip-inner { transition: transform .6s; transform-style: preserve-3d; }
.flip-card.flipped .flip-inner { transform: rotateY(180deg); }
.flip-front { backface-visibility: hidden; }
.flip-back  { backface-visibility: hidden; transform: rotateY(180deg); }
```

| Part | What it does |
|------|-------------|
| `perspective: 1000px` | Creates the 3D depth effect |
| `transform-style: preserve-3d` | Keeps child elements in 3D space |
| `rotateY(180deg)` | Rotates the card 180° on the Y axis (horizontal flip) |
| `backface-visibility: hidden` | Hides the back of each face so they don't show through |

---

### Responsive Design
```css
@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; }
  .about-grid, .contact-grid { grid-template-columns: 1fr; }
  .hamburger { display: flex; }
}
```

| Part | What it does |
|------|-------------|
| `@media (max-width: 768px)` | These styles ONLY apply on screens smaller than 768px (mobile) |
| `grid-template-columns: 1fr` | Changes multi-column layout to single column on mobile |
| `.hamburger { display: flex }` | Shows the 3-line menu icon on mobile (hidden on desktop) |

---

### Light Theme Fix
```css
body.theme-light #navbar ul a,
body.theme-light .hero-sub,
body.theme-light .btn-gold { color: #e8e0d0; }
```

| Part | What it does |
|------|-------------|
| `body.theme-light` | Only applies when light theme is active |
| `#e8e0d0` | Warm off-white color — visible against the hero background image |

---

---

## 3. app.js — The Behavior

This file makes the website **interactive and dynamic**. Written in **JavaScript**.

### What is JavaScript?
JavaScript runs in the browser and responds to user actions — clicks, scrolls, form submissions. It can also fetch data from the internet (like photos from Cloudinary).

---

### Cloudinary Config
```js
const CLOUD_NAME = 'qoots4a0';
const CATEGORIES = ['portrait', 'wedding', 'landscape', 'fashion', 'drone'];
```

| Part | What it does |
|------|-------------|
| `CLOUD_NAME` | Your Cloudinary account ID — used to build photo URLs |
| `CATEGORIES` | List of photo categories — must match folder/tag names in Cloudinary |

> **To add a new category:** Add it to this array AND create a matching tag in Cloudinary.

---

### Fetching Photos from Cloudinary
```js
async function fetchFromCloudinary(cat) {
  const [imgRes, vidRes] = await Promise.all([
    fetch(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/vfilmz_${cat}.json`),
    fetch(`https://res.cloudinary.com/${CLOUD_NAME}/video/list/vfilmz_${cat}.json`)
  ]);
}
```

| Part | What it does |
|------|-------------|
| `async function` | A function that can wait for internet requests to complete |
| `await` | Pauses until the fetch is done before continuing |
| `Promise.all([...])` | Fetches images AND videos at the same time (faster) |
| `fetch(url)` | Makes an internet request to get data from a URL |
| `vfilmz_${cat}.json` | Cloudinary tag name — e.g. `vfilmz_portrait.json` |

---

### Rendering the Gallery
```js
function renderGallery() {
  filteredPhotos = currentCat === 'all' ? photos : photos.filter(p => p.cat === currentCat);
  wrap.innerHTML = '';
  filteredPhotos.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'g-card';
    card.innerHTML = `<img src="${p.src}" loading="lazy"/>`;
    card.addEventListener('click', () => openLightbox(i));
    wrap.appendChild(card);
  });
}
```

| Part | What it does |
|------|-------------|
| `currentCat === 'all'` | If "All" filter is selected, show every photo |
| `photos.filter(p => p.cat === currentCat)` | Otherwise, only show photos matching the selected category |
| `wrap.innerHTML = ''` | Clears the gallery before re-rendering |
| `document.createElement('div')` | Creates a new HTML `<div>` element in memory |
| `loading="lazy"` | Images only load when they scroll into view (faster page load) |
| `addEventListener('click', ...)` | When card is clicked, open the lightbox |
| `wrap.appendChild(card)` | Adds the card into the gallery on the page |

---

### Lightbox (Full Screen Viewer)
```js
function openLightbox(i) {
  lbIndex = i;
  updateLightbox();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}
```

| Part | What it does |
|------|-------------|
| `classList.add('active')` | Adds the `active` class — CSS uses this to show the lightbox |
| `classList.remove('active')` | Removes `active` — CSS hides the lightbox |
| `overflow = 'hidden'` | Prevents the page from scrolling while lightbox is open |
| `overflow = ''` | Restores scrolling when lightbox is closed |

```js
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft')  { lbIndex--; updateLightbox(); }
  if (e.key === 'ArrowRight') { lbIndex++; updateLightbox(); }
});
```
> Keyboard navigation — press `←` `→` to browse, `Esc` to close.

---

### Theme Switcher
```js
document.querySelectorAll('[data-theme]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.className = document.body.className.replace(/theme-\w+/, 'theme-' + btn.dataset.theme);
  });
});
```

| Part | What it does |
|------|-------------|
| `querySelectorAll('[data-theme]')` | Finds all buttons that have a `data-theme` attribute |
| `.replace(/theme-\w+/, ...)` | Replaces the current theme class (e.g. `theme-dark`) with the new one |
| `btn.dataset.theme` | Reads the value of `data-theme` attribute from the clicked button |

---

### Gallery Style Switcher
```js
document.querySelectorAll('[data-gallery]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.dataset.gallery = btn.dataset.gallery;
    renderGallery();
  });
});
```

| Part | What it does |
|------|-------------|
| `document.body.dataset.gallery` | Sets `data-gallery` on the body tag |
| CSS then reads this to apply the correct layout (masonry/grid/lightbox) |
| `renderGallery()` | Re-renders the gallery in the new layout |

---

### Navbar Scroll Effect
```js
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.pageYOffset > 60);
});
```

| Part | What it does |
|------|-------------|
| `scroll` event | Fires every time the user scrolls |
| `pageYOffset > 60` | Checks if user has scrolled more than 60px down |
| `classList.toggle('scrolled', ...)` | Adds/removes `scrolled` class based on scroll position |

---

### Contact Form Submission
```js
document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST', body: new FormData(e.target)
  });
  const data = await res.json();
  msg.textContent = data.success ? 'Thank you! I\'ll be in touch within 24 hours.' : 'Something went wrong.';
});
```

| Part | What it does |
|------|-------------|
| `e.preventDefault()` | Stops the default form behavior (page reload) |
| `new FormData(e.target)` | Collects all form field values automatically |
| `fetch(..., { method: 'POST' })` | Sends the form data to Web3Forms API |
| `data.success` | Web3Forms returns `true` if email was sent successfully |
| `e.target.reset()` | Clears all form fields after successful submission |

---

---

## Common Tasks — How to Make Changes

| Task | Where to change |
|------|----------------|
| Change website title | `index.html` → `<title>` tag |
| Change hero background photo | `style.css` → `.hero-bg` → `background: url(...)` |
| Change gold color | `style.css` → `body.theme-dark` → `--accent` |
| Add a new service card | `index.html` → copy an existing `.flip-card` block |
| Change contact email | `index.html` → `<a href="mailto:...">` |
| Change phone number | `index.html` → `<a href="tel:...">` |
| Add a new photo category | `app.js` → add to `CATEGORIES` array + add tag in Cloudinary |
| Change footer social links | `index.html` → `<footer>` → update `href` in `<a>` tags |
| Change pricing | `index.html` → find `<span class="price">` and update text |

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Page structure |
| CSS3 | Styling, animations, responsive layout |
| JavaScript (Vanilla) | Interactivity, gallery, form handling |
| Cloudinary | Cloud storage for photos and videos |
| Web3Forms | Contact form email delivery |
| Font Awesome | Icons (WhatsApp, Instagram, etc.) |
| Google Fonts | Playfair Display + Raleway fonts |
| Netlify | Free hosting with auto-deploy from GitHub |

---

## Deployment

This site is hosted on **Netlify** and connected to this GitHub repo.

Every time you push changes to the `main` branch → Netlify automatically redeploys the site within 30 seconds.

```
Make changes → git add . → git commit -m "message" → git push origin main → Live ✅
```
