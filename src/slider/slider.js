export default class Slider {
  constructor(selector, options) {
    this.slider = document.querySelector(selector);
    this.slideList = this.slider.querySelector('.slide-list');
    this.slides = this.slideList.querySelectorAll('li');
    this.prevButton = this.slider.querySelector('.prev-button');
    this.nextButton = this.slider.querySelector('.next-button');
    this.slideWidth = this.slides[0].offsetWidth;
    this.offset = 0;
    this.options = {
      ...options,
    };
  }

  init() {
    this.prevButton.addEventListener(
      'click',
      this.showPreviousSlide.bind(this),
    );
    this.nextButton.addEventListener('click', this.showNextSlide.bind(this));
    if (this.options.autoplay) {
      setInterval(this.showNextSlide.bind(this), this.options.autoplayDelay);
    }
  }

  showNextSlide() {
    this.offset += this.slideWidth;
    if (this.offset > (this.slides.length - 1) * this.slideWidth) {
      this.offset = 0;
    }
    this.slideList.style.left = `${-this.offset}px`;
  }

  showPreviousSlide() {
    this.offset -= this.slideWidth;
    if (this.offset < 0) {
      this.offset = (this.slides.length - 1) * this.slideWidth;
    }
    this.slideList.style.left = `${-this.offset}px`;
  }
}
