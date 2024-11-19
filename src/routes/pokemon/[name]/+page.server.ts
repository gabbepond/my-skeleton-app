import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random/12');
  if (!response.ok) {
    throw new Error('Failed to fetch dog images');
  }

  const { message: images } = await response.json() as { message: string[] };

  // Extract breed from the image URL
  const generateDogData = (url: string) => {
    const breedMatch = url.match(/breeds\/([^/]+)\//);
    const breed = breedMatch ? breedMatch[1].replace('-', ' ') : 'Unknown Breed';
    const name = `Doggo-${Math.random().toString(36).substr(2, 5)}`; // Generate a random name
    return { url, breed, name };
  };

  const dogs = images.map(generateDogData);

  return { dogs };
};

