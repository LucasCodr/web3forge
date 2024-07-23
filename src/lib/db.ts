import Dexie, { type EntityTable } from 'dexie';
import type { Abi } from 'abitype';
import type { Contract } from '$lib/store/state';

export type AppAbi = {
	id: number;
	name: string;
	abi: Abi;
	chains: Contract['chains'];
};

const db = new Dexie('abis_db') as Dexie & {
	abis: EntityTable<AppAbi, 'id'>;
};

db.version(1).stores({
	abis: '++id, name, abi, chains'
});

export function persistAbi(name: string, { abi, chains }: Contract) {
	return db.abis.add({ name, abi, chains });
}

export function getAbis() {
	return db.abis.toArray();
}
