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
		class="div-center md mb-10 mt-10 w-1/2 rounded border-2 border-gray-500 p-10 text-3xl font-bold text-gray-700"
	>
		You have not logged in yet<br />
		Redirecting to <code>/admin/login</code>
	</div>
{:else}
	<div class="mb-20">
		<h1 class="my-10 text-center">Customers</h1>
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Company Name</th>
					<th>Website</th>
					<th>Phone</th>
					<th>Service</th>
					<th>Sub service</th>
					<th>Created at</th>
					<th>Updated at</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				{#each data.data as Customer}
					<tr>
						<td>{Customer.id}</td>
						<td>{Customer.name}</td>
						<td>{Customer.email}</td>
						<td>{Customer.companyName}</td>
						<td>{Customer.website}</td>
						<td
							>{Number(Customer.countryCode) > 0
								? '+' + Customer.countryCode
								: Customer.countryCode}-{Customer.phone}</td
						>
						<td>{Customer.service}</td>
						<td>{Customer.subservice}</td>
						<td>{Customer.createdAt}</td>
						<td>{Customer.updatedAt}</td>
						<td class="p-0">
							<button
								class="h-16 w-16"
								on:click={() => {
									confirm('Are you sure to delete this customer?')
										? goto('/database/delete/' + Customer.id)
										: null;
								}}
							>
								<FaLayers size="3x" style="background-color: red;">
									<Fa icon={faTrash} color="white" scale={0.4} />
								</FaLayers>
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<style>
	table {
		@apply mx-[10%] w-[80%] text-lg;
	}
	th {
		@apply border-2 border-stone-700 bg-red-600 font-bold text-white;
	}
	td {
		@apply border-2 border-stone-700 bg-gray-200 px-4 text-center;
	}
</style>
