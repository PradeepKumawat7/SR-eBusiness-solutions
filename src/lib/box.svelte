<script>
	/**
	 * @type {{head: string, description: string, points: Array<string>}}
	 */
	export let point;
</script>

<div
	class="desc-div bg-blue-925 mt-0 md:text-sm text-base text-white ${point
		? 'block'
		: 'h-0'} overflow-hidden pl-4 font-normal"
	style="padding-left: 1rem;"
>
	<div class="text-2xl font-bold text-center md:text-lg">{point.head}</div>
	<div class="mx-5 mt-2 mb-4 text-lg text-center md:text-base">{point.description}</div>
	<ul class="grid grid-cols-2 text-center">
		{#each point.points as pointLi}
			<li class="md:my-1">{pointLi}</li>
		{/each}
	</ul>
</div>

<style scoped>
	.bg-blue-925 {
		--tw-bg-opacity: 1;
		background-color: rgb(15 50 120 / var(--tw-bg-opacity));
	}
</style>
