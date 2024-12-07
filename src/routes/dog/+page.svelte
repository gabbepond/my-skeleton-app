<script lang="ts">
  import { goto } from '$app/navigation';

  let dogImages: { url: string; breed: string }[] = [];
  let loading = true;

  async function fetchAllBreeds() {
    loading = true;
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();

      if (response.ok) {
        const breeds = Object.keys(data.message);
        dogImages = breeds.map((breed) => ({
          url: `https://dog.ceo/api/breed/${breed}/images/random`,
          breed,
        }));
      }
    } catch (error) {
      console.error('Error fetching breeds:', error);
    } finally {
      loading = false;
    }
  }

  // Fetch breeds on mount
  fetchAllBreeds();
</script>

<main class="max-w-4xl mx-auto p-6">
  <h1 class="text-3xl font-bold mb-4">🐶 Dog Breeds</h1>

  {#if loading}
    <p>Loading breeds...</p>
  {:else}
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {#each dogImages as dog}
        <button
          class="bg-cyan-300 text-blue-800 font-semibold py-2 px-4 mt-2 rounded-lg hover:bg-white breed-button"
          on:click={() => goto(`/dog/${dog.breed}`)}
        >
        🐾{dog.breed}
        </button>
      {/each}
    </div>
  {/if}
</main>

<style>
  main {
    text-align: center;
  }

  .breed-button {
    display: block;
    margin: auto;
    width: 100%; /* Button width matches grid */
    height: 80px; /* Consistent button height */
    text-transform: capitalize; /* Capitalize breed names */
  }
</style>
