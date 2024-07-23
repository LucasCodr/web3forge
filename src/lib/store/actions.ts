import {
	disconnect,
	getWalletClient,
	reconnect,
	watchAccount
} from '@wagmi/core';
import { modal, wagmiConfig } from '$lib/wagmi-config';
import {
	account,
	chainId,
	type Contract,
	contractCalls,
	contracts,
	type Log
} from '$lib/store/state';

watchAccount(wagmiConfig, {
	onChange(client) {
		account.set(client.address!);
		chainId.set(client.chainId!);
	}
});

export async function getProvider() {
	return getWalletClient(wagmiConfig);
}

export async function connectAccount() {
	reconnect(wagmiConfig);

	modal.open();
}

export async function disconnectAccount() {
	await disconnect(wagmiConfig);

	account.set(null);
}

export function logCall(log: Log) {
	contractCalls.update((calls) => {
		return [...calls, log];
	});
}

export function addContract(name: string, { chains, abi }: Contract) {
	contracts.update((contracts) => {
		contracts[name] = { chains, abi };

		return contracts;
	});
}
