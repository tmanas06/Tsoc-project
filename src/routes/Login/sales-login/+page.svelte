<script lang="ts">
  import Table from "$lib/Table.svelte";
  import { navigate } from "svelte-routing";
  import { user } from "$lib/stores";
  import axios from "axios";

  /** @type {import('./$types').PageData} */
  // export let data;

  /** @type {import('./$types').ActionData} */
  export let form;

  let email = "";
  let password = "";

  const handleLogin = async () => {
    // try {
    //   const response = await axios.post("/api/auth/login", { email, password });
    //   user.set(response.data.userId);
    //   navigate("/dashboard");
    // } catch (error) {
    //   console.error(error);
    // }
  };
</script>

<div class="flex flex-col justify-center items-center min-h-screen bg-gray-100 space-y-10">
  <!-- Login Form -->
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
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
    <footer class="mt-4 text-center">
      Don't have an account? <a href="/register" class="text-blue-500">Register now</a>
    </footer>
  </div>

  <!-- Table Component -->
  <!-- <Table names={data.names} /> -->

  <!-- Create Applicant Form -->
  <!-- <div
    class="mt-10 pt-10 w-full max-w-xl p-5 mx-auto rounded-lg shadow-xl bg-white ring-1 ring-gray-900/5 backdrop-blur-lg"
  >
    <form method="POST" action="?/create">
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="name"
          >
            Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Enter name"
            name="name"
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="text"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <button
          type="submit"
          class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold mt-5 ml-2 px-4 py-2 rounded"
        >
          Create Applicant
        </button>
      </div>
    </form>
    {#if form?.success}
      <p class="pt-2 text-green-600 font-semibold">Added new Applicant!</p>
    {:else if form?.deleted}
      <p class="pt-2 text-green-600 font-semibold">Deleted Successfully!</p>
    {/if}
  </div> -->
</div>
