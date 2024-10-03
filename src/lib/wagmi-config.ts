import {
	bsc,
	bscTestnet,
	mainnet,
	polygon,
	polygonAmoy,
	rollux,
	rolluxTestnet,
	sepolia
} from 'viem/chains';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';

export const wagmiConfig = defaultWagmiConfig({
	chains: [
		rollux,
		rolluxTestnet,
		mainnet,
		sepolia,
		polygon,
		polygonAmoy,
		bsc,
		bscTestnet
	],
	projectId: '38e746a414be903d35677dfc2f0b8a7d',
	metadata: {
		name: 'Web3Forge',
		description: 'Web3Forge - Interact with the blockchain',
		url: 'https://web3forge.lucassouza.dev', // origin must match your domain & subdomain.
		icons: ['https://avatars.githubusercontent.com/u/37784886']
	},
	auth: {
		socials: ['google', 'apple', 'github', 'discord', 'x']
	}
});

export const modal = createWeb3Modal({
	wagmiConfig,
	projectId: '38e746a414be903d35677dfc2f0b8a7d',
	allowUnsupportedChain: true,
	chainImages: {
		570: 'https://raw.githubusercontent.com/SYS-Labs/brand-kits/main/rollux/4x/rollux_logo%404x.png'
	},
	enableAnalytics: true,
	enableOnramp: true
});
