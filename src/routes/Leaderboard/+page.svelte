<script>
	let leaderboard = [
		{ id: 1, name: 'Alice', score: 1500 },
		{ id: 2, name: 'Bob', score: 1400 },
		{ id: 3, name: 'Charlie', score: 1300 },
		{ id: 4, name: 'David', score: 1200 },
		{ id: 5, name: 'Eve', score: 1100 }
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
	.leaderboard {
		list-style: none;
		padding: 0;
	}
	.leaderboard li {
		padding: 10px 0;
		border-bottom: 1px solid #eee;
	}
	.leaderboard li:last-child {
		border-bottom: none;
	}
</style>

<div class="min-h-screen bg-light-blue flex flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
			Leaderboard
		</h2>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="card">
			<h3>Top Players</h3>
			<ul class="leaderboard">
				{#each leaderboard as player}
					<li>
						<p>{player.name} - Score: {player.score}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>