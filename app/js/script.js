const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const hasFade = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
	if (header.classList.contains('open')) {
		body.classList.remove('noscroll');
		header.classList.remove('open');
		hasFade.forEach((elem) => {
			elem.classList.remove('fade-in');
			elem.classList.add('fade-out');
		});
	} else {
		body.classList.add('noscroll');
		header.classList.add('open');
		hasFade.forEach((elem) => {
			elem.classList.remove('fade-out');
			elem.classList.add('fade-in');
		});
	}
});

$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 20) {
			$('.navbar').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
		}

		if (this.scrollY > 500) {
			$('.scroll-up').addClass('show');
		} else {
			$('.scroll-up').removeClass('show');
		}
	});

	$('.scroll-up').click(function () {
		$('html').animate({ scrollTop: 0 });
	});
});

$('.carousel').owlCarousel({
	margin: 20,
	loop: true,
	autoplayTimeOut: 2000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			nav: false,
		},

		600: {
			items: 2,
			nav: false,
		},

		1000: {
			items: 3,
			nav: false,
		},
	},
});
