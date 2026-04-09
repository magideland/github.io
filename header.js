
fetch("header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#nav-menu").innerHTML = data);

// スクロールに応じてヘッダーの透明度を変更する
let lastScrollTop = 0;
const navMenu = document.getElementById('nav-menu');
window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScrollTop) {
    // 下スクロール
    navMenu.classList.add('visible');
  } else {
    // 上スクロール
    navMenu.classList.remove('visible');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

class Sticky {
  constructor() {
    this.el = document.querySelector('[data-sticky="target"]');
    if (this.el) this.init();
  }

  init() {
    this.logo_img = document.querySelector('[data-sticky="logo-img"]');

    this.el.addEventListener('mousemove', (e) => this.mouseMove(e))
  }

  mouseMove(e) {
    const imgRect = this.logo_img.getBoundingClientRect();
    const imgWidth = this.logo_img.clientWidth;
    const imgHeight = this.logo_img.clientHeight;

    const ex = e.offsetX;
    const ey = e.offsetY;

    const imgDamp = 50;

    const cx = (ex - imgWidth / 2) / imgWidth * imgDamp;
    const cy = (ey - imgHeight / 2) / imgHeight * imgDamp;

    gsap.to(this.logo_img, 0.3, {
      x: cx,
      y: cy,
      scale: 1.2,
      ease: 'Power2.easeOut'
    });
  }

  mouseLeave() {
    gsap.to([this.logo_img], {
      duration: params.duration,
      x: 0,
      y: 0,
      scale: 1,
      ease: 'Power2.easeOut',
    });
  }
}
