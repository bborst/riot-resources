

function tagCallback(theTag) {

	console.info('Callback executed');

	// New request
	// var request = new XMLHttpRequest();
	// request.open('GET', 'people.json', true);
	// request.onload = function() {

		// Status 200 means all good
		// if (request.status == 200) {
			// set the data from parsed json
			// var data = JSON.parse(request.responseText);
			// Trigger event: Data Loaded and pass in people. Contact list listens for event called 'data_loaded' and is looking for data as an argument
		// 	theTag.trigger('data_loaded', data.people)
		// }
	// }
	// Simulates slow loading time
	// setTimeout(function() {
	// request.send();
	// }, 2000);

	// Using YQL and JSONP
	// $.ajax({
	//     url: 'http://jsonplaceholder.typicode.com/users',
	 
	//     // The name of the callback parameter, as specified by the YQL service
	//     jsonp: "callback",
	 
	//     // Tell jQuery we're expecting JSONP
	//     dataType: "jsonp",
	 
	//     // Tell YQL what we want and that we want JSON
	//     data: {
	//         // q: "select title,abstract,url from search.news where query=\"cat\"",
	//         format: "json"
	//     },
	 
	//     // Work with the response
	//     success: function( response ) {
	//         console.log( response ); // server response
	//     }
	// });
}