<script lang="ts">
	import type { Abi } from 'abitype';
	import { persistAbi } from '$lib/db.js';
	import { addContract } from '$lib/store/actions';
	import { Minus, Plus } from 'lucide-svelte';
	import { getChains } from '@wagmi/core';
	import { wagmiConfig } from '$lib/wagmi-config';
	import type { Contract } from '$lib/store/state';

	export let contract: { name: string, abi: string, chains: Contract['chains'] } | null = null;
	export let onClose: () => void;

	let newAbi = contract?.abi || '';
	let newAbiName = contract?.name || '';
	let chains = contract?.chains || [
		{
			address: '',
			chainId: 1,
			name: ''
		}
	];

	const appChains = getChains(wagmiConfig);

	async function addAbi() {
		const obj = JSON.parse(newAbi) as Abi;

		addContract(newAbiName, {
			abi: obj,
			chains
		});

		await persistAbi(newAbiName, { abi: obj, chains });

		onClose();
	}
</script>

<dialog
	class="modal modal-open"
	id="my_modal_1"
>
	<div class="modal-box">
		<h3 class="text-lg font-bold">New ABI</h3>
		<div class="modal-action">
			<form
				class="space-y-4"
				method="dialog"
			>
				<input
					bind:value={newAbiName}
					class="input input-bordered w-full"
					placeholder="Contract name"
					type="text"
				/>

				<textarea
					bind:value={newAbi}
					class="textarea textarea-bordered w-full"
					placeholder="ABI"
				></textarea>

				<div class="space-y-4">
					<h3 class="text-lg font-bold">Addresses</h3>
					<p class="text-xs text-gray-300">
						You can add multiple addresses for the same contract on different
						chains for quick access. You'll still be able to enter any address
						you want when calling functions.
					</p>
					{#each chains as chain}
						<div class="flex gap-2 flex-col border-b border-neutral pb-4">
							<input
								placeholder="Contract address"
								type="text"
								class="input input-bordered w-full"
								bind:value={chain.address}
							/>

							<div class="flex gap-2">
								<input
									type="text"
									class="input input-bordered w-full"
									placeholder="Name"
									bind:value={chain.name}
								/>

								<select
									class="select select-bordered w-full"
									bind:value={chain.chainId}
								>
									<option disabled selected>Select default chain</option>
									{#each appChains as appChain}
										<option value={appChain.id}>{appChain.name}</option>
									{/each}
								</select>
							</div>
						</div>
					{/each}

					<div class="flex justify-end gap-2">
						<button
							class="btn btn-md btn-outline btn-success"
							on:click={() => {
								chains = [
									...chains,
									{
										address: '',
										chainId: 1,
										name: ''
									}
								];
							}}
						>
							<Plus size={16} />
						</button>

						<button
							class="btn btn-md btn-outline btn-error"
							disabled={chains.length < 1}
							on:click={() => (chains = chains.slice(0, -1))}
						>
							<Minus size={16} />
						</button>
					</div>
				</div>

				<button
					class="btn btn-md btn-outline btn-error mr-2"
					on:click={onClose}
				>
					Close
				</button>

				<button
					class="btn btn-md btn-primary"
					on:click={addAbi}
				>
					Add contract
				</button>
			</form>
		</div>
	</div>
</dialog>
