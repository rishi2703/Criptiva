import React, { useState } from 'react'
import { PiArrowRightBold, PiInfoBold, PiMagnifyingGlassBold, PiStarAndCrescentBold } from 'react-icons/pi'

const Home = () => {
  const [showPara, setShowPara] = useState(false)
  return (
    <div className=" min-h-screen flex flex-col gap-10 items-center pt-10 md:pt-18">
      <div className="min-h-screen text-center px-4">
        <div className='w-full h-screen'>
          <img src="\Images\Rectangle 2330.png" className='md:w-full md:h-full h-1/2' alt="" />
        </div>
        <div className='absolute top-20 left-0 md:top-50 w-full'>
          <h1 className="md:text-3xl font-bold text-gray-900">
            How can we help?
          </h1>
          <div className='w-full flex justify-center'>
            <p className=" w-1/2 md:w-1/4 text-gray-600 mt-4 text-xs">
              Criptiva only offers customer service through this Help Center and our
              community forums
            </p>
          </div>
          <div className='w-full flex justify-center'>
            <img src="\Images\criptiva coin.png" className='w-30 md:w-50' alt="" />
          </div>

          <div className="relative mt-8 md:w-1/4 max-w-xl mx-auto px-4 md:px-0">
            <PiMagnifyingGlassBold className="absolute left-7 md:left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-white py-2 pl-12 pr-4 rounded-xl shadow-sm text-gray-600 placeholder-gray-400 border-none focus:ring-2 focus:ring-gray-300 outline-none"
            />
          </div>
        </div>
      </div>

      <div
        className='w-full flex justify-between items-center py-10 px-20'
      >
        <div className='flex flex-col gap-5'>
          <h2 className={` transition-all duration-300 text-xl md:text-4xl font-semibold text-[#1a1446]`}>
            Solana is now on Criptiva
          </h2>
          <div
            className={`text-sm overflow-hidden transition-all duration-300`}
          >
            <span>
              Import and create Solana accounts and natively trade SOL and SPL tokens
            </span>
          </div>
          <button className="w-35 flex items-center gap-2 mt-4 bg-white text-xs text-[#1a1446] border font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
            <span>Learn More</span>
            <PiArrowRightBold/> 
          </button>
        </div>
        <div className="mt-6 md:mt-0 relative w-[300px] h-[200px]">
          <img
            className="absolute top-0 right-0 z-40"
            src="Images/Black Coin.png"
            width={200}
            alt=""
          />
          <img
            className="absolute top-10 right-12 z-40"
            src="Images/Black Coin.png"
            width={180}
            alt=""
          />
          <img
            className="absolute top-20 right-24 z-40"
            src="Images/Black Coin.png"
            width={160}
            alt=""
          />
          <img
            className="absolute top-28 right-36 z-40"
            src="Images/Black Coin.png"
            width={140}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Home
