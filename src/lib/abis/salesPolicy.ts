[
	{
		inputs: [{ internalType: 'address', name: '_luxyToken', type: 'address' }],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
		name: 'AddressEmptyCode',
		type: 'error'
	},
	{
		inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
		name: 'AddressInsufficientBalance',
		type: 'error'
	},
	{ inputs: [], name: 'FailedInnerCall', type: 'error' },
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address'
			}
		],
		name: 'OwnableInvalidOwner',
		type: 'error'
	},
	{
		inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
		name: 'OwnableUnauthorizedAccount',
		type: 'error'
	},
	{ inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address'
			}
		],
		name: 'SafeERC20FailedOperation',
		type: 'error'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'credits',
				type: 'uint256'
			}
		],
		name: 'BoughtCredits',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenRequirement',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'credits',
				type: 'uint256'
			}
		],
		name: 'TierAdded',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'index',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenRequirement',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'credits',
				type: 'uint256'
			}
		],
		name: 'TierUpdated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'accepted',
				type: 'bool'
			}
		],
		name: 'TokenAccepted',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'TokensWithdrawn',
		type: 'event'
	},
	{
		inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
		name: 'acceptToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'acceptedTokens',
		outputs: [
			{ internalType: 'bool', name: 'accepted', type: 'bool' },
			{
				internalType: 'uint8',
				name: 'decimals',
				type: 'uint8'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenRequirement',
				type: 'uint256'
			},
			{ internalType: 'uint256', name: 'credits', type: 'uint256' }
		],
		name: 'addTier',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{
				internalType: 'address',
				name: 'token',
				type: 'address'
			}
		],
		name: 'buyCredits',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getAllTiers',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'tokenRequirement',
						type: 'uint256'
					},
					{ internalType: 'uint256', name: 'credits', type: 'uint256' }
				],
				internalType: 'struct LuxyVaultV2.Tier[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'luxyToken',
		outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
		name: 'removeToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'tiers',
		outputs: [
			{ internalType: 'uint256', name: 'tokenRequirement', type: 'uint256' },
			{
				internalType: 'uint256',
				name: 'credits',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256', name: 'index', type: 'uint256' },
			{
				internalType: 'uint256',
				name: 'tokenRequirement',
				type: 'uint256'
			},
			{ internalType: 'uint256', name: 'credits', type: 'uint256' }
		],
		name: 'updateTier',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'userDeposits',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'token', type: 'address' },
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'withdrawTokens',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];
