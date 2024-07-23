<script lang="ts">
	import type { AbiFunction } from 'abitype';
	import {
		deserialize,
		readContract,
		type ReadContractErrorType,
		serialize,
		writeContract,
		waitForTransactionReceipt
	} from '@wagmi/core';
	import { wagmiConfig } from '$lib/wagmi-config';
	import { logCall } from '$lib/store/actions';
	import consola from 'consola';
	import { account, contractsByAddress } from '$lib/store/state';

	export let abiFunction: AbiFunction;
	export let contractAddress: `0x${string}`;

	let loading = false;
	let response: never;
	let args: never[] = [];

	async function call() {
		logCall({
			logPrefix: '👀',
			logClass: 'text-warning',
			log: `${abiFunction.name}(${args.join(', ')}) at ${$contractsByAddress?.[contractAddress] ? $contractsByAddress?.[contractAddress].name : contractAddress}`
		});

		const replacer = (key, value) =>
			typeof value === 'bigint' ? value.toString() : value;

		try {
			loading = true;

			let data;

			if (abiFunction.stateMutability === 'view') {
				data = await readContract(wagmiConfig, {
					functionName: abiFunction.name,
					address: contractAddress,
					abi: [abiFunction],
					args
				});
			} else {
				const tx = await writeContract(wagmiConfig, {
					functionName: abiFunction.name,
					address: contractAddress,
					abi: [abiFunction],
					args
				});

				logCall({
					logPrefix: '🚀',
					logClass: 'text-info',
					log: `Transaction sent: ${tx}. Waiting for confirmation...`
				});

				const data = await waitForTransactionReceipt(wagmiConfig, {
					hash: tx,
					onReplaced: (newHash) => {
						logCall({
							logPrefix: '🔄',
							logClass: 'text-info',
							log: `Transaction replaced: ${newHash}`
						});
					}
				});

				return logCall({
					logPrefix: '🎉',
					logClass: 'text-success',
					log: `Transaction confirmed: ${JSON.stringify(
						deserialize(serialize(data), replacer),
						null,
						2
					)}`
				});
			}

			switch (typeof data) {
				case 'string':
					response = data;
					break;
				case 'object':
					response = JSON.stringify(
						deserialize(serialize(data), replacer),
						null,
						2
					);
					break;
				default:
					response = data;
					break;
			}

			logCall({
				logPrefix: '😍',
				logClass: 'text-success',
				log: `Result: ${response} ${typeof data}`
			});
		} catch (e) {
			const error = e as ReadContractErrorType;

			consola.error(error);

			logCall({
				logPrefix: '🚨',
				logClass: 'text-error',
				log: error.shortMessage
			});
		} finally {
			loading = false;
		}
	}
</script>

<div class="join join-vertical w-full">
	{#each abiFunction.inputs as input, index}
		<input
			class="input join-item input-bordered"
			placeholder={`${input.name} (${input.type})`}
			bind:value={args[index]}
		/>
	{/each}
</div>
<button
	on:click={call}
	class="btn btn-neutral mt-2 w-full"
	disabled={loading || !$account}
>
	{#if loading}
		<span class="loading loading-spinner"></span>
	{/if}
	Call
</button>
