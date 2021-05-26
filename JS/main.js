var scrolls = null;
var slideIndex = 1;

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