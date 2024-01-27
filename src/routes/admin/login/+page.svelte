<script>
	import { goto } from '$app/navigation';
	import { adminAuth } from '$lib/store';
	import '../../../app.css';
	let adminConfirm = true,
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
		let out = await res.json();
		if (!(out.type === 'redirect')) {
			const result = JSON.parse(out.data)[1];
			disabled = false;
			if (result != 1) {
				adminConfirm = false;
				declared = true;
			}
		} else {
			disabled = false;
			adminAuth.set(true);
			declared = true;
			adminConfirm = true;
			console.log($adminAuth);
			setTimeout(() => {
				goto('/admin/dashboard');
			}, 1000);
		}
	}
</script>

<svelte:head>
	<title>Admin Login</title>
</svelte:head>
<div>
	<div class="w-full h-[50vh]">
		<div class="div-center">
			<h1>Login</h1>
		</div>
		<div class="mt-5 div-center">
			<form on:submit|preventDefault={handleSubmit}>
				<div class="form-group">
					<label for="name" class="form-label">Name</label>
					<input type="text" name="name" required bind:value={name} />
				</div>
				<div class="form-group">
					<label for="email" class="form-label">Email</label>
					<input type="email" name="email" required bind:value={email} />
				</div>
				<div class="form-group">
					<label for="password" class="form-label">Password</label>
					<input
						type="password"
						name="password"
						required
						autocapitalize="true"
						bind:value={password}
					/>
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
				<div
					class="admin-auth px-10 pt-10 mt-10 text-lg text-center border-4 div-center border-b-none border-r-none border-t-blue-400 border-l-blue-400 h-auto pb-10 mx-[10%]"
				>
					<h1>Authentication Success<br />Redictecting to Dashboard</h1>
				</div>
			{:else}
				<div
					class="admin-auth px-10 pt-10 mt-10 text-lg text-center border-4 div-center border-b-none border-r-none border-t-blue-400 border-l-blue-400 h-auto pb-10 mx-[10%]"
				>
					<h1>Authentication Failed<br />Try Again</h1>
				</div>
			{/if}
		{/if}
	</div>
</div>

<style scoped>
	.admin-auth {
		z-index: 0;
	}
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
