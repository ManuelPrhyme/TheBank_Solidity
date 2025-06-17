import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TheBank_ABI,TheBank_Address} from './TheBankConfig'
import {ethers, parseEther, formatEther} from 'ethers'
import {createWalletClient,createPublicClient,custom,http,parseAbiItem} from 'viem'
import {sepolia} from 'viem/chains'
import { setBalance } from 'viem/actions'



const TheBankWalletClient = createWalletClient({
  chain: sepolia,
  transport: custom(window.ethereum)
})

const TheBankPublicClient = createPublicClient({
  chain: sepolia,
  transport: http()
})

function App() {


  const [Recepient_Address,setRecepient_Address] = useState('');
  const [Amount,setAmount] = useState('');
  const [Accounts_,setAccounts] = useState()
  const [Balance,setBalance] = useState()

  const Connect = async () => {
    const _accounts =  await TheBankWalletClient.requestAddresses()
    console.log(_accounts)
    setAccounts(_accounts)
  }

  const SendTokens = async () => {
    const TransactionHash =  await TheBankWalletClient.writeContract({
      address:TheBank_Address,
      abi:TheBank_ABI,
      functionName:'receiveCelo',
      args:[Recepient_Address],
      account:Accounts_[0],
      value: parseEther(Amount)
    }
    )

    console.log(TransactionHash)
  }


  const SeeBalance = async () => {
      const _balance = await TheBankPublicClient.getBalance({address:TheBank_Address})
      console.log(_balance)
      setBalance(formatEther(_balance))
  }
  
  
return (
  <div>
    <h1>The Bank</h1>
    <h3>Recepient Address</h3>
    <input type="text" placeholder='Enter Ethereum Address' onChange={(e)=>{setRecepient_Address(e.target.value); console.log(Recepient_Address)}} />
     <h3>Eth Amount</h3>
    <input type="text" placeholder='Eth Amount' onChange={(e)=>{setAmount(e.target.value); console.log(Amount)}}/> <br/>
    <button onClick={SendTokens}>Send</button>
    <button onClick={SeeBalance}>Balance</button>
    <button onClick={Connect}>Connect</button>
    <p>Balance:{Balance}</p>
  </div>
)
}

export default App
