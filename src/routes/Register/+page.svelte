<script>
    import { goto } from '$app/navigation';
</script>

<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: url('https://source.unsplash.com/random/1600x900') no-repeat center center fixed;
        background-size: cover;
    }

    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
    }

    .button {
        flex: 1;
        margin: 0 10px;
        padding: 10px 20px; /* Adjust padding to reduce button size */
        border: 2px solid transparent; /* Reduced border width */
        transition: transform 0.3s, background-color 0.3s;
    }

    .button:hover {
        transform: scale(1.05);
        background-color: #3b82f6;
    }

    .button:first-child:hover {
        background-color: #4f46e5;
    }
</style>

<div class="button-container">
    <button
        on:click={() => goto('/Register/BussinessRegistration')}
        class="button text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
        Go to Business Registration
    </button>
    <button
        on:click={() => goto('/Register/salesRegistration')}
        class="button text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
        Go to Client Registration
    </button>
</div>
