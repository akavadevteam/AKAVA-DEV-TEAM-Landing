let navItems = document.querySelectorAll('.nav__item');
let footerNavItems = document.querySelectorAll('.footer-nav__item');


for (let i=0; i < navItems.length; i++){
    navItems[i].onclick = function () {
        document.getElementById(navItems[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

for (let i=0; i < footerNavItems.length; i++){
    footerNavItems[i].onclick = function () {
        document.getElementById(footerNavItems[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

$(".name_item").hide();
$(document).css('overflowY', 'hidden')

$(document).ready(function() {
	$('.logo-down').delay(500).animate({ "left": "31.5%" }, 2500 );
    $('.logo-up').delay(500).animate({ "left": "50.1%" }, 2500 )
    $('.logo-down').animate({'top': '130px'}, 2500);
    $('.logo-up').animate({'top': '10px'}, 2500);
    $('.main-name__items').hide().delay(6000).fadeIn(2500);
    $(".name_item").hide().delay(6500).fadeIn(2500);
    $('.header').hide().delay(7000).fadeIn(2500)
    $(document).delay(7000).css('overflowY', 'auto')
});

