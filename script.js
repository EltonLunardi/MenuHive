$(document).ready(function () {
	$(".dvHex").hover(function () {
		$(this).children(".hexTop").css("border-bottom-color", "#ffa605");
		$(this).children(".hexCenter").css("background-color", "#ffa605");
		$(this).children(".hexBottom").css("border-top-color", "#ffa605");
	}, function () {
		$(".hexTop").css("border-bottom-color", "#1e2530");
		$(".hexCenter").css("background-color", "#1e2530");
		$(".hexBottom").css("border-top-color", "#1e2530");
	});
});