// scroll-animations.js
(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const revealEls   = $$('[data-reveal]');
  const parallaxEls = $$('[data-parallax]');

  // Ortak data-anim işareti (CSS transform zincirini tek yerden yönetmek için)
  new Set([...revealEls, ...parallaxEls]).forEach(el => el.setAttribute('data-anim', ''));

  // Stagger (sırayla gecikme) desteği: data-stagger ile kap içindeki [data-reveal] çocuklara artan delay
  $$.call = undefined;
  const staggerContainers = $$('[data-stagger]');
  staggerContainers.forEach(container => {
    const step  = parseInt(container.getAttribute('data-stagger') || '100', 10);
    const start = parseInt(container.getAttribute('data-stagger-start') || '0', 10);

    // Sadece bu container’ın kapsadığı reveal öğeleri (iç içe stagger’ları bozmayalım)
    const items = $$('[data-reveal]', container).filter(el => el.closest('[data-stagger]') === container);

    items.forEach((el, i) => {
      if (!el.hasAttribute('data-reveal-delay')) {
        el.style.setProperty('--reveal-delay', `${start + i * step}ms`);
      }
    });
  });

  // Eleman bazlı süre/ease/delay/mesafe/scale ayarları
  revealEls.forEach(el => {
    const d = el.dataset;
    if (d.revealDuration) el.style.setProperty('--reveal-duration', `${parseInt(d.revealDuration, 10)}ms`);
    if (d.revealEase)     el.style.setProperty('--reveal-ease', d.revealEase);
    if (d.revealDelay)    el.style.setProperty('--reveal-delay', `${parseInt(d.revealDelay, 10)}ms`);
    if (d.revealDistance) el.style.setProperty('--reveal-distance', `${parseInt(d.revealDistance, 10)}px`);
    if (d.revealScale)    el.style.setProperty('--reveal-scale', d.revealScale);
    el.classList.remove('in'); // başlangıçta gizli
  });

  // IntersectionObserver ile görünürlük kontrolü
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        const onceAttr = el.getAttribute('data-reveal-once');
        const once = onceAttr === null ? true : onceAttr !== 'false'; // varsayılan: true

        if (entry.isIntersecting) {
          el.classList.add('in');
          if (once) io.unobserve(el);
        } else if (!once) {
          el.classList.remove('in');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -10% 0px'
    });

    revealEls.forEach(el => io.observe(el));
  } else {
    // Hareket azalt: doğrudan göster
    revealEls.forEach(el => el.classList.add('in'));
  }

  // Parallax (raf + scroll)
  if (!prefersReduced) {
    const state = { ticking: false, vh: window.innerHeight };

    function onScrollOrResize() {
      if (!state.ticking) {
        requestAnimationFrame(updateParallax);
        state.ticking = true;
      }
    }

    function updateParallax() {
      const vh = state.vh = window.innerHeight;

      parallaxEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        const axis  = (el.dataset.parallax || 'y').toLowerCase() === 'x' ? 'x' : 'y';
        const speed = parseFloat(el.dataset.parallaxSpeed || el.dataset.speed || '0.2'); // 0.1–0.4 arası iyi

        // Ekran merkezine göre uzaklık (pozitif: yukarıda; negatif: aşağıda)
        const centerOffset = (rect.top + rect.height / 2) - vh / 2;
        const delta = -centerOffset * speed; // merkeze yaklaştıkça 0’a yaklaşır

        if (axis === 'y') {
          el.style.setProperty('--parallax-y', `${delta.toFixed(2)}px`);
        } else {
          el.style.setProperty('--parallax-x', `${delta.toFixed(2)}px`);
        }
      });

      state.ticking = false;
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    // ilk çerçeve
    updateParallax();
  } else {
    parallaxEls.forEach(el => {
      el.style.setProperty('--parallax-x', '0px');
      el.style.setProperty('--parallax-y', '0px');
    });
  }
})();