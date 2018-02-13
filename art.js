console.log("Hello!");

var $setColor = $('.set-color'); 
//var $brush = $('.brush');
var $div = $('div')


//$brush.append($setColor);

/*
$setColor.addEventListener('click', changeColor);

var changeColor = function(event) {
	var brush = event.target.closest('.brush');

	var setColor = brush.querySelector('.set-color')

	setColor.addClass('new-color');	
}
*/
var backgroundChange = false;



$setColor.on('click', function(){
	if (!backgroundChange) {
		$div.attr('class', 'new-color');
		backgroundChange = true;
	} else {
		$div.removeClass();
		backgroundChange = false;
	}
})