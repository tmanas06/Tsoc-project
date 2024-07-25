<script>
	let salesData = {
		totalSales: 15000,
		monthlySales: 3000,
		target: 20000
	};

	let recentActivities = [
		{ id: 1, activity: 'Closed a deal with Company A', date: '2023-10-01' },
		{ id: 2, activity: 'Followed up with Client B', date: '2023-10-02' },
		{ id: 3, activity: 'Sent proposal to Client C', date: '2023-10-03' }
	];

	let topProducts = [
		{ id: 1, name: 'Product X', sales: 5000 },
		{ id: 2, name: 'Product Y', sales: 3000 },
		{ id: 3, name: 'Product Z', sales: 2000 }
	];
</script>

<style>
	.min-h-screen {
		min-height: 100vh;
	}
	.bg-light-blue {
		background-color: #ADD8E6; /* Lightish blue background */
	}
	.card {
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		margin-bottom: 20px;
	}
	.card h3 {
		margin-bottom: 10px;
		font-size: 18px;
		color: #333;
	}
	.card p {
		margin: 0;
		font-size: 16px;
		color: #555;
	}
	.activities, .products {
		list-style: none;
		padding: 0;
	}
	.activities li, .products li {
		padding: 10px 0;
		border-bottom: 1px solid #eee;
	}
	.activities li:last-child, .products li:last-child {
		border-bottom: none;
	}
</style>

<div class="min-h-screen bg-light-blue flex flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
			Dashboard
		</h2>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="card">
			<h3>Sales Overview</h3>
			<p>Total Sales: ${salesData.totalSales}</p>
			<p>Monthly Sales: ${salesData.monthlySales}</p>
			<p>Sales Target: ${salesData.target}</p>
		</div>

		<div class="card">
			<h3>Recent Activities</h3>
			<ul class="activities">
				{#each recentActivities as activity}
					<li>
						<p>{activity.activity}</p>
						<small>{activity.date}</small>
					</li>
				{/each}
			</ul>
		</div>

		<div class="card">
			<h3>Top Performing Products</h3>
			<ul class="products">
				{#each topProducts as product}
					<li>
						<p>{product.name} - Sales: ${product.sales}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>