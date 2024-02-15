<script>
	import '../../../app.css';
	import { adminAuth } from '$lib/store';
	import Fa from 'svelte-fa';
	import FaLayers from 'svelte-fa/src/fa-layers.svelte';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';
	import { goto } from '$app/navigation';
	/**
	 * @type { { data: { id:number, name: string, email: string, phone: string, service: string, subservice: string, createdAt: string, updatedAt: string, countryCode: string, companyName: string, website: string }[] } }
	 */
	export let data;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>
{#if !$adminAuth}
	<div
		class="w-1/2 p-10 mt-10 mb-10 text-3xl font-bold text-gray-700 border-2 border-gray-500 rounded div-center md"
	>
		You have not logged in yet<br />
		Redirecting to <code>/admin/login</code>
	</div>
{:else if data.data.length == 0}
	<div class="flex justify-center">
		<div
			class="w-1/2 p-10 mt-10 mb-10 text-3xl font-bold text-gray-700 border-2 border-gray-500 rounded div-center md"
		>
			<p>
				No data found<br />
				Go to <code>/</code>
			</p>
		</div>
	</div>
{:else}
	<div class="mb-20">
		<h1 class="my-10 text-center">Customers</h1>
		{#each data.data as Customer}
			<div class="customer">
				<div class="grid grid-cols-2">
					<div>Name: {Customer.name}</div>
					<div>Company Name: {Customer.companyName}</div>
				</div>
				<div class="grid grid-cols-2">
					<div>
						Phone No.: {Number(Customer.countryCode) > 0
							? '+' + Customer.countryCode
							: Customer.countryCode}-{Customer.phone}
					</div>
					<div>Email: {Customer.email}</div>
				</div>
				<div class="grid grid-cols-3">
					<div>
						Website: <a href={Customer.website} class="underline" target="_blank"
							>{Customer.website}</a
						>
					</div>
					<div>Service: {Customer.service}</div>
					<div>Sub service: {Customer.subservice}</div>
				</div>
				<div class="grid grid-cols-3">
					<div class="underline">
						Created at: {@html Customer.createdAt.replace(' ', '<br />')}
					</div>
					<div class="underline">
						Updated at: {@html Customer.updatedAt.replace(' ', '<br />')}
					</div>
					<div>
						<button
							class="w-16 h-16"
							on:click={() => {
								confirm('Are you sure to delete this customer?')
									? goto('/database/delete/' + Customer.id)
									: null;
							}}
						>
							<FaLayers size="3x">
								<Fa
									icon={faTrash}
									style="box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);"
									color="rgb(96 165 250)"
									scale={0.4}
								/>
							</FaLayers>
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}

<style scoped>
	.customer {
		box-shadow: 10px 10px 10px rgba(100, 100, 100, 0.2);
		text-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
		@apply mx-[20%] my-5 rounded-3xl border-8 border-b-0 border-r-0 border-transparent border-l-blue-400 border-t-blue-400 bg-blue-800 py-10 pl-10 text-2xl font-bold text-blue-500;
	}
	.customer > div {
		@apply my-5;
	}
</style>
