<script>
	import { goto } from '$app/navigation';
	import { services } from '$lib';
	import {
		faGithub,
		faFacebook,
		faInstagram,
		faLinkedin
	} from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
	import { onMount } from 'svelte';

	onMount(() => {
		if (typeof window !== 'undefined') {
			// Now it's safe to use the window object
			width = window.innerWidth;
		}
	});

	let width = 0;
	let serviceList = Object.keys(services);
</script>

<footer class="sticky bottom-0 w-[100%] text-white xs:h-full sm:h-[21rem]">
	<div class="mx-auto h-full px-4 xs:flex xs:flex-col sm:grid sm:grid-cols-4">
		<div style="display: flex; align-items: center; justify-content: center">
			<div class=" xs:mt-5 sm:mt-0">
				<img src="/logo.jpeg" alt="logo" />
			</div>
		</div>
		<div style="margin-top: 1rem">
			<div class="mb-[1rem] mt-4 text-2xl font-bold">Connect With Us</div>
			<ul style="list-style-type: none;" class="dev-comp-info">
				<li class="div-center">
					<div class="rounded-full bg-white p-1">
						<a href="https://github.com/BhJaipal/digital-marketing">
							<Fa icon={faGithub} size={width > 786 ? 'xl' : '2x'} color="black" />
						</a>
					</div>
					<div class="div-2"></div>
				</li>
				<li class="div-center">
					<Fa icon={faFacebook} size={width > 786 ? 'lg' : '2x'} color="white" />
					<div class="div-2"></div>
				</li>
				<li class="div-center">
					<div class="insta-logo">
						<a href="https://www.linkedin.com/company/sr-e-business-solutions">
							<Fa
								icon={faLinkedin}
								size={width > 786 ? 'lg' : '2x'}
								class="insta-logo"
								primaryColor="white"
							/>
						</a>
					</div>
					<div class="div-2"></div>
				</li>
			</ul>
		</div>
		<div>
			<div class="mb-1 mt-4 text-2xl font-bold">Services</div>
			<ul>
				{#each serviceList as service}
					<li class="div-center xs:my-1 md:my-3">
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
				<li class="div-center bg-inherit">
					<button on:click={() => goto('/form')}>Form</button>
				</li>
			</ul>
		</div>
	</div>
</footer>

<style scoped>
	@import url('./footer.css');
</style>
