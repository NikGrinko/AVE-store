;

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });
    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });
    function selectToggle() {
        this.parentElement.classList.toggle('select__is-active');
    }
    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = this.closest('.select').querySelector('.select-current');
        currentText.innerText = text;
        select.classList.remove('select__is-active');
    }
};
select();

let burger = document.querySelector('.section-menu__burger'),
    menu = document.querySelector('.section-menu__navigation'),
    body = document.querySelector('.body');

burger.addEventListener('click', function () {
    this.classList.toggle('section-menu__burger-active');
    menu.classList.toggle('section-menu__navigation-active');
    body.classList.toggle('no-scroll');
})