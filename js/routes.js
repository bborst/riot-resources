


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
	}, 
	people: function(id, action) {
		switch (action) {
			case 'detail':
				// riot.mount('#view', 'people-detail', { person: params.people[id], index: id });
				break;
			case 'edit':
				// riot.mount('#view', 'people-edit', { person: params.people[id], index: id, obj: params.people });
				break;
		}
	},
	add: function(id, action) {
		riot.mount('#view', 'add-user');
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
