<script>
	import '../app.css';
</script>


<div class="flex flex-col">
	<nav class="flex items-center justify-between border-b border-neutral p-3">
		<span class="flex items-center text-xl font-bold">
			<img
				src="/logo-white-256x256.png"
				alt="Logo"
				class="max-h-10"
			/>
			Web3Forge
		</span>

		<w3m-button size="sm" />
	</nav>

	<slot />
</div>
