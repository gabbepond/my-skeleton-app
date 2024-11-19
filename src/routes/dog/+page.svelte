<script lang="ts">
  export let data: { dogBreeds: { id: string; name: string; image: string; description: string }[] };
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each data.dogBreeds as dog (dog.id)}
    <a
      href={`/dog/${dog.id}`}
      class="group block rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
    >
      <img
        src={dog.image}
        alt={dog.name}
        class="h-64 w-full object-cover"
      />
      <div class="p-4 bg-gray-100 text-center">
        <h3 class="text-lg font-semibold">{dog.name}</h3>
      </div>
    </a>
  {/each}
</div>
