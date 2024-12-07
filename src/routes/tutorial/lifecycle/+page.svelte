<script lang="ts">
	import { onMount } from 'svelte'
	import { get } from 'svelte/store'

	let starWarsCharacter: { name: string; height: string; mass: string, id: string, gender: string, hair_color: string } = {
		name: '',
		height: '',
		mass: '',
        id: '',
		gender: '',
		hair_color: ''
	}

	onMount(() => {
		console.log('onMount')
		getStarWarsCharacter()
		// console.log(get(starWarsCharacterStore))
		return () => {
			console.log('onDestroy')
		}
	})

	async function getStarWarsCharacter() {
		const randomCharacterId = Math.floor(Math.random() * 82) + 1
		const response = await fetch(`https://swapi.dev/api/people/${randomCharacterId}`)
		const data = await response.json()
		console.log(data)
		starWarsCharacter = {
            name: data.name,
            height: data.height,
            mass: data.mass,
            id: randomCharacterId.toString(),
			gender: data.gender,
			hair_color: data.hair_color
			
        }
		console.log("starWarsCharacter", starWarsCharacter)
		starWarsCharacter.update(characters => [...characters, starWarsCharacter])
	}
</script>

<h1 class=" text-cyan-300 mt-4 text-center text-xl">Lifecycle Of A Stars Wars Character</h1>

<div class="card m-4 p-4 w-1/3 mx-auto flex flex-col items-center rounded-lg border-2 border-cyan-300">
  
    <p>Name: {starWarsCharacter.name}</p>
    <p>Height: {starWarsCharacter.height}</p>
    <p>Weight: {starWarsCharacter.mass}</p>
	<p>Gender: {starWarsCharacter.gender}</p>
	<p>Hair Color: {starWarsCharacter.hair_color}</p>
    <img class="mt-4 border-2 border-white" src={`https://starwars-visualguide.com/assets/img/characters/${starWarsCharacter.id}.jpg`} alt="Star Wars Character"/>
    
    <!-- Button to change the character -->
    <button class="mt-4 p-2 bg-cyan-300 text-blue-800 rounded-full border-2 border-purple-600" on:click={getStarWarsCharacter}>
        Change Character
    </button>
</div>
