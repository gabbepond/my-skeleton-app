<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores'; // Only needed for SvelteKit

	let dogImages: { url: string; name: string; breed: string }[] = [];
	let loading = true;
	let breed = 'random'; // Default to random

	// Extract breed from the route
	$: breed = $page?.params?.breed || 'random'; // Handle missing params gracefully

	// Flag to track if component is still mounted
	let mounted = false;

	// Function to fetch dog images
	async function fetchDogImages() {
		loading = true;
		try {
			const endpoint =
				breed === 'random'
					? 'https://dog.ceo/api/breeds/image/random/28'
					: `https://dog.ceo/api/breed/${breed}/images/random/28`;

			const res = await fetch(endpoint);
			const data = await res.json();

			console.log('API Response:', data); // Debug log

			if (Array.isArray(data.message)) {
				dogImages = data.message.map((url: string) => ({
					url,
					name: generateRandomName(),
					breed: extractBreed(url),
				}));
			} else {
				dogImages = []; // Clear on unexpected structure
				console.error('Unexpected API response structure:', data);
			}
		} catch (error) {
			console.error('Error fetching dog images:', error);
			dogImages = []; // Clear images on error
		} finally {
			if (mounted) loading = false;
		}
	}

	// Utility to extract breed from URL
	function extractBreed(url: string): string {
		const match = url.match(/\/breeds\/([^/]+)\//);
		return match ? match[1].replace('-', ' ') : 'Unknown Breed';
	}

	// Utility to generate random names
	function generateRandomName(): string {
		const names = [
			'Buddy', 'Max', 'Charlie', 'Bella', 'Lucy', 'Daisy', 'Rocky', 'Molly', 'Toby',
			'Jack', 'Luna', 'Coco', 'Bailey', 'Zoe', 'Sadie', 'Chloe', 'Penny', 'Rex', 'Leo',
			'Lily', 'Teddy', 'Maggie', 'Oscar', 'Ruby', 'Jackie', 'Finn'
		];
		const randomIndex = Math.floor(Math.random() * names.length);
		return names[randomIndex];
	}

	// Lifecycle hook to fetch images and handle mounting state
	onMount(() => {
		mounted = true;
		fetchDogImages();
		return () => {
			mounted = false;
		};
	});
</script>

<main class="max-w-4xl mx-auto p-6">
	<h1 class="text-3xl font-bold mb-4">🐶 Dog Gallery</h1>

	{#if loading}
		<p>Loading...</p>
	{:else if dogImages.length > 0}
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
			{#each dogImages as dog}
				<div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
					<img src={dog.url} alt="Random dog" class="w-full h-40 object-cover" />
					<div class="p-4">
						<p class="text-center font-semibold text-black">Name: {dog.name}</p>
						
						<!-- Link to the dog URL -->
						<a 
							href={dog.url} 
							class="btn variant-filled-primary"
							target="_blank"
						>
							<h2 class="text-l">{dog.breed}</h2>
						</a>

						<p class="text-center font-semibold text-sm text-black">Breed: {dog.breed}</p>
						<p class="text-center font-semibold text-black text-xs">
							<a href={dog.url} target="_blank" class="text-blue-500 hover:underline">Dog Site</a>
						</p>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<p>No dogs available. Try reloading.</p>
	{/if}

	<button
		class="bg-green-600 text-white py-2 px-4 mt-6 hover:bg-green-400 rounded-lg"
		on:click={fetchDogImages}>
		Load More Dogs
	</button>
</main>

<style>
	main {
		text-align: center;
	}
</style>
