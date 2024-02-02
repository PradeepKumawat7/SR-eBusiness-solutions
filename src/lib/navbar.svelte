<script>
	import Fa from 'svelte-fa';
	import Login from '$lib/login.svelte';
	import { faPhone } from '@fortawesome/free-solid-svg-icons';
	import { showNav } from '$lib';

	/**
	 * @type { string }
	 */
	let ser = '';
	/**
	 * @type { import('svelte/store').Writable<boolean> }
	 */
	import { services } from '$lib';
</script>

<nav class="w-full text-3xl font-bold text-white bg-blue-950">
	<div class="flex flex-row h-16 pt-3 align-middle navbar-display">
		<div class=" w-[60%] pl-5 text-left">Name</div>
		<div class="h-16 w-[33vw] align-middle">
			<button type="button" class="float-right mt-2 text-lg">
				<Fa icon={faPhone} class="float-right" />
				Phone No.
			</button>
		</div>
	</div>
	<div class="flex service-list 2sm:grid 2sm:grid-cols-3 bg-sky-600 sm:px-8 lg:px-16">
		{#each Object.keys(services) as service}
			<button
				type="button"
				on:focus={() => {
					ser = service;
					$showNav = true;
				}}
				class="my-2.5 h-12 flex-1 rounded-md bg-white text-black sm:mx-1 sm:flex-1 sm:text-sm md:mx-1.5 md:text-base lg:mx-5"
			>
				{service}
			</button>
		{/each}
		<button
			type="button"
			on:focus={() => {
				$showNav = false;
			}}
			class="my-2.5 h-12 flex-1 rounded-md bg-white text-black sm:mx-1 sm:flex-1 sm:text-sm md:mx-1.5 md:text-base lg:mx-5"
			>Close navbar</button
		>
	</div>
	{#if ser && $showNav}
		<div role="button" tabindex="0">
			<Login
				service={services[ser]}
				on:mouseout={() => {
					ser = '';
				}}
			/>
		</div>
	{/if}
</nav>
