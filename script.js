// ---- floating autumn leaves & hearts background ----
const sky = document.getElementById('sky');
const skyEmojis = ['🍁','🍂','💛','🧡'];
const SKY_COUNT = 18;

for (let i = 0; i < SKY_COUNT; i++) {
  const el = document.createElement('span');
  el.textContent = skyEmojis[Math.floor(Math.random() * skyEmojis.length)];
  const left = Math.random() * 100;
  const duration = 10 + Math.random() * 12;
  const delay = Math.random() * 12;
  const size = 16 + Math.random() * 18;
  el.style.left = left + 'vw';
  el.style.fontSize = size + 'px';
  el.style.animationDuration = duration + 's';
  el.style.animationDelay = '-' + delay + 's';
  sky.appendChild(el);
}

// ---- intro -> main ----
const introSection = document.getElementById('intro');
const main = document.getElementById('main');
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
  introSection.style.transition = 'opacity .5s ease, transform .5s ease';
  introSection.style.opacity = '0';
  introSection.style.transform = 'scale(0.96)';
  setTimeout(() => {
    introSection.classList.add('hidden');
    main.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
    revealOnScroll();
  }, 500);
});

// ---- scroll reveal for timeline stops ----
function revealOnScroll() {
  const items = document.querySelectorAll('[data-anim]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });
  items.forEach((item) => observer.observe(item));
}

// ---- confetti on final button ----
const yesBtn = document.getElementById('yesBtn');
const confettiArea = document.getElementById('confetti');
const confettiEmojis = ['🍁','🎉','💛','✨','🍂','💌'];

yesBtn.addEventListener('click', () => {
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('span');
    piece.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
    piece.style.left = Math.random() * 100 + '%';
    piece.style.animationDelay = Math.random() * 0.6 + 's';
    piece.style.fontSize = (14 + Math.random() * 16) + 'px';
    confettiArea.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
  yesBtn.textContent = 'Hẹn gặp chiều nay 🍂';
  yesBtn.disabled = true;
});
