<script lang="ts">
	import { onMount } from 'svelte'
	import { get } from 'svelte/store'

	let starWarsCharacter: { name: string; height: string; mass: string, id: string } = {
		name: '',
		height: '',
		mass: '',
        id: ''
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
            id: randomCharacterId.toString()
        }

		starWarsCharacter.update(characters => [...characters, starWarsCharacter])
	}
</script>

<h1>Lifecyle Route</h1>

<div class="flex flex-col items-center">
    <p>Star Wars Character</p>
    <p>{starWarsCharacter.name}</p>
    <p>{starWarsCharacter.height}</p>
    <p>{starWarsCharacter.mass}</p>
    <img src={`https://starwars-visualguide.com/assets/img/characters/${starWarsCharacter.id}.jpg`} alt="Star Wars Character" />
    
    <!-- Button to change the character -->
    <button class="mt-4 p-2 bg-blue-500 text-white rounded" on:click={getStarWarsCharacter}>
        Change Character
    </button>
</div>
