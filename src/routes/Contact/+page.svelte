<script>
	let name = '';
	let email = '';
	let message = '';
	let formSubmitted = false;

	function handleSubmit(event) {
		event.preventDefault();
		// Here you would typically send the form data to a server
		console.log('Form submitted:', { name, email, message });
		formSubmitted = true;
	}
</script>

<style>
	.min-h-screen {
		min-height: 100vh;
	}
	.bg-light-blue {
		background-color: #ADD8E6; /* Lightish blue background */
	}
	.contact-form {
		max-width: 600px;
		margin: 0 auto;
		padding: 20px;
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
	.contact-form h2 {
		margin-bottom: 20px;
		font-size: 24px;
		color: #333;
	}
	.contact-form label {
		display: block;
		margin-bottom: 8px;
		font-weight: bold;
	}
	.contact-form input,
	.contact-form textarea {
		width: 100%;
		padding: 10px;
		margin-bottom: 20px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	.contact-form button {
		padding: 10px 20px;
		background-color: #1D4ED8; /* Primary blue color */
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	.contact-form button:hover {
		background-color: #1E40AF; /* Darker blue on hover */
	}
	.success-message {
		margin-top: 20px;
		color: green;
		font-weight: bold;
	}
</style>

<div class="min-h-screen bg-light-blue flex flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
			Contact Us
		</h2>
		<p class="mt-2 text-center text-sm text-gray-600">
			We would love to hear from you!
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="contact-form">
			{#if formSubmitted}
				<p class="success-message">Thank you for your message! We will get back to you soon.</p>
			{:else}
				<form on:submit={handleSubmit}>
					<div>
						<label for="name">Name</label>
						<input type="text" id="name" bind:value={name} required placeholder="Enter your name">
					</div>

					<div>
						<label for="email">Email</label>
						<input type="email" id="email" bind:value={email} required placeholder="Enter your email address">
					</div>

					<div>
						<label for="message">Message</label>
						<textarea id="message" bind:value={message} rows="5" required placeholder="Enter your message"></textarea>
					</div>

					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			{/if}
		</div>
	</div>
</div>