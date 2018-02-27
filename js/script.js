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

$('#btn_modal').on('click', function() {
	$modal.fadeIn();
});
$('#btn_done').on('click', function() {
	$done.fadeIn();
});
$done.click(function() {
		$modal.fadeOut();
		$done.fadeOut();
});

