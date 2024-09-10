<script lang="ts">
    let count = 0
    let numbers = [1, 2, 3, 4, 5]

    $: if (count >= 10) {
        alert(`count is dangerously high! ${count}`)
        count = 9
    }

    $: console.log(`the count is ${count}`)

    function handleClick() {
        count += 1
    }

    function addNumber() {
        numbers = [...numbers, numbers.length + 1]
    }

    $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0)
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-center mb-4 text-4xl">Calculate This!</h1>
    
    <button class="btn variant-filled w-70 m-4" on:click={handleClick}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>

    <p class="text-center mb-4">{numbers.join(' + ')} = {sum}</p>

    <button class="btn variant-outline-primary" on:click={addNumber}>Add a number</button>
</div>
