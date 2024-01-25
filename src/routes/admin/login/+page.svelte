<script>
	import '../../../app.css';
	let adminConfirm = false,
		declared = false;

	let disabled = false;
	/**
	 * @type { string }
	 */
	let name;
	/**
	 * @type { string }
	 */
	let email;
	/**
	 * @type { string }
	 */
	let password;
	async function handleSubmit() {
		disabled = true;
		const formData = new URLSearchParams();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('password', password);
		const res = await fetch('/admin/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json'
			},
			body: formData
		});
		const out = await res.json();
		console.log(out);
		let result = JSON.parse(out.data)[1];
		disabled = false;
		console.log(result);
		if (result == 1) {
			adminConfirm = true;
			declared = true;
		} else {
			declared = true;
			adminConfirm = false;
		}
	}
</script>

<div>
	<div class="w-full h-[50vh]">
		<div class="div-center">
			<h1>Login</h1>
		</div>
		<div class="mt-5 div-center">
			<form on:submit|preventDefault={handleSubmit}>
				<div class="form-group">
					<label for="name" class="form-label">Name</label>
					<input type="text" id="name" bind:value={name} />
				</div>
				<div class="form-group">
					<label for="email" class="form-label">Email</label>
					<input type="email" name="email" bind:value={email} />
				</div>
				<div class="form-group">
					<label for="password" class="form-label">Password</label>
					<input type="password" name="password" bind:value={password} />
				</div>
				<div class="div-center">
					<button
						type="submit"
						class={`px-4 py-2 font-bold text-white rounded hover:bg-blue-700 ${
							disabled ? 'bg-blue-300' : 'bg-blue-500'
						}`}
						{disabled}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
		{#if declared}
			{#if adminConfirm}
				<h1>You are admin</h1>
			{:else}
				<h1>You are not admin</h1>
			{/if}
		{/if}
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
		align-items: center;
		@apply text-xl font-medium text-gray-700 flex;
	}

	input {
		@apply px-4 py-2 border-2 border-gray-300 rounded-md;
	}
	input:focus {
		@apply outline-none border-blue-500;
	}
</style>
