<script lang="ts">
	import Nested from '$lib/components/Nested.svelte'
	import Bat from '$lib/components/Bat.svelte'

	const myBat = {
		make: 'Louisville Slugger',
		model: 'Genesis',
		year: 2025,
		color: 'White and Red '
	}
    let imgSrc = '/bat2.jpg'
   
</script>
<h1 class=" text-center font-bold text-2xl mt-4 text-cyan-300"> Svelte Props Tutorial</h1>

<p class="m-4 text-center border-2 border-cyan-300 text-xl p-5">
	Props are a way to pass data from a parent component to a child component. In this example, we
	pass answer and message values via their respective props to the Nested component.
</p>
<p class="m-4 text-center border-2 border-cyan-300 text-xl p-5">
    We also pass all the properties of the Bat object to the MyBat component using the spread
    operator.
</p>

<Nested answer="Not 42" message="SvelteKit is awesome!" />

<Bat {...myBat} />
<img src={imgSrc} class="block mx-auto w-1/2 h-auto mt-8 border-2 border-cyan-300" alt="I love this Bat!" />
