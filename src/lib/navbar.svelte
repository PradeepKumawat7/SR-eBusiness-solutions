<script>
	import Fa from 'svelte-fa';
	import Login from '$lib/login.svelte';
	import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
	import { showNav } from '$lib';

	/**
	 * @type { string }
	 */
	let ser = '';
	import { services } from '$lib';
	import { phone, width } from './store';

	let navBtnShow = false;
</script>

<nav class="w-full text-3xl font-bold text-white bg-blue-980">
	<div class="flex flex-row h-16 pt-3 align-middle navbar-display">
		<div class=" w-[60%] pl-5 text-left">Name</div>
		<div class="h-16 w-[33vw] align-middle">
			<div class="float-right navbar-btn-div">
				<button class="float-right mt-2 lg:text-lg xs:text-base" on:click={() => (navBtnShow = !navBtnShow)}>
					<Fa icon={faBars} class="float-right" />
				</button>
				<button type="button" class="mt-2 lg:text-lg xs:text-base">
					<a href="tel:+91-{$phone}">
						<Fa icon={faPhone} class="float-right" />
						<!--{  window.innerWidth > 600 ? "+91-" + $phone : "" */}-->
					</a>
				</button>
			</div>
		</div>
	</div>
	{#if $width > 600}
	<div class="flex bg-blue-900 service-list 2sm:grid 2sm:grid-cols-3 sm:px-8 lg:px-16">
		{#each Object.keys(services) as service}
			<button
				type="button"
				on:focus={() => {
					ser = service;
					$showNav = true;
				}}
				class="my-2.5 h-12 flex-1 rounded-md bg-blue-50 text-black sm:mx-1 sm:flex-1 sm:text-sm md:mx-1.5 md:text-base lg:mx-5"
			>
				{service}
			</button>
		{/each}
		<button
			type="button"
			on:focus={() => {
				$showNav = false;
			}}
			class="my-2.5 h-12 flex-1 rounded-md bg-blue-50 text-black sm:mx-1 sm:flex-1 sm:text-sm md:mx-1.5 md:text-base lg:mx-5"
		>
			Close navbar
		</button>
	</div>
	{:else}
		{#if navBtnShow}
		<div class="grid bg-blue-900 service-list grid-rows-7 sm:px-8 lg:px-16">
			{#each Object.keys(services) as service}
				<button
					type="button"
					on:focus={() => {
						ser = service;
					}}
					class="my-2.5 h-12 rounded-md bg-blue-50 text-black w-[90%] mx-[5%]"
				>
					{service}
				</button>
			{/each}
			<button
			type="button"
			on:focus={() => {
				$showNav = false;
			}}
			class="my-2.5 h-12 rounded-md bg-blue-50 text-black w-[90%] mx-[5%]"
		>
			Close navbar
		</button>
		</div>
		{/if}
	{/if}
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

<style>
	.bg-blue-980 {
		--tw-bg-opacity: 1;
		background-color: rgb(10 20 84 / var(--tw-bg-opacity));
	}
	.navbar-btn-div {
		@apply flex flex-row-reverse space-x-10;
	}
	.navbar-btn-div button:nth-child(1) {
		@apply ml-3;
	}
	.navbar-btn-div button:nth-child(2) {
		@apply ml-4;
	}
</style>
