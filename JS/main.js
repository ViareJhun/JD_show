var scrolls = null;
var slideIndex = 1;

var modalMenu = null;
var popupEl = null;

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
	
	modalMenu = document.getElementById('menu-modal');
	popupEl = document.getElementById('popup');
	
	showSlides(slideIndex);
	
	document.querySelectorAll('#modal-on').forEach(
		(l) => {
			l.addEventListener(
				'click',
				(e) => {
					document.querySelector('body').style.overflow = 'hidden'
					modalMenu.style.display = 'block';
				}
			)
		}
	)
	document.querySelectorAll('#modal-off').forEach(
		(l) => {
			l.addEventListener(
				'click',
				(e) => {
					document.querySelector('body').style.overflow = 'visible';
					modalMenu.style.display = 'none';
				}
			)
		}
	)
	
	if (window.innerWidth < 1200)
	{
		document.querySelectorAll('#header-scroller').forEach(
			(l) => {
				l.addEventListener(
					'click',
					(e) => {
						document.querySelector('body').style.overflow = 'visible';
						modalMenu.style.display = 'none';
					}
				)
			}
		)
	}
	else
	{
		
		document.querySelectorAll('#popup-on').forEach((l) => {
				l.addEventListener(
					'click',
					(e) => {
						document.querySelector('body').style.overflow = 'hidden'
						popupEl.style.display = 'block';
					}
				)
			}
		)
		document.querySelectorAll('#popup-off').forEach((l) => {
				l.addEventListener(
					'click',
					(e) => {
						document.querySelector('body').style.overflow = 'visible'
						popupEl.style.display = 'none';
					}
				)
			}
		)
	}
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