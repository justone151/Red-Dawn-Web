// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // อ่านภาษาจาก localStorage ถ้าไม่มีให้ default เป็น 'th'
  let currentLang = localStorage.getItem('rd-lang') || 'th';

  const langButtons = document.querySelectorAll('.lang-btn');
  const langEls     = document.querySelectorAll('[data-lang]');

  function switchLang(lang) {
    currentLang = lang;
    // เก็บใน localStorage
    localStorage.setItem('rd-lang', lang);

    // แสดง/ซ่อน element ตาม data-lang
    langEls.forEach(el => {
      // ไม่ไปซ่อนปุ่มเปลี่ยนภาษา
      if (el.classList.contains('lang-btn')) return;
      el.style.display = (el.dataset.lang === lang ? '' : 'none');
    });

    // มาร์กปุ่ม active
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  // ผูกอีเวนต์ให้ปุ่มเปลี่ยนภาษา
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
  });

  // เรียกครั้งแรกตอนโหลดหน้า
  switchLang(currentLang);

  // — Ripple effect (เดิม) —
  document.querySelectorAll('.btn, .nav__link').forEach(el => {
    el.addEventListener('click', e => {
      const circle = document.createElement('span');
      const d = Math.max(el.clientWidth, el.clientHeight);
      const rect = el.getBoundingClientRect();
      circle.style.width = circle.style.height = d + 'px';
      circle.style.left = `${e.clientX - rect.left - d/2}px`;
      circle.style.top  = `${e.clientY - rect.top  - d/2}px`;
      circle.classList.add('ripple');
      el.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });

  // — Mobile menu toggle (เดิม) —
  document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav__list').classList.toggle('open');
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav__link");

    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPath.split("/").pop()) {
        link.classList.add("active");
      }
    });
  });
