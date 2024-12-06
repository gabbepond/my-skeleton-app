<script lang="ts">
	const emojis: { [key: string]: string } = {
		softball: '🥎',
		bat: '🏏',
		glove: '🧤',
		jersey: '👕',
		cleats: '👟',
		helmet: '🪖',
		whistle: '📣',
		'water bottle': '🍼',
		towel: '🏖️',
		sneakers: '👟',
		goalpost: '🏐',
		coach: '👨‍🏫',
		scoreboard: '🏆',
		medal: '🏅',
		'team flag': '🚩'
	};

	export let name: keyof typeof emojis; // Ensure `name` is a key of `emojis`

	// Reactively update `emoji` whenever `name` changes
	$: emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>
