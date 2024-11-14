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
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    // Fetch random dog images from the API
    const res = await fetch('https://dog.ceo/api/breeds/image/random/12');
    const data = await res.json();

    // Return the fetched data
    return {
      dogImages: data.message
    };
  } catch (error) {
    console.error('Error fetching dog images:', error);
    return {
      dogImages: []
    };
  }
};
