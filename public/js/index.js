

// getImage
// renderAndReplaceImage


function getImage(){

	$.get('/cat', function( data ){
		renderAndReplaceImage( $( data ).find("url").text() )
	})
}

function renderAndReplaceImage( image ){
	console.log( image );
	$('#image').attr('src', image )
}

$(document).ready(function(){

	$('#cat_button').click(function(){
		console.log('You clicked it!');
		getImage();
	});


});

