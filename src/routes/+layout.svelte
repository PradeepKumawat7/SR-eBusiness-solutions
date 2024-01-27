<script>
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	import '../app.css';
</script>

<div class="overflow-x-hidden overflow-y-scroll text-gray-800 bg-gray-100">
	<Navbar />
	<slot />
	<Footer />
</div>
