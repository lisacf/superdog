$(function() {
		$('#contact_name').blur(function() { 
			if ($(this).val().length < 3 ){
					$("#nameerror").remove();
					$("#emailspace").remove();
					$("#contact_name").before("<li id='nameerror' class='error'>Name is too short!</li>");
					$("#contact_name").addClass("highlight");
					if ($("#emailerror").text()) {
						$("#namespace").remove();
					} else {
						$("#contact_email").before("<li id='emailspace'>.</li>");
					}
			}
			if ($(this).val().length > 2 ) {
				$("#contact_name").removeClass();
				$("#nameerror").remove();
				$("#emailspace").remove();
			}
		});

		$('#contact_email').blur(function(){
			if ($(this).val().match(/[@]/)) {
				$("#contact_email").removeClass();
				$("#emailerror").remove();
				$("#namespace").remove();
				$("#emailspace").remove();
			} else {
				$("#emailerror").remove();
				$("#namespace").remove();
				$("#contact_email").addClass("highlight");
				$("#contact_email").before("<li id='emailerror' class='error'>Invalid email!</li>");
				if ($("#nameerror").text()) {
					$("#emailspace").remove();
				} else {
					$("#contact_name").before("<li id='namespace'>.</li>");
				}
			}
		});
		$('#contact_comment').blur(function() { 
			if ($(this).val().length < 3 ){
					$("#commenterror").remove();
					$("#contact_comment").before("<li id='commenterror' class='error'>Come on.  Bark to me!</li>");
					$("#contact_comment").addClass("highlight");
			}
			if ($(this).val().length > 2 ) {
				$("#contact_comment").removeClass();
				$("#commenterror").remove();
			}
		});
		$("#new_contact").submit(function(event){
			var name = $("#contact_name").val().length
			var email = $("#contact_email").val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
			var comment = $("#contact_comment").val().length
			if (( name > 2) && email && (comment > 2) ){
				$("#senderror").remove();
				confirm("Ready to send?");
			} else {
				if ($('#senderror').text()) {
				} else {
					$("#submit-form-btn").before("<p id='senderror' class='error'>Please complete form before sending!</p>");
				}
				event.preventDefault();
			}
		});
})