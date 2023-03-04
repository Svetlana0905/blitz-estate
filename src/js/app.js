import { isWebp, openPopUpActions, closePopUpActions, filterPriceForm, init } from './modules'
import Swiper, { EffectFlip, Thumbs } from 'swiper';
import AOS from 'aos'

window['FLS'] = true

isWebp()

openPopUpActions()
closePopUpActions()
filterPriceForm()
init()

AOS.init();

var swiper = new Swiper(".my-swiper", {
   loop: true,
   spaceBetween: 10,
   slidesPerView: 4,
   freeMode: true,
   watchSlidesProgress: true,
});
var swiper2 = new Swiper(".my-swiper2", {
   modules: [EffectFlip, Thumbs],
   effect: 'flip',
   loop: true,
   spaceBetween: 10,
   thumbs: {
      swiper: swiper,
   },
});
