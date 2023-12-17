<script>
	import Fa from 'svelte-fa';
	import Login from '$lib/login.svelte';
	import { faPhone } from '@fortawesome/free-solid-svg-icons';

	/**
	 * @type { string }
	 */
	let ser = '';
  import { services } from '$lib';
</script>

<nav class="w-full bg-blue-800 text-white xl:text-3xl font-bold">
	<div class="xl:h-16 align-middle navbar-display xl:pt-3 flex flex-row">
		<div class=" text-left xl:pl-5 w-[60%]">Name</div>
		<div class="w-[33vw] h-16 align-middle">
			<button type="button" class="xl:text-lg xl:mt-2 float-right">
				<Fa icon={faPhone} class="float-right" />
				Phone No.
			</button>
		</div>
	</div>
	<div class="service-list bg-sky-600 flex px-16">
		{#each Object.keys(services) as service}
			<button
				type="button"
				on:focus={() => {
					ser = service;
				}}
				class="text-base flex-1 xl:mx-5 xl:my-2.5 xl:h-10 text-black bg-white rounded-md"
			>
				{service}
			</button>
		{/each}
	</div>
	{#if ser}
		<div>
			<Login
				service={services[ser]}
				on:blur={() => {
					ser = '';
				}}
			/>
		</div>
	{/if}
</nav>
