<script>
	/**
	 * @type {{head: string, description: string, points: Array<string>}}
	 */
	export let point;
</script>

<div
	class="desc-div bg-blue-925 mt-0 text-base text-white ${point
		? 'block'
		: 'h-0'} w-[40vw] overflow-hidden pl-4 font-normal"
	style="padding-left: 1rem;"
>
	<div class="text-center text-2xl font-bold">{point.head}</div>
	<div class="mx-5 mb-4 mt-2 text-center text-lg">{point.description}</div>
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
