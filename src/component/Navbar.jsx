import React, { useState } from 'react'
import { PiArrowRightBold, PiCaretUpBold } from 'react-icons/pi'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [showNavItems, setShowNavItems] = useState(false)
    const [openUseDropdown, setOpenUseDropdown] = useState(false)
    return (
        <div className={`${showNavItems ? 'max-h-screen':'h-10'} md:h-auto transition-all duration-200 bg-white px-4 py-2 md:py-4 border-b-2 border-gray-200 z-50`}>
            <div className='flex justify-between items-center'>
                <div className="flex items-center gap-5">
                    <img src="\public\Images\image 1.png" className='w-25 md:w-40' alt="" />
                </div>
                <ul className='rounded-full px-10 bg-gray-100 font-semibold hidden md:flex gap-5'>
                    <li>
                        <button
                            className=' cursor-pointer py-2 px-4 rounded-md hover:bg-gray-300'
                        >
                            Start
                        </button>
                    </li>
                    <li>
                        <button
                            className='flex items-center gap-2 cursor-pointer py-2 px-4 rounded-md hover:bg-gray-300'
                            onClick={() => setOpenUseDropdown(!openUseDropdown)}
                        >
                            <span>Use </span>
                            <PiCaretUpBold className={`${openUseDropdown ? 'rotate-0' : 'rotate-180'} text-gray-500 transition-all duration-200`} />
                        </button>
                    </li>
                    <li>
                        <button
                            className=' cursor-pointer py-2 px-4 rounded-md hover:bg-gray-300'
                        >
                            Develop
                        </button>
                    </li>
                </ul>
                <div className={`hidden md:flex items-center gap-4 text-xs`}>
                    <button
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="flex items-center gap-2 border bg-white font-semibold rounded-full px-4 py-3 uppercase hover:bg-gray-800 transition"
                    >
                        <span>
                            Connect Wallet
                        </span>
                        <PiArrowRightBold />
                    </button>
                </div>
                <button className='md:hidden py-1 p-2 border rounded' onClick={() => setShowNavItems(!showNavItems)}>
                    <FaBars />
                </button>
            </div>

            <div className={`${showNavItems ? 'flex py-2  mt-4' : 'hidden'} transition-all duration-200 text-xs text-gray-600 flex-col gap-2 bg-white`}>
                <ul className='font-semibold flex flex-col gap-2'>
                    <li>
                        <button
                            className=' cursor-pointer px-4 rounded-md hover:bg-gray-300'
                        >
                            Start
                        </button>
                    </li>
                    <li>
                        <button
                            className='flex items-center gap-2 cursor-pointer px-4 rounded-md hover:bg-gray-300'
                            onClick={() => setOpenUseDropdown(!openUseDropdown)}
                        >
                            <span>Use </span>
                            <PiCaretUpBold className={`${openUseDropdown ? 'rotate-0' : 'rotate-180'} text-gray-500 transition-all duration-200`} />
                        </button>
                    </li>
                    <li>
                        <button
                            className=' cursor-pointer px-4 rounded-md hover:bg-gray-300'
                        >
                            Develop
                        </button>
                    </li>
                </ul>
                <button
                    className="w-30 text-xs flex items-center gap-2 border border-gray-400 rounded-full px-2"
                >
                    Connect Wallet
                    <PiArrowRightBold />
                </button>
            </div>

            <div className={`${openUseDropdown ? 'block max-h-[300px]' : 'max-h-0'} overflow-hidden transition-[max-height] duration-500 absolute left-0 top-20 md:w-[97%] m-6 rounded-xl bg-white px-4 text-xs md:text-2xl font-bold`}>
                <ul>
                    <li className='w-full hover:text-[#035e36] hover:bg-gray-300 py-1 md:py-3 px-4 rounded-lg'>
                        <Link>Configure</Link>
                    </li>
                    <li className='w-full hover:text-[#035e36] hover:bg-gray-300 py-1 md:py-3 px-4 rounded-lg'>
                        <Link>Manage crypto</Link>
                    </li>
                    <li className='w-full hover:text-[#035e36] hover:bg-gray-300 py-1 md:py-3 px-4 rounded-lg'>
                        <Link>More web3</Link>
                    </li>
                    <li className='w-full hover:text-[#035e36] hover:bg-gray-300 py-1 md:py-3 px-4 rounded-lg'>
                        <Link>Stay safe</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
