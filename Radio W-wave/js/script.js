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