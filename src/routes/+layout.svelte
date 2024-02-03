<script>
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	import '../app.css';
</script>

<div class="overflow-x-hidden bg-gray-700">
	<Navbar />
	<div>
		<slot />
	</div>
	<Footer />
</div>
