<script lang="ts">
	import { FileDown, FileUp } from 'lucide-svelte';
	import '../app.css';
	import { contracts } from '$lib/store/state';

	let fileInput: HTMLInputElement;

	function exportContracts() {
		const data = JSON.stringify($contracts, null, 2);
		const blob = new Blob([data], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'web3forge_contracts.json';
		a.click();
		URL.revokeObjectURL(url);
	}

	function importContracts() {
		const reader = new FileReader();

		reader.onload = () => {
			const data = JSON.parse(reader.result as string);
			contracts.set(data);
		};

		reader.readAsText(fileInput.files![0]);
	}
</script>

<svelte:head>
	<title>Web3Forge</title>
	<meta
		name="description"
		content="Web3Forge is a tool for developers to interact with smart contracts on the blockchain."
	/>
	<meta
		name="keywords"
		content="web3, blockchain, smart contracts, ethereum, solidity, web3js, ethers.js, truffle, hardhat"
	/>
	<meta name="author" content="Web3Forge" />
</svelte:head>

<div class="flex flex-col">
	<nav
		class="sticky top-0 z-10 flex items-center justify-between border-b border-neutral bg-black p-3"
	>
		<span class="flex items-center text-xl font-bold">
			<img src="/logo-white-256x256.png" alt="Logo" class="max-h-10" />
			Web3Forge
		</span>

		<div class="flex items-center gap-2">
			<w3m-button size="sm" />

			<div
				class="tooltip tooltip-left tooltip-primary"
				data-tip="Export contracts"
			>
				<button
					class="btn btn-square btn-primary btn-sm"
					on:click={exportContracts}
				>
					<FileUp size={18} />
				</button>
			</div>

			<div
				class="tooltip tooltip-left tooltip-primary"
				data-tip="Import contracts"
			>
				<button
					class="btn btn-square btn-primary btn-sm"
					on:click={() => fileInput.click()}
				>
					<FileDown size={18} />
				</button>
			</div>

			<input
				type="file"
				class="hidden"
				name="import"
				bind:this={fileInput}
				accept=".json"
				on:change={importContracts}
			/>
		</div>
	</nav>

	<slot />
</div>
