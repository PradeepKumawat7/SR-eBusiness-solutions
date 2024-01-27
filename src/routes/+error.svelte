<script>
	import { page } from '$app/stores';
</script>

<div class="flex justify-center">
	<div class="error-div mt-10 h-[50vh] w-[60%] border-4 border-red-500 text-center">
		{#if $page.status == 404}
			<h1>404</h1>
			<h2>Page not found</h2>
			<p>Page <code>{$page.url.pathname}</code> does not exist</p>
		{:else}
			<h1>{$page.status}</h1>
			<h2>{$page.error?.message}</h2>
			<p>{$page}</p>
		{/if}
	</div>
</div>

<style>
	.error-div {
		box-shadow: 10px 10px 20px rgba(100, 100, 100, 0.2);
	}
</style>
