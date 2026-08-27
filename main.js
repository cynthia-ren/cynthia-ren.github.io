/* =========================================================
   霞工 · 环博会展位服务 —— 网站交互脚本
   ========================================================= */

// 移动端导航菜单开关
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // 点击菜单项后自动收起（移动端）
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// 高亮当前页面的导航菜单项
(function highlightActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === path) {
      a.classList.add('active');
    }
  });
})();

// 联系表单：提交前做简单校验并给出提示
const contactForm = document.querySelector('#contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#formName');
    const phone = document.querySelector('#formPhone');
    const tip = document.querySelector('#formTip');

    if (name && !name.value.trim()) {
      alert('请填写您的称呼');
      name.focus();
      return;
    }
    if (phone && !phone.value.trim()) {
      alert('请填写您的联系方式');
      phone.focus();
      return;
    }

    if (tip) {
      tip.textContent = '✓ 感谢您的留言！表单当前为演示功能，请直接通过下方微信/电话联系。';
      tip.style.color = '#12a37f';
    }
    contactForm.reset();
  });
}

// 页面滚动淡入动画（可选增强）
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.card, .step, .article-card').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
