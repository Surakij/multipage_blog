import './sass/style.scss';
import './slider/slider.scss';
import Slider from './slider/slider.js';

window.onload = function () {
  const slider = new Slider('.slider-container', { autoplay: true, autoplayDelay: 5000 });
  slider.init();
};
