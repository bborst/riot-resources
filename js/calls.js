

function tagCallback(theTag) {

	console.info('Callback executed');

	// Using YQL and JSONP
	$.ajax({
	    url: 'http://jsonplaceholder.typicode.com/users',
	 
	    // The name of the callback parameter, as specified by the YQL service
	    jsonp: "callback",
	 
	    // Tell jQuery we're expecting JSONP
	    dataType: "jsonp",
	 
	    // Tell YQL what we want and that we want JSON
	    data: {
	        // q: "select title,abstract,url from search.news where query=\"cat\"",
	        format: "json"
	    },
	 
	    // Work with the response
	    success: function( response ) {
	        // console.log( response ); // server response
	        theTag.trigger('data_loaded', response);
	    }
	});
}