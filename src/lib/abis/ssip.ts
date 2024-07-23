export const ssipAbi = [
	{ inputs: [], name: 'AccessControlBadConfirmation', type: 'error' },
	{
		inputs: [
			{ internalType: 'address', name: 'account', type: 'address' },
			{ internalType: 'bytes32', name: 'neededRole', type: 'bytes32' }
		],
		name: 'AccessControlUnauthorizedAccount',
		type: 'error'
	},
	{ inputs: [], name: 'EnforcedPause', type: 'error' },
	{ inputs: [], name: 'ExpectedPause', type: 'error' },
	{ inputs: [], name: 'InvalidInitialization', type: 'error' },
	{ inputs: [], name: 'NotInitializing', type: 'error' },
	{ inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'EmergencyWithdraw',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
			{
				indexed: false,
				internalType: 'bool',
				name: 'EmergencyWithdraw',
				type: 'bool'
			}
		],
		name: 'EmergencyWithdrawToggled',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_user',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_receiver',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256'
			}
		],
		name: 'Harvest',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint64',
				name: 'version',
				type: 'uint64'
			}
		],
		name: 'Initialized',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'policyId',
				type: 'uint256'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'payout',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'InsurancePayoutSettled',
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
			{ indexed: false, internalType: 'bool', name: '_killed', type: 'bool' }
		],
		name: 'KillPool',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_staker',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_pool',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_requestAmount',
				type: 'uint256'
			}
		],
		name: 'LeftPool',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_user',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_cancelAmount',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_cancelAmountInUno',
				type: 'uint256'
			}
		],
		name: 'LogCancelWithdrawRequest',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_SSIP',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_rewarder',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_currency',
				type: 'address'
			}
		],
		name: 'LogCreateRewarder',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_SSIP',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_syntheticSSIP',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_lpToken',
				type: 'address'
			}
		],
		name: 'LogCreateSyntheticSSIP',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_user',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_riskPool',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_withdrawLpAmount',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_withdrawUnoAmount',
				type: 'uint256'
			}
		],
		name: 'LogLeaveFromPendingSSIP',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_from',
				type: 'address'
			},
			{ indexed: true, internalType: 'address', name: '_to', type: 'address' },
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256'
			}
		],
		name: 'LogLpTransferInSSIP',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_user',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_migrateTo',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_migratedAmount',
				type: 'uint256'
			}
		],
		name: 'LogMigrate',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_SSIP',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_capitalAgent',
				type: 'address'
			}
		],
		name: 'LogSetCapitalAgent',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_SSIP',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_lockTime',
				type: 'uint256'
			}
		],
		name: 'LogSetLockTime',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_SSIP',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_migrateTo',
				type: 'address'
			}
		],
		name: 'LogSetMigrateTo',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_SSIP',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_minLPCapital',
				type: 'uint256'
			}
		],
		name: 'LogSetMinLPCapital',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_SSIP',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_rewardPerBlock',
				type: 'uint256'
			}
		],
		name: 'LogSetRewardMultiplier',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_SSIP',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: '_role',
				type: 'bytes32'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_account',
				type: 'address'
			}
		],
		name: 'LogSetRole',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_SSIP',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_startTime',
				type: 'uint256'
			}
		],
		name: 'LogSetStakingStartTime',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '_lastRewardBlock',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_lpSupply',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_accUnoPerShare',
				type: 'uint256'
			}
		],
		name: 'LogUpdatePool',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address'
			}
		],
		name: 'Paused',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_user',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_claimAmount',
				type: 'uint256'
			}
		],
		name: 'PolicyClaim',
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
			{ indexed: false, internalType: 'bool', name: '_alive', type: 'bool' }
		],
		name: 'PoolAlived',
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
			{ indexed: false, internalType: 'bool', name: '_fail', type: 'bool' }
		],
		name: 'PoolFailed',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_SSIP',
				type: 'address'
			},
			{ indexed: true, internalType: 'address', name: '_pool', type: 'address' }
		],
		name: 'RiskPoolCreated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'previousAdminRole',
				type: 'bytes32'
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'newAdminRole',
				type: 'bytes32'
			}
		],
		name: 'RoleAdminChanged',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address'
			}
		],
		name: 'RoleGranted',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address'
			}
		],
		name: 'RoleRevoked',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address[]',
				name: '_staker',
				type: 'address[]'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_pool',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256'
			}
		],
		name: 'RollOverReward',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_staker',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_pool',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256'
			}
		],
		name: 'StakedInPool',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address'
			}
		],
		name: 'Unpaused',
		type: 'event'
	},
	{
		inputs: [],
		name: 'ACC_UNO_PRECISION',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'ADMIN_ROLE',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'BOT_ROLE',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'CLAIM_PROCESSOR_ROLE',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'DEFAULT_ADMIN_ROLE',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'GUARDIAN_COUNCIL_ROLE',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'cancelWithdrawRequest',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'capitalAgent',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: '_operator', type: 'address' },
			{ internalType: 'address', name: '_factory', type: 'address' },
			{ internalType: 'address', name: '_currency', type: 'address' }
		],
		name: 'createRewarder',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: '_name', type: 'string' },
			{ internalType: 'string', name: '_symbol', type: 'string' },
			{ internalType: 'address', name: '_factory', type: 'address' },
			{ internalType: 'address', name: '_currency', type: 'address' },
			{ internalType: 'uint256', name: '_rewardMultiplier', type: 'uint256' },
			{ internalType: 'uint256', name: '_SCR', type: 'uint256' }
		],
		name: 'createRiskPool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: '_multiSigWallet', type: 'address' },
			{ internalType: 'address', name: '_factory', type: 'address' }
		],
		name: 'createSyntheticSSIP',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'emergencyWithdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'emergencyWithdrawAllowed',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
		name: 'enterInPool',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
		name: 'getRoleAdmin',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_to', type: 'address' }],
		name: 'getStakedAmountPerUser',
		outputs: [
			{ internalType: 'uint256', name: 'unoAmount', type: 'uint256' },
			{ internalType: 'uint256', name: 'lpAmount', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getTotalWithdrawPendingAmount',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
		name: 'getWithdrawRequestPerUser',
		outputs: [
			{ internalType: 'uint256', name: 'pendingAmount', type: 'uint256' },
			{ internalType: 'uint256', name: 'pendingAmountInUno', type: 'uint256' },
			{ internalType: 'uint256', name: 'originUnoAmount', type: 'uint256' },
			{ internalType: 'uint256', name: 'requestTime', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'bytes32', name: 'role', type: 'bytes32' },
			{ internalType: 'address', name: 'account', type: 'address' }
		],
		name: 'grantRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_to', type: 'address' }],
		name: 'harvest',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'bytes32', name: 'role', type: 'bytes32' },
			{ internalType: 'address', name: 'account', type: 'address' }
		],
		name: 'hasRole',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: '_capitalAgent', type: 'address' },
			{ internalType: 'address', name: '_multiSigWallet', type: 'address' },
			{ internalType: 'address', name: '_governance', type: 'address' }
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'killPool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'killed',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
		name: 'leaveFromPending',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
		name: 'leaveFromPoolInPending',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'lockTime',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: '_from', type: 'address' },
			{ internalType: 'address', name: '_to', type: 'address' },
			{ internalType: 'uint256', name: '_amount', type: 'uint256' }
		],
		name: 'lpTransfer',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'migrate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'migrateTo',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'pausePool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'paused',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_to', type: 'address' }],
		name: 'pendingUno',
		outputs: [{ internalType: 'uint256', name: 'pending', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'policies',
		outputs: [
			{ internalType: 'uint256', name: 'insuranceAmount', type: 'uint256' },
			{ internalType: 'address', name: 'payoutAddress', type: 'address' },
			{ internalType: 'bool', name: 'settled', type: 'bool' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'poolInfo',
		outputs: [
			{ internalType: 'uint256', name: 'lastRewardBlock', type: 'uint256' },
			{ internalType: 'uint256', name: 'accUnoPerShare', type: 'uint256' },
			{
				internalType: 'uint256',
				name: 'unoMultiplierPerBlock',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'bytes32', name: 'role', type: 'bytes32' },
			{ internalType: 'address', name: 'callerConfirmation', type: 'address' }
		],
		name: 'renounceRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'revivePool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'bytes32', name: 'role', type: 'bytes32' },
			{ internalType: 'address', name: 'account', type: 'address' }
		],
		name: 'revokeRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'rewarder',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'riskPool',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'bytes32', name: '', type: 'bytes32' },
			{ internalType: 'address', name: '', type: 'address' }
		],
		name: 'roleLockTime',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address[]', name: '_to', type: 'address[]' }],
		name: 'rollOverReward',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: '_capitalAgent', type: 'address' }
		],
		name: 'setCapitalAgent',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_lockTime', type: 'uint256' }],
		name: 'setLockTime',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_migrateTo', type: 'address' }],
		name: 'setMigrateTo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_minLPCapital', type: 'uint256' }
		],
		name: 'setMinLPCapital',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_rewardMultiplier', type: 'uint256' }
		],
		name: 'setRewardMultiplier',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'bytes32', name: '_role', type: 'bytes32' },
			{ internalType: 'address', name: '_account', type: 'address' }
		],
		name: 'setRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_startTime', type: 'uint256' }],
		name: 'setStakingStartTime',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_policyId', type: 'uint256' },
			{ internalType: 'address', name: '_payout', type: 'address' },
			{ internalType: 'uint256', name: '_amount', type: 'uint256' }
		],
		name: 'settlePayout',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'stakingStartTime',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'syntheticSSIP',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'toggleEmergencyWithdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'toggleRollOver',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'unpausePool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'updatePool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'userInfo',
		outputs: [
			{ internalType: 'uint256', name: 'lastWithdrawTime', type: 'uint256' },
			{ internalType: 'uint256', name: 'rewardDebt', type: 'uint256' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'bool', name: 'isNotRollOver', type: 'bool' }
		],
		stateMutability: 'view',
		type: 'function'
	}
] as const;
