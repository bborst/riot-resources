riot.tag2('add-user', '<p>add user page</p> <input type="text" id="nameInput" placeholder="Name" onkeyup="{edit}"> <input type="text" id="usernameInput" placeholder="Username" onkeyup="{edit}"> <input type="text" id="emailInput" placeholder="Email" onkeyup="{edit}"> <input type="text" id="phoneInput" placeholder="Phone" onkeyup="{edit}"> <input type="text" id="websiteInput" placeholder="Website"> <button type="button" __disabled="{disabled}" onclick="{add}">Add Person</button>', '', '', function(opts) {

		this.disabled = true;

		this.edit = function(e) {
			this.disabled = (nameInput.value == ''
				|| usernameInput.value == ''
				|| emailInput.value == ''
				|| phoneInput.value == '');
		}

		this.add = function(e) {
			var user = {};
			user.name = nameInput.value;
			user.username = usernameInput.value;
			user.email = emailInput.value;
			user.phone = phoneInput.value;
			user.website = websiteInput.value;

			createUserInfo(user)

			this.nameInput.value = '';
			this.usernameInput.value = '';
			this.emailInput.value = '';
			this.phoneInput.value = '';
			websiteInput.value = ''
			this.disabled = true
		}
}, '{ }');
riot.tag2('nav-bar', '<nav class="navbar navbar-default"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <ul class="nav navbar-nav"> <li><a href="#home">Home <span class="sr-only">(current)</span></a></li> <li><a href="#add">Add User</a></li> </ul> </div> </nav>', '', '', function(opts) {

		this.isActive = function(e) {
			console.info(e)

		}

});
riot.tag2('resource-users', '<h1>Resource Users</h1> <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"> <div each="{u in opts.users}" data="{this}" class="panel panel-default"> <div class="panel-heading" role="tab" id="heading{u.id}"> <h4 class="panel-title"> <a class="heading-toggle" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse{u.id}" aria-controls="collapse{u.id}"> {u.name} </a> </h4> </div> <div id="collapse{u.id}" class="panel-collapse collapse " role="tabpanel" aria-labelledby="heading{u.id}"> <div class="panel-body"> <ul> <li>Email: {u.email}</li> <li>Phone: {u.phone}</li> <li>Username: {u.username}</li> <li>Website: <a href="http://{u.website}" target="new">{u.website}</a></li> </ul> </div> </div> </div> </div>', '', '', function(opts) {

		this.on('mount', function() {

			if (opts.users) {
				console.info('We already have data');
			} else {
				console.info('We need the data');
				opts.callback(this);
			}
		});

		this.on('data_loaded', function(response) {
			console.info('Data recieved');
			opts.users = response;

			this.update();
		});

}, '{ }');