var $window = $(window);
var $dh = $(document).height();
var $wh = $(window).height();
var $endSect1 = ($dh - $wh - 300);
var $sect2 = $("#sect2")
var $thumbs1 = $("#thumbs1");
var $thumbs2 = $("#thumbs2");
var $thumbs3 = $("#thumbs3");
var $thumbs4 = $("#thumbs4");
var $thumbnail = $('.thumbnail');
var $mapSect = $('.sect5');
var $titles = $('.titles');

$thumbnail.waypoint(function(){
	$thumbnail.addClass('animated fadeIn');
	$titles.addClass('animated fadeIn');
	$thumbnail.css('opacity', 1);
	$titles.css('opacity', 1);

}, {offset: '50%'})
//end of thumbnail function


$mapSect.waypoint(function(){
	$mapSect.addClass('animated fadeIn');
	$mapSect.css('opacity', 1);

}, {offset: '50%'})

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

/*$('.animated').waypoint(function(){
	$(this).toggleClass($(this).data('fadeInLeft'));
}, { offset: 'sect2.ScrollTop'});

$('.animated').waypoint(function(){
	$(this).toggleClass($(this).data('fadeInLeft'));
});*/

//scroll code








/*function getPosition(el){
	var xPos = 0;
	var yPos = 0;

	while(el) {
		if (el.tagName == "BODY") {
				//deal with browser quirks body/window/document and page scrollTop
			var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
			var yScroll = el.scrollTop || document.document.Element.scrollTop;

			xPos += (el.offsetLeft - xScroll + el.clientLeft);
			yPos += (el.offsetTop - yScroll + el.clientTop);

		} else {
		//for all other non-BODY elements

			xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			yPos += (el.offsetTop - el.scrollTop + el.clientTop);
		}

		el = el.offsetParent;
	}

	return{
		x: xPos,
		y: yPos
	};
}

getPosition("#thumbs1");

//deal with the page getting resized or scrolled

window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

function updatePosition(){
//add your code to update the postion when your browser is resized or scrolled
}*/






/*thumbs1.waypoint(function(direction) {
	if (direction === 'down'){
			thumbs1.removeClass('fadeOutLeft').addClass('fadeInLeft');
			thumbs2.removeClass('fadeOutLeft').addClass('fadeInLeft');
			thumbs3.removeClass('fadeOutRight').addClass('fadeInRight');
			thumbs4.removeClass('fadeOutRight').addClass('fadeInRight');
	}
			//$(this).prev().removeClass('fadeInLeft fadeInRight');
}, { offset: "20px" });

thumbs1.waypoint(function(direction) {
	if (direction === 'down') {
			thumbs1.removeClass('fadeInLeft').addClass('fadeOutLeft');
			thumbs2.removeClass('fadeInLeft').addClass('fadeOutLeft');
			thumbs3.removeClass('fadeInRight').addClass('fadeOutRight');
			thumbs4.removeClass('fadeInRight').addClass('fadeOutRight');
	}
}, { offset: "23px" });

thumbs1.waypoint(function(direction) {
	if(direction === 'up'){
		thumbs1.removeClass('fadeOutLeft').addClass('fadeInLeft');
		thumbs2.removeClass('fadeOutLeft').addClass('fadeInLeft');
		thumbs3.removeClass('fadeOutRight').addClass('fadeInRight');
		thumbs4.removeClass('fadeOutRight').addClass('fadeInRight');
	}
}, { offset: "24px" });

thumbs1.waypoint(function(direction) {
		if(direction === 'up'){
			thumbs1.removeClass('fadeInLeft').addClass('fadeOutLeft');
			thumbs2.removeClass('fadeInLeft').addClass('fadeOutLeft');
			thumbs3.removeClass('fadeInRight').addClass('fadeOutRight');
			thumbs4.removeClass('fadeInRight').addClass('fadeOutRight');
		}
}, { offset: "19px" });*/
