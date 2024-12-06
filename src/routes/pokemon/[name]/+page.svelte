<script lang="ts">
    export let data: { breed: string; images: string[] };
    console.log("data", data);
  
    // Expanded list of dog names
    const names = [
      'Buddy', 'Charlie', 'Max', 'Bella', 'Lucy', 'Cooper', 'Daisy', 'Luna', 'Rocky', 'Molly', 
      'Rex', 'Oscar', 'Zoe', 'Bailey', 'Sadie', 'Jack', 'Chloe', 'Lily', 'Leo', 'Maggie', 
      'Jax', 'Finn', 'Ruby', 'Milo', 'Toby'
    ];
  
    // Function to generate a random dog name
    const generateRandomName = () => {
      return names[Math.floor(Math.random() * names.length)];
    };
  
    // Map each image to a unique dog name
    const dogCards = data.images.map((image) => ({
      image,
      name: generateRandomName(),
    }));
  </script>
  
  <main class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4 capitalize">🐾 {data.breed}</h1>
  
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {#each dogCards as dog}
        <div class=" rounded-lg overflow-hidden shadow-lg bg-cyan-300">
          <img src={dog.image} alt={data.breed} class="w-full h-40 object-cover mb-2" />
          <p class="text-center  text-blue-800 font-semibold">{dog.name}</p>
        </div>
      {/each}
    </div>
  </main>
  
  <style>
    main {
      text-align: center;
    }
  
    img {
      border-radius: 8px;
    }
  </style>
  
