<script>
	import { count } from '$lib/components/stores/stores.js' // Import the store
	import Incrementer from '$lib/components/Incrementer.svelte'
	import Decrementer from '$lib/components/Decrementer.svelte'
	import Resetter from '$lib/components/Resetter.svelte'

	let count_value = 0

	// Subscribe to the store
	count.subscribe((value) => {
		count_value = value
	})

	function increment() {
		count.update((n) => n + 1) // Increment the count
	}

	function decrement() {
		count.update((n) => n - 1) // Decrement the count
	}

	function reset() {
		count.set(0) // Reset the count
	}

	// Function to generate the correct number of softball emojis
	function generateSoftballs(count) {
		return '🥎'.repeat(count) // Repeat the emoji based on count_value
	}
</script>

<div class="border-2 border-cyan-300 m-8">
	<h1 class="text-center p-5 mt-5 text-xl">THE SOFTBALL COUNT IS {count_value}</h1>

	<div class="text-center">
		<button class="btn variant-outline-primary m-2" on:click={increment}>+</button>
		<button class="btn variant-outline-primary m-2" on:click={decrement}>-</button>
		<button class="btn variant-outline-primary m-2" on:click={reset}>RESET</button>

		<p class="mt-5">{generateSoftballs(count_value)}</p>
		<!-- Display the emojis here -->
	</div>
</div>
