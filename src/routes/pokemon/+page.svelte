<script lang="ts">
	import { onMount } from 'svelte'

	
	let dogImages: { url: string; name: string }[] = []
	let loading = true
	let breed = 'Unknown Breed'

	// Function to fetch dog images
	async function fetchDogImages() {
		loading = true
		try {
			const res = await fetch('https://dog.ceo/api/breeds/image/random/28')
			const data = await res.json()

			// Doge images and Breeds
			dogImages = data.message.map((url: string) => ({
				url,
				name: generateRandomName(),
				breed: extractBreed(url) // get the Breed from URL
			}))
		} catch (error) {
			console.error('Error fetching dog images:', error)
		} finally {
			loading = false
		}
	}

	function extractBreed(url: string): string {
		const match = url.match(/\/breeds\/([^/]+)\//)
		return match ? match[1].replace('-', ' ') : 'Unknown Breed'
	}

	// Here are my Random dog names
	function generateRandomName(): string {
		const names = [
			'Buddy',
			'Max',
			'Charlie',
			'Bella',
			'Lucy',
			'Daisy',
			'Rocky',
			'Molly',
			'Toby',
			'Jack',
			'Luna',
			'Coco',
			'Bailey',
			'Zoe',
			'Sadie',
			'Chloe',
			'Penny',
			'Rex',
			'Leo',
			'Lily',
			'Teddy',
			'Maggie',
			'Oscar',
			'Ruby',
			'Jackie',
			'Finn'
		]
		const randomIndex = Math.floor(Math.random() * names.length)
		return names[randomIndex]
	}

	
	onMount(fetchDogImages)
</script>

<main class="max-w-4xl mx-auto p-6">
	<h1 class="text-3xl font-bold mb-4">🐶 Dog Gallery</h1>

	{#if loading}
		<p>Loading...</p>
	{/if}

	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
		{#each dogImages as dog}
			<div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
				<img src={dog.url} alt="Random dog" class="w-full h-40 object-cover" />
				<div class="p-4">
					<p class="text-center font-semibold text-black">Name: {dog.name}</p>
					<p class="text-center font-semibold text-sm text-black">Breed: {dog.breed}</p>
					<p class="text-center font-semibold text-black text-xs">
						<a href={dog.url} target="_blank" class="text-blue-500 hover:underline"> Dog Site </a>
					</p>
				</div>
			</div>
		{/each}
	</div>

	<button
		class="bg-blue-500 text-white py-2 px-4 mt-6 rounded hover:bg-blue-600"
		on:click={fetchDogImages}>
		Load More Dogs
	</button>
</main>

<style>
	main {
		text-align: center;
	}
</style>
