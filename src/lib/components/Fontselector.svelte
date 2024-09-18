<script>
	import Arrowdown from './Arrowdown.svelte';
	import { font } from '$lib/stores';

	// const optionList = [
	// 	{value: 'Inter',label: 'sans-serif'},
	// 	{value: 'Lora', label: 'sans'},
	// 	{value: 'Inconsolata', label: 'mono'}
	// ];
</script>

<!-- <select class="outline-none border-none bg-inherit">
	<option value="sans">Sans</option>
	<option value="serif">Serif</option>
	<option value="mono">Mono</option>
</select> -->
<select class="select outline-none border-none">
	<option disabled selected>Pick Font</option>
	<option value="sans">Sans</option>
	<option value="serif">Serif</option>
	<option value="mono">Mono</option>
</select>

<style>
	option:focus {
		outline-color: transparent;
	}
</style>
