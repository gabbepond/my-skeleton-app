<script lang="ts">
	const emojis: { [key: string]: string } = {
		baseball: '⚾',
		bat: '🏏',
		glove: '🧤',
	};

	export let name: keyof typeof emojis; // Ensure `name` is a key of `emojis`

	// Reactively update `emoji` whenever `name` changes
	$: emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>
<p>I Love The LA Dodgers ⚾</p>