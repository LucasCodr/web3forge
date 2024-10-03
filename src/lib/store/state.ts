import { derived, writable } from 'svelte/store';
import { type Abi, erc20Abi, erc721Abi } from 'viem';

export enum SpecialLog {
	SWITCH_NETWORK
}

// Base interface for log entries without the code property
interface BaseLog {
	log: string;
	logClass: string;
}

// Extension for log entries that include a code
interface LogWithCodeAndMeta extends BaseLog {
	code: SpecialLog;
	meta: Record<string, string>;
}

// Conditional type that requires meta if code is provided
export type Log = BaseLog &
	(Partial<LogWithCodeAndMeta> extends LogWithCodeAndMeta
		? never
		: Partial<LogWithCodeAndMeta>);

export type Contract = {
	abi: Abi;
	chains: Array<{ address: string; chainId: number; name: string }>;
};

export const contractCalls = writable<Log[]>([]);

export const account = writable<`0x${string}` | null>(null);

export const chainId = writable<number | null>(null);

export const contracts = writable<Record<string, Contract>>({
	'ERC-20': {
		abi: erc20Abi as Abi,
		chains: []
	},
	'ERC-721': {
		abi: erc721Abi,
		chains: []
	}
});

export const contractsByAddress = derived(contracts, ($contracts) =>
	Object.values($contracts)
		.map((c) => c.chains)
		.flat()
		.reduce(
			(hash, current) => {
				hash[current.address] = current;

				return hash;
			},
			{} as Record<string, { address: string; chainId: number; name: string }>
		)
);
