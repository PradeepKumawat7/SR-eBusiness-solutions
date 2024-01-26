<script>
	import '../../../app.css';
	import { adminAuth } from '$lib/store';
	console.log($adminAuth);
</script>

{#if !$adminAuth}
	<div
		class="w-1/2 p-10 mt-10 mb-10 text-3xl font-bold text-gray-700 border-2 border-gray-500 rounded div-center md"
	>
		You have not logged in yet<br />
		Redirecting to <code>/admin/login</code>
	</div>
{:else}
	<div
		class="w-1/2 p-10 flex justify-content-center ml-[25%] mt-10 mb-10 text-3xl font-bold text-gray-700 border-2 border-gray-500 rounded div-center md"
	>
		<h1>Customers</h1>
	</div>
{/if}

<style>
</style>
