<script>
    import Thing from '$lib/components/Thing.svelte';

    // Initial list of things
    let initialThings = [
        { id: 1, name: 'helmet' },
        { id: 2, name: 'whistle' },
        { id: 3, name: 'water bottle' },
        { id: 4, name: 'towel' },
        { id: 5, name: 'goalpost' },
        { id: 6, name: 'softball' },
        { id: 7, name: 'bat' },
        { id: 8, name: 'glove' },
        { id: 9, name: 'jersey' },
        { id: 10, name: 'cleats' }
    ];

    let things = [...initialThings]; // Copy the initial list

    // Function to remove the first thing
    function handleClickRemove() {
        things = things.slice(1);
    }

    // Function to bring back all initial items
    function handleClickAddAll() {
        things = [...initialThings];
    }
</script>

<div class="flex flex-col items-center justify-center m-10 p-4 border-2 border-cyan-300">
    <!-- Button to remove the first item -->
    {#if things.length > 0}
        <button
            on:click={handleClickRemove}
            class="btn bg-cyan-300 text-blue-800 px-4 py-2 rounded-md mb-4 text-2xl p-7 border-2">
            Remove First Thing
        </button>
    {/if}

    <!-- Button to add all items back -->
    {#if things.length === 0}
        <button
            on:click={handleClickAddAll}
            class="btn bg-cyan-300 text-white px-4 py-2 rounded-md mb-4 text-2xl p-7 border-2">
            Add Items
        </button>
    {/if}

    <!-- Loop through and display each thing -->
    {#each things as thing}
        <Thing name={thing.name} />
    {/each}
</div>

