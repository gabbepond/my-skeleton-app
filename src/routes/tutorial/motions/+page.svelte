<script lang="ts">
	import { tweened, spring } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { ProgressBar } from '@skeletonlabs/skeleton'
	import { fade, fly } from 'svelte/transition'
	import { flip } from 'svelte/animate'
	let emojis = ['🐶', '🍕', '🌟', '🚀', '🎉', '🦄', '🌈', '🎂']
	

	let flipped = false

	function toggleFlip() {
		flipped = !flipped
	}

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
		emojis = emojis.sort(() => Math.random() - 0.5) // Shuffle the emojis
	}
	let visible = true
	let size = spring(10)
	// Function to animate the image upwards when visible
	const moveUp = () => {
		coords.set({ x: 0, y: 0 }) // move image up to its final position
	}
</script>

<h2 class="text-center text-lg text-cyan-300 mt-4">The Likelihood of adopting a Dog 🐶</h2>

<div class="flex flex-col gap-16 m-10">
	<div>
		<!-- Progress Bar-->
		<ProgressBar bind:value={$progress} max={100} meter="bg-red-400" track="bg-cyan-300" />

		
		<div class="flex justify-center items-center">
			<button class="btn bg-cyan-300 m-5 border-2 text-blue-800" on:click={() => ($progress = 0)}
				>0</button>
			<button class="btn bg-cyan-300 m-5 border-2 text-blue-800" on:click={() => ($progress = 25)}
				>25</button>
			<button class="btn bg-cyan-300 m-5 border-2 text-blue-800" on:click={() => ($progress = 50)}
				>50</button>
			<button class="btn bg-cyan-300 m-5 border-2 text-blue-800" on:click={() => ($progress = 100)}
				>100</button>
		</div>
	</div>

	<div class="flex gap-2">
		<div class="w-48 select-none text-cyan-300">
			<label>
				<h3>Sniffness ({coords.stiffness})</h3>
				<input bind:value={coords.stiffness} type="range" min="0.01" max="1" step="0.01" />
			</label>

			<label>
				<h3>Bark ({coords.damping})</h3>
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
			<!-- <circle fill="#f00" cx={$coords.x} cy={$coords.y} r={$size} /> -->
			<svg>
				<text 
				  x={$coords.x} 
				  y={$coords.y} 
				  font-size="{$size * 4}" 
				  text-anchor="middle" 
				  dominant-baseline="middle">
				  🐶
				</text>
			  </svg>
			  
		</svg>
	</div>

	<div class="text-center text-3xl">
		<label class="flex items-center justify-center gap-2 mb-6">
			<input class="scale-150 text-cyan-300" type="checkbox" bind:checked={visible} />
			<span class="text-3xl">VISIBLE</span>
		</label>
		<div class="gap-4 flex justify-center items-center">
			{#if visible}
				<img src="/Dodger3.jpg" alt="Dog" transition:fly={{ x: 100, duration: 800 }} />
				<img src="/Dodger2.JPG" alt="Dog" in:fly={{ y: 200, duration: 2000 }} out:fade />
				<img src="/Dodger1.jpg" alt="Dodger" in:fly={{ y: 200, duration: 2000 }} out:fade />
				<img src="/Dodger4.jpg" alt="Dog" transition:fly={{ x: 100, duration: 800 }} />

				<!-- <div class="bg-teal-400 w-80 h-50 text-2xl text-center text-blue-700 " transition:fade={{ duration: 1000 }}> <h1>🦴 Dog Bone 🦴</h1></div> -->
			{/if}

			<button class="card-container" on:click={toggleFlip} type="button">
				<div class="card {flipped ? 'flipped' : ''}">
					<!-- Front of the card -->
					<div class="card-front">
						<p>Flip Card</p>
					</div>

					<!-- Back of the card -->
					<div class="card-back">
						<h2>Name: Dodger</h2>
						<p>Birth Date: 06/16/23</p>
						<p>Breed: Mini Goldendoodle</p>
					</div>
				</div>
				<!-- DODGER -->
			</button>
		</div>
	</div>

	<div class="flex justify-center items-center mt-3 p-5 border-4">
		<button class="btn text-2xl bg-cyan-300 mr-6 border-4 text-blue-800" on:click={shuffle}
			>SHUFFLE</button>
		<ul>
			{#each emojis as emoji (emoji)}
				<li
					class="bg-cyan-300 w-36 rounded border-2 text-center my-1 mb-4 text-blue-800"
					animate:flip={{ duration: 800 }}>
					{emoji}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	/* Container for centering and sizing */
	.card-container {
		perspective: 1000px;
		width: 300px;
		height: 200px;
		cursor: pointer;
	}

	/* Card setup */
	.card {
		width: 100%;
		height: 100%;
		position: relative;
		transform-style: preserve-3d;
		transition: transform 0.6s;
	}

	/* Flip the card */
	.flipped {
		transform: rotateY(180deg);
	}

	/* Front and back face styling */
	.card-front,
	.card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2em;
		color: white;
	}

	/* Front styling */
	.card-front {
		background-color: #222;
	}

	/* Back styling */
	.card-back {
		background-color: #4a90e2;
		transform: rotateY(180deg);
		flex-direction: column;
		text-align: center;
	}
</style>
