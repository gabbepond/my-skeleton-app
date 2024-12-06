import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const breed = params.name; // Get the dynamic breed name from the URL

  try {
    // Fetch images for the specific breed
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`);

    if (!response.ok) {
      throw new Error(`Failed to fetch images for breed: ${breed}`);
    }

    const { message: images } = await response.json();

    // Return the breed and images to the front end
    return {
      breed,
      images,
    };
  } catch (error) {
    console.error('Error fetching breed data:', error);
    throw error;
  }
};

