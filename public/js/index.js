
// This gets a new image
function getImage(){
	// Goes to the route /cat and passes the data on in the function call ()
	$.get('/cat', function( data ){
		// Here we call our own function with the url
		// The url we get from data which is body on the server side
		// We load that in as a jQuery nodes and use .find to search for the <url> element
		// Then we say we want the text from the element and give it to renderAndReplaceImage
		renderAndReplaceImage( $( data ).find("url").text() )
	})
}
// This replaces an image src attribute
function renderAndReplaceImage( image ){
	// This instance of `image` is what we get from getImage
	// We find the element with ID `image` aka `#image`
	// And replace the attribute `src` with the image url 
	$('#image').attr('src', image )
}

// Wait untill the document is ready/done loading everything and such
$(document).ready(function(){
	// When you click on ID `cat_buuton` aka `#cat_button` run this code
	$('#cat_button').click(function(){
		// Get a new Image url
		getImage();
	});
});

