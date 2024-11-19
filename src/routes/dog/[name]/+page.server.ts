// import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = async ({ params }) => {
//   const { name } = params;

//   try {
//     const res = await fetch(`https://api.thedogapi.com/v2/breeds/${name}`);
//     const data = await res.json();

//     if (!data || !data.name) {
//       throw new Error('Breed not found');
//     }

//     return {
//       breed: {
//         id: data.id,
//         name: data.name,
//         image: data.image?.url || '',
//         description: data.temperament || 'No description available.',
//         origin: data.origin || 'Unknown',
//         lifeSpan: data.life_span || 'Unknown',
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching breed details:', error);
//     return { breed: null };
//   }
// };

