<script>
	/**
	 * @type {{head: string, description: string, points: Array<string>}}
	 */
	export let point;
</script>

<div
	class="desc-div text-white mt-0 bg-blue-925 text-base ${point
		? 'block'
		: 'h-0'} w-[40vw] pl-4 overflow-hidden font-normal"
	style="padding-left: 1rem;"
>
	<div class="text-2xl font-bold text-center">{point.head}</div>
	<div class="mx-5 mt-2 mb-4 text-lg text-center">{point.description}</div>
	<ul class="grid grid-cols-2 text-center">
		{#each point.points as pointLi}
			<li>{pointLi}</li>
		{/each}
	</ul>
</div>
<style>
	.bg-blue-925 {
		--tw-bg-opacity: 1;
		background-color: rgb(15 50 120 / var(--tw-bg-opacity));
	}
</style>