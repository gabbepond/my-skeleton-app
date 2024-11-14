<!-- <script lang="ts">
	import { onMount } from 'svelte'

	let pokeDex: any[] = []

	onMount(async () => {
		const randomPokemonID = Math.floor(Math.random() * 900) + 1
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${randomPokemonID}&limit=25`)
		const data = await res.json()
		//console.log(data)
		pokeDex = data.results
	})
</script>

<main>
	<h1>PokeDex</h1>
	<div class="flex flex-wrap">
		{#each pokeDex as { name, url }}
        <div class="m-2 p-8 bg-secondary-800 rounded-lg">
			<a href={`/pokemon/${name}`} class="btn variant-filled-primary">
				<h2 class="text-2xl font-bold">{`${name[0].toUpperCase()}${name.slice(1)}`}</h2>
			</a>
        </div>
		{/each}
	</div>
</main> -->
<script>
	import { onMount } from 'svelte';
  
	// @ts-ignore
	let dogImages = [];
	let loading = true;
  
	// Function to fetch dog images
	async function fetchDogImages() {
	  loading = true;
	  try {
		const res = await fetch('https://dog.ceo/api/breeds/image/random/28');
		const data = await res.json();
		dogImages = data.message;
	  } catch (error) {
		console.error('Error fetching dog images:', error);
	  } finally {
		loading = false;
	  }
	}
  
	// Fetch images when the component mounts
	onMount(fetchDogImages);
  </script>
  
  <main class="max-w-4xl mx-auto p-6">
	<h1 class="text-3xl font-bold mb-4">🐶 Dog Gallery</h1>
  
	{#if loading}
	  <p>Loading...</p>
	{/if}
  
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
	  {#each dogImages as img}
		<div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
		  <img src={img} alt="Random dog" class="w-full h-40 object-cover" />
		</div>
	  {/each}
	</div>
  
	<button
	  class="bg-blue-500 text-white py-2 px-4 mt-6 rounded hover:bg-blue-600"
	  on:click={fetchDogImages}
	>
	  Load More Dogs
	</button>
  </main>
  
  <style>
	main {
	  text-align: center;
	}
  </style>
  