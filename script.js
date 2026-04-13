// ─── CUSTOM CURSOR ───
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  }, 60);
});

// ─── NAV SCROLL SHRINK ───
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 60);
});

// ─── HAMBURGER MOBILE MENU ───
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');

ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});

function closeMenu() {
  ham.classList.remove('open');
  mob.classList.remove('open');
}

// ─── SCROLL REVEAL ───
const revealEls = document.querySelectorAll('.reveal');
const revealIO  = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger any skill bars inside this element
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealIO.observe(el));

// ─── SKILL BAR ANIMATION ───
const skillCards = document.querySelectorAll('.skill-card');
const skillIO    = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        setTimeout(() => bar.style.width = bar.dataset.pct + '%', 100);
      });
    }
  });
}, { threshold: 0.3 });

skillCards.forEach(card => skillIO.observe(card));

// ─── TYPING EFFECT ───
const taglineText = "Building digital experiences that matter";
const taglineEl   = document.querySelector('.hero-tagline');

if (taglineEl) {
  taglineEl.innerHTML = '<span class="typing-cursor"></span>';
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < taglineText.length) {
      const typingCursor = taglineEl.querySelector('.typing-cursor');
      typingCursor.insertAdjacentText('beforebegin', taglineText[i]);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 55);
}

// ─── ACTIVE NAV LINK HIGHLIGHT ───
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
});