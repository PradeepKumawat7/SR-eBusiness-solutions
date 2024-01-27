<script>
	import Fa from 'svelte-fa';
	import Login from '$lib/login.svelte';
	import { faPhone } from '@fortawesome/free-solid-svg-icons';

	/**
	 * @type { string }
	 */
	let ser = '';
	/**
	 * @type { boolean }
	 */
	let show = false;
	import { services } from '$lib';
</script>

<nav class="w-full bg-blue-800 text-3xl font-bold text-white">
	<div class="navbar-display flex h-16 flex-row pt-3 align-middle">
		<div class=" w-[60%] pl-5 text-left">Name</div>
		<div class="h-16 w-[33vw] align-middle">
			<button type="button" class="float-right mt-2 text-lg">
				<Fa icon={faPhone} class="float-right" />
				Phone No.
			</button>
		</div>
	</div>
	<div class="service-list 2sm:grid 2sm:grid-cols-3 flex bg-sky-600 sm:px-8 lg:px-16">
		{#each Object.keys(services) as service}
			<button
				type="button"
				on:focus={() => {
					ser = service;
					show = true;
				}}
				class="my-2.5 h-12 flex-1 rounded-md bg-white text-black sm:mx-1 sm:flex-1 sm:text-sm md:mx-1.5 md:text-base lg:mx-5"
			>
				{service}
			</button>
		{/each}
	</div>
	{#if ser && show}
		<div role="button" tabindex="0" on:mouseleave={() => (show = false)}>
			<Login
				service={services[ser]}
				on:blur={() => {
					ser = '';
				}}
			/>
		</div>
	{/if}
</nav>
