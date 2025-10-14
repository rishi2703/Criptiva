import React from 'react'
import{PiMagnifyingGlassBold} from 'react-icons/pi'

const Navbar = () => {
    return (
        <div className='bg-white p-4 flex justify-between items-center'>
            <div className="flex items-center gap-5">
                <img src="\public\Images\image 1.png" className='w-50' alt="" />
                <ul className='md:text-lg font-semibold flex gap-5'>
                    <li>
                        <button
                            className='py-2 px-4 rounded-md hover:bg-gray-300'
                        >
                            Start
                        </button>
                    </li>
                    <li>
                        <button
                            className='py-2 px-4 rounded-md hover:bg-gray-300'
                        >
                            Use
                        </button>
                    </li>
                    <li>
                        <button
                            className='py-2 px-4 rounded-md hover:bg-gray-300'
                        >
                            Develop
                        </button>
                    </li>
                </ul>
            </div>
            {/* <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                    <input
                        type="text"
                        placeholder="SEARCH"
                        className="bg-transparent text-sm font-semibold outline-none placeholder-black uppercase"
                    />
                    <magnifying className="w-4 h-4 ml-2 text-black" />
                </div>

                <button className="bg-black text-white font-semibold rounded-full px-6 py-2 text-sm uppercase hover:bg-gray-800 transition">
                    Connect Wallet
                </button>
            </div> */}
        </div>
    )
}

export default Navbar
