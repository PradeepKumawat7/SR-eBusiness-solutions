<script>
	import '../../../app.css';
	import { adminAuth } from '$lib/store';
	console.log($adminAuth);
	/**
	 * @type { { data: { id:number, name: string, email: string, phone: string, service: string, subService: string, createdAt: string, updatedAt: string, countryCode: string, companyName: string, website: string }[] } }
	 */
	export let data;
	console.log(data.data);
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
			class="w-1/2 p-10 flex justify-content-center ml-[25%] mt-10 mb-10 text-3xl font-bold text-gray-700 border-2 border-gray-500 rounded div-center md"
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
		@apply w-[80%] mx-[10%] text-lg;
	}
	th {
		@apply bg-red-600 text-white font-bold border-2 border-stone-700;
	}
	td {
		@apply text-center bg-gray-200 border-2 border-stone-700;
	}
</style>
