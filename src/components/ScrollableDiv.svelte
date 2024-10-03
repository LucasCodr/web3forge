<script lang="ts">
	import { contractCalls } from '$lib/store/state';

	let div: HTMLDivElement;

	$: {
		if ($contractCalls.length) {
			setTimeout(() => {
				div.scrollTo({
					top: div.scrollHeight,
					behavior: 'smooth'
				});
			}, 50);
		}
	}
</script>

<div
	bind:this={div}
	class="sticky top-20 flex max-h-[calc(100vh-80px)] flex-1 flex-col overflow-scroll"
>
	<slot />
</div>
