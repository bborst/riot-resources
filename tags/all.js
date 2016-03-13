riot.tag2('resource-users', '<h1>Resource Users</h1>', '', '', function(opts) {
});

riot.tag2('script', '', '', '', function(opts) {

	this.on('mount', function() {
		console.info('Riot mount event fired');

	});

	this.on('data_loaded', function() {
		console.info('Data recieved');
	});
});