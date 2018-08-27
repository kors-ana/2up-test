

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
