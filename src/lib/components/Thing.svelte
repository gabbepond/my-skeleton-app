<script lang="ts">
	const emojis: { [key: string]: string } = {
		softball: '🥎',
		bat: '🏏',
		glove: '🧤',
		jersey: '👕',
		cleats: '👟'
	};

	export let name: keyof typeof emojis; // Ensure `name` is a key of `emojis`

	// Reactively update `emoji` whenever `name` changes
	$: emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>
