// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

// User send Celo tokens to the contract
//Contract deducts a percentage off the sent tokens
//Sends the balance to the recepient

// User...
//User to enter the recepient's address
//Amount they are sending the recepient
//

// Contract..
//Deduct the percentage
//Send the balance to the reepient


// function whtidrawing the tokens
// fuction calculating the profits
// function receivingCelo
// function sendingCelo

contract TheBank {

    uint256 public Received;
    address payable Owner;

    constructor(){
        Owner = payable(msg.sender);
    }

    function OwnerFunction()external view returns(address){
        return Owner;
    }
    
    function toSend(uint256 receivedAmount) internal pure returns (uint256) {
//Since solidity doesn't operate with decimals, getting the percentage, by (3/100) will result in 0.03 which will truncate to 0. The only approach is (AmountReceived *3) /100, 
//which is mathematically just the same. 
            uint256 Rate = (receivedAmount * 3) / 100; //That will always get us 3%
            uint256 ToSend = receivedAmount-Rate;
            return ToSend;
    }


     function receiveCelo(address payable recepient) external payable {
            uint Value = msg.value;
            (bool Status,)= payable(address(this)).call{value:msg.value}(""); //This is the same as the transfer method used on the 'withdraw' function
            uint AmountToSend = toSend(Value);
              (bool Success,)=recepient.call{value:AmountToSend}("");

    }


//msg.sender - This will always be the user address / contract address that externally calls a particular function
//msg.value  - Is the amount of native currency that is transffered along with a function call, and it needs to be handles by a function
//To preempt any kind of attack, this function is restricted to only the deploying address, for its execution

    function withdraw()external payable{
        require(msg.sender == Owner,"Unauthorized")
        Owner.transfer(address(this).balance);

    }
     
}
