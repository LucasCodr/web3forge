<script lang="ts">
	import { onMount } from 'svelte';

	let element: HTMLDivElement;

	onMount(() => {
		const observer = new ResizeObserver((entries) => {
			for (let entry of entries) {
				const { width, height } = entry.contentRect;
				console.log(width, height);
			}
		});

		observer.observe(element);
	});
</script>

<div bind:this={element} class="flex flex-1 flex-col p-4">
	<slot />
</div>
