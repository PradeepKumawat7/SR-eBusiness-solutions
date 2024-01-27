<script>
	import { goto } from '$app/navigation';
	import { services } from '$lib';
	let serviceList = Object.keys(services);
</script>

<footer
	class="bg-gray-200 text-black {typeof window !== 'undefined' &&
	window.innerHeight - visualViewport.height > 300
		? 'mt-[70vh]'
		: 'mt-0]'}
		absolute w-[100%]"
>
	<div class="container mx-auto px-4">
		<div class="div-center z-0 h-16 w-full text-2xl font-extrabold">
			<div>CompanyName</div>
		</div>
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
					<li class="text-base hover:font-semibold">Our Team</li>
					<li class="text-base hover:font-semibold">
						<button
							on:click={() => {
								goto('/contact-us');
							}}
						>
							About Us and Contact Us
						</button>
					</li>
					<li class="text-base hover:font-semibold">
						<button
							on:click={() => {
								goto('/admin/login');
							}}
						>
							Admin login
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
	.div-center {
		@apply flex justify-center;
	}
	button {
		appearance: none;
	}
</style>
