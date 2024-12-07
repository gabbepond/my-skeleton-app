<script lang="ts">
	import Outer from '$lib/components/Outer.svelte'
	import BigBlueButton from '$lib/components/BigBlueButton.svelte'

	let m = { x: 0, y: 0 }
	let isToggled = false
	let name = 'world'
	let a = 1
	let b = 2

	function handleMessage(event: CustomEvent) {
		alert(event.detail.text)
	}

	function handleClick() {
		isToggled = !isToggled
	}
</script>

<h1 class="text-2xl text-center text-cyan-300 mt-5">Let's Try Some Svelte Events</h1>
<!-- Move CURSOR HAND -->
<h2 class="text-center text-xl text-white mt-5">Move Cursor Hand In Box</h2>
<div class="flex flex-col items-center justify-center">
	<div
		class="w-96 h-32 p-2 border-2 border-cyan-300 text-center cursor-pointer"
		on:pointermove={(e) => {
			m = { x: Math.floor(e.clientX), y: Math.floor(e.clientY) }
		}}>
		Pointer Position {m.x} x {m.y}
	</div>
</div>

<!-- CLICK ME BUTTONS -->
<div class="border-2 border-cyan-300 mt-4 ml-20 mr-20 flex items-center justify-center">
	<button
		class="btn bg-cyan-300 text-blue-800 m-4"
		on:click|once={() => alert('Thanks for clicking this one time!')}
		>Click me once... and only once!</button>
	<Outer on:message={handleMessage} />
	<BigBlueButton on:click={handleClick} bgClass={isToggled ? 'bg-blue-500' : 'bg-red-500'} />
</div>
<!-- Dynamic HELLO -->
<div class="border-2 border-cyan-300 mt-4 ml-20 mr-20 flex items-center justify-center">
	<input class="input w-32 p-1 text-sm border rounded-full m-3 pl-2" bind:value={name} />
	<h1 class="ml-4">Hello {name}!</h1>

</div>
<!-- ADDING NUMBERS -->
<div class="border-2 border-cyan-300 m-5 p-2 ml-20 mr-20">
	<label class="label">
		<input class="input" type="number" bind:value={a} min="0" max="10" />
		<input class="range" type="range" bind:value={a} min="0" max="10" />
	</label>

	<label class="label">
		<input class="input" type="number" bind:value={b} min="0" max="10" />
		<input class="range" type="range" bind:value={b} min="0" max="10" />
	</label>

	<p class="font-bold text-center">{a} + {b} = {a + b}</p>
</div>
