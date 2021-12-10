"use strict";

const itop = new Swiper('.itop__slider', {
  loop: false,
  speed: 800,
  pagination: {
    el: '.itop .swiper-pagination',
    // type: "progressbar",
    type: "custom",
    renderCustom: function (itop, current, total) {
      return '<span class="pagination-current">'+('0' + current).slice(-2) + '</span> / <span class="pagination-total">' + ('0' + total).slice(-2)+'</span>';
    }
  },
  navigation: {
    nextEl: '.itop .swiper-button-next',
    prevEl: '.itop .swiper-button-prev',
  },
  scrollbar: {
    el: ".itop .swiper-scrollbar",
    //hide: true,
  },
});

const ireviews = new Swiper('.ireviews__carousel', {
  loop: false,
  speed: 800,
  navigation: {
    nextEl: '.ireviews .swiper-button-next',
    prevEl: '.ireviews .swiper-button-prev',
  },
});

const inews = new Swiper('.inews__carousel', {
  loop: false,
  speed: 800,
  navigation: {
    nextEl: '.inews .swiper-button-next',
    prevEl: '.inews .swiper-button-prev',
  },
});