  const revealTargets = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

  revealTargets.forEach((target, index) => {
    if (target.classList.contains('section-headline')) {
      target.style.setProperty('--reveal-delay', `${Math.min(index * 0.04, 0.24)}s`);
    }
    revealObserver.observe(target);
  });

  // Staggered logo entrance and per-icon float delays
  const logoBoxes = document.querySelectorAll('.logo-box');
  logoBoxes.forEach((box, i) => {
    box.classList.add('appear');
    box.style.animation = `logoBoxEntrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.08}s both`;
    const icon = box.querySelector('i');
    if (icon) {
      icon.style.animationDelay = `${i * 0.12}s`;
    }
  });

  function openModal(id) {
    document.getElementById('modal-'+id).classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(id) {
    document.getElementById('modal-'+id).classList.remove('open');
    document.body.style.overflow = '';
  }
  function closeOutside(e, id) {
    if (e.target === document.getElementById('modal-'+id)) closeModal(id);
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(m => {
        m.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });
