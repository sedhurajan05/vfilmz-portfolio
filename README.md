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
  <button class="sw" data-gallery="lightbox">Lightbox Popup</button>
</div>
```

| Part | What it does |
|------|-------------|
| `id="settingsToggle"` | The gear icon button (bottom right of screen) |
| `id="settingsPanel"` | The popup panel that appears when gear is clicked |
| `data-theme="dark"` | Custom attribute — JavaScript reads this to switch themes |
| `data-gallery="masonry"` | Custom attribute — JavaScript reads this to switch gallery layout |
| `class="sw active"` | `sw` = switch button style, `active` = currently selected |

> **Note:** Simple Grid option was removed. Only Masonry Grid and Lightbox Popup are available.

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
| `<span>filmz</span>` | Wraps "filmz" separately so CSS can color it differently |
| `id="hamburger"` | The 3-line menu icon shown on mobile screens |

> **Mobile behaviour:** Tapping anywhere outside the menu automatically closes it.

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
| `<em>Timeless</em>` | Makes the word italic AND applies the accent color |
| `class="btn-gold"` | Styles the button with a gold border |
| `<br/>` | Line break — forces "Moments" to the next line |

---

### About Section
```html
<section id="about">
  <div class="img-frame">
    <img id="aboutImg" src="" alt="Vfilmz Photographer"/>
    <p class="about-photo-label">Velmurugan</p>
  </div>
</section>
```

| Part | What it does |
|------|-------------|
| `id="aboutImg"` | JavaScript fetches the photo from Cloudinary and sets this src dynamically |
| `src=""` | Empty by default — filled by `app.js` using `vfilmz_about` Cloudinary tag |
| `class="about-photo-label"` | Shows "Velmurugan" text below the photo |

> **To change the About photo:** Upload a new photo to Cloudinary and tag it `vfilmz_about`. No code changes needed.

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

> **Important:** You do NOT add photos here manually. Photos are fetched from **Cloudinary** (cloud storage) by JavaScript automatically. Newest uploaded photos appear first.

---

### Services Section

Services are split into two rows:

**Row 1 (4 cards):** Portrait, Wedding, Landscape, Fashion
**Row 2 (3 cards centered):** Drone, Photo Editing, Video Editing

```html
<div class="services-grid">
  <!-- Row 1: 4 cards -->
</div>
<div class="services-grid-bottom">
  <!-- Row 2: 3 cards centered -->
</div>
```

| Part | What it does |
|------|-------------|
| `class="flip-card"` | Enables the 3D flip animation on click |
| `class="flip-front"` | What you see before clicking |
| `class="flip-back"` | What you see after clicking (details) |
| `class="featured"` | Adds gold border to highlight the Wedding card |
| `services-grid-bottom` | Flex container that centers the bottom row cards |

> **Note:** Prices have been removed from all service cards.

---

### Contact Form
```html
<form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="1056db64-..."/>
  <input type="text" name="name" placeholder="Your Name" required/>
  <select name="service" id="serviceSelect">
    <option>Portrait</option>
    <option value="Wedding">Wedding</option>
    <option>Landscape</option>
    <option>Fashion</option>
    <option>Drone</option>
    <option>Photo Editing</option>
    <option>Video Editing</option>
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

### Contact Links
```html
<a href="mailto:vfilmz01@gmail.com">vfilmz01@gmail.com</a>
<a href="https://wa.me/916383100912">@vfilmz_01</a>
<a href="https://www.instagram.com/vfilmz.fx">@vfilmz.fx</a>
<a href="tel:+916383100912">+91 6383100912</a>
```

---

### Footer
```html
<footer>
  <div class="logo">V<span>filmz</span></div>
  <div>
    <p>© 2026 Vfilmz. All rights reserved.</p>
    <p>Built by <span>SedhuTech</span></p>
    <p>DM to Build your Brand's website <a href="https://www.instagram.com/codex_builds">@codex_builds</a></p>
    <div class="social">
      <a href="https://wa.me/qr/..."><i class="fa-brands fa-whatsapp"></i></a>
      <a href="https://www.instagram.com/codex_builds"><i class="fa-brands fa-instagram"></i></a>
    </div>
  </div>
</footer>
```

