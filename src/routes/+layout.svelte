<script lang="ts">
	import { page } from '$app/stores' // Import page store to access the current route
	import '../app.postcss'
	import ThemeMenu from '$lib/components/ThemeMenu.svelte'

	// Highlight JS
	import hljs from 'highlight.js/lib/core'
	import 'highlight.js/styles/github-dark.css'
	import { storeHighlightJs } from '@skeletonlabs/skeleton'
	import xml from 'highlight.js/lib/languages/xml' // for HTML
	import css from 'highlight.js/lib/languages/css'
	import javascript from 'highlight.js/lib/languages/javascript'
	import typescript from 'highlight.js/lib/languages/typescript'
	import AuthButton from '$lib/components/AuthButton.svelte'

	// Handling authentication section
	import { currentUser } from '$lib/stores/currentUser'

	// Here is the data that is passed to the layout from the layout.server.ts load() function
	export let data

	console.log('layout data', data)

	currentUser.set(data?.userProfile)

	hljs.registerLanguage('xml', xml) // for HTML
	hljs.registerLanguage('css', css)
	hljs.registerLanguage('javascript', javascript)
	hljs.registerLanguage('typescript', typescript)
	storeHighlightJs.set(hljs)

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'
	import { storePopup } from '@skeletonlabs/skeleton'
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })

	let isMenuOpen = false // Toggle for the hamburger menu
</script>

<div class="w-full bg-slate-300 flex items-center justify-between">
	{#if $currentUser}
		<div class="flex items-center space-x-4">
			<!-- Hamburger Icon with different colors for each line -->
			<button class="p-3 text-black focus:outline-none" on:click={() => (isMenuOpen = !isMenuOpen)}>
				<span class="sr-only">Toggle menu</span>
				<div class="space-y-1">
					<div class="w-6 h-1 bg-blue-500"></div> <!-- Top line - blue -->
					<div class="w-6 h-1 bg-cyan-500"></div> <!-- Middle line - cyan -->
					<div class="w-6 h-1 bg-purple-500"></div> <!-- Bottom line - purple -->
				</div>
			</button>

			<!-- Dynamic H1 Text based on Current Route -->
			<h1 class="text-2xl font-bold text-blue-800">
				{#if $page.url.pathname === '/tutorial/introduction'}
				 	Introduction
				{:else if $page.url.pathname === '/tutorial/reactivity'}
					Reactivity
				{:else if $page.url.pathname === '/tutorial/props'}
					Props
				{:else if $page.url.pathname === '/tutorial/logic'}
					Logic
				{:else if $page.url.pathname === '/tutorial/events'}
					Events
				{:else if $page.url.pathname === '/tutorial/bindings'}
					Bindings
				{:else if $page.url.pathname === '/tutorial/lifecycle'}
					Lifecycle
				{:else if $page.url.pathname === '/tutorial/stores'}
					Stores
				{:else if $page.url.pathname === '/tutorial/motions'}
					Motions
				{:else if $page.url.pathname === '/pokemon'}
					Dogs
				{:else if $page.url.pathname === '/chat'}
					Chat
				{:else}
					Hi there!
				{/if}
			</h1>
		</div>

		<!-- Dropdown Menu -->
		{#if isMenuOpen}
			<ul class="absolute top-16 left-0 w-48 bg-cyan-300 rounded-lg shadow-lg z-50">
				{#each [
					{ href: '/tutorial/introduction', label: 'Introduction', emoji: '🏠' },
					{ href: '/tutorial/reactivity', label: 'Reactivity', emoji: '⚡' },
					{ href: '/tutorial/props', label: 'Props', emoji: '✏️' },
					{ href: '/tutorial/logic', label: 'Logic', emoji: '⚙️' },
					{ href: '/tutorial/events', label: 'Events', emoji: '📅' },
					{ href: '/tutorial/bindings', label: 'Bindings', emoji: '🔗' },
					{ href: '/tutorial/lifecycle', label: 'Lifecycle', emoji: '⏰' },
					{ href: '/tutorial/stores', label: 'Stores', emoji: '💾' },
					{ href: '/tutorial/motions', label: 'Motions', emoji: '🏃' },
					{ href: '/pokemon', label: 'Dogs', emoji: '🐶' },
					{ href: '/chat', label: 'Chat', emoji: '💬' }
				] as route}
					<li class="px-4 py-2 flex items-center gap-2 hover:bg-white hover:shadow-md transition-all" on:click={() => (isMenuOpen = false)}>
						<span class="text-xl">{route.emoji}</span>
						<a href={route.href} class="text-black">{route.label}</a>
					</li>
				{/each}
			</ul>
		{/if}
		<ThemeMenu />
	{:else}
		<div class="w-full text-center mt-6 mb-6">
			<div class="border-4 border-gray-800 p-6 rounded-lg bg-gray-100 inline-block">
				<h2 class="text-4xl">🦴 🦴 🦴 🦴 🦴</h2>
				<h2 class="text-2xl text-center text-black mt-5 mb-5">💀 Enjoy my Skeleton Svelte Training App 💀</h2>
				<h2 class="text-4xl">🦴 🦴 🦴 🦴 🦴</h2>
			</div>
		</div>
	{/if}

	<div class="flex">
		<AuthButton />
	</div>
</div>

<slot />



<!-- Gabbe Pond  -->
