<script lang="ts">
	import Nested from '$lib/components/Nested.svelte'

	let imgSrc = '/softballsc.jpg'
</script>

<div class="flex flex-col m-4 border-2 border-cyan-300">
	<Nested answer={'Sports Sports Sports!!!'} />

	<img src={imgSrc} class="mt-8 ml-20 mr-20" alt="A Beautiful Softball Field" />
</div>
