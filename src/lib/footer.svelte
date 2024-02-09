<script>
	import "./footer.css"
	import { goto } from '$app/navigation';
	import { services } from '$lib';
	import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
	import { onMount } from "svelte";

	onMount(() => {
		if (typeof window !== 'undefined') {
			// Now it's safe to use the window object
			width = window.innerWidth;
		}
	});

	let width = 0;
	let serviceList = Object.keys(services);
</script>

<footer class="xs:h-full sm:h-[21rem] w-[100%] text-white sticky bottom-0">
	<div class="h-full px-4 mx-auto xs:flex sm:grid xs:flex-col sm:grid-cols-4">
		<div style="display: flex; align-items: center; justify-content: center">
			<h1>Logo</h1>
		</div>
		<div style="margin-top: 3rem">
			<div class="mb-[1rem] mt-4 text-2xl font-bold">Connect With Us</div>
			<ul style="list-style-type: none;" class="dev-comp-info">
				<li class="div-center">
					<div class="p-1 bg-white rounded-full">
						<Fa icon={faGithub} size={(width > 786 ? "xl" : "2x" )} color="black" />
					</div>
					<div class="div-2"><a href="https://github.com/BhJaipal/digital-marketing">Github</a></div>
				</li>
				<li class="div-center">
					<Fa icon={faFacebook} size={width > 786 ? "lg" : "2x" } color="white" />
					<div class="div-2">Facebook</div>
				</li>
				<li class="div-center">
					<div class="insta-logo">
						<Fa icon={faInstagram} size={width > 786 ? "lg" : "2x" } class="insta-logo" primaryColor="white" />
					</div>
					<div class="div-2">Instagram</div>
				</li>
				<li class="div-center">
					<div class="insta-logo">
						<Fa icon={faInstagram} size={width > 786 ? "lg" : "2x" } class="insta-logo" primaryColor="white" />
					</div>
					<div class="div-2"><a href="https://instagram.com/jaipalbh7">@jaipalbh7 (Developer)</a></div>
				</li>
			</ul>
		</div>
		<div>
			<div class="mt-4 mb-1 text-2xl font-bold">Services</div>
			<ul>
				{#each serviceList as service}
					<li class="md:my-3 xs:my-1 div-center">
						{service}
					</li>
				{/each}
			</ul>
		</div>
		<div class="xs:py-5 sm:py-16">
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
				<li class="bg-inherit div-center">
					<button on:click={() => goto('/form')}>Form</button>
				</li>
			</ul>
		</div>
	</div>
</footer>