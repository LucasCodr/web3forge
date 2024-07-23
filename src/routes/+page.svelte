<script lang="ts">
	import { account, contractCalls, contracts, SpecialLog } from '$lib/store/state';
	import { wagmiConfig } from '$lib/wagmi-config';
	import { reconnect, switchChain } from '@wagmi/core';
	import { logCall } from '$lib/store/actions';
	import { onMount } from 'svelte';
	import ReadFunction from '../components/ReadFunction.svelte';
	import 'overlayscrollbars/overlayscrollbars.css';
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import { getAbis } from '$lib/db';
	import { Edit, Plus } from 'lucide-svelte';
	import ContractInput from '../components/ContractInput.svelte';
	import NewContractModal from '../components/NewContractModal.svelte';
	import ScrollableDiv from '../components/ScrollableDiv.svelte';

	let contract: `0x${string}`;
	let search: string;
	let abi = 'ERC-20';
	let isEditing = false;

	function toggleAbiModal() {
		const modal = $page.state.abiModal;

		if (modal) {
			pushState('', {
				abiModal: false
			});
		} else {
			pushState('', {
				abiModal: true
			});
		}
	}

	$: {
		if ($account) {
			logCall({
				log: `Connected as ${$account}`,
				logClass: 'text-success',
				logPrefix: '🎉'
			});
		}
	}

	onMount(async () => {
		if ($account) {
			return;
		}

		logCall({
			log: 'Connecting wallet...',
			logClass: 'text-info',
			logPrefix: '🕒'
		});

		const connection = await reconnect(wagmiConfig);

		if (!connection.length) {
			logCall({
				log: 'Please, connect your wallet.',
				logClass: 'text-error',
				logPrefix: '💀'
			});
		}

		const persistedAbis = await getAbis();

		for (const abi of persistedAbis) {
			$contracts[abi.name] = {
				abi: abi.abi,
				chains: abi.chains
			};
		}
	});
</script>

{#if $page.state.abiModal}
	<NewContractModal
		contract={isEditing
			? {
					name: abi,
					abi: JSON.stringify($contracts[abi].abi),
					chains: $contracts[abi].chains
				}
			: null}
		onClose={() => {
			toggleAbiModal();
			isEditing = false;
		}}
	/>
{/if}

<div class="relative grid grid-cols-2">
	<div class="p-4">
		<div class="mb-4">
			<div class="flex space-x-4">
				<ContractInput bind:value={contract} />

				<select class="select select-bordered mb-4 w-full" bind:value={abi}>
					<option disabled>Select contract</option>
					{#each Object.keys($contracts) as contract}
						<option value={contract}>{contract}</option>
					{/each}
				</select>

				<button
					class="btn btn-outline btn-primary"
					type="button"
					on:click={toggleAbiModal}
				>
					<Plus size={16} />
				</button>

				<button
					class="btn btn-outline btn-accent"
					type="button"
					on:click={() => {
						isEditing = true;
						toggleAbiModal();
					}}
				>
					<Edit size={16} />
				</button>
			</div>

			<input
				type="text"
				class="input input-bordered w-full"
				placeholder="Search function..."
				bind:value={search}
			/>
		</div>

		<div class="flex w-full flex-col space-y-4 pb-12">
			{#each $contracts[abi].abi.filter((fn) => (search ? fn?.name
				?.toLowerCase()
				?.includes(search.toLowerCase()) : true)) as method}
				{#if method.type === 'function'}
					<div class="collapse collapse-arrow border border-neutral">
						<input type="radio" name="my-accordion-2" />
						<div class="collapse-title text-xl font-medium">
							{method.name} - {method.stateMutability}

							{#if method.outputs?.[0]?.type}
								({method.outputs[0].type})
							{/if}
						</div>
						<div class="collapse-content">
							<ReadFunction abiFunction={method} contractAddress={contract} />
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>

	<div
		class="sticky top-0 flex flex-col justify-between border-l border-neutral"
	>
		<div class="flex h-full flex-col">
			<ScrollableDiv>
				{#each $contractCalls as call}
					<span
						class={`${call.logClass} border-b border-neutral py-1 font-mono`}
					>
						{#if call.code === SpecialLog.SWITCH_NETWORK}
							{call.log} - Do you want to
							<button
								class="btn btn-outline btn-warning btn-xs"
								on:click={() => {
									if (call?.meta?.chainId) {
										void switchChain(wagmiConfig, {
											chainId: +call.meta.chainId
										});
									}
								}}
							>
								switch network?
							</button>
						{:else}
							{call.log}
						{/if}
					</span>
				{/each}
			</ScrollableDiv>
		</div>
	</div>
	<!--<div class="mockup-code h-fit sticky m-4 top-4">-->
	<!--	<pre data-prefix="🙏" class="px-5"><code>Buenos dias!</code></pre>-->
	<!--	{#each $contractCalls as call}-->
	<!--		<pre-->
	<!--			transition:blur|global={{ amount: 10 }}-->
	<!--			data-prefix={call.logPrefix}-->
	<!--			class={'px-5 ' + call.logClass}><code>{call.log}</code></pre>-->
	<!--	{/each}-->

	<!--	{#if !$account}-->
	<!--		<pre data-prefix="💀" class="text-info px-5"><code-->
	<!--				>Please, <button on:click={connectAccount} class="btn btn-xs btn-accent">Connect</button-->
	<!--				> your wallet. </code></pre>-->
	<!--	{/if}-->
	<!--</div>-->
</div>
