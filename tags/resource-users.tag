<resource-users>
	<h1>Resource Users</h1>

	<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		<!-- // Start Loop -->
		<div each={ u in opts.users } data={ this } class="panel panel-default">
			<div class="panel-heading" role="tab" id=heading{ u.id }>
				<h4 class="panel-title">
				<a class="heading-toggle" role="button" data-toggle="collapse" data-parent="#accordion" href=#collapse{ u.id } aria-controls=collapse{ u.id }>
					{ u.name }
				</a>
				</h4>
			</div>
			<div id=collapse{ u.id } class="panel-collapse collapse " role="tabpanel" aria-labelledby=heading{ u.id }>
				<div class="panel-body">
					<ul>
						<li>Email: { u.email }</li>
						<li>Phone: { u.phone }</li>
						<li>Username: { u.username }</li>
						<li>Website: <a href="http://{ u.website }" target="new">{ u.website }</a></li>
					</ul>
				</div>
			</div>
		</div>
		<!-- // End Loop -->
	</div>



	<script>
		// Mounted
		this.on('mount', function() {
			// console.info('Riot mount event fired');
			// TODO: Store data in object so we don't have to keep making call
			if (opts.users) {
				console.info('We already have data');
			} else {
				console.info('We need the data');
				opts.callback(this);
			}
		});

		// Listen for data
		this.on('data_loaded', function(response) {
			console.info('Data recieved');
			opts.users = response;
			// Data
			// console.info(opts.users);
			// Tell riot to rerender
			this.update();
		});

	</script>

</resource-users>