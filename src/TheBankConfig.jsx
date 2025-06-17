export const TheBank_Address = '0x55fe35AE8B22d63Cb079f884a520aC68Ea450caa'

export const TheBank_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "AmountReceived",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "Status",
				"type": "bool"
			}
		],
		"name": "Receive",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "AmountSent",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "Success",
				"type": "bool"
			}
		],
		"name": "Sent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "OwnerFunction",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Received",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "recepient",
				"type": "address"
			}
		],
		"name": "receiveCelo",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]


