<script lang="ts">
	// Supports weights 200-900
	import '@fontsource-variable/inconsolata';
	// Supports weights 100-900
	import '@fontsource-variable/inter';
	// Supports weights 400-700
	import '@fontsource-variable/lora';
	import '../app.css';

	import Moon from '$lib/components/Moon.svelte';
	// import { ModeWatcher } from 'mode-watcher';
	// import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import LightSwitch from '$lib/components/LightSwitch.svelte';

	let word = '';
	let empty = false;
</script>

<!-- <svelte:head><ModeWatcher /></svelte:head> -->
<nav class="navbar flex md:px-36">
	<div class="navbar-start">
		<enhanced:img src="/src/lib/assets/images/logo.svg" alt="dictionary-logo" />
	</div>
	<div class="flex navbar-end gap-y-4">
		<div class="menu menu-horizontal">
			<label for="font-selector"></label>
			<select class="outline-none border-none bg-inherit">
				<option value="sans">Sans</option>
				<option value="serif">Serif</option>
				<option value="mono">Mono</option>
			</select>
		</div>
	</div>
	<hr class="h-6 w-[1px] bg-zinc-300 dark:bg-zinc-100" />

	<div class="px-2">
		<LightSwitch />
	</div>

	<Moon />
</nav>

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
			<input
				id="search"
				class="input input-bordered w-full rounded-lg"
				autocomplete="off"
				required
				bind:value={word}
			/>

			<button type="submit" class="absolute right-3 top-6 w-6 h-6">
				<enhanced:img src="/src/lib/assets/images/icon-search.svg" alt="icon-search" />
			</button>
		</form>
	</div>
</section>

<slot />
