<script>
    import { navigate } from "svelte-routing";
  
    const goToHome = () => navigate("/");
    const goToLogin = () => navigate("/login");
    const goToRegister = () => navigate("/register");
    const goToDashboard = () => navigate("/dashboard");
    const goToLeaderboard = () => navigate("/leaderboard");
  </script>
  
  <header class="bg-blue-100 text-blue-800 shadow-md">
    <div class="container mx-auto flex justify-between items-center p-4">
      <h1 class="text-2xl font-bold cursor-pointer hover:text-blue-600 transition" on:click={goToHome}>
        Deep Revenue Sharing
      </h1>
      <nav class="space-x-4">
        <button on:click={goToHome} class="px-4 py-2 rounded-md hover:bg-blue-200 transition">Home</button>
        <button on:click={goToLogin} class="px-4 py-2 rounded-md hover:bg-blue-200 transition">Login</button>
        <button on:click={goToRegister} class="px-4 py-2 rounded-md hover:bg-blue-200 transition">Register</button>
        <button on:click={goToDashboard} class="px-4 py-2 rounded-md hover:bg-blue-200 transition">Dashboard</button>
        <button on:click={goToLeaderboard} class="px-4 py-2 rounded-md hover:bg-blue-200 transition">Leaderboard</button>
      </nav>
    </div>
  </header>
  