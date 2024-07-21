<script>
    import { navigate } from "svelte-routing";
    import { user } from "../stores";
    import axios from "axios";
  
    let email = "";
    let password = "";
  
    const handleLogin = async () => {
      try {
        const response = await axios.post("/api/auth/login", { email, password });
        user.set(response.data.userId);
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
      }
    };
  </script>
  
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4">Welcome Back</h1>
      <form on:submit|preventDefault={handleLogin} class="space-y-4">
        <input
          type="email"
          bind:value={email}
          placeholder="Enter your email"
          class="w-full px-4 py-2 border rounded"
        />
        <input
          type="password"
          bind:value={password}
          placeholder="Enter your password"
          class="w-full px-4 py-2 border rounded"
        />
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">Login</button>
      </form>
      <footer class="mt-4 text-center">
        Don't have an account? <a href="/register" class="text-blue-500">Register now</a>
      </footer>
    </div>
  </div>
  