


/**
* Routes
*/
// End all routes on load
riot.route.stop();
// Let riot control routes
riot.route.start();

var routes = {
	home: function(id, action) {
		riot.mount('#view', 'resource-users', { callback: tagCallback });
	}
}

/**
* Route handler
*/
function handler(collection, id, action) {
	var routeFn = routes[collection || 'home'];
	routeFn(id, action);
}

riot.route(handler);
riot.route.exec(handler);
