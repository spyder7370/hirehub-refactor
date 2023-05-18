(function($) {
	'use strict';
	setTimeout(() => {
		$('.flash-alert').slideUp();
		$('.flash-container').slideUp();
		$('.flash-show-page').slideUp();
	}, 3000);
	$('.odometer').counterUp({ delay: 10, time: 1000 });
	jQuery('.dropdown-icon').on('click', function() {
		jQuery(this).toggleClass('active').next('ul').slideToggle();
		jQuery(this).parent().siblings().children('ul').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});
	window.addEventListener('scroll', function() {
		const header = document.querySelector(
			'header.style-1, header.style-2, header.style-3, header.style-4, header.style-5, header.style-6, header.style-7'
		);
		header.classList.toggle('sticky', window.scrollY > 0);
	});
	$('.sidebar-button').on('click', function() {
		$('.main-menu').addClass('show-menu');
	});
	$('.menu-close-btn').on('click', function() {
		$('.main-menu').removeClass('show-menu');
	});
	$('.search-btn').on('click', function() {
		$('.mobile-search').addClass('slide');
	});
	$('.search-cross-btn').on('click', function() {
		$('.mobile-search').removeClass('slide');
	});
	$('.select1').niceSelect();
	const togglePassword = document.querySelector('#togglePassword');
	const password = document.querySelector('#password');
	if (togglePassword) {
		togglePassword.addEventListener('click', function(e) {
			const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
			password.setAttribute('type', type);
			this.classList.toggle('bi-eye');
		});
	}
	const togglePassword3 = document.querySelector('#togglePassword3');
	const password3 = document.querySelector('#password3');
	if (togglePassword3) {
		togglePassword3.addEventListener('click', function(e) {
			const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
			password3.setAttribute('type', type);
			this.classList.toggle('bi-eye');
		});
	}
	const togglePassword2 = document.getElementById('togglePassword2');
	const password2 = document.querySelector('#password2');
	if (togglePassword2) {
		togglePassword2.addEventListener('click', function(e) {
			const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
			password2.setAttribute('type', type);
			this.classList.toggle('bi-eye');
		});
	}
	const togglePassword4 = document.getElementById('togglePassword4');
	const password4 = document.querySelector('#password4');
	if (togglePassword4) {
		togglePassword4.addEventListener('click', function(e) {
			const type = password4.getAttribute('type') === 'password' ? 'text' : 'password';
			password4.setAttribute('type', type);
			this.classList.toggle('bi-eye');
		});
	}
	$('.select2').select2({ placeholder: 'Select a programming language', allowClear: true });
	$('.js-example-basic-single').select2({ width: '100%', tags: true });
	$('.js-example-basic-multiple').select2({ width: '100%', multiple: true, tags: true });
	$('[data-fancybox="gallery"]').fancybox({
		buttons: [ 'slideShow', 'thumbs', 'zoom', 'fullScreen', 'share', 'close' ],
		loop: false,
		protect: true
	});
	jQuery('#datepicker5').datepicker({ format: 'dd-mm-yyyy', startDate: '+1d' });
	jQuery('#datepicker6').datepicker({ format: 'dd-mm-yyyy', startDate: '+1d' });
	jQuery('#datepicker7').datepicker({ format: 'dd-mm-yyyy', startDate: '+1d' });
	jQuery('#datepicker9').datepicker({ format: 'dd-mm-yyyy', startDate: '+1d' });
	jQuery('#datepicker10').datepicker({ format: 'dd-mm-yyyy', startDate: '+1d' });
	jQuery('#datepicker11').datepicker({ format: 'dd-mm-yyyy', startDate: '+1d' });
	jQuery('#myDatepicker').datepicker({ format: 'dd-mm-yyyy', startDate: '+1d' });
	var swiper = new Swiper('.location-slider', {
		slidesPerView: 4,
		spaceBetween: 24,
		loop: true,
		speed: 1500,
		autoplay: { delay: 2000 },
		navigation: { nextEl: '.next-1', prevEl: '.prev-1' },
		breakpoints: {
			280: { slidesPerView: 1, spaceBetween: 15 },
			480: { slidesPerView: 2 },
			768: { slidesPerView: 2 },
			992: { slidesPerView: 3 },
			1200: { slidesPerView: 4 },
			1400: { slidesPerView: 4 },
			1600: { slidesPerView: 4 }
		}
	});
	var swiper = new Swiper('.testimonial-slider1', {
		slidesPerView: 4,
		spaceBetween: 40,
		loop: true,
		speed: 1500,
		autoplay: { delay: 2000 },
		navigation: { nextEl: '.next-2', prevEl: '.prev-2' },
		breakpoints: {
			280: { slidesPerView: 1, spaceBetween: 15 },
			480: { slidesPerView: 1 },
			768: { slidesPerView: 1 },
			992: { slidesPerView: 1 },
			1200: { slidesPerView: 2 },
			1400: { slidesPerView: 2 },
			1600: { slidesPerView: 2 }
		}
	});
	var swiper = new Swiper('.trusted-company-slider', {
		slidesPerView: 4,
		spaceBetween: 24,
		loop: true,
		speed: 1500,
		autoplay: { delay: 2000 },
		breakpoints: {
			280: { slidesPerView: 2, spaceBetween: 15 },
			480: { slidesPerView: 3 },
			768: { slidesPerView: 4 },
			992: { slidesPerView: 5 },
			1200: { slidesPerView: 6 },
			1400: { slidesPerView: 6 },
			1600: { slidesPerView: 6 }
		}
	});
	var swiper = new Swiper('.recruters-slider', {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		speed: 1500,
		autoplay: { delay: 2000 },
		navigation: { nextEl: '.next-3', prevEl: '.prev-3' },
		breakpoints: {
			280: { slidesPerView: 1, spaceBetween: 30 },
			480: { slidesPerView: 1 },
			768: { slidesPerView: 2 },
			992: { slidesPerView: 3 },
			1200: { slidesPerView: 3 },
			1400: { slidesPerView: 4 },
			1600: { slidesPerView: 4 }
		}
	});
	var swiper = new Swiper('.feature-slider2', {
		slidesPerView: 2,
		spaceBetween: 20,
		loop: true,
		speed: 1500,
		autoplay: { delay: 2000 },
		navigation: { nextEl: '.next-3', prevEl: '.prev-3' },
		breakpoints: {
			280: { slidesPerView: 1, spaceBetween: 30 },
			480: { slidesPerView: 1 },
			768: { slidesPerView: 1.2 },
			992: { slidesPerView: 1.5 },
			1200: { slidesPerView: 2 },
			1400: { slidesPerView: 2.5 },
			1600: { slidesPerView: 2.5 }
		}
	});
	var swiper = new Swiper('.company-gallery-slider', {
		slidesPerView: 5,
		spaceBetween: 30,
		loop: true,
		speed: 1500,
		autoplay: { delay: 2000 },
		navigation: { nextEl: '.next-3', prevEl: '.prev-3' },
		breakpoints: {
			280: { slidesPerView: 1 },
			480: { slidesPerView: 2 },
			768: { slidesPerView: 3 },
			992: { slidesPerView: 4 },
			1200: { slidesPerView: 5 },
			1400: { slidesPerView: 5 },
			1600: { slidesPerView: 5 }
		}
	});
	var swiper = new Swiper('.related-job-slider', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		speed: 1500,
		autoplay: { delay: 2000 },
		navigation: { nextEl: '.next-4', prevEl: '.prev-4' },
		breakpoints: {
			280: { slidesPerView: 1 },
			480: { slidesPerView: 1 },
			768: { slidesPerView: 2 },
			992: { slidesPerView: 2 },
			1200: { slidesPerView: 3 },
			1400: { slidesPerView: 3 },
			1600: { slidesPerView: 3 }
		}
	});
	var swiper = new Swiper('.category3-slider', {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		speed: 1700,
		autoplay: { delay: 2200 },
		navigation: { nextEl: '.next-5', prevEl: '.prev-5' },
		breakpoints: {
			280: { slidesPerView: 1 },
			480: { slidesPerView: 2 },
			768: { slidesPerView: 3 },
			992: { slidesPerView: 3 },
			1200: { slidesPerView: 4 },
			1400: { slidesPerView: 4 },
			1600: { slidesPerView: 4 }
		}
	});
	var swiper = new Swiper('.home4-feedback-slider2', {
		slidesPerView: 3,
		spaceBetween: 20,
		centeredSlides: true,
		loop: true,
		navigation: { nextEl: '.next-10', prevEl: '.prev-10' }
	});
	var swiper = new Swiper('.home4-feedback-slider', {
		slidesPerView: 4,
		spaceBetween: 20,
		centeredSlides: true,
		loop: true,
		navigation: { nextEl: '.next-10', prevEl: '.prev-10' },
		breakpoints: {
			280: { slidesPerView: 1, centeredSlides: false },
			480: { slidesPerView: 1, centeredSlides: false },
			768: { slidesPerView: 1, centeredSlides: false },
			992: { slidesPerView: 3 },
			1200: { slidesPerView: 3 },
			1400: { slidesPerView: 3 },
			1600: { slidesPerView: 3 }
		},
		thumbs: { swiper: swiper }
	});
	$('#slick1').slick({
		rows: 2,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{ breakpoint: 1200, settings: { arrows: false, slidesToShow: 2 } },
			{ breakpoint: 991, settings: { arrows: false, slidesToShow: 2 } },
			{ breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 480, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 350, settings: { arrows: false, slidesToShow: 1 } }
		]
	});
	var swiper = new Swiper('.user-feedback-slider3', {
		spaceBetween: 20,
		loop: true,
		slidesPerView: 1,
		speed: 2000,
		effect: 'fade',
		autoplay: { delay: 1500 },
		navigation: { nextEl: '.next-6', prevEl: '.prev-6' },
		pagination: { el: '.swiper-pagination-g', type: 'fraction' }
	});
	var swiper = new Swiper('.home2-feedback-slider', {
		spaceBetween: 20,
		loop: true,
		slidesPerView: 1,
		speed: 2000,
		autoplay: { delay: 1500 },
		navigation: { nextEl: '.next-6', prevEl: '.prev-6' }
	});
	$('#slick2').slick({
		rows: 2,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		speed: 2000,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{ breakpoint: 1500, settings: { slidesToShow: 5 } },
			{ breakpoint: 1400, settings: { slidesToShow: 4 } },
			{ breakpoint: 1100, settings: { slidesToShow: 3 } },
			{ breakpoint: 768, settings: { arrows: false, slidesToShow: 2 } },
			{ breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 480, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 350, settings: { arrows: false, slidesToShow: 1 } }
		]
	});
	var swiper = new Swiper('.home6-feedback-slider', {
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		speed: 1700,
		autoplay: { delay: 2200 },
		navigation: { nextEl: '.next-12', prevEl: '.prev-12' },
		breakpoints: {
			280: { slidesPerView: 1 },
			480: { slidesPerView: 1 },
			768: { slidesPerView: 2 },
			992: { slidesPerView: 2 },
			1200: { slidesPerView: 3 },
			1400: { slidesPerView: 3 },
			1600: { slidesPerView: 3 }
		}
	});
	$('#slick3').slick({
		rows: 2,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		speed: 2000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{ breakpoint: 1750, settings: { slidesToShow: 3 } },
			{ breakpoint: 1400, settings: { slidesToShow: 3 } },
			{ breakpoint: 1100, settings: { slidesToShow: 2 } },
			{ breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 480, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 350, settings: { arrows: false, slidesToShow: 1 } }
		]
	});
	$('#slick4').slick({
		rows: 2,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{ breakpoint: 1400, settings: { arrows: false, slidesToShow: 3 } },
			{ breakpoint: 1200, settings: { arrows: false, slidesToShow: 3 } },
			{ breakpoint: 991, settings: { arrows: false, slidesToShow: 2 } },
			{ breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 480, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 350, settings: { arrows: false, slidesToShow: 1 } }
		]
	});
	$('#slick5').slick({
		rows: 2,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{ breakpoint: 1400, settings: { arrows: false, slidesToShow: 5 } },
			{ breakpoint: 1200, settings: { arrows: false, slidesToShow: 4 } },
			{ breakpoint: 991, settings: { arrows: false, slidesToShow: 3 } },
			{ breakpoint: 768, settings: { arrows: false, slidesToShow: 2 } },
			{ breakpoint: 576, settings: { arrows: false, slidesToShow: 2 } },
			{ breakpoint: 480, settings: { arrows: false, slidesToShow: 1 } },
			{ breakpoint: 350, settings: { arrows: false, slidesToShow: 1 } }
		]
	});
	var swiper = new Swiper('.home5-feedback-slider', {
		slidesPerView: 2,
		spaceBetween: 20,
		loop: true,
		speed: 1700,
		autoplay: { delay: 2200 },
		navigation: { nextEl: '.next-13', prevEl: '.prev-13' },
		breakpoints: {
			280: { slidesPerView: 1 },
			480: { slidesPerView: 1 },
			768: { slidesPerView: 1 },
			992: { slidesPerView: 1 },
			1200: { slidesPerView: 2 },
			1400: { slidesPerView: 2 },
			1600: { slidesPerView: 2 }
		}
	});
	$('body').on('click', '.add-education-row', function() {
		var newRow = '';
		newRow += '<div class="row addEducation">';
		newRow += '<div class="col-lg-12">';
		newRow += '<div class="info-title">';
		newRow += '<h6>Academic Information:</h6>';
		newRow += '<div class="dash"></div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="educationalLavel">Education Level*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/qualification-2.svg" alt="">';
		newRow +=
			'<input required type="text" id="level" name="education[level]"placeholder="Type Your Education Level...">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="major">My Major*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/major.svg" alt="">';
		newRow +=
			'<input required type="text" id="major" name="education[major]" placeholder="Type Your Education Major...">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="institute">Institute/University*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/univercity.svg" alt="">';
		newRow +=
			'<input required type="text" id="institute" name="education[institute]" placeholder="Type Your Institute Name...">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-30">';
		newRow += '<label for="gpa">Result/GPA**</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/gpa-2.svg" alt="">';
		newRow += '<input required type="text" id="gpa" name="education[result]" placeholder="9.75/10">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="datepicker10">Starting Period*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/calender2.svg" alt="">';
		newRow += '<input required type="text" class="myDatepicker" name="education[start]" placeholder="DD/MM/YY">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-30">';
		newRow += '<label for="datepicker11">Ending Period*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/calender2.svg" alt="">';
		newRow += '<input required type="text" class="myDatepicker" name="education[end]" placeholder="DD/MM/YY">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="add-row">';
		newRow += '<button type="button" class="remove-education-row remove">Remove Education Area</button>';
		newRow += '</div>';
		newRow += '</div>';
		$('.education-row').append(newRow);
		$('.select1').niceSelect();
		jQuery('.myDatepicker').datepicker({ format: 'dd-mm-yyyy', startDate: '+1d' });
	});
	$('body').on('click', '.add-projects-row', function() {
		var newRow = '';
		newRow += '<div class="row addexperiences">';
		newRow += '<div class="col-lg-12">';
		newRow += '<div class="info-title">';
		newRow += '<h6>Add Your Projects:</h6>';
		newRow += '<div class="dash"></div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="companies">Project Title*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/company-2.svg " alt="">';
		newRow += '<input required type="text" id="companies" name="project[name]" placeholder="Hirehub">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="desigation">Link*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/designation-2.svg" alt="">';
		newRow +=
			'<input required type="text" id="desigation" name="project[link]" placeholder="https://app.netlify.com">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-12">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="stack">Stack*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/major.svg" alt="">';
		newRow += '<input required type="text" id="stack" name="project[stack]" placeholder="MERN">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-12">';
		newRow += '<div class="form-inner mb-20">';
		newRow += '<label for="summernote1">Description**</label>';
		newRow +=
			'<textarea required name="project[description]" class="summernote1" placeholder="Project Description...."></textarea>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="add-row">';
		newRow += '<button type="button" class="remove-projects-row remove">Remove Experiences Area</button>';
		newRow += '</div>';
		newRow += '</div>';
		$('.projects-row').append(newRow);
		$('.select1').niceSelect();
		jQuery('.myDatepicker').datepicker({ format: 'dd-mm-yyyy', startDate: '+1d' });
		$('.summernote1').summernote();
	});
	$('body').on('click', '.add-experiences-row', function() {
		var newRow = '';
		newRow += '<div class="row addexperiences">';
		newRow += '<div class="col-lg-12">';
		newRow += '<div class="info-title">';
		newRow += '<h6>Add Your Experiences:</h6>';
		newRow += '<div class="dash"></div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="companies">Company Name*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/company-2.svg " alt="">';
		newRow += '<input required type="text" id="companies" name="experience[company]" placeholder="Google">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="desigation">Designation*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/designation-2.svg" alt="">';
		newRow += '<input required type="text" id="desigation" name="experience[position]" placeholder="SDE">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="myDatepicker">Starting Period*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/calender2.svg" alt="">';
		newRow += '<input required type="text" class="myDatepicker" name="experience[start]" placeholder="DD/MM/YY">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-30">';
		newRow += '<label for="myDatepicker">Ending Period*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/calender2.svg" alt="">';
		newRow += '<input required type="text" class="myDatepicker" name="experience[end]" placeholder="DD/MM/YY">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-12">';
		newRow += '<div class="form-inner mb-20">';
		newRow += '<label for="summernote1">Description*</label>';
		newRow +=
			'<textarea required name="experience[responsibility]" class="summernote1" placeholder="Something Write Yourself...."></textarea>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="add-row">';
		newRow += '<button type="button" class="remove-experiences-row remove">Remove Experiences Area</button>';
		newRow += '</div>';
		newRow += '</div>';
		$('.experiences-row').append(newRow);
		$('.select1').niceSelect();
		jQuery('.myDatepicker').datepicker({ format: 'dd-mm-yyyy', startDate: '+1d' });
		$('.summernote1').summernote();
	});
	$('body').on('click', '.addwork-area-row', function() {
		var newRow = '';
		newRow += '<div class="row addworkarea">';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="working-field">Working Field*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/company-2.svg" alt="">';
		newRow +=
			'<input required type="text" id="working-field" name="working-field" placeholder="Frontend Developer">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-6">';
		newRow += '<div class="form-inner mb-25">';
		newRow += '<label for="icon">Add Icon*</label>';
		newRow += '<div class="input-area">';
		newRow += '<img src="/assets/images/icon/company-2.svg" alt="">';
		newRow += '<input required type="file">';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="col-md-12">';
		newRow += '<div class="form-inner mb-40">';
		newRow += '<label for="description">Short Description*</label>';
		newRow += '<textarea required name="description" id="description" placeholder="Company Details*"></textarea>';
		newRow += '</div>';
		newRow += '</div>';
		newRow += '<div class="add-row">';
		newRow += '<button type="button" class="remove-work-area-row remove">Remove Work Area</button>';
		newRow += '</div>';
		newRow += '</div>';
		$('.work-area-row').append(newRow);
		$('.select1').niceSelect();
	});
	$('body').on('click', '.remove-education-row', function() {
		$(this).parents('.addEducation').remove();
	});
	$('body').on('click', '.remove-experiences-row', function() {
		$(this).parents('.addexperiences').remove();
	});
	$('body').on('click', '.remove-projects-row', function() {
		$(this).parents('.addexperiences').remove();
	});
	$('body').on('click', '.remove-work-area-row', function() {
		$(this).parents('.addworkarea').remove();
	});
	$('body').on('click', '.remove-skills-row', function() {
		$(this).parents('.addskills').remove();
	});
	$(function() {
		$('input[name="showInputBox"]').on('click', function() {
			if ($(this).val() === 'fixedPrice') {
				$('#fixedPrice').show();
				$('#rangePrice').hide();
			} else if ($(this).val() === 'rangePrice') {
				$('#fixedPrice').hide();
				$('#rangePrice').show();
			} else {
				$('#fixedPrice').hide();
				$('#rangePrice').hide();
			}
		});
		$('.js-example-templating').select2({ tags: true, placeholder: 'Type Your Tag' });
	});
	$(function() {
		$('#summernote1').summernote();
		$('#resumeObjective').summernote();
		$('#resumeSkills').summernote();
		$('.summernote1').summernote();
		$('button#btnToggleStyle').on('click', function(e) {
			e.preventDefault();
			var styleEle = $('style#fixed');
			if (styleEle.length == 0)
				$(
					'<style id="fixed">.note-editor .dropdown-toggle::after { all: unset; } .note-editor .note-dropdown-menu { box-sizing: content-box; } .note-editor .note-modal-footer { box-sizing: content-box; }</style>'
				).prependTo('body');
			else styleEle.remove();
		});
	});
	if ($('input[type="number').length) {
		$('input[type="number"]').niceNumber({
			buttonDecrement: '<i class="bi bi-dash"></i>',
			buttonIncrement: '<i class="bi bi-plus"></i>'
		});
	}
	jQuery(window).on('load', function() {
		$('.eg-preloder').fadeOut('100');
	});
})(jQuery);
