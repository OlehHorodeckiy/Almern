// burger-mobile
const button = document.querySelector('.header__burger');
const menu = document.querySelector('.mobile-menu');
button.addEventListener('click', (event) => {
  menu.classList.toggle('active');
});
// trending tub and swipper
let jsTriggers = document.querySelectorAll('.js-tab-trigger'),
  jsContents = document.querySelectorAll('.js-tab-content');
jsTriggers.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    let id = this.getAttribute('data-tab'),
      content = document.querySelector(
        '.js-tab-content[data-tab="' + id + '"]'
      ),
      activeTrigger = document.querySelector('.js-tab-trigger.active'),
      activeContent = document.querySelector('.js-tab-content.active');

    activeTrigger.classList.remove('active'); // 1
    trigger.classList.add('active'); // 2

    activeContent.classList.remove('active'); // 3
    content.classList.add('active'); // 4
  });
});
// swipper
let swiperImg = new Swiper('.mySwiper', {
  slidesPerView: 1.67,
  breakpoints:{
    720:{
      slidesPerView: 2,
    },
    1025:{
      slidesPerView: 3,
      spaceBetween:false,
    }
  }


});

let textSwiper = new Swiper('.text-swiper', {
  slidesPerView: 1.67,
  breakpoints:{
    720:{
      slidesPerView: 2,
    },
    1025:{
      slidesPerView: 3,
    }
  }


});

swiperImg.controller.control = textSwiper;
textSwiper.controller.control = swiperImg;
let swiperImgBra = new Swiper('.mySwiperBra', {
  slidesPerView: 1.67,
  breakpoints:{
    720:{
      slidesPerView: 2,
    },
    1025:{
      slidesPerView: 3,
      spaceBetween:false,
    }
  }


});

let textSwiperBra = new Swiper('.text-swiperBra', {
  slidesPerView: 1.67,
  breakpoints:{
    720:{
      slidesPerView: 2,
    },
    1025:{
      slidesPerView: 3,
    }
  }


});

swiperImgBra.controller.control = textSwiperBra;
textSwiperBra.controller.control = swiperImgBra;
let swiperImgKimono = new Swiper('.mySwiperKimono', {
  slidesPerView: 1.67,
  breakpoints:{
    720:{
      slidesPerView: 2,
    },
    1025:{
      slidesPerView: 3,
      spaceBetween:false,
    }
  }


});

let textSwiperKimono = new Swiper('.text-swiperKimono', {
  slidesPerView: 1.67,
  breakpoints:{
    720:{
      slidesPerView: 2,
    },
    1025:{
      slidesPerView: 3,
    }
  }


});

swiperImgKimono.controller.control = textSwiperKimono;
textSwiperKimono.controller.control = swiperImgKimono;
let swiperImg4 = new Swiper('.mySwiper4', {
  slidesPerView: 1.67,
  breakpoints:{
    720:{
      slidesPerView: 2,
    },
    1025:{
      slidesPerView: 3,
      spaceBetween:false,
    }
  }


});

let textSwiper4 = new Swiper('.text-swiper4', {
  slidesPerView: 1.67,
  breakpoints:{
    720:{
      slidesPerView: 2,
    },
    1025:{
      slidesPerView: 3,
    }
  }


});

swiperImg4.controller.control = textSwiper4;
textSwiper4.controller.control = swiperImg4;

let shopSwipperImg = new Swiper('.shop-swipper', {
  slidesPerView: 1.68,
  breakpoints:{
    720:{
      slidesPerView: 2,
    },
    1025:{
      slidesPerView: 3,
    }
  }
});

let shopText = new Swiper('.shopText-swiper', {

  slidesPerView: 1.68,
  breakpoints:{
    720:{
      slidesPerView: 2,
    },
    1025:{
      slidesPerView: 3,
    }
  }
});
shopSwipperImg.controller.control = shopText;
shopText.controller.control = shopSwipperImg;

const shopSwiper = new Swiper('.shopSwiper', {
  navigation: {
    nextEl: '.swiper-prev',
    prevEl: '.swiper-next',
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  slidesPerView: 1.5,
  initialSlide:1,
  spaceBetween: 30,
  centeredSlides: true,
  720:{

    initialSlide:1,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 3,

  },
  1025: {
    centeredSlides: true,
    slidesPerView: 2,
    initialSlide: 1,

  }

});

const convenience = new Swiper('.convenienceSwiper', {
  slidesPerView: 3.1,
  spaceBetween: 10,
  initialSlide:2,
  centeredSlides: true,
  loop:true

});

$('.footer__link').css({ display: 'none' });
$('.footer-item').click(function () {
  $(this).next('.footer__link').slideToggle(500);
});

var swiper = new Swiper(".aboutSwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
});
