$(document).ready(function(){
		$("#side-nav").hide();
		$("#toplink").hide();
		resizeAction();
		position = $("#headshots").position();
		photoBar();
		videoControl();
		topNav();
	});
	
$(window).resize(function(){
		resizeAction();
	});

photoBar = function() {
	$(window).scroll(function(i) {
		$("#side-nav").show();
		$("#toplink").show();
		var position = $("#headshots").position();
		var videostart = $("#videos").position().top
		var top = position.top + $(window).height();
		var footer = $("#container-footer").position().top;
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		if (bottom_of_window > top) {
			$("#side-nav").show();
		} else {
			$("#side-nav").hide();
		}
		if (bottom_of_window > footer) {
			$("#side-nav").hide();
		}
		if (bottom_of_window < videostart) {
			$("#toplink").hide();
		} else {
			$("#toplink").show();
		}
	});
}

resizeAction = function() {
		var vph = $(window).height();
		var action = $('#action-photo').height();
		if (vph > action) {
			$('#action-photo').height(vph);
		} 
}

videoControl = function() {
	$("#vone").click(function(){
		if ($("#video-one").hasClass("hide")) {
			var showing = $(".shown");
			$("#video-one").addClass("shown").removeClass("hide");
			showing.addClass("hide").removeClass("shown");
		}
	});
	$("#vtwo").click(function(){
		if ($("#video-two").hasClass("hide")) {
			var showing = $(".shown");
			$("#video-two").addClass("shown").removeClass("hide");
			showing.addClass("hide").removeClass("shown");
		}
	});
	$("#vthree").click(function(){
		if ($("#video-three").hasClass("hide")) {
			var showing = $(".shown");
			$("#video-three").addClass("shown").removeClass("hide");
			showing.addClass("hide").removeClass("shown");
		}
	});
}

topNav = function() {
	  $('input[type="checkbox"]').click(function() {
      $(this).toggleClass("checked", this.checked).parent().hide().show();
    });
}

