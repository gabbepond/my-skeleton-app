<script lang="ts">
	export let data: { dogImages: { url: string; breed: string }[] };
  </script>
  
  <main class="max-w-4xl mx-auto p-6">
	<h1 class="text-3xl font-bold mb-4">🐶 Dog Gallery</h1>
  
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
	  {#each data.dogImages as dog}
		<div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg p-4">
		  <img src={dog.url} alt={dog.breed} class="w-full h-40 object-cover mb-2" />
		  <p class="text-center font-semibold capitalize">{dog.breed}</p>
		</div>
	  {/each}
	</div>
  </main>
  
  <style>
	main {
	  text-align: center;
	}
  </style>
  