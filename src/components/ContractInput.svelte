<script lang="ts">
	import {
		chainId,
		type Contract,
		contracts,
		SpecialLog
	} from '$lib/store/state';
	import { logCall } from '$lib/store/actions';

	export let value: string = '';

	let selectedContract: Contract | null = null;

	$: {
		if (value) {
			const chain = selectedContract?.chains.find((c) => c.address === value);

			if (chain?.chainId && chain.chainId !== $chainId) {
				logCall({
					log: `The selected contract is set to chain ${chain?.chainId}.`,
					logClass: 'text-warning',
					logPrefix: '🔄',
					code: SpecialLog.SWITCH_NETWORK,
					meta: {
						chainId: `${chain?.chainId}`
					}
				});
			}
		}
	}
</script>

<div class="dropdown w-full">
	<div tabindex="0" role="button" class="w-full">
		<input
			class="input input-bordered w-full"
			placeholder="Contract"
			type="text"
			autocomplete="off"
			bind:value
		/>
	</div>

	<ul
		tabindex="0"
		role="menu"
		class="menu dropdown-content z-10 w-full rounded-box border border-neutral bg-base-300 p-2 shadow"
	>
		{#each Object.keys($contracts) as type}
			{#if $contracts[type].chains.length}
				<li class="menu-title">{type}</li>
			{/if}

			{#each $contracts[type].chains as contract}
				<li class="menu-item">
					<button
						on:click|preventDefault={() => {
							value = contract.address;
							selectedContract = $contracts[type];
						}}
					>
						{contract.name}
					</button>
				</li>
			{/each}
		{/each}
	</ul>
</div>
