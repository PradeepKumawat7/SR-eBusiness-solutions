<script>
	/**
	 * @type {{head: string, description: string, points: Array<string>}}
	 */
	export let point;
</script>

<div
	class="desc-div mt-0 bg-white text-base ${point
		? 'block'
		: 'h-0'} w-[40vw] overflow-hidden font-normal"
	style="padding-left: 1rem;"
>
	<div class="text-center text-2xl font-bold">{point.head}</div>
	<div class="text-center text-lg">{point.description}</div>
	<ul class="grid grid-cols-2 text-center">
		{#each point.points as pointLi}
			<li style="list-style-type: disc;">{pointLi}</li>
		{/each}
	</ul>
</div>
