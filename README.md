# TheBank_Solidity
The bank is a Solidity contract that transfers native currencies to from the connected address to the designated address, deducting 3% as a charge from every transaction. This percentage charge in wei, remains on the contract and can only be withdrawn by the deployig address of the contract

## How it works
The tokens are transferred from the user account onto the smart contract, the contract deducts the 3% charge and then sends the balance to the user designated account.
The deducted tokens remain on the smart contract and are only withdrawable by the contract's deploying address.
