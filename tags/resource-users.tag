<resource-users>
	<h1>Resource Users</h1>
</resource-users>

<script>
	// Mounted
	this.on('mount', function() {
		console.info('Riot mount event fired');
		// opts.callback(this);
	});

	this.on('data_loaded', function() {
		console.info('Data recieved');
	});
</script>