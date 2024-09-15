<script>
	import { page } from '$app/stores';
</script>

<div class="container flex flex-col gap-4 text-center">
	<h1 class="text-8xl pt-8"><span>&#128533;</span></h1>
	<h2 class="font-extrabold">No Definitions Found</h2>
	<p class="text-zinc-600">{$page.error?.message}</p>
</div>