| Part | What it does |
|------|-------------|
| `target="_blank"` | Opens the link in a new browser tab |
| `var(--accent)` | Uses the CSS theme color variable (gold in dark, silver in light) |
| `fa-brands fa-whatsapp` | WhatsApp icon from Font Awesome |
| `@codex_builds` | Clickable Instagram link for SedhuTech |

---

---

## 2. style.css — The Design

This file controls **how everything looks** — colors, fonts, sizes, spacing, animations, and layout. Written in **CSS (Cascading Style Sheets)**.

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
| `--bg` | CSS variable for background color |
| `--accent` | Gold (dark theme) or grey (light theme) highlight color |
| `--text2` | Secondary text color — used for descriptions, subtitles |

---

### Light Theme Overrides
```css
body.theme-light em { color: #A8A090; }
body.theme-light #navbar .logo span { color: #B8B0A0; }
body.theme-light .hero-scroll { background: rgba(200,192,176,.3); }
body.theme-light .hero-scroll span { background: #C8C0B0; }
body.theme-light #navbar ul.open { background: rgba(245,243,239,.98); }
body.theme-light .g-overlay small { color: #e8e0d0; }
body.theme-light #navbar:not(.scrolled) ul a { color: #B8B0A0; }
body.theme-light #navbar.scrolled ul a { color: #6B6560; }
```

| Part | What it does |
|------|-------------|
| `em { color: #A8A090 }` | "Timeless" word color in light mode — dusty grey |
| `.logo span { color: #B8B0A0 }` | "filmz" navbar color in light mode — muted taupe |
| `.hero-scroll` | Scroll indicator color in light mode |
| `#navbar ul.open` | Mobile menu dropdown background in light mode |
| `.g-overlay small` | Gallery hover category text color in light mode |
| `:not(.scrolled) ul a` | Nav links color at top of page in light mode |
| `.scrolled ul a` | Nav links color after scrolling in light mode |

---

### Navigation Styles
```css
#navbar { position: fixed; top: 0; width: 100%; z-index: 900; }
#navbar.scrolled { background: var(--nav-bg); box-shadow: 0 2px 20px rgba(0,0,0,.3); }
```

| Part | What it does |
|------|-------------|
| `position: fixed` | Keeps the navbar stuck at the top while scrolling |
| `z-index: 900` | Makes navbar appear above other elements |
| `.scrolled` | Class added by JavaScript when user scrolls — adds background to navbar |

---

### About Section
```css
.img-frame { position: relative; max-width: 340px; margin: 0 auto; }
.img-frame img { border-radius: 2px; object-fit: contain; }
.about-photo-label { display: block; text-align: center; font-size: .7rem;
  letter-spacing: .2em; text-transform: uppercase; color: var(--text2);
  margin-top: 2.5rem; font-weight: 300; }
```

| Part | What it does |
|------|-------------|
| `max-width: 340px` | Limits about photo size on desktop |
| `object-fit: contain` | Shows full photo without cropping |
| `.about-photo-label` | "Velmurugan" text below the photo — lightweight uppercase style |

---

### Services Layout
```css
.services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
.services-grid-bottom { display: flex; justify-content: center; gap: 1.5rem; margin-top: 1.5rem; flex-wrap: wrap; }
.services-grid-bottom .flip-card { width: calc(25% - 1.5rem); min-width: 240px; }
```

| Part | What it does |
|------|-------------|
| `services-grid` | Top row — 4 equal columns |
| `services-grid-bottom` | Bottom row — flex centered |
| `calc(25% - 1.5rem)` | Bottom cards match top card width |

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
| `center/cover` | Centers the image and makes it cover the full area |
| `animation: heroZoom 8s` | Runs the zoom animation every 8 seconds |
| `infinite alternate` | Loops forever, alternating zoom-in and zoom-out |

---

### Gallery Layouts
```css
body[data-gallery="masonry"] .gallery-wrap { columns: 3; column-gap: 1rem; }
body[data-gallery="lightbox"] .gallery-wrap { display: grid; grid-template-columns: repeat(3, 1fr); }
```

| Part | What it does |
|------|-------------|
| `columns: 3` | Pinterest-style masonry layout |
| `display: grid` | Equal-sized boxes in rows and columns |

---

