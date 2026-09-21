// ── CLOUDINARY CONFIG ──
const CLOUD_NAME = 'qoots4a0';
const CATEGORIES = ['portrait', 'wedding', 'landscape', 'fashion', 'drone'];

let currentCat = 'all';
let currentGallery = 'masonry';
let lbIndex = 0;
let filteredPhotos = [];
let photos = [];

async function fetchFromCloudinary(cat) {
  const [imgRes, vidRes] = await Promise.all([
    fetch(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/vfilmz_${cat}.json`),
    fetch(`https://res.cloudinary.com/${CLOUD_NAME}/video/list/vfilmz_${cat}.json`)
  ]);
  const images = imgRes.ok ? (await imgRes.json()).resources.reverse().map(r => ({
    src: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_auto,f_auto/${r.public_id}`,
    title: r.public_id.replace(/[-_]/g, ' '),
    cat, type: 'image',
    h: r.height > r.width ? 'tall' : 'wide'
  })) : [];
  const videos = vidRes.ok ? (await vidRes.json()).resources.reverse().map(r => ({
    src: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto/${r.public_id}.${r.format}`,
    thumb: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto,so_0/${r.public_id}.jpg`,
    title: r.public_id.replace(/[-_]/g, ' '),
    cat, type: 'video',
    h: r.height > r.width ? 'wide' : 'tall'
  })) : [];
  return [...images, ...videos];
}

async function loadAllPhotos() {
  const results = await Promise.all(CATEGORIES.map(fetchFromCloudinary));
  photos = results.flat();
  renderGallery();
}

// ── RENDER GALLERY ──
function renderGallery() {
  const wrap = document.getElementById('galleryWrap');
  filteredPhotos = currentCat === 'all' ? photos : photos.filter(p => p.cat === currentCat);
  wrap.innerHTML = '';
  filteredPhotos.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'g-card';
    card.innerHTML = p.type === 'video' ? `
      <video src="${p.src}" poster="${p.thumb}" muted loop playsinline></video>
      <div class="g-overlay">
        <small>${p.cat} · <i class="fa-solid fa-play"></i></small>
      </div>` : `
      <img src="${p.src}" alt="" title="" loading="lazy"/>
      <div class="g-overlay">
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
  const lbVid = document.getElementById('lbVid');
  lbVid.pause();
  lbVid.src = '';
}
function updateLightbox() {
  const p = filteredPhotos[lbIndex];
  const lbImg = document.getElementById('lbImg');
  const lbVid = document.getElementById('lbVid');
  if (p.type === 'video') {
    lbImg.style.display = 'none';
    lbVid.style.display = 'block';
    lbVid.src = p.src;
    lbVid.play();
  } else {
    lbVid.style.display = 'none';
    lbVid.pause();
    lbImg.style.display = 'block';
    lbImg.src = p.src;
  }
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

// ── WEDDING OPTIONS ──
document.getElementById('serviceSelect').addEventListener('change', function() {
  document.getElementById('weddingOptions').classList.toggle('show', this.value === 'Wedding');
});

// ── SERVICE CARD FLIP ──
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.closest('.sub-toggle')) return;
    card.classList.toggle('flipped');
  });
});

// ── SUB SERVICES TOGGLE ──
const subToggle = document.querySelector('.sub-toggle');
if (subToggle) {
  subToggle.addEventListener('click', e => {
    e.stopPropagation();
    e.currentTarget.closest('.service-card').classList.toggle('expanded');
  });
}

// ── NAV ──
const navbar = document.getElementById('navbar');
const scrollHandler = () => {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  navbar.classList.toggle('scrolled', scrolled > 60);
};
window.addEventListener('scroll', scrollHandler, { passive: true });
document.addEventListener('scroll', scrollHandler, { passive: true });
window.addEventListener('touchmove', scrollHandler, { passive: true });
new IntersectionObserver(([e]) => navbar.classList.toggle('scrolled', !e.isIntersecting), { threshold: 0.1 }).observe(document.getElementById('hero'));
document.getElementById('hamburger').addEventListener('click', e => {
  e.stopPropagation();
  document.querySelector('#navbar ul').classList.toggle('open');
});
document.addEventListener('click', e => {
  const ul = document.querySelector('#navbar ul');
  const hamburger = document.getElementById('hamburger');
  if (!hamburger.contains(e.target) && !ul.contains(e.target)) {
    ul.classList.remove('open');
  }
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
loadAllPhotos();
