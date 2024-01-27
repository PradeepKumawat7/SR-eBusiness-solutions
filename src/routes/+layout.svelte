<script>
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	import '../app.css';
</script>

<div class="overflow-x-hidden overflow-y-scroll bg-gray-100 text-gray-800">
	<Navbar />
	<slot />
	<Footer />
</div>
