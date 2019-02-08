$(function() {
	// Material design input

  $('.material-input').focus(function() { 
		$(this).parent().addClass('focused');
	}).blur(function() {
		if(!this.value) {
			$(this).parent().removeClass('focused');
		}
	});

	tabSwitch();
});

function tabSwitch() {
	var loginBtn = $('.login');
	var registerBtn = $('.register');
	var loginHeight = $('.login-main').outerHeight();

	loginBtn.on('click', function() {
		$(this).addClass('active');
		$('.login-main').addClass('active');
		$('.register-main, .register').removeClass('active');
	});
	registerBtn.on('click', function() {
		$(this).addClass('active');
		$('.register-main').addClass('active').outerHeight(loginHeight);
		$('.login-main, .login').removeClass('active');
	});
}