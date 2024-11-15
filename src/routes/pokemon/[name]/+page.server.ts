// export async function load({ params }) {

//     const pokeName = params.name

//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
//     const retrievedPokemon = await response.json();
//     //console.log(retrievedPokemon);

//     return {
//         pokemon: {
//             name: retrievedPokemon.name,
//             id: retrievedPokemon.id,
//             image: retrievedPokemon.sprites.other['official-artwork'].front_default,
//             moves: retrievedPokemon.moves.map((move: any) => move.move.name),
//             types: retrievedPokemon.types.map((type: any) => type.type.name),
//         }
//     }
// }
// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';

type DogImage = {
  url: string;
  breed: string;
};

// Fetch 25 random dog images from Dog CEO API
export const load: PageServerLoad = async () => {
  try {
    const res = await fetch('https://dog.ceo/api//image/random/12');
    const data = await res.json();

    // Extract breed from the image URL
    const dogImages: DogImage[] = data.message.map((url: string) => {
      const breed = url.split('/')[4]; // Extract breed name from the URL
      return { url, breed };
    });


    return { dogImages };
  } catch (error) {
    console.error('Error fetching dog images:', error);
    return { dogImages: [] };
  }
};


