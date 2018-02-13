console.log("Hello!");
//commit 1

var $setColor = $('.set-color'); 
var $input = $('.colorTextInput');
var $brush = $('.brush');


//$div.append($input);

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
		$brush.attr('class', 'new-color');
		backgroundChange = true;
	} else {
		$brush.removeClass();
		backgroundChange = false;
	}
});

//commit 3
var $body = $('body');

for (var x = 0; x <= 100; x++) {
	var $newDiv = $('<div>');
	$newDiv.attr('class', 'new-containers');
	$body.append($newDiv);

};

