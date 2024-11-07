<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<!-- <div class="container h-full mx-auto flex flex-col justify-center items-center">
    <div class="space-y-5">
        <h1 class="h1">Gabbe Let's Get Cracking Bones!</h1>
        <p>Start by exploring:</p>
        <ul>
            <li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
            <li><code class="code">/src/app.postcss</code> - app wide css</li>
            <li>
                <code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
            </li>
        </ul>
    </div>
    <h1 class="h1 mt-10">🦴🦴🦴</h1>
</div> -->

<script lang="ts">
import { currentUser } from '$lib/stores/currentUser';
</script>

<div class="h-screen flex flex-col items-center justify-center">
{#if $currentUser}
  <h1 class="text-4xl"> Welcome, {$currentUser.name}! </h1>
  <img src={$currentUser.picture} alt="avatar" class="rounded-full h-40 w-40 m-4"/>
  {/if}
</div>