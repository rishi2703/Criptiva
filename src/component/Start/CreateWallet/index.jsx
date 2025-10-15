import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateWallet = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className='text-[52px]'>Creating a new wallet</div>
      <div>When you install a new instance of MetaMask, you’ll be asked if you want to create a new wallet, or if you have an existing wallet. For information on using an existing wallet, read <span onClick={()=>navigate("/using-existing-wallet")}>here</span>.</div>
    </div>
  )
}

export default CreateWallet
