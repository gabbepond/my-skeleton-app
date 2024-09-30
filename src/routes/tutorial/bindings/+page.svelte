<script lang="ts">
	import { marked } from 'marked'

	let value = `Some words are *italic*, some are **bold**\nDodgers MLB Stats\n- Pitching\n- Batting\n- Base Running`;
	let wantSpam = false
	let selected: any
	let answer = ''
	let players = 1
	let dodgers: any = []

	//$: console.log(selected)

	let questions = [
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What is the mascot for SHS?`
		}
	]

	function handleSubmit() {
		alert(`You answered: ${answer} to the question: ${selected.text} with the id of ${selected.id}`)
	}
</script>

<div class="card m-4 p-4 w-2/3 mx-auto text-center mt-5">
	<h2 class="text-center text-2xl ">Insecurity questions</h2>
	<form on:submit|preventDefault={handleSubmit}>
		<label class="label text-center mt-4">
			<input class="checkbox" type="checkbox" bind:checked={wantSpam} />
			Yes! Please send me all the spam!
		</label>

		<select class="select m-2 w-1/3" bind:value={selected} on:change={() => (answer = '')}>
			{#each questions as question}
				<option value={question}>{question.text}</option>
			{/each}
		</select>

		<input class="input w-1/3" bind:value={answer} />
		<button class="btn variant-filled-primary mt-6 ml-3" disabled={!answer} type="submit">Submit</button>
	</form>
</div>

<div class="card m-4 p-4 w-2/3 mx-auto">
	{#if wantSpam}
		<p>Thank you for signing up for spam!</p>
	{:else}
		<p>You must opt in to continue. If you're not paying, you're the product.</p>
	{/if}
</div>

<!-- make a new card with a form element for selecting ice cream players and flavours.  Be sure to use the bind:group directive-->
<div class="card m-4 p-4 w-2/3 mx-auto">
	<h2 class="text-2xl">Fantasy Baseball Dodgers MLB Selection ⚾</h2>
	<form>
		{#each [1, 2, 3] as number}
			<label class="label">
				<input class="radio m-2" type="radio" value={number} bind:group={players} />
				{number}
				{number === 1 ? 'player' : 'players'}</label>

			
		{/each}
		<!-- also allow dodger selections -->
		{#each ['Shohei Ohtani', 'Mookie Betts', 'Freddie Freeman'] as dodger}
			<label class="label m-2">
				<input
					class="checkbox mr-2"
					type="checkbox"
					name="dodgers"
					value={dodger}
					bind:group={dodgers} />
				{dodger}
			</label> 
		{/each}

		{#if dodgers.length === 0}
			<p class="mt-8">Please select at least one Player</p>
		{:else if dodgers.length > players}
			<p>Can't select more Players!</p>
		{:else}
			<p>
				You Selected {players}
				{players === 1 ? 'player' : 'players'}
				of {dodgers}
			</p>
		{/if}

		<hr class="my-4" />
		<!-- Adding a select that allows multiple selections-->
		 <select class="select w-1/3 text-center" multiple bind:value={dodgers}>
			{#each ['Teoscar Hernandez', 'Landon Knack', 'Austin Barnes', 'Kevin Kiermaier'] as dodger}
			<option>{dodger}</option>
			{/each}
		 </select>
	</form>
</div>

<div class="card m-4 p-4 w-2/3 mx-auto">
<div class="grid grid-cols-[5rem_1fr] gap-4">
	input
	<textarea class="textarea resize-none" rows="5" bind:value></textarea>

	output
	<div>{@html marked(value)}</div>
</div>

</div>