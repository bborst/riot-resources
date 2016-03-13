<resource-users>
	<h1>Resource Users</h1>

	<div class="" each={ u in opts.user } data={ this }>{ u.name }</div>


	<script>
		// Mounted
		this.on('mount', function() {
			console.info('Riot mount event fired');
			opts.callback(this);
		});

		// Listen for data
		this.on('data_loaded', function(response) {
			console.info('Data recieved');
			opts.user = response;
			// Tell riot to rerender
			this.update();
		});
	</script>

</resource-users>