 <script>
    import Header from "../lib/Navbar.svelte";
    import Footer from "../lib/Footer.svelte";
    import { navigate } from "svelte-routing";
 </script>
  
  <Header />
  
  <main class="flex flex-col min-h-screen bg-blue-50">
    <div class="flex-grow flex flex-col items-center justify-center text-center p-8">
      <h1 class="text-4xl font-bold mb-4 text-blue-800">Welcome to Deep Revenue Sharing System</h1>
      <p class="text-lg text-blue-600 mb-8">Automate your multi-level marketing revenue sharing seamlessly.</p>
      <div>
        <button on:click={() => navigate("/login")} class="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">Login</button>
        <button on:click={() => navigate("/register")} class="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition ml-4">Register</button>
      </div>
    </div>
    <Footer />
  </main>
  