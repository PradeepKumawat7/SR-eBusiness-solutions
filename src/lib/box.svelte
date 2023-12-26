<script>
	/**
	 * @type {{head: string, description: string, points: Array<string>}}
	 */
	export let point;
</script>

<div
	class="desc-div mt-0 text-base bg-white ${point
		? 'block'
		: 'h-0'} overflow-hidden font-normal w-[40vw]"
	style="padding-left: 1rem;"
>
	<div class="font-bold text-center text-2xl">{point.head}</div>
	<div class="text-center text-lg">{point.description}</div>
	<ul class="grid grid-cols-2 text-center">
		{#each point.points as pointLi}
			<li style="list-style-type: disc;">{pointLi}</li>
		{/each}
	</ul>
</div>
