<script>
	import '../../../app.css';

	function sendData() {
		//
	}
</script>

<div>
	<div class="w-full h-[50vh]">
		<div class="div-center">
			<h1>Login</h1>
		</div>
		<div class="mt-5 div-center">
			<form method="POST" on:submit|preventDefault={sendData}>
				<div class="form-group">
					<label for="name" class="form-label">name</label>
					<input type="text" id="name" />
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" name="email" />
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" name="password" />
				</div>
			</form>
		</div>
	</div>
</div>

<style scoped>
	.div-center {
		display: flex;
		justify-content: center; /* Centers children horizontally */
	}
	.form-group {
		@apply grid grid-cols-2 gap-2 my-2 p-2 border-2 border-gray-500 rounded-md;
	}
	.form-label {
		@apply text-lg font-medium text-gray-700;
	}

	input {
		@apply px-4 py-2 border border-gray-300 rounded-md;
	}
	input:focus {
		@apply outline-none border-blue-500;
	}
</style>
