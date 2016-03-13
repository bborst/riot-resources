

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

function createUserInfo() {
	$.ajax('http://jsonplaceholder.typicode.com/users', {
		  method: 'POST',
		  data: {
			  // Test Data
			  // Returns unique id
			  "name": "Bryan",
			  "username": "Bryan",
			  "email": "bb@ab.biz",
			  "address": {
			    "street": "Kulas Light",
			    "suite": "Apt. 556",
			    "city": "Gwenborough",
			    "zipcode": "92998-3874",
			    "geo": {
			      "lat": "-37.3159",
			      "lng": "81.1496"
			    }
			  },
			  "phone": "1-770-736-8031 x56442",
			  "website": "hildegard.org",
			  "company": {
			    "name": "Romaguera-Crona",
			    "catchPhrase": "Multi-layered client-server neural-net",
			    "bs": "harness real-time e-markets"
			  }
			}
	}).then(function(data) {
	  console.log(data);
	});

}