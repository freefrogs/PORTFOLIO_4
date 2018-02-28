$(document).ready(function() {
	//Scroll to ID
	$('a[href^="#1"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 600);
	});
	$('a[href^="#2"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1200);
	});
	$('a[href^="#3"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1800);
	});

	//play video
	var $bacgroundFilm = $('#film_background');
	var $film = $('#film');

	$bacgroundFilm.on('click', function() {
		$bacgroundFilm.css('display', 'none');
		$film.fadeIn('slow');
		$film.trigger('play');
	});

	// header modal (click on phone button)
	var $modal = $('#header_modal');
	var $done = $('#done');

	$('#btn_modal').click(function() {
		$modal.fadeIn();
	});
	$('#btn_done').on('click', function() {
		$done.fadeIn();
	});
	$done.click(function() {
			$modal.fadeOut();
			$done.fadeOut();
	});

	//map - slide up & down
	var $upDown = $('#up_down');

	$upDown.on('click', function() {
		$('#map').slideToggle('slow');
	});

	//slideshow
	var slideIndex = 0;
	showSlides();

	function showSlides() {
		var i;
		var slides = document.getElementsByClassName("slide");
		var dots = document.getElementsByClassName("dot");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}
		slideIndex++;
		if (slideIndex > slides.length) {slideIndex = 1}    
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " active";
		setTimeout(showSlides, 5000);
	}
});