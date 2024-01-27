<script>
	import '../../../app.css';
	import { adminAuth } from '$lib/store';
	console.log($adminAuth);
	/**
	 * @type { { data: { id:number, name: string, email: string, phone: string, service: string, subService: string, createdAt: string, updatedAt: string, countryCode: string, companyName: string, website: string }[] } }
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
{:else}
	<div class="mb-20">
		<div
			class="div-center mb-10 ml-[25%] mt-10 flex w-1/2 rounded border-2 border-gray-500 p-10 text-center text-3xl font-bold text-gray-700"
		>
			<h1>Customers</h1>
		</div>
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
						<td>{Customer.countryCode}-{Customer.phone}</td>
						<td>{Customer.service}</td>
						<td>{Customer.subService}</td>
						<td>{Customer.createdAt}</td>
						<td>{Customer.updatedAt}</td>
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
		@apply border-2 border-stone-700 bg-gray-200 text-center;
	}
</style>
