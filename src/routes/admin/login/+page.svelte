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

		const res = await fetch('/admin/login?/verify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json'
			},
			body: formData
		});
		console.log(res);
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
			goto('/admin/dashboard');
		}
	}
</script>

<svelte:head>
	<title>Admin Login</title>
</svelte:head>
<div>
	<div class="h-[50vh] w-full">
		<div class="div-center">
			<h1>Login</h1>
		</div>
		<div class="mt-5 div-center xs:mx-5 sm:mx-0">
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
						class={`rounded px-4 py-2 font-bold text-white hover:bg-blue-700 ${
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
					class="admin-auth div-center border-b-none border-r-none mx-[10%] mt-10 h-auto border-4 border-l-blue-400 border-t-blue-400 px-10 pb-10 pt-10 text-center text-lg"
				>
					<h1>Authentication Success<br />Redictecting to Dashboard</h1>
				</div>
			{:else}
				<div
					class="admin-auth div-center border-b-none border-r-none mx-[10%] mt-10 h-auto border-4 border-l-blue-400 border-t-blue-400 px-10 pb-10 pt-10 text-center text-lg"
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
		@apply my-2 grid grid-cols-2 gap-2 rounded-md border-2 border-gray-500 p-2;
	}
	.form-label {
		align-items: center;
		@apply flex text-xl font-medium text-gray-700;
	}

	input {
		@apply rounded-md border-2 border-gray-300 px-4 py-2;
	}
	input:focus {
		@apply border-blue-500 outline-none;
	}
</style>
