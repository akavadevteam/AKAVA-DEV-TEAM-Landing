let navItems = document.querySelectorAll('.nav__item');
let footerNavItems = document.querySelectorAll('.footer-nav__item');


for (let i = 0; i < navItems.length; i++) {
	navItems[i].onclick = function () {
		document.getElementById(navItems[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
	}
}

for (let i = 0; i < footerNavItems.length; i++) {
	footerNavItems[i].onclick = function () {
		document.getElementById(footerNavItems[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
	}
}

$(".name_item").hide();
$(document).css('overflowY', 'hidden')
const screenWidth = window.screen.width
$(document).ready(function () {
	$('.main-name__items').hide().delay(5500).fadeIn(2500);
	$(".name_item").hide().delay(6000).fadeIn(2500);
	$('.header').hide().delay(7000).fadeIn(2500)
	if (screenWidth >= 1920) {
		$('.logo-down').delay(500).animate({ "left": "35.5%" }, 2500);
		$('.logo-up').delay(500).animate({ "left": "50.1%" }, 2500)
		$('.logo-down').animate({ 'top': '130px' }, 2500);
		$('.logo-up').animate({ 'top': '10px' }, 2500);
	} else if (screenWidth >= 1680) {
		$('.logo-down').delay(500).animate({ "left": "33.5%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "50.1%" }, 2000)
		$('.logo-down').animate({ 'top': '130px' }, 2000);
		$('.logo-up').animate({ 'top': '10px' }, 2000);
	} else if (screenWidth >= 1600) {
		$('.logo-down').delay(500).animate({ "left": "32.5%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "50.1%" }, 2000)
		$('.logo-down').animate({ 'top': '130px' }, 2000);
		$('.logo-up').animate({ 'top': '10px' }, 2000);
	} else if (screenWidth >= 1540) {
		$('.logo-down').delay(500).animate({ "left": "32%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "50.1%" }, 2000)
		$('.logo-down').animate({ 'top': '131px' }, 2000);
		$('.logo-up').animate({ 'top': '10px' }, 2000);
	} else if (screenWidth >= 1440) {
		$('.logo-down').delay(500).animate({ "left": "30.7%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "50.1%" }, 2000)
		$('.logo-down').animate({ 'top': '131px' }, 2000);
		$('.logo-up').animate({ 'top': '10px' }, 2000);
	} else if (screenWidth >= 1380) {
		$('.logo-down').delay(500).animate({ "left": "29.8%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "50.1%" }, 2000)
		$('.logo-down').animate({ 'top': '131px' }, 2000);
		$('.logo-up').animate({ 'top': '10px' }, 2000);
	} else if (screenWidth >= 1280) {
		$('.logo-down').delay(500).animate({ "left": "28.3%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "50.1%" }, 2000)
		$('.logo-down').animate({ 'top': '131px' }, 2000);
		$('.logo-up').animate({ 'top': '10px' }, 2000);
	} else if (screenWidth >= 1080) {
		$('.logo-down').delay(500).animate({ "left": "24%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "50.1%" }, 2000)
		$('.logo-down').animate({ 'top': '131px' }, 2000);
		$('.logo-up').animate({ 'top': '10px' }, 2000);
	} else if (screenWidth >= 1024) {
		$('.logo-down').delay(500).animate({ "left": "24%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "51.6%" }, 2000)
		$('.logo-down').animate({ 'top': '131px' }, 2000);
		$('.logo-up').animate({ 'top': '10px' }, 2000);
	} else if (screenWidth >= 821) {
		$('.logo-down').delay(500).animate({ "left": "28%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "51.6%" }, 2000)
		$('.logo-down').animate({ 'top': '131px' }, 2000);
		$('.logo-up').animate({ 'top': '10px' }, 2000);
	} else if (screenWidth >= 770) {
		$('.logo-down').delay(500).animate({ "left": "24%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "49%" }, 2000)
		$('.logo-down').animate({ 'top': '131px' }, 2000);
		$('.logo-up').animate({ 'top': '10px' }, 2000);
	} else if (screenWidth >= 720) {
		$('.logo-down').delay(500).animate({ "left": "11.5%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "51.6%" }, 2000)
		$('.logo-down').animate({ 'top': '131px' }, 2000);
		$('.logo-up').animate({ 'top': '10px' }, 2000);
	} else if (screenWidth >= 540) {
		$('.logo-down').delay(500).animate({ "left": "4.8%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "50%" }, 2000)
		$('.logo-down').animate({ 'top': '131px' }, 2000);
		$('.logo-up').animate({ 'top': '28px' }, 2000);
	} else if (screenWidth >= 480) {
		$('.logo-down').delay(500).animate({ "left": "4.8%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "46%" }, 2000)
		$('.logo-down').animate({ 'top': '180px' }, 2000);
		$('.logo-up').animate({ 'top': '98px' }, 2000);
	} else if (screenWidth >= 431) {
		$('.logo-down').delay(500).animate({ "left": "0%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "46%" }, 2000)
		$('.logo-down').animate({ 'top': '180px' }, 2000);
		$('.logo-up').animate({ 'top': '98px' }, 2000);
	} else if (screenWidth >= 430) {
		$('.logo-down').delay(500).animate({ "left": "0%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "46%" }, 2000)
		$('.logo-down').animate({ 'top': '180px' }, 2000);
		$('.logo-up').animate({ 'top': '98px' }, 2000);
	} else if (screenWidth >= 414) {
		$('.logo-down').delay(500).animate({ "left": "0%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "48.5%" }, 2000)
		$('.logo-down').animate({ 'top': '200px' }, 2000);
		$('.logo-up').animate({ 'top': '119px' }, 2000);
	} else if (screenWidth >= 412) {
		$('.logo-down').delay(500).animate({ "left": "0%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "48.5%" }, 2000)
		$('.logo-down').animate({ 'top': '200px' }, 2000);
		$('.logo-up').animate({ 'top': '119px' }, 2000);
	} else if (screenWidth >= 390) {
		$('.logo-down').delay(500).animate({ "left": "6.5%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "45%" }, 2000)
		$('.logo-down').animate({ 'top': '180px' }, 2000);
		$('.logo-up').animate({ 'top': '120px' }, 2000);
	} else if (screenWidth >= 380) {
		$('.logo-down').delay(500).animate({ "left": "5.5%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "46%" }, 2000)
		$('.logo-down').animate({ 'top': '180px' }, 2000);
		$('.logo-up').animate({ 'top': '120px' }, 2000);
	} else if (screenWidth >= 374) {
		$('.logo-down').delay(500).animate({ "left": "5.5%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "47%" }, 2000)
		$('.logo-down').animate({ 'top': '180px' }, 2000);
		$('.logo-up').animate({ 'top': '120px' }, 2000);
	} else if (screenWidth >= 360) {
		$('.logo-down').delay(500).animate({ "left": "5.5%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "48%" }, 2000)
		$('.logo-down').animate({ 'top': '180px' }, 2000);
		$('.logo-up').animate({ 'top': '120px' }, 2000);
	} else if (screenWidth >= 320) {
		$('.logo-down').delay(500).animate({ "left": "0%" }, 2000);
		$('.logo-up').delay(500).animate({ "left": "48.5%" }, 2000)
		$('.logo-down').animate({ 'top': '180px' }, 2000);
		$('.logo-up').animate({ 'top': '120px' }, 2000);
	}
});


function Sim(sldrId) {

	let id = document.getElementById(sldrId);
	if (id) {
		this.sldrRoot = id
	}
	else {
		this.sldrRoot = document.querySelector('.projects__container ')
	};

	this.sldrList = this.sldrRoot.querySelector('.projects__items');
	this.sldrElements = this.sldrList.querySelectorAll('.projects__item');
	this.sldrElemFirst = this.sldrList.querySelector('.projects__item');
	this.leftArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-left');
	this.rightArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-right');
	this.indicatorDots = this.sldrRoot.querySelector('div.sim-slider-dots');

	this.options = Sim.defaults;
	Sim.initialize(this)
};

Sim.defaults = {


	loop: true,     // Бесконечное зацикливание слайдера
	auto: true,     // Автоматическое пролистывание
	interval: 5000, // Интервал между пролистыванием элементов (мс)
	arrows: true,   // Пролистывание стрелками
	dots: true      // Индикаторные точки
};

Sim.prototype.elemPrev = function (num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement -= num;
	if (this.currentElement < 0) this.currentElement = this.elemCount - 1;

	if (!this.options.loop) {
		if (this.currentElement == 0) {
			this.leftArrow.style.display = 'none'
		};
		this.rightArrow.style.display = 'block'
	};

	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

	if (this.options.dots) {
		this.dotOn(prevElement); this.dotOff(this.currentElement)
	}
};

Sim.prototype.elemNext = function (num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement += num;
	if (this.currentElement >= this.elemCount) this.currentElement = 0;

	if (!this.options.loop) {
		if (this.currentElement == this.elemCount - 1) {
			this.rightArrow.style.display = 'none'
		};
		this.leftArrow.style.display = 'block'
	};

	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

	if (this.options.dots) {
		this.dotOn(prevElement); this.dotOff(this.currentElement)
	}
};

Sim.prototype.dotOn = function (num) {
	this.indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;'
};

Sim.prototype.dotOff = function (num) {
	this.indicatorDotsAll[num].style.cssText = 'background-color:#556; cursor:default;'
};

Sim.initialize = function (that) {

	// Constants
	that.elemCount = that.sldrElements.length; // Количество элементов

	// Variables
	that.currentElement = 0;
	let bgTime = getTime();

	// Functions
	function getTime() {
		return new Date().getTime();
	};
	function setAutoScroll() {
		that.autoScroll = setInterval(function () {
			let fnTime = getTime();
			if (fnTime - bgTime + 10 > that.options.interval) {
				bgTime = fnTime; that.elemNext()
			}
		}, that.options.interval)
	};

	// Start initialization
	if (that.elemCount <= 1) {   // Отключить навигацию
		that.options.auto = false; that.options.arrows = false; that.options.dots = false;
		that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
	};
	if (that.elemCount >= 1) {   // показать первый элемент
		that.sldrElemFirst.style.opacity = '1';
	};

	if (!that.options.loop) {
		that.leftArrow.style.display = 'none';  // отключить левую стрелку
		that.options.auto = false; // отключить автопркрутку
	}
	else if (that.options.auto) {   // инициализация автопрокруки
		setAutoScroll();
		// Остановка прокрутки при наведении мыши на элемент
		that.sldrList.addEventListener('mouseenter', function () { clearInterval(that.autoScroll) }, false);
		that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
	};

	if (that.options.arrows) {  // инициализация стрелок
		that.leftArrow.addEventListener('click', function () {
			let fnTime = getTime();
			if (fnTime - bgTime > 1000) {
				bgTime = fnTime; that.elemPrev()
			}
		}, false);
		that.rightArrow.addEventListener('click', function () {
			let fnTime = getTime();
			if (fnTime - bgTime > 1000) {
				bgTime = fnTime; that.elemNext()
			}
		}, false)
	}
	else {
		that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
	};

	if (that.options.dots) {  // инициализация индикаторных точек
		let sum = '', diffNum;
		for (let i = 0; i < that.elemCount; i++) {
			sum += '<span class="sim-dot"></span>'
		};
		that.indicatorDots.innerHTML = sum;
		that.indicatorDotsAll = that.sldrRoot.querySelectorAll('span.sim-dot');
		// Назначаем точкам обработчик события 'click'
		for (let n = 0; n < that.elemCount; n++) {
			that.indicatorDotsAll[n].addEventListener('click', function () {
				diffNum = Math.abs(n - that.currentElement);
				if (n < that.currentElement) {
					bgTime = getTime(); that.elemPrev(diffNum)
				}
				else if (n > that.currentElement) {
					bgTime = getTime(); that.elemNext(diffNum)
				}
				// Если n == that.currentElement ничего не делаем
			}, false)
		};
		that.dotOff(0);  // точка[0] выключена, остальные включены
		for (let i = 1; i < that.elemCount; i++) {
			that.dotOn(i)
		}
	}
};

new Sim();
