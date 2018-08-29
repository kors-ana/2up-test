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
document.addEventListener('DOMContentLoaded', function() {
    var menu = new Menu('menu__button', 'menu__list', 'menu__button_press_pressed', 'menu__list_visibility_visible');
})



var popUp = [];

popUp[0] = {
    images: ['img/pictures/cruise-tablet-image2.png', 'img/pictures/cruise-tablet-image1.png', 'img/pictures/cruise-tablet-image3.png', 'img/pictures/cruise-tablet-image4.png', 'img/pictures/cruise-tablet-image1.png'],
    textTitle: 'Морской круиз в Анапу',
    textRoute: '<b>Маршрут:</b> Сочи-Лазаревское-Геленджик-Анапа',
    textDuration: '<b>Продолжительность:</b> 10 ч. 0 мин.',
    textTimetableVariantOne: '<b>Расписание:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textTimetableVariantTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textDeparture: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textPrice: '49 000 руб.',
    textOldPrice: ''
};

popUp[1] = {
    images: ['img/pictures/cruise-tablet-image1.png', 'img/pictures/cruise-tablet-image2.png', 'img/pictures/cruise-tablet-image3.png', 'img/pictures/cruise-tablet-image4.png', 'img/pictures/cruise-tablet-image1.png'],
    textTitle: 'Обзорная морская прогулка с экскурсией',
    textRoute: '<b>Маршрут:</b> Сочи-Адлер-Сочи (без высадки)',
    textDuration: '<b>Продолжительность:</b> 1 ч. 0 мин.',
    textTimetableVariantOne: '<b>Расписание:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textTimetableVariantTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textDeparture: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textPrice: '5 000 руб.',
    textOldPrice: '15 000 руб.'
};

popUp[2] = {
    images: ['img/pictures/cruise-tablet-image3.png', 'img/pictures/cruise-tablet-image2.png', 'img/pictures/cruise-tablet-image1.png', 'img/pictures/cruise-tablet-image4.png', 'img/pictures/cruise-tablet-image1.png'],
    textTitle: 'Морская прогулка в Геленджик',
    textRoute: '<b>Маршрут:</b> Сочи-Туапсе-Геленджик',
    textDuration: '<b>Продолжительность:</b> 12 ч. 30 мин.',
    textTimetableVariantOne: '<b>Расписание:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textTimetableVariantTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textDeparture: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textPrice: '7 000 руб.',
    textOldPrice: '10 000 руб.'
};

popUp[3] = {
    images: ['img/pictures/cruise-tablet-image4.png', 'img/pictures/cruise-tablet-image1.png', 'img/pictures/cruise-tablet-image3.png', 'img/pictures/cruise-tablet-image2.png', 'img/pictures/cruise-tablet-image1.png'],
    textTitle: 'Морской круиз в Новороссийск',
    textRoute: '<b>Маршрут:</b> Сочи-Геленджик-Новороссйиск-Геленджик-Сочи',
    textDuration: '<b>Продолжительность:</b> 13 ч. 0 мин.',
    textTimetableVariantOne: '<b>Расписание:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textTimetableVariantTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textDeparture: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris ipsum, imperdiet ac auctor a, dignissim id ligula.',
    textPrice: '14 800 руб.',
    textOldPrice: ''
};

popUp[4] = {
    images: ['img/pictures/cruise-tablet-image2.png', 'img/pictures/cruise-tablet-image1.png', 'img/pictures/cruise-tablet-image3.png', 'img/pictures/cruise-tablet-image4.png', 'img/pictures/cruise-tablet-image1.png'],
    textTitle: 'Морская прогулка в Абрау-Дюрсо',
    textRoute: '<b>Маршрут:</b> Сочи-Абрау-Дюрсо',
    textDuration: '<b>Продолжительность:</b> 11 ч. 0 мин.',
    textTimetableVariantOne: '<b>Расписание:</b> Отправление из Сочи: ежедневно в 10:00, 11:40, 13:20, 15:00, 16:40',
    textTimetableVariantTwo: 'Отправление из Абрау-Дююрсо: ежедневно в 12:25, 14:05, 15:45, 17:25, 19:05',
    textDescription: 'Продолжительность: 11 часов 0 мин., из которых 10 часов - морская прогулка (туда и обратно), от 1 часа 30 мин. - свободное время в Ласточкином гнезде',
    textDeparture: 'Причал отправления/прибытия: набережная Ленина, причал №8, теплоход "Азов"',
    textPrice: '14 800 руб.',
    textOldPrice: ''
};

var imageCol = document.getElementsByClassName('cruise__image-desktop');
var popUpDiv = document.getElementsByClassName('pop-up')[0];
var mainImg = document.getElementsByClassName('card__images-main')[0];
var restImg = document.getElementsByClassName('card__images-rest')[0];
var text = document.getElementsByClassName('card__text')[0];

for (var i = 0; i < imageCol.length; i++) {

    imageCol[i].addEventListener('click', fulfil(i), false);
}

function fulfil(i) {
    return function () {
        popUpDiv.classList.add('pop-up_visibility_visible');

        mainImg.children[0].src = popUp[i].images[0];
        restImg.children[0].src = popUp[i].images[1];
        restImg.children[1].src = popUp[i].images[2];
        restImg.children[2].src = popUp[i].images[3];
        restImg.children[3].src = popUp[i].images[4];
        text.children[0].innerHTML = popUp[i].textTitle;
        text.children[1].innerHTML = popUp[i].textRoute;
        text.children[2].innerHTML = popUp[i].textTitle;
        text.children[3].innerHTML = popUp[i].textDuration;
        text.children[4].innerHTML = popUp[i].textTimetableVariantOne;
        text.children[5].innerHTML = popUp[i].textTimetableVariantTwo;
        text.children[6].innerHTML = popUp[i].textDescription;
        text.children[7].innerHTML = popUp[i].textPrice;
        text.children[8].innerHTML = popUp[i].textOldPrice;

        event.stopPropagation();

        popUpDiv.onclick = function(event) {
            var target = event.target;
            if (target.classList.contains('pop-up')) {
                popUpDiv.classList.remove('pop-up_visibility_visible');
            } else {
                return;
            }

            event.stopPropagation();
        };

        var srcOfMainImg = document.getElementsByClassName('main-image')[0];
        var restImgCol = document.getElementsByClassName('card__images-rest')[0];

        restImgCol.onclick = function(event) {
            var target = event.target;
            var targetSrc = target.src;

            target.src = srcOfMainImg.src;
            srcOfMainImg.src = targetSrc;
        }
    }
}

var button = document.getElementsByClassName('header__button')[0];
var catalogue = document.getElementsByClassName('catalogue__title')[0];
var point = catalogue.offsetTop;

button.addEventListener('click', function() {
    scrollTo(document.documentElement, point, 200)
});

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}
