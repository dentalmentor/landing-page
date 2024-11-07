$(document).ready(function(){
	$('.faq__header').on("click" , function(e){
		e.preventDefault();
		$(this).closest('.faq__element').find('.faq__content').slideToggle(400);
		$(this).closest(".faq__element").toggleClass("active__faq");
	});

	if ($(window).width() > 767) {
		$(".feedback__grid").isotope({
		  itemSelector: '.elem__feedback',
		  layoutMode: 'masonry',
		})
	}
});