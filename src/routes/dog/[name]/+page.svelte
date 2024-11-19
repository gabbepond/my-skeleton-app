<script lang="ts">
    export let data: {
      breed: {
        id: string;
        name: string;
        image: string;
        description: string;
        origin: string;
        lifeSpan: string;
      } | null;
    };
  </script>
  
  {#if data.breed}
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <img
        src={data.breed.image}
        alt={data.breed.name}
        class="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 class="text-2xl font-bold mb-2">{data.breed.name}</h1>
      <p class="text-gray-700 mb-4"><strong>Origin:</strong> {data.breed.origin}</p>
      <p class="text-gray-700 mb-4"><strong>Life Span:</strong> {data.breed.lifeSpan}</p>
      <p class="text-gray-700">{data.breed.description}</p>
    </div>
  {:else}
    <div class="text-center">
      <p class="text-lg text-red-500">Breed not found!</p>
      <a href="/dog" class="text-blue-500 underline">Go back to the dog list</a>
    </div>
  {/if}
  