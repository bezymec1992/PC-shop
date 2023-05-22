let hamburger = document.querySelector('.open-menu');
let navLinks = document.getElementById('nav-links');
let body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('hide');
  body.classList.toggle('open')
  hamburger.classList.toggle("menu-opened");
});

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 100,
  autoplay: {
    delay: 3000,
  },
  grabCursor: true,

  breakpoints: {
    320: {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },

    900: {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' ' + '<span class="' + totalClass + '"></span>';
        },

      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    }
  },
});

const swiper2 = new Swiper('.swiper2', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",

  },

  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 24,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    992: {

      slidesPerView: 4,
    }
  }
});


