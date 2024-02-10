<script>
	let bgImage = [
		`url("//images.ctfassets.net/bete4dit0n31/6NudlSgngBxw7uJR5osHKa/e90823f58ffa4dfd46fd33a3ed3659ee/industry-1.webp")`,
		`url("//images.ctfassets.net/bete4dit0n31/3bTyxyXMHiuTiotaL2HEjh/7066fd0a0d0b9b5d8b8a833be0954eee/Industry-02.webp")`,
		`url("//images.ctfassets.net/bete4dit0n31/1Az8yrWKtRcgMoiqd7W9E7/a5d30bf9c45bf2bdd5b20d8eab5e7abb/industry-3.webp")`,
		`url("//images.ctfassets.net/bete4dit0n31/GnkyE9K7p8T2FMFUbcsQM/24ebfbd3f1689967c97c3cef8e02f179/industry-5.webp")`
	];
	let paragraphs = [
		'From gorgeous websites to strategic digital advertising campaigns, we work closely with your team to showcase the best views and angles of your luxury communities to your online customers.',
		'Take your franchise to the next level with a digital marketing strategy that amplifies your online footprint. Capture new customers on any platform, from social media networks to the biggest search engines around the world.',
		'Get more clicks and conversions for your e-commerce store and scale your sales to record highs. Promote your brand across the web and gain new followers who spread the word for you.',
		'Whether you operate in the B2B space or the finance industry, our experts can help you develop a cohesive digital marketing strategy that’s designed to give you a competitive advantage in your niche and tackle your most pressing business goals.'
	];
	let names = ['Luxury Communities', 'Franchise', 'Ecommerce', 'Others'];
	let show = [false, false, false, false];
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<title>Digital Marketing</title>
</svelte:head>
<div class="w-full overflow-hidden">
	<section
		class="mx-auto my-5 hidden w-[90%] flex-col items-stretch justify-center overflow-hidden xs:flex xs:flex-col lg:flex lg:flex-row"
	>
		{#each bgImage as image, index}
			<div
				class="sec-img"
				role="button"
				tabindex="0"
				on:mouseover={() => (show[index] = true)}
				on:mouseout={() => (show[index] = false)}
				on:focus={() => (show[index] = true)}
				on:blur={() => (show[index] = false)}
				style="background-image: {image}; background-size: cover;"
			>
				<div
					style="background:linear-gradient(180deg, #000000 15%, rgba(0, 0, 0, 0) 100%)"
					class="justify-between flex h-full flex-col px-8 py-[72px]"
				>
					<div class="hideIt">
						<p>0{index + 1}</p>
						<h2 class="cursor-pointer text-[28px] font-bold">
							{names[index]}
						</h2>
						{#if show[index]}
							<p>{paragraphs[index]}</p>
						{/if}
					</div>
					<svg
						class="hideIt"
						width="34"
						height="22"
						viewBox="0 0 34 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M2 11.2837L32 11.2837"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path><path
							d="M23 2.12158L32.3333 11.2834L23 20.4453"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path></svg
					>
				</div>
			</div>
		{/each}
	</section>
</div>
<section class="scroll-anime mb-10 xs:pb-5 xs:text-sm sm:h-[30rem] md:h-[35rem] lg:h-[30rem] lg:grid lg:grid-cols-2 lg:grid-rows-2">
	<div class="md:pt-3">
		<h1 class="font-bold xs:text-2xl">Services we can help you with.</h1>
		<p class="xs:text-sm sm:text-lg md:mt-7 lg:mt-10 xl:mt-16">
			Leveraging digital marketing for any business requires a broad set of talent, tools, and
			strength in numbers. Let our team take care of the heavy lifting while we work with you
			to identify which services will benefit you the most and how we can maximize your reach
			with each marketing channel.
		</p>
	</div>
	<div class="pt-5 md:text-xl xs:mr-5 sm:mr-0">
		<p class="font-bold sm:text-2xl xs:text-xl md:mt-7">Services we can help you with.</p>
		<ul class="grid grid-cols-2">
			<li>SEO Services</li>
			<li>Local SEO</li>
			<li>Enterprise SEO</li>
			<li>Link Building</li>
			<li>Google PPC</li>
			<li>Bing PPC</li>
			<li>Facebook Marketing</li>
			<li>Youtube Marketing</li>
			<li>Reputation Management</li>
		</ul>
	</div>
</section>
<style scoped>
	@import url(./home.css);
</style>