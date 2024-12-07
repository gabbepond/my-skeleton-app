<script lang="ts">
    import { createEventDispatcher } from "svelte";
    
    const dispatch = createEventDispatcher();
    
    function sayHello() {
        dispatch('message', {
            text: 'Ahoy! I am your guide through the stormy seas of confusion. Point me to the trouble, and let the journey begin!'
        })
    }
    
    </script>
    
    <button class="btn bg-cyan-300 text-blue-800 m-4" on:click={sayHello}>Click to say hello</button>