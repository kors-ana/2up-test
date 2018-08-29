function Menu(menuBtnClass, menuListClass, menuBtnPressClass, menuListVisibilityClass) {
    var menuBtn = document.getElementsByClassName(menuBtnClass)[0],
        menuList = document.getElementsByClassName(menuListClass)[0];

    menuBtn.addEventListener('click', function () {
        menuList.classList.toggle(menuListVisibilityClass);
        menuBtn.classList.toggle(menuBtnPressClass);

        event.stopPropagation();

        document.addEventListener('click', function menuActivated (event) {
            var target = event.target;
            if (target.classList.contains("menu__list") || target.classList.contains("list__ref")) {
                return;
            } else {
                menuList.classList.remove(menuListVisibilityClass);
                menuBtn.classList.remove(menuBtnPressClass);
                document.removeEventListener('click', menuActivated);
            }
        });
    });
};