$(document).ready(function(){
	var alto;
	var ancho;
	ancho = $(window).width();
	alto = ancho * 7.2 /100;
	$("#materiales:nth-child(1)").css("height", alto);
})