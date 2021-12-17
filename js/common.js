"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const itop = new Swiper('.itop__slider', {
    loop: false,
    speed: 800,
    pagination: {
      el: '.itop .swiper-pagination',
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

  const team = new Swiper('.team__slider', {
    loop: false,
    speed: 800,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.team .swiper-button-next',
      prevEl: '.team .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });

  const cert = new Swiper('.cert__slider', {
    loop: false,
    speed: 800,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.cert .swiper-button-next',
      prevEl: '.cert .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    }
  });
  const reviews = new Swiper('.reviews__carousel', {
    loop: false,
    speed: 800,
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews .swiper-button-next',
      prevEl: '.reviews .swiper-button-prev',
    },
  });
  const news = new Swiper('.news__carousel', {
    loop: false,
    speed: 800,
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: '.news .swiper-button-next',
      prevEl: '.news .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: "auto",
      },
    }
  });

  const getPaddingContainer = () => {
    const fullContainer = document.querySelectorAll('.js-pl');
    const paddingContainer = document.querySelector('.container').getBoundingClientRect();
    console.log(paddingContainer);
    fullContainer.forEach(item => {
      console.log(item);
      item.style.paddingLeft = `${paddingContainer.left+15}px`;
    });
  };
  getPaddingContainer();
  window.addEventListener('resize', getPaddingContainer, true);


  const addPhoto = document.getElementById('r-photo');
  addPhoto.addEventListener('change', (event) => {
    const result = document.querySelector('.filename');
    result.textContent = `${event.target.value}`;
  });
  

});