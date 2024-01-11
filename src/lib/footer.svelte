<script>
	import { services } from '$lib';
	let serviceList = Object.keys(services);
</script>

<footer class="bg-gray-200 text-black absolute bottom-0 w-[100%]">
	<div class="container mx-auto px-4">
		<div class="h-16 block w-full text-center text-2xl font-extrabold">CompanyName</div>
		<div class="grid grid-cols-2">
			<div>
				<div class="font-bold text-xl mb-1">Name</div>
				<ul>
					{#each serviceList as service}
						<li class="text-base hover:font-semibold">
							{service}
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<div class="font-bold text-2xl mb-1">About</div>
				<ul>
					<li class="text-base hover:font-semibold">About Us</li>
					<li class="text-base hover:font-semibold">Our Team</li>
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
</style>
