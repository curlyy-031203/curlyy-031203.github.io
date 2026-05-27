/* ============================================================
   Portfolio site — i18n + scroll reveal
   ============================================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'lang';
  const DEFAULT_LANG = 'zh';

  // ---- Language switching --------------------------------------------------

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    applyLang(lang);
    updateToggleLabel(lang);
  }

  function applyLang(lang) {
    const attr = 'data-' + lang;
    document.querySelectorAll('[data-zh][data-en]').forEach(el => {
      const text = el.getAttribute(attr);
      if (text !== null) {
        // Preserve elements that contain only text or simple inline structure.
        // If the element has data-html-zh/data-html-en, use innerHTML.
        const htmlAttr = 'data-html-' + lang;
        if (el.hasAttribute(htmlAttr)) {
          el.innerHTML = el.getAttribute(htmlAttr);
        } else {
          el.textContent = text;
        }
      }
    });

    // Document title
    const titleEl = document.querySelector('title[data-zh][data-en]');
    if (titleEl) {
      document.title = titleEl.getAttribute(attr) || document.title;
    }
  }

  function updateToggleLabel(lang) {
    const t = document.querySelector('.lang-toggle');
    if (t) t.textContent = lang === 'zh' ? 'EN' : 'ZH';
  }

  function initLangToggle() {
    const toggle = document.querySelector('.lang-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      const next = getLang() === 'zh' ? 'en' : 'zh';
      setLang(next);
    });
  }

  // ---- Scroll reveal -------------------------------------------------------

  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length || !('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          // Slight stagger when multiple enter at once
          const delay = (entry.target.dataset.delay || idx * 60) + 'ms';
          entry.target.style.transitionDelay = delay;
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => io.observe(el));
  }

  // ---- Init ----------------------------------------------------------------

  document.addEventListener('DOMContentLoaded', () => {
    setLang(getLang());
    initLangToggle();
    initReveal();
  });
})();
