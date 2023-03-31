//Searchbar
const searchbarBtn = document.querySelector('.searchbar');
const searchForm = document.querySelector('.header__form');

searchbarBtn.addEventListener('click', function() {
  searchForm.classList.toggle('header__form--active');
  searchbarBtn.classList.toggle('searchbar--hide');
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