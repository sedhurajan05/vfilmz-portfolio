// ── PHOTO DATA ──
const photos = [
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', title: 'Golden Hour', cat: 'portrait', h: 'tall' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', title: 'Forever Yours', cat: 'wedding', h: 'wide' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', title: 'Mountain Serenity', cat: 'landscape', h: 'tall' },
  { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80', title: 'Vogue Edit', cat: 'fashion', h: 'wide' },
  { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80', title: 'Natural Light', cat: 'portrait', h: 'wide' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', title: 'First Dance', cat: 'wedding', h: 'tall' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', title: 'Valley Mist', cat: 'landscape', h: 'wide' },
  { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80', title: 'Runway Ready', cat: 'fashion', h: 'tall' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', title: 'The Gaze', cat: 'portrait', h: 'wide' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', title: 'Ceremony', cat: 'wedding', h: 'tall' },
  { src: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80', title: 'Lakeside Dawn', cat: 'landscape', h: 'wide' },
  { src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80', title: 'Editorial', cat: 'fashion', h: 'tall' },
];

let currentCat = 'all';
let currentGallery = 'masonry';
let lbIndex = 0;
let filteredPhotos = [];

// ── RENDER GALLERY ──
function renderGallery() {
  const wrap = document.getElementById('galleryWrap');
  filteredPhotos = currentCat === 'all' ? photos : photos.filter(p => p.cat === currentCat);
  wrap.innerHTML = '';
  filteredPhotos.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'g-card';
    card.innerHTML = `
      <img src="${p.src}" alt="${p.title}" loading="lazy"/>
      <div class="g-overlay">
        <span>${p.title}</span>
        <small>${p.cat}</small>
      </div>`;
    card.addEventListener('click', () => openLightbox(i));
    wrap.appendChild(card);
  });
}

// ── LIGHTBOX ──
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
function updateLightbox() {
  const p = filteredPhotos[lbIndex];
  document.getElementById('lbImg').src = p.src;
  document.getElementById('lbCaption').textContent = p.title + ' · ' + p.cat;
}
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => {
  lbIndex = (lbIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
  updateLightbox();
});
document.getElementById('lbNext').addEventListener('click', () => {
  lbIndex = (lbIndex + 1) % filteredPhotos.length;
  updateLightbox();
});
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + filteredPhotos.length) % filteredPhotos.length; updateLightbox(); }
  if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % filteredPhotos.length; updateLightbox(); }
});

// ── SETTINGS PANEL ──
const settingsToggle = document.getElementById('settingsToggle');
const settingsPanel = document.getElementById('settingsPanel');
settingsToggle.addEventListener('click', e => {
  e.stopPropagation();
  settingsPanel.classList.toggle('open');
  settingsToggle.classList.toggle('open');
});
document.addEventListener('click', e => {
  if (!settingsPanel.contains(e.target) && e.target !== settingsToggle) {
    settingsPanel.classList.remove('open');
    settingsToggle.classList.remove('open');
  }
});

// Theme switch
document.querySelectorAll('[data-theme]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.className = document.body.className.replace(/theme-\w+/, 'theme-' + btn.dataset.theme);
    document.querySelectorAll('[data-theme]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Gallery style switch
document.querySelectorAll('[data-gallery]').forEach(btn => {
  btn.addEventListener('click', () => {
    currentGallery = btn.dataset.gallery;
    document.body.dataset.gallery = currentGallery;
    document.querySelectorAll('[data-gallery]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery();
  });
});

// Category switch
document.querySelectorAll('[data-cat]').forEach(btn => {
  btn.addEventListener('click', () => {
    currentCat = btn.dataset.cat;
    document.querySelectorAll('[data-cat]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery();
  });
});

// ── NAV ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('#navbar ul').classList.toggle('open');
});
document.querySelectorAll('#navbar ul a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('#navbar ul').classList.remove('open'));
});

// ── CONTACT FORM ──
document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(e.target) });
  const data = await res.json();
  msg.textContent = data.success ? 'Thank you! I\'ll be in touch within 24 hours.' : 'Something went wrong. Please try again.';
  if (data.success) e.target.reset();
  setTimeout(() => msg.textContent = '', 5000);
});

// ── INIT ──
renderGallery();
