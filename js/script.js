//Searchbar
const searchbarBtn = document.querySelector('.searchbar');
const searchForm = document.querySelector('.header__form');

searchbarBtn.addEventListener('click', function(e) {
  searchForm.classList.toggle('header__form--active');
  searchbarBtn.classList.add('searchbar--hide');
  e.preventDefault();
})


//

const element = document.querySelector('.broadcasts__select');
const choices = new Choices(element, {
    searchChoices: false,
    searchEnabled: false,
    placeholder: true,
    placeholderValue: 'Дмитрий Гутенберг',
    itemSelectText: ''
});

//Guest Accordion

new Accordion('.js-accordion-container');
new Accordion('.first-accordion');

//Guests

const tabsLink = document.querySelectorAll('.guests__bio-link');
const tabsItem = document.querySelectorAll('.guests__right');

tabsLink.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsLink.forEach(function(link) {link.classList.remove('guests__bio-link--active')});
    e.currentTarget.classList.add('guests__bio-link--active');

    tabsItem.forEach(function(element){element.classList.remove('guests__right--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__right--active');

  })
})


//Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      376: {
        spaceBetween: 14,
        slidesPerView: 2,
      },
      659: {
        slidesPerView: 2,
      },
      824: {
        slidesPerView: 2,
      },
      1140: {
        slidesPerView: 4,
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


/// burger menu

let burger = document.querySelector(".burger");
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link')
let bottomMenu = document.querySelector('.bottom-menu__list')

burger.addEventListener('click', function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    bottomMenu.classList.toggle('bottom-menu__list--active')

    document.body.classList.toggle('stop-scroll')
})

menuLinks.forEach(function (e) {
    e.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll')
    })
})

//
let btn = document.querySelector('.podcasts__btn');
let item = document.querySelectorAll('.podcasts__item');


btn.addEventListener('click', () => {

  item.forEach(el => { el.classList.add('podcasts__item-visible')});

});