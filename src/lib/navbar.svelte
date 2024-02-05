<script>
	import Fa from 'svelte-fa';
	import Login from '$lib/login.svelte';
	import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
	import { showNav } from '$lib';
	import { onMount } from 'svelte';

	/**
	 * @type { string }
	 */
	let ser = '';
	import { services } from '$lib';
	import { phone } from './store';
	import { goto } from '$app/navigation';

	let navBtnShow = false;
	let navShowHeight = "h-0";

	/**
	 * @type { number }
	 */
	let width;

	onMount(() => {
		console.log(window);
		if (typeof window !== 'undefined') {
			// Now it's safe to use the window object
			width = (window.innerWidth);
		}
	});

	function toggleAccordion(event) {
		const targetId = event.currentTarget.dataset.accordionTarget;
		const targetPanel = document.querySelector(targetId);
		targetPanel.classList.toggle('hidden');

		const expanded = !event.currentTarget.getAttribute('aria-expanded') === 'true';
		event.currentTarget.setAttribute('aria-expanded', expanded);
	}
</script>

<nav class="w-full text-3xl font-bold text-white bg-blue-980">
	<div class="flex flex-row h-16 pt-3 align-middle navbar-display">
		<div class=" w-[60%] pl-5 text-left">Name</div>
		<div class="h-16 w-[33vw] align-middle">
			<div class="float-right navbar-btn-div">
				{#if width < 768}
				<button class="float-right mt-2 lg:text-lg xs:text-base"
					on:click={() => {
						navBtnShow = !navBtnShow;
						navShowHeight === "h-0" ? navShowHeight = "h-auto" : navShowHeight = "h-0"}}>
					<Fa icon={faBars} class="float-right" />
				</button>
				{/if}
				<button type="button" class="mt-2 lg:text-lg xs:text-base">
					<a href="tel:+91-{$phone}">
						<Fa icon={faPhone} class="float-right" />
					</a>
				</button>
			</div>
		</div>
	</div>
	{#if width > 768}
		<div class="flex bg-blue-900 service-list md:px-5 lg:px-12">
			{#each Object.keys(services) as service}
				<button
					type="button"
					on:focus={() => {
						ser = service;
						$showNav = true;
					}}
					class="h-12 flex-1 rounded-md bg-blue-50 text-black my-2.5 sm:mx-0.5 sm:px-2 sm:flex-1 sm:text-sm md:mx-1.5 md:text-base lg:mx-3"
				>
					{service}
				</button>
			{/each}
			<button
				type="button"
				on:focus={() => {
					$showNav = false;
				}}
				class="my-2.5 h-12 flex-1 rounded-md bg-blue-50 text-black sm:mx-1 sm:flex-1 sm:text-sm md:mx-1.5 md:text-base lg:mx-3"
			>
				Close navbar
			</button>
		</div>
	{:else}
		{#if navBtnShow}
		<div class="flex bg-gray-900 xs:w-full service-list">
			<div id="accordion-collapse" data-accordion="collapse">
				{#each Object.keys(services) as service, index}
				<h2 id="accordion-collapse-heading-{index}">
					<button type="button" class="flex items-center justify-between w-screen gap-3 p-5 font-medium text-gray-400 border border-b-0 border-gray-700 rounded-t-xl focus:ring-gray-800 hover:bg-gray-800"
						on:click={toggleAccordion}
						data-accordion-target="#accordion-collapse-body-{index + 1}"
						aria-expanded="true" aria-controls="accordion-collapse-body-{index + 1}">
						<span>{service}</span>
						<svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
						</svg>
					</button>
				</h2>
				<div id="accordion-collapse-body-{index + 1}" class="hidden" aria-labelledby="accordion-collapse-heading-{index + 1}">
					<div class="p-5 text-sm bg-gray-900 border border-b-0 border-gray-700">
						{#each Object.keys(services[service]) as subservice, subIndex}
							<h2 id="accordion-collapse-heading-{index}">
								<button type="button" class="flex items-center justify-between w-full gap-3 p-5 text-lg font-medium text-gray-400 border border-b-0 border-gray-700 rounded-t-xl focus:ring-gray-800 hover:bg-gray-800"
								on:click={toggleAccordion}
								data-accordion-target="#accordion-collapse-body-{index + 1}-{subIndex + 1}"
								aria-expanded="true" aria-controls="accordion-collapse-body-{index + 1}-{subIndex + 1}">
									<span>{subservice}</span>
									<svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
									</svg>
								</button>
							</h2>
							<div id="accordion-collapse-body-{index + 1}-{subIndex + 1}" class="hidden" aria-labelledby="accordion-collapse-heading-{index + 1}-{subIndex + 1}">
								<button class="w-full h-full appearance-none" on:click={() => goto("/form")}>
									<div class="p-5 text-sm bg-gray-900 border border-b-0 border-gray-700">
										<h1 class="mb-2 text-gray-400">
											{services[service][subservice].head}
										</h1>
										<p class="mb-2 text-gray-400">
											{services[service][subservice].description}
										</p>
										<ul class="grid grid-cols-2 mb-2 text-gray-400" style="list-style-type: disc;">
											{#each services[service][subservice].points as listData}
											<li>{listData}</li>
											{/each}
										</ul>
									</div>
								</button>
							</div>
						{/each}
					</div>
				</div>
				{/each}
			</div>
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
