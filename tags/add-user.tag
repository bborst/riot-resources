<add-user>
<!-- // TODO: Clean up with bootstrap -->
	<p>add user page</p>

	<input type="text" id="nameInput" placeholder="Name" onkeyup="{ edit }">
	<input type="text" id="usernameInput" placeholder="Username" onkeyup="{ edit }">
	<input type="text" id="emailInput" placeholder="Email" onkeyup="{ edit }">
	<input type="text" id="phoneInput" placeholder="Phone" onkeyup="{ edit }">
	<input type="text" id="websiteInput" placeholder="Website" >
	<button type="button" disabled="{ disabled }" onclick="{ add }">Add Person</button>

	<script>
		// Disable button
		this.disabled = true;

		// Check the inputs for all values then enable button
		this.edit = function(e) {
			this.disabled = (nameInput.value == '' 
				|| usernameInput.value == '' 
				|| emailInput.value == '' 
				|| phoneInput.value == '');
		}

		// Add method
		this.add = function(e) {
			var user = {};
			user.name = nameInput.value;
			user.username = usernameInput.value;
			user.email = emailInput.value;
			user.phone = phoneInput.value;
			user.website = websiteInput.value;

			//console.info(user);

			// Post the data
			createUserInfo(user)

			// Clear out the fields and disble the button
			this.nameInput.value = '';
			this.usernameInput.value = '';
			this.emailInput.value = '';
			this.phoneInput.value = '';
			websiteInput.value = ''
			this.disabled = true
		}
	</script>
</add-user>