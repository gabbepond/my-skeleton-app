<script>
    import Thing from '$lib/components/Thing.svelte';

    let things = [
        { id: 1, name: 'softball' },
        { id: 2, name: 'bat' },
        { id: 3, name: 'glove' },
        { id: 4, name: 'jersey' },
        { id: 5, name: 'cleats' }
    ];

    function handleClick() {
        things = things.slice(1);
    }
</script>

<div class="flex flex-col items-center justify-center min-h-screen p-4">
    <button
        on:click={handleClick}
        class="btn variant-outline-primary border border-gray-500 px-4 py-2 rounded-md mb-4 text-2xl p-7">
        Remove First Thing
    </button>
    {#each things as thing}
        <Thing name={thing.name} />
    {/each}
</div>
