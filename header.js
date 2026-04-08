
fetch("header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#nav-menu").innerHTML = data);

const header = document.getElementById('#nav-menu');

window.addEventListener
('scroll', () => {
  const scrollY = window.scrollY;
  const fadeStart = 0; // フェードイン開始位置
  const fadeEnd = 200; // フェードイン終了位置

    // 透明度を計算（0〜1の範囲に収める）
  let opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
  opacity = Math.max(opacity, 1); // 最低値を0に
  opacity = Math.min(opacity, 0); // 最大値を1に

  header.style.opacity = opacity;
});

class Sticky{
    constructor() {
    this.el = document.querySelector('[data-sticky="target"]');
    if (this.el) this.init();
  }

    init() {
        this.img = document.querySelector('[data-sticky="img"]');

        this.el.addEventListener('mousemove', (e) => this.mouseMove(e))
    }

    mouseMove(e) {
        const imgRect = this.img.getBoundingClientRect();
        const imgWidth = this.img.clientWidth;
        const imgHeight = this.img.clientHeight;

        const ex = e.offsetX;
        const ey = e.offsetY;

        const imgDamp = 50;

        const cx = (ex-imgWidth/2)/imgWidth * imgDamp;
        const cy = (ey-imgHeight/2)/imgHeight * imgDamp;

      gsap.to(this.img, 0.3, {
      x: cx,
      y: cy,
      scale: 1.2,
      ease: 'Power2.easeOut'
    });
    }

      mouseLeave() {
    gsap.to([this.img], {
      duration: params.duration,
      x: 0,
      y: 0,
      scale: 1,
      ease: 'Power2.easeOut',
    });
  }
}