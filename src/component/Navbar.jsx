import React, { useState } from 'react'
import { PiCaretUpBold, PiGlobeBold, PiMagnifyingGlassBold } from 'react-icons/pi'
import { Link,  } from 'react-router-dom'

const Navbar = () => {
    const [openUseDropdown, setOpenUseDropdown] = useState(false)
    // const navigate = useNavigate()
    return (
        <div className='rounded-2xl bg-white p-4 flex justify-between items-center'>
            <div className="flex items-center gap-5">
                <img src="\public\Images\image 1.png" className='w-50' alt="" />
                <ul className='md:text-lg font-semibold flex gap-5'>
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
            </div>
            <div className="flex items-center gap-4">
                <div className='hover:bg-gray-200 hover:scale-125 p-3 transition-all  rounded-full'>
                    <PiGlobeBold size={20}/>
                </div>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder="SEARCH"
                        className="border border-gray-300 rounded-full pl-6 pr-12 py-3 bg-transparent text-sm text-gray-500 font-semibold outline-none placeholder-gray-400"
                    />
                    <PiMagnifyingGlassBold className="absolute bottom-[30%] right-5 w-4 h-4 ml-2 text-black" />
                </div>

                <button
                    className="relative border bg-black text-white font-semibold rounded-full px-6 py-3 text-sm uppercase hover:bg-gray-800 transition"
                >
                    <span>
                        Connect Wallet
                    </span>
                </button>
            </div>
            <div className={`${openUseDropdown?'block max-h-[300px]':'max-h-0'} overflow-hidden transition-[max-height] duration-500 absolute left-0 top-20 w-[97%] m-6 rounded-xl bg-white px-4 text-2xl font-bold`}>
                <ul>
                    <li className='w-full hover:text-[#035e36] hover:bg-gray-300 py-3 px-4 rounded-lg'>
                        <Link>Configure</Link>
                    </li>
                    <li className='w-full hover:text-[#035e36] hover:bg-gray-300 py-3 px-4 rounded-lg'>
                        <Link>Manage crypto</Link>
                    </li>
                    <li className='w-full hover:text-[#035e36] hover:bg-gray-300 py-3 px-4 rounded-lg'>
                        <Link>More web3</Link>
                    </li>
                    <li className='w-full hover:text-[#035e36] hover:bg-gray-300 py-3 px-4 rounded-lg'>
                        <Link>Stay safe</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
