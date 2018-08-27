document.addEventListener('DOMContentLoaded', function() {
    var menu = new Menu('menu__button', 'menu__list', 'menu__button_press_pressed', 'menu__list_visibility_visible');
})



function Menu(menuBtnClass, menuListClass, menuBtnPressClass, menuListVisibilityClass) {
    var menuBtn = document.getElementsByClassName(menuBtnClass)[0],
        menuList = document.getElementsByClassName(menuListClass)[0];

    menuBtn.addEventListener('click', function () {
        menuList.classList.toggle(menuListVisibilityClass);
        menuBtn.classList.toggle(menuBtnPressClass);

        event.stopPropagation();

        document.addEventListener('click', function menuActivated () {
            menuList.classList.remove(menuListVisibilityClass);
            menuBtn.classList.remove(menuBtnPressClass);
            document.removeEventListener('click', menuActivated);
        });
    });
};


var button = document.getElementsByClassName('header__button')[0];
var catalogue = document.getElementsByClassName('catalogue__title')[0];
var point = catalogue.offsetTop;

button.addEventListener('click', function scroll() {
    scrolling = window.pageYOffset;
    winScroll();
});

function winScroll() {
    window.scrollTo(0, scrolling);
    scrolling += 10;
    var timer = setTimeout(winScroll, 1);
    if (scrolling >= point) {
        clearTimeout(timer);
    }
}



// button.addEventListener('click', function() {
//     scrollTo(document.documentElement, point, 200)
// });
//
// function scrollTo(element, to, duration) {
//     console.log(point);
//     if (duration <= 0) return;
//     var difference = to - element.scrollTop;
//     var perTick = difference / duration * 10;
//
//     setTimeout(function() {
//         element.scrollTop = element.scrollTop + perTick;
//         if (element.scrollTop === to) return;
//         scrollTo(element, to, duration - 10);
//     }, 10);
// }
