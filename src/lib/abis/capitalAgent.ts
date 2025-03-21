export const capitalAgentABI = [
	{
		inputs: [
			{ internalType: 'address', name: '_exchangeAgent', type: 'address' },
			{ internalType: 'address', name: '_UNO_TOKEN', type: 'address' },
			{ internalType: 'address', name: '_USDC_TOKEN', type: 'address' },
			{ internalType: 'address', name: '_multiSigWallet', type: 'address' },
			{ internalType: 'address', name: '_operator', type: 'address' }
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_ssip',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_currency',
				type: 'address'
			},
			{ indexed: false, internalType: 'uint256', name: '_scr', type: 'uint256' }
		],
		name: 'LogAddPool',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: '_pool', type: 'address' }
		],
		name: 'LogAddPoolWhiteList',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_policy',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_policyTokenId',
				type: 'uint256'
			}
		],
		name: 'LogMarkToClaimPolicy',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_salesPolicy',
				type: 'address'
			}
		],
		name: 'LogRemovePolicy',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: '_ssip', type: 'address' }
		],
		name: 'LogRemovePool',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: '_pool', type: 'address' }
		],
		name: 'LogRemovePoolWhiteList',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_owner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_capitalAgent',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_exchangeAgent',
				type: 'address'
			}
		],
		name: 'LogSetExchangeAgent',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_owner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_capitalAgent',
				type: 'address'
			},
			{ indexed: false, internalType: 'uint256', name: '_MCR', type: 'uint256' }
		],
		name: 'LogSetMCR',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_owner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_capitalAgent',
				type: 'address'
			},
			{ indexed: false, internalType: 'uint256', name: '_MLR', type: 'uint256' }
		],
		name: 'LogSetMLR',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_operator',
				type: 'address'
			}
		],
		name: 'LogSetOperator',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_salesPolicy',
				type: 'address'
			}
		],
		name: 'LogSetPolicy',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_owner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_capitalAgent',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_pool',
				type: 'address'
			},
			{ indexed: false, internalType: 'uint256', name: '_SCR', type: 'uint256' }
		],
		name: 'LogSetSCR',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_factory',
				type: 'address'
			}
		],
		name: 'LogSetSalesPolicyFactory',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_policy',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_policyUtilized',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_totalUtilizedAmount',
				type: 'uint256'
			}
		],
		name: 'LogUpdatePolicyCoverage',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_policy',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_policyTokenId',
				type: 'uint256'
			}
		],
		name: 'LogUpdatePolicyExpired',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_ssip',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_poolCapital',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_totalCapital',
				type: 'uint256'
			}
		],
		name: 'LogUpdatePoolCapital',
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
		inputs: [],
		name: 'CALC_PRECISION',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'MCR',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'MLR',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_withdrawAmount', type: 'uint256' }
		],
		name: 'SSIPPolicyCaim',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_stakingAmount', type: 'uint256' }
		],
		name: 'SSIPStaking',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_withdrawAmount', type: 'uint256' }
		],
		name: 'SSIPWithdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'UNO_TOKEN',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'USDC_TOKEN',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: '_ssip', type: 'address' },
			{ internalType: 'address', name: '_currency', type: 'address' },
			{ internalType: 'uint256', name: '_scr', type: 'uint256' }
		],
		name: 'addPool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: '_ssip', type: 'address' },
			{ internalType: 'address', name: '_currency', type: 'address' },
			{ internalType: 'uint256', name: '_scr', type: 'uint256' }
		],
		name: 'addPoolByAdmin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_pool', type: 'address' }],
		name: 'addPoolWhiteList',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: '_pool', type: 'address' },
			{ internalType: 'uint256', name: '_withdrawAmount', type: 'uint256' }
		],
		name: 'checkCapitalByMCR',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_coverageAmount', type: 'uint256' }
		],
		name: 'checkCoverageByMLR',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'exchangeAgent',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_policyId', type: 'uint256' }],
		name: 'markToClaimPolicy',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'operator',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
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
		inputs: [],
		name: 'policyInfo',
		outputs: [
			{ internalType: 'address', name: 'policy', type: 'address' },
			{ internalType: 'uint256', name: 'utilizedAmount', type: 'uint256' },
			{ internalType: 'bool', name: 'exist', type: 'bool' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_coverageAmount', type: 'uint256' }
		],
		name: 'policySale',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'poolInfo',
		outputs: [
			{ internalType: 'uint256', name: 'totalCapital', type: 'uint256' },
			{ internalType: 'uint256', name: 'SCR', type: 'uint256' },
			{ internalType: 'address', name: 'currency', type: 'address' },
			{ internalType: 'bool', name: 'exist', type: 'bool' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'poolWhiteList',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'removePolicy',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_ssip', type: 'address' }],
		name: 'removePool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_pool', type: 'address' }],
		name: 'removePoolWhiteList',
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
		inputs: [],
		name: 'salesPolicyFactory',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: '_exchangeAgent', type: 'address' }
		],
		name: 'setExchangeAgent',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_MCR', type: 'uint256' }],
		name: 'setMCR',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_MLR', type: 'uint256' }],
		name: 'setMLR',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_operator', type: 'address' }],
		name: 'setOperator',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_policy', type: 'address' }],
		name: 'setPolicy',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_policy', type: 'address' }],
		name: 'setPolicyByAdmin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_SCR', type: 'uint256' },
			{ internalType: 'address', name: '_pool', type: 'address' }
		],
		name: 'setSCR',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_factory', type: 'address' }],
		name: 'setSalesPolicyFactory',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'totalCapitalStaked',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'totalUtilizedAmount',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
		inputs: [{ internalType: 'uint256', name: '_policyId', type: 'uint256' }],
		name: 'updatePolicyStatus',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const;
