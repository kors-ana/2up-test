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