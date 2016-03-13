riot.tag2('resource-users', '<h1>Resource Users</h1> <div class="" each="{u in opts.user}" data="{this}">{u.name}</div>', '', '', function(opts) {

		this.on('mount', function() {
			console.info('Riot mount event fired');
			opts.callback(this);
		});

		this.on('data_loaded', function(response) {
			console.info('Data recieved');
			opts.user = response;

			this.update();
		});
}, '{ }');