/* ----------------------------------------
				SCRIPTS
---------------------------------------- */


/* Подключаем прелоадер для сайта через библиотеку "jquery" */

$(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });


/* ___________________________________________________________________________________________________________________ */


/* Связываем скрипт из библиотеки "slick" с нашим слайдером (необходимо вписать имя модификатора - класса) */

$('.slider').slick
(
{
	dots: true,
	autoplay: true,
	autoplaySpeed: 4500,
	speed: 1200,
	slidesToShow: 1
}
);


/* ___________________________________________________________________________________________________________________ */


/* Связываем скрипт из библиотеки "jquery" для плавного перехода по ссылкам навигации внутри сайта
(для этого всем ссылкам из навигации необходимо так же присвоить отдельный класс "scrollto") */

$(document).ready(function() {
$("a.scrollto").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});
});


/* ___________________________________________________________________________________________________________________ */


/* Подключаем плавную прокрутку страниц из библиотеки "jquery" */

$(function() {  
	// Default
	jQuery.scrollSpeed(100, 800);

	// Custom Easing
	jQuery.scrollSpeed(100, 800, 'easeOutCubic');
});


/* ___________________________________________________________________________________________________________________ */


/* Прописываем скрипт для кнопки меню */

$('.menu-btn').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
  });


/* ___________________________________________________________________________________________________________________ */


/* Связываем скрипт из библиотеки "jquery" для кнопки "НАВЕРХ" ("ToTOP") */

$(function() {
	$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
	$('#toTop').fadeIn();
	} else {
	$('#toTop').fadeOut();
	}
	});
	$('#toTop').click(function() {
	$('body,html').animate({scrollTop:0},1600);
	});
	});


/* ___________________________________________________________________________________________________________________ */