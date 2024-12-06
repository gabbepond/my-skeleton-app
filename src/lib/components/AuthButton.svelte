<script lang="ts">
	import { currentUser } from '$lib/stores/currentUser'
	import { goto } from '$app/navigation'
	import { Avatar } from '@skeletonlabs/skeleton'

	const handleLogout = () => {
		goto('/api/auth/logout')
	}

	const handleLogin = () => {
		goto('/api/auth/login')
	}
</script>

{#if $currentUser}
	<div class="flex items-center bg-gray-300 mr-5">
		<button class="btn bg-gray-800 m-1 border-2 border-cyan-300 rounded-sm" on:click={handleLogout}>Logout</button>
		<div class="ml-2">
            <Avatar src={$currentUser.picture} alt="avatar" class="w-9 rounded-full border-2 border-cyan-300" />
        </div>
	</div>
{:else}
	<button class="btn bg-gray-600 m-1" on:click={handleLogin}>Login</button>
{/if}