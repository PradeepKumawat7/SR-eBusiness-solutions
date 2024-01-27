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

<nav class="w-full text-3xl font-bold text-white bg-blue-800">
	<div class="flex flex-row h-16 pt-3 align-middle navbar-display">
		<div class=" text-left pl-5 w-[60%]">Name</div>
		<div class="w-[33vw] h-16 align-middle">
			<button type="button" class="float-right mt-2 text-lg">
				<Fa icon={faPhone} class="float-right" />
				Phone No.
			</button>
		</div>
	</div>
	<div class="flex service-list bg-sky-600 lg:px-16 sm:px-8 2sm:grid 2sm:grid-cols-3">
		{#each Object.keys(services) as service}
			<button
				type="button"
				on:focus={() => {
					ser = service;
					show = true;
				}}
				class="md:text-base sm:text-sm flex-1 sm:flex-1 lg:mx-5 md:mx-1.5 sm:mx-1 my-2.5 h-12 text-black bg-white rounded-md"
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
