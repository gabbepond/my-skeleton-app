<script lang="ts">
	let myName = '<em>🥎 Gabbe 🥎</em>'

	export let answer: string = '42'
	export let message: string = 'Lets Play Ball!'
</script>

<div class="flex flex-col mx-auto w-[500px] m-4 p-4 rounded-lg text-purple-600 bg-slate-300 border-2 border-cyan-300">
<h1 class="text-center m-3 text-2xl">🥎 Hello {@html myName.toUpperCase()}</h1>
<h1 class="text-center">The Answer is... {answer}!</h1>
<h1 class="text-center">The Message to You is... {message}!</h1>
</div>