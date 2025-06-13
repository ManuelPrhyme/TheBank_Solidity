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
    // Calculates the amount of Celo to Deduct and return wat to send to the recepient
    function toSend(uint256 receivedAmount) internal pure returns (uint256) {
            uint256 Rate = (receivedAmount * 3) / 100;
            uint256 ToSend = receivedAmount-Rate;
            return ToSend;
    }


     function receiveCelo(address payable recepient) external payable {
            uint Value = msg.value;
            (bool Status,)= payable(address(this)).call{value:msg.value}("");
            uint AmountToSend = toSend(Value);
              (bool Success,)=recepient.call{value:AmountToSend}("");

    }

    function withdraw()external payable{
        Owner.transfer(address(this).balance);

    }
     
}
