<script lang="ts">
	let count = 0
	let numbers = [1, 2, 3, 4, 5]
	let currentQuote = ''

	// Math quotes array
	const quotes = [
		"Mathematics is the most beautiful and most powerful creation of the human spirit. — Stefan Banach",
		"Pure mathematics is, in its way, the poetry of logical ideas. — Albert Einstein",
		"Mathematics is not only real, but it is the most real thing we know. — Roger Penrose",
		"The only way to learn mathematics is to do mathematics. — Paul Halmos",
		"Mathematics is the art of giving the same name to different things. — Henri Poincaré",
		"Mathematics is the queen of the sciences. — Carl Friedrich Gauss",
		"Do not worry about your difficulties in mathematics. I can assure you mine are still greater. — Albert Einstein",
		"Mathematics is like love; a simple idea, but it can get complicated. — R. Drabek",
		"Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country. — David Hilbert",
		"The beauty of mathematics only shows itself to more patient followers. — Mary L. Boas",
		"You don’t have to be a genius to do math, you just need to love it. — Unknown",
		"Mathematics is the most powerful and elegant language in the world. — Brian Greene",
		"The essence of mathematics is not to make simple things complicated, but to make complicated things simple. — S. Gudder"
	]

	// Function to update the quote every 5 seconds
	let quoteIndex = 0
	function updateQuote() {
		currentQuote = quotes[quoteIndex]
		quoteIndex = (quoteIndex + 1) % quotes.length // Cycle through the quotes
	}

	// Start the interval when the component loads
	setInterval(updateQuote, 5000) // Change quote every 5 seconds

	// Initialize the first quote
	updateQuote()

	$: if (count >= 10) {
		alert(`count is dangerously high! ${count}`)
		count = 9
	}

	$: console.log(`the count is ${count}`)

	function handleClick() {
		count += 1
	}

	function addNumber() {
		numbers = [...numbers, numbers.length + 1]
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0)
</script>

<div class="flex flex-col items-center justify-center mt-10">
	<!-- Box with math quote above 'Calculate This' -->
	<div class="bg-gray-100 border-2 border-cyan-300 p-4 mb-6 text-center w-2/3 rounded-lg">
		<p class="text-xl italic text-gray-800">{currentQuote}</p>
	</div>

	<h1 class="text-center mb-4 text-4xl">Calculate This!</h1>

	<div class="border-2 border-cyan-300 p-4 m-4 flex flex-col items-center">
		<button class="btn variant-filled w-70 m-4 flex justify-center items-center" on:click={handleClick}>
			Clicked {count}
			{count === 1 ? 'time' : 'times'}
		</button>

		<p class="text-center mb-4">{numbers.join(' + ')} = {sum}</p>

		<div class="flex justify-center items-center">
			<button class="btn bg-cyan-300 text-black" on:click={addNumber}>Add a number</button>
		</div>
	</div>
</div>

