console.log("Hello!");

var $setColor = $('.set-color'); 
var $input = $('.colorTextInput');
var $div = $('div')


$div.append($input);

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