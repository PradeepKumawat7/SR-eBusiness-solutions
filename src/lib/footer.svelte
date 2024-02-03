<script>
	import { goto } from '$app/navigation';
	import { services } from '$lib';
	import { faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
	import Fa from "svelte-fa";
	let serviceList = Object.keys(services);
</script>

<footer class="h-[21rem] w-[100%] text-white">
	<div class="grid h-full grid-cols-4 px-4 mx-auto">
		<div style="display: flex; align-items: center; justify-content: center">
			<h1>Logo</h1>
		</div>
		<div style="margin-top: 3rem">
			<div class="mt-4 mb-[1rem] text-2xl font-bold">Connect With Us</div>
			<ul style="list-style-type: none;"  class="dev-comp-info">
				<li class="div-center">
					<Fa icon={faGithub} size="lg" />
					<div>Github</div>
				</li>
				<li class="div-center">
					<Fa icon={faFacebook} size="lg" color="blue" />
					<div>Facebook</div>
				</li>
				<li class="div-center">
					<div class="insta-logo">
						<Fa icon={faInstagram} size="lg" class="insta-logo" primaryColor="white" />
					</div>
					<div>Instagram</div>
				</li>
				<li class="div-center">
					<div class="insta-logo">
						<Fa icon={faInstagram} size="lg" class="insta-logo" primaryColor="white" />
					</div>
					<div>@jaipalbh7 (Developer)</div>
				</li>
			</ul>
		</div>
		<div>
			<div class="mt-4 mb-1 text-2xl font-bold ">Services</div>
			<ul>
				{#each serviceList as service}
					<li class="my-3 text-base hover:font-semibold">
						{service}
					</li>
				{/each}
			</ul>
		</div>
		<div class="py-16">
			<div class="mb-1 text-2xl font-bold">Website</div>
			<ul>
				<li class="div-center">
					<button on:click={() => goto('/')}>Home</button>
				</li>
				<li class="div-center">
					<button
						on:click={() => {
							goto('/contact-us');
						}}
					>
						About Us and Contact Us
					</button>
				</li>
				<li class="div-center">
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
</footer>

<style>
	footer {
		background-color: transparent;
		background-image: radial-gradient(closest-corner, hsl(221, 97%, 24%) 10%, #003 90%);
		box-shadow: 0 -5px 100px 0 rgba(0, 0, 0, 0.2);
		@apply text-center;
	}
	button {
		appearance: none;
	}
	.div-center {
		@apply my-2.5 text-lg font-normal flex justify-center;
	}
	.div-center div {
		@apply ml-2.5;
	}
	.div-center:hover {
		@apply font-bold;
	}
	.insta-logo {
		background-color: transparent;
		background-image: linear-gradient(to bottom right, #f9ce34, #ee2a7b, #6228d7);
		@apply p-1 rounded-lg;
	}
</style>
