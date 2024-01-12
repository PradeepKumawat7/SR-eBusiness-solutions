<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { services } from '$lib';
	let serviceList = Object.keys(services);
</script>

<footer class="bg-gray-200 text-black absolute bottom-0 w-[100%]">
	<div class="container px-4 mx-auto">
		<div class="block w-full h-16 text-2xl font-extrabold text-center">CompanyName</div>
		<div class="grid grid-cols-2">
			<div>
				<div class="mb-1 text-xl font-bold">Name</div>
				<ul>
					{#each serviceList as service}
						<li class="text-base hover:font-semibold">
							{service}
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<div class="mb-1 text-2xl font-bold">About</div>
				<ul>
					<li class="text-base hover:font-semibold">
						<button
							on:click={() => {
								goto('/about-us');
							}}
						>
							About Us
						</button>
					</li>
					<li class="text-base hover:font-semibold">Our Team</li>
					<li class="text-base hover:font-semibold">
						<button
							on:click={() => {
								goto('/contact-us');
							}}
						>
							Contact Us
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		box-shadow: 0 -5px 100px 0 rgba(0, 0, 0, 0.2);
		@apply text-center;
	}
	button {
		appearance: none;
	}
</style>