### Responsive Design (Mobile)
```css
@media (max-width: 768px) {
  .hamburger { display: flex; }
  .about-grid, .contact-grid { grid-template-columns: 1fr; }
  .img-frame { max-width: 200px; }
  .services-grid { grid-template-columns: 1fr; }
  .services-grid-bottom { flex-direction: column; }
  .services-grid-bottom .flip-card { width: 100%; }
  body[data-gallery="masonry"] .gallery-wrap { columns: 2; }
  .hero-scroll { bottom: 9rem; }
  .hero-content { margin-top: -4rem; }
}
```

| Part | What it does |
|------|-------------|
| `.hamburger { display: flex }` | Shows 3-line menu icon on mobile |
| `.img-frame { max-width: 200px }` | Smaller about photo on mobile |
| `columns: 2` | 2-column masonry gallery on mobile |
| `.hero-scroll { bottom: 9rem }` | Scroll indicator moved up so it's fully visible |
| `.hero-content { margin-top: -4rem }` | Hero content moved up on mobile |

---

---

## 3. app.js — The Behavior

This file makes the website **interactive and dynamic**. Written in **JavaScript**.

---

### Cloudinary Config
```js
const CLOUD_NAME = 'qoots4a0';
const CATEGORIES = ['portrait', 'wedding', 'landscape', 'fashion', 'drone'];
```

| Part | What it does |
|------|-------------|
| `CLOUD_NAME` | Your Cloudinary account ID — used to build photo URLs |
| `CATEGORIES` | List of photo categories — must match tag names in Cloudinary |

> **To add a new category:** Add it to this array AND create a matching tag in Cloudinary.

---

### Fetching Photos from Cloudinary
```js
async function fetchFromCloudinary(cat) {
  const [imgRes, vidRes] = await Promise.all([
    fetch(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/vfilmz_${cat}.json`),
    fetch(`https://res.cloudinary.com/${CLOUD_NAME}/video/list/vfilmz_${cat}.json`)
  ]);
  const images = imgRes.ok ? (await imgRes.json()).resources.reverse().map(...) : [];
  const videos = vidRes.ok ? (await vidRes.json()).resources.reverse().map(...) : [];
}
```

| Part | What it does |
|------|-------------|
| `async function` | A function that can wait for internet requests to complete |
| `Promise.all([...])` | Fetches images AND videos at the same time (faster) |
| `.reverse()` | Newest uploaded photos/videos appear first in gallery |

---

### About Photo (Dynamic)
```js
fetch(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/vfilmz_about.json`)
  .then(r => r.ok ? r.json() : null)
  .then(data => {
    if (data && data.resources.length) {
      document.getElementById('aboutImg').src = `.../${data.resources[data.resources.length - 1].public_id}`;
    }
  });
```

| Part | What it does |
|------|-------------|
| `vfilmz_about` | Cloudinary tag — upload photo with this tag to update About Me photo |
| `data.resources[last]` | Always picks the latest uploaded photo with this tag |

---

### Hamburger Menu (Mobile)
```js
document.getElementById('hamburger').addEventListener('click', e => {
  e.stopPropagation();
  document.querySelector('#navbar ul').classList.toggle('open');
});
document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !ul.contains(e.target)) {
    ul.classList.remove('open');
  }
});
```

| Part | What it does |
|------|-------------|
| `classList.toggle('open')` | Opens/closes the mobile menu |
| `document.addEventListener('click')` | Closes menu when tapping anywhere outside |

---

### Lightbox (Full Screen Viewer)
```js
function openLightbox(i) {
  lbIndex = i;
  updateLightbox();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}
```

| Part | What it does |
|------|-------------|
| `classList.add('active')` | Shows the lightbox |
| `overflow = 'hidden'` | Prevents page scrolling while lightbox is open |

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

---

### Navbar Scroll Effect
```js
const scrollHandler = () => {
  navbar.classList.toggle('scrolled', scrolled > 60);
};
window.addEventListener('scroll', scrollHandler, { passive: true });
window.addEventListener('touchmove', scrollHandler, { passive: true });
```

| Part | What it does |
|------|-------------|
| `scrolled > 60` | Adds background to navbar after 60px scroll |
| `touchmove` | Also works on mobile touch scroll |

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
  if (data.success) e.target.reset();
  setTimeout(() => msg.textContent = '', 5000);
});
```

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
| Change About Me photo | Upload new photo to Cloudinary with tag `vfilmz_about` |
| Change "Velmurugan" name | `index.html` → find `class="about-photo-label"` |
| Change light theme nav color | `style.css` → `body.theme-light #navbar` rules |

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
