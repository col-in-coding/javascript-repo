
var g = G$('Colin', 'Li');

g.greet().setLang('es').greet(true).log();

// g.HTMLGreeting('#greeting');

$('#login').click(function(){
	var loginGrtr = G$('Colin', 'Li');

	$('#loginDiv').hide();

	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});