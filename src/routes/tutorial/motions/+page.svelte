<script lang="ts">
	import { tweened, spring } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { ProgressBar } from '@skeletonlabs/skeleton'
	import { fade, fly } from 'svelte/transition'
    import { flip } from 'svelte/animate'
	let emojis = ['🐶', '🍕', '🌟', '🚀', '🎉', '🦄', '🌈', '🎂'];






	const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	})

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	)

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

	const shuffle = () => {
	emojis = emojis.sort(() => Math.random() - 0.5); // Shuffle the emojis
		};
	let visible = true
	let size = spring(10)
	// Function to animate the image upwards when visible
	const moveUp = () => {
		coords.set({ x: 0, y: 0 }); // move image up to its final position
	};
</script>

<div class="flex flex-col gap-16 m-10">
	<div>
		<ProgressBar bind:value={$progress} max={100} meter="bg-red-400" track="bg-teal-400" />
		<div class="flex justify-center items-center">
		<button class="btn bg-teal-400 m-5 border-2 text-blue-700" on:click={() => ($progress = 0)}>0</button>
		<button class="btn bg-teal-400 m-5 border-2 text-blue-700" on:click={() => ($progress = 25)}>25</button>
	</div>
	</div>

	<div class="flex gap-2">
		<div class="w-48 select-none text-teal-400">
			<label>
				<h3>stiffness ({coords.stiffness})</h3>
				<input bind:value={coords.stiffness} type="range" min="0.01" max="1" step="0.01" />
			</label>

			<label>
				<h3>damping ({coords.damping})</h3>
				<input bind:value={coords.damping} type="range" min="0.01" max="1" step="0.01" />
			</label>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<svg
			class="w-full h-48 border"
			on:mousemove={(e) => {
				const { left, top } = e.currentTarget.getBoundingClientRect()
				coords.set({ x: e.clientX - left, y: e.clientY - top })
			}}
			on:mousedown={() => size.set(30)}
			on:mouseup={() => size.set(10)}>
			<circle fill="#f00" cx={$coords.x} cy={$coords.y} r={$size} />
		</svg>
	</div>

    <div class="text-center text-3xl">
		<label class="flex items-center justify-center gap-2 mb-6">
			<input class="scale-150 text-teal-400" type="checkbox" bind:checked={visible} />
			<span class="text-3xl">VISIBLE</span>
		</label>		
        <div class="gap-4 flex justify-center items-center">
            {#if visible}
            <img src="https://place.dog/300/200" alt="Dog" transition:fly={{ y: 400, duration: 1000 }} />
			<!-- <img src="https://place.dog/300/200" alt="Dog" transition:fly={{ x: 100, duration: 800 }} /> -->
			<img src="https://place.dog/300/200" alt="Dog" style="transform: translate({$coords.x}px, {$coords.y}px);" />
            <img src="https://place.dog/300/200" alt="Dog" in:fly={{ y: 200, duration: 2000}} out:fade />
            <div class="bg-teal-400 w-80 h-50 text-2xl text-center text-blue-700 " transition:fade={{ duration: 1000 }}> <h1>🦴 Dog Bone 🦴</h1></div>
            {/if}
        </div>
    </div>


	<div class="flex justify-center items-center mt-3 p-5 border-4">
		<button class="btn text-2xl bg-teal-500 mr-6 border-4" on:click={shuffle}>SHUFFLE</button>
		<ul>
			{#each emojis as emoji (emoji)}
			<li class="bg-teal-400 w-36 rounded border-2 text-center my-1 mb-4 text-blue-700 " animate:flip={{duration: 800}}>
				{emoji}
			</li>
			{/each}
		</ul>
	</div>
</div>