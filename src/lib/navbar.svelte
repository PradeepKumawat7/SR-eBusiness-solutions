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
	let navShowHeight = 'h-0';

	/**
	 * @type { number }
	 */
	let width;

	onMount(() => {
		if (typeof window !== 'undefined') {
			// Now it's safe to use the window object
			width = window.innerWidth;
		}
	});

	/**
	 * @param { import('svelte').CustomEvent<HTMLButtonElement> } event
	 */
	function toggleAccordion(event) {
		const targetId = event.currentTarget.dataset.accordionTarget;
		const targetPanel = document.querySelector(targetId);
		targetPanel.classList.toggle('hidden');

		const expanded = !event.currentTarget.getAttribute('aria-expanded') === 'true';
		event.currentTarget.setAttribute('aria-expanded', expanded);
	}
</script>

<nav class="bg-blue-980 w-full text-3xl font-bold text-white">
	<div class="navbar-display flex h-16 flex-row pt-3 align-middle">
		<div class=" w-[60%] overflow-hidden pl-5 text-left">SR eBusiness</div>
		<div class="float-right mr-10 h-16 w-full align-middle">
			<div class="navbar-btn-div float-right grid grid-cols-2 xs:basis-3 lg:basis-1/2">
				<button
					class="mt-2 xs:text-base lg:text-lg"
					on:click={() => {
						navBtnShow = !navBtnShow;
						navShowHeight === 'h-0'
							? (navShowHeight = 'h-auto')
							: (navShowHeight = 'h-0');
					}}
				>
					<Fa icon={faBars} class="float-right" />
				</button>
				<button type="button" class="mt-2 xs:text-base lg:text-lg">
					<a href="tel:+91-{$phone}">
						<Fa icon={faPhone} class="float-right" />
					</a>
				</button>
			</div>
		</div>
	</div>
	{#if width > 768}
		{#if navBtnShow}
			<div class="service-list flex bg-gray-900">
				<div id="accordion-collapse" data-accordion="collapse">
					{#each Object.keys(services) as service, index}
						<h2 id="accordion-collapse-heading-{index}">
							<button
								type="button"
								class="flex w-screen items-center justify-between rounded-t-xl border border-b-0 border-gray-700 p-5 font-medium text-gray-400 hover:bg-gray-800 focus:ring-gray-800"
								on:click={toggleAccordion}
								data-accordion-target="#accordion-collapse-body-{index + 1}"
								aria-expanded="true"
								aria-controls="accordion-collapse-body-{index + 1}"
							>
								<span>{service}</span>
								<svg
									data-accordion-icon
									class="h-3 w-3 shrink-0 rotate-180"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5 5 1 1 5"
									/>
								</svg>
							</button>
						</h2>
						<div
							id="accordion-collapse-body-{index + 1}"
							class="hidden"
							aria-labelledby="accordion-collapse-heading-{index + 1}"
						>
							<div
								class="grid grid-cols-3 gap-x-3 border border-b-0 border-gray-700 bg-gray-900 p-5 text-sm"
							>
								{#each Object.keys(services[service]) as subservice, subIndex}
									<div class="flex h-auto flex-col">
										<h2 id="accordion-collapse-heading-{index}" class="h-12">
											<button
												type="button"
												class="flex h-10 w-full items-center justify-between gap-x-3 rounded-t-xl border border-b-0 border-gray-700 p-5 text-lg font-medium text-gray-400 hover:bg-gray-800 focus:ring-gray-800"
												on:click={toggleAccordion}
												data-accordion-target="#accordion-collapse-body-{index +
													1}-{subIndex + 1}"
												aria-expanded="true"
												aria-controls="accordion-collapse-body-{index +
													1}-{subIndex + 1}"
											>
												<span>{subservice}</span>
												<svg
													data-accordion-icon
													class="h-3 w-3 shrink-0 rotate-180"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 10 6"
												>
													<path
														stroke="currentColor"
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M9 5 5 1 1 5"
													/>
												</svg>
											</button>
										</h2>
										<div
											id="accordion-collapse-body-{index + 1}-{subIndex + 1}"
											class="hidden"
											aria-labelledby="accordion-collapse-heading-{index +
												1}-{subIndex + 1}"
										>
											<button
												class="h-full w-full appearance-none"
												on:focus={() => {
													goto('/form');
													navBtnShow = false;
												}}
											>
												<div
													class="border border-b-0 border-gray-700 bg-gray-900 p-5 text-sm"
												>
													<h1 class="mb-2 text-gray-400">
														{services[service][subservice].head}
													</h1>
													<p class="mb-2 text-gray-400">
														{services[service][subservice].description}
													</p>
													<ul
														class="mb-2 grid grid-cols-2 text-gray-400"
														style="list-style-type: disc;"
													>
														{#each services[service][subservice].points as listData}
															<li>{listData}</li>
														{/each}
													</ul>
												</div>
											</button>
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{:else if navBtnShow}
		<div class="service-list flex bg-gray-900 xs:w-full">
			<div id="accordion-collapse" data-accordion="collapse">
				{#each Object.keys(services) as service, index}
					<h2 id="accordion-collapse-heading-{index}">
						<button
							type="button"
							class="flex w-screen items-center justify-between gap-3 rounded-t-xl border border-b-0 border-gray-700 p-5 font-medium text-gray-400 hover:bg-gray-800 focus:ring-gray-800"
							on:click={toggleAccordion}
							data-accordion-target="#accordion-collapse-body-{index + 1}"
							aria-expanded="true"
							aria-controls="accordion-collapse-body-{index + 1}"
						>
							<span>{service}</span>
							<svg
								data-accordion-icon
								class="h-3 w-3 shrink-0 rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5 5 1 1 5"
								/>
							</svg>
						</button>
					</h2>
					<div
						id="accordion-collapse-body-{index + 1}"
						class="hidden"
						aria-labelledby="accordion-collapse-heading-{index + 1}"
					>
						<div class="border border-b-0 border-gray-700 bg-gray-900 p-5 text-sm">
							{#each Object.keys(services[service]) as subservice, subIndex}
								<h2 id="accordion-collapse-heading-{index}">
									<button
										type="button"
										class="flex w-full items-center justify-between gap-3 rounded-t-xl border border-b-0 border-gray-700 p-5 text-lg font-medium text-gray-400 hover:bg-gray-800 focus:ring-gray-800"
										on:click={toggleAccordion}
										data-accordion-target="#accordion-collapse-body-{index +
											1}-{subIndex + 1}"
										aria-expanded="true"
										aria-controls="accordion-collapse-body-{index +
											1}-{subIndex + 1}"
									>
										<span>{subservice}</span>
										<svg
											data-accordion-icon
											class="h-3 w-3 shrink-0 rotate-180"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 5 5 1 1 5"
											/>
										</svg>
									</button>
								</h2>
								<div
									id="accordion-collapse-body-{index + 1}-{subIndex + 1}"
									class="hidden"
									aria-labelledby="accordion-collapse-heading-{index +
										1}-{subIndex + 1}"
								>
									<button
										class="h-full w-full appearance-none"
										on:focus={() => {
											goto('/form');
											navBtnShow = false;
										}}
									>
										<div
											class="border border-b-0 border-gray-700 bg-gray-900 p-5 text-sm"
										>
											<h1 class="mb-2 text-gray-400">
												{services[service][subservice].head}
											</h1>
											<p class="mb-2 text-gray-400">
												{services[service][subservice].description}
											</p>
											<ul
												class="mb-2 grid grid-cols-2 text-gray-400"
												style="list-style-type: disc;"
											>
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

<style scoped>
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
