<script lang="ts">
	// Supports weights 200-900
	import '@fontsource-variable/inconsolata';
	// Supports weights 100-900
	import '@fontsource-variable/inter';
	// Supports weights 400-700
	import '@fontsource-variable/lora';

	import '../app.css';

	import Moon from '$lib/components/Moon.svelte';
	import Lightswitch from '$lib/components/Lightswitch.svelte';
	import Fontselector from '$lib/components/Fontselector.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import TextFade from '$lib/components/TextFade.svelte';
	

	let word = '';
	let empty = false;
</script>

<svelte:head>
	<title>Lexi Hub</title>
	<meta name="description" content="Your friendly English Language dictionary." />

	<style>
		body {
			font-family:
				system-ui,
				-apple-system;
		}
		body:has(option[value='sans']:checked) {
			font-family: 'Inter Variable', sans-serif;
		}
		body:has(option[value='serif']:checked) {
			font-family: 'Lora Variable', serif;
		}
		body:has(option[value='mono']:checked) {
			font-family: 'Inconsolata Variable', monospace;
		}
	</style>

	<ModeWatcher />
</svelte:head>
<nav class="navbar flex md:px-36">
	<div class="navbar-start">
		<enhanced:img src="/src/lib/assets/images/logo.svg" alt="dictionary-logo" />
	</div>
	<div class="flex navbar-end gap-y-4">
		<Fontselector />
	</div>
	<hr class="h-6 w-[1px] bg-zinc-300 dark:bg-zinc-100" />
	<div class="px-2">
		<Lightswitch />
	</div>

	<Moon />
</nav>
<div class="text-center pt-10">
	<TextFade />
</div>
<section>
	<div class="flex justify-center items-center pt-32">
		<form
			on:submit={(e) => {
				if (!word) {
					e.preventDefault();
					empty = true;
				}
			}}
			action="/{word}"
			class="relative p-3 w-full max-w-lg text-base"
		>
			<!-- Use CSS for form validation -->
			<label for="search" class="text-xs text-gray-600">Type your word</label>
			<input
				id="search"
				name="search"
				class="input input-bordered w-full rounded-lg"
				autocomplete="off"
				required
				bind:value={word}
			/>

			<button type="submit" class="absolute right-3 top-12 w-6 h-6">
				<enhanced:img src="/src/lib/assets/images/icon-search.svg" alt="icon-search" />
			</button>
		</form>
	</div>
</section>

<slot />
