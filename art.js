console.log("Hello!");

var $setColor = $('.set-color'); 
var $brush = $('.brush');

//$brush.append($setColor);

$setColor.addEventListener('click', changeColor);

var changeColor = function(event) {
	var brush = event.target.closest('.brush');

	var setColor = brush.querySelector('.set-color')

	setColor.addClass('new-color');	
}