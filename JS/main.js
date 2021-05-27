var scrolls = null;
var slideIndex = 1;

var modalMenu = document.getElementById('menu-modal');

window.onload = () => {
	scrolls = document.querySelectorAll('#header-scroller')

	for (let s of scrolls) {
		s.addEventListener('click', (e) => {
			e.preventDefault()

			let blockID = s.getAttribute('href').substr(1)
			scrolls.forEach(
				(e) => {
					e.setAttribute('class', 'no')
				}
			)
			s.setAttribute('class', 'active')

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}
	
	showSlides(slideIndex);
	
	document.getElementById('modal-on').addEventListener(
		'click',
		(e) => {
			document.querySelector('body').style.overflow = 'hidden'
		}
	)
	document.getElementById('modal-off').addEventListener(
		'click',
		(e) => {
			document.querySelector('body').style.overflow = 'visible'
		}
	)
}

nextSlide = () => {
    showSlides(slideIndex += 1);
}

prevSlide = () => {
    showSlides(slideIndex -= 1);  
}

showSlides = (n) => {
	let slides = document.getElementsByClassName('portfolio-item');

	if (n > slides.length) {
	  slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}

	for (let slide of slides) {
		slide.style.display = 'none';
	}
	
	slides[slideIndex - 1].style.display = 'block';    
}