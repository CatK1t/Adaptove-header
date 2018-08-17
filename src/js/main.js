// Функция для кроссбраузерности (для браузеров которые не поддерживают calc())

window.onload = function(){
    
    if(!checkCalc()){
        var style = document.createElement('link');
        style.setAttribute('rel','stylesheet');
        style.setAttribute('href','css/style-nocalc.css');
        document.body.appendChild(style);
    }

}

function checkCalc(){
    var div = document.createElement('div');
    div.style.cssText = 'width: calc(100%)';
    return div.style.length > 0;
}

// Конец проверки
// Slick
$('.header-slider').slick({
    accessibility: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="prev"><i class="fa fa-angle-left f-prev" aria-hidden="true"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right f-next" aria-hidden="true"></i></button>',
    dotsClass: 'header-dots'
});
//menu  

$('.menu-li').click(
    function() {
        $('.menu-li-drop-menu').stop().show();
        $('.menu-li-drop-menu').on( "mouseleave", function() {
            $('.menu-li-drop-menu').stop().hide();
    });
});

$(document).mouseup(function(e) {
    $('.menu-li-drop-menu').hide();
});

//320px

(function() {
 
    "use strict";
   
    var toggles = document.querySelectorAll(".hamburger");
   
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
   
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
   
  })();


