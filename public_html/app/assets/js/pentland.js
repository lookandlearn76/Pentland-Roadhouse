var $thumbnail = $('#peekSection .thumbnail');
var $thumbnail1 = $('#aboutSection .thumbnail');
var $titles = $('#peekSection .titles');
var $titles1 = $('#aboutSection .titles');
var $find = $('#findSection');
var $find2 = $('#findSection .find2');
var $titles2 = $('#findSection .titles');

$thumbnail.waypoint(function(){
$thumbnail.addClass('animated fadeIn');
$titles.addClass('animated fadeIn');
$thumbnail.css('opacity', 1);
$titles.css('opacity', 1);

}, {offset: '50%'});

$thumbnail1.waypoint(function(){
$thumbnail1.addClass('animated fadeIn');
$titles1.addClass('animated fadeIn');
$thumbnail1.css('opacity', 1);
$titles1.css('opacity', 1);

}, {offset: '50%'});

$find.waypoint(function(){
$find2.addClass('animated fadeIn');
$titles2.addClass('animated fadeIn');
$find2.css('opacity', 1);
$titles2.css('opacity', 1);

}, {offset: '50%'});


$(document).ready(function(){
	setListen();
});

function setListen(){
	$('li a.first').click(function(one){
		one.preventDefault();
		var sectionID = one.currentTarget.id + "Section";
		$('html body').animate({
			scrollTop: $('#' + sectionID).offset().top
		}, 1000)
	})
};

$(".nav a").click(function () {
	 if ($("#btnCollapse").css('display')!='none')
	 $("#btnCollapse").click();
});
