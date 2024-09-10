<script lang="ts">
	import Nested from '$lib/components/Nested.svelte'

	let imgSrc = '/softballsc.jpg'
</script>

<div class="flex flex-col m-4">

	<Nested answer={'Sports Sports!!!'}/>

<img src={imgSrc} class="mt-8" alt="A Beautiful Softball Field"/>
</div>