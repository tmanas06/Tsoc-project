<script>
	let product = {
		name: 'Sample Product',
		description: 'This is a sample product description.',
		price: 99.99,
		imageUrl: 'https://via.placeholder.com/150' // Default product image
	};
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
	.product-image {
		width: 100%;
		height: auto;
		border-radius: 8px;
		margin-bottom: 20px;
	}
</style>

<div class="min-h-screen bg-light-blue flex flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
			Product Page
		</h2>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="card">
			<img class="product-image" src={product.imageUrl} alt={product.name} />
			<h3>{product.name}</h3>
			<p>{product.description}</p>
			<p>Price: ${product.price}</p>
		</div>
	</div>
</div>