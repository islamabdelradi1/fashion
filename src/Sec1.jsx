import React from 'react'
import { BiDoughnutChart } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineReload ,AiOutlineSafety} from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";

function Sec1() {
    return (
        <div className='bordersec1'>
        <div className='container py-10'>
            <div className=' grid grid-cols-1 md:grid-cols-3 '>
                <div className='h-[250px] divabimg m-2 '>
                    <div className='w-[100%] h-[100%] overflow-hidden '>
                        <img src="imgs\st501-1024x683.jpg" alt="st501-1024x683.jpg" className='w-[100%] h-[100%] imgdiv'/>
                    </div>
                    <div className=' relative klamonimg -top-[250px] h-[100%] text-center flex items-center justify-center overflow-hidden'>
                        <div className=' text-white'>
                        <p className=' bg-rose-400 relative -right-[180px] -top-[20px] whtp text-sm'>WHAT'S NEW</p>
                        <h2>New S/S 2020 collection</h2>
                        <h1 className='text-2xl'>Latest trends & actual models </h1>
                        <button className='border p-2 text-sm my-3 btnshop'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className='  h-[250px] divabimg m-2 '>
                    <div className='w-[100%] h-[100%] overflow-hidden '>
                        <img src="imgs\ss391-1024x683.jpg" alt="ss391-1024x683.jpg" className='w-[100%] h-[100%] imgdiv'/>
                    </div>
                    <div className=' relative klamonimg -top-[250px] h-[100%] text-center flex items-center justify-center overflow-hidden'>
                        <div className=' text-white'>
                        <p className=' bg-rose-400 relative -right-[180px] -top-[20px] whtp text-sm'>Shoes sale</p>
                        <h2>Hurry up!</h2>
                        <h1 className='text-2xl'>Up to 50% off for previous collection</h1>
                        <button className='border p-2 text-sm my-3 btnshop'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className='h-[250px] divabimg m-2 '>
                    <div className='w-[100%] h-[100%] overflow-hidden '>
                        <img src="imgs\st318-1024x683.jpg" alt="st318-1024x683.jpg" className='w-[100%] h-[100%] imgdiv'/>
                    </div>
                    <div className=' relative klamonimg -top-[250px] h-[100%] text-center flex items-center justify-center overflow-hidden'>
                        <div className=' text-white'>
                        <p className=' bg-rose-400 relative -right-[180px] -top-[20px] whtp text-sm'>fashion blog</p>
                        <h2>News & articles</h2>
                        <h1 className='text-2xl'>Latest trends & fashion advice</h1>
                        <button className='border p-2 text-sm my-3 btnshop'>Visit blog </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 my-10 '>
                
                    <div className='flex items-center  m-2 md:m-0'>
                        <div>
                            <BiDoughnutChart className='text-3xl text-red-400'/>
                        </div>
                        <div className='pl-5'>
                            <h2 className='text-xl'>Customer support</h2>
                            <a href="#/" className='flex items-center text-sm'>
                            Contact us now
                            <FiArrowRight className='ml-1' />
                            </a>
                        </div>
                    </div>
                    <div className='flex items-center  m-2 md:m-0'>
                        <div>
                            <AiOutlineReload className='text-3xl text-red-400'/>
                        </div>
                        <div className='pl-5'>
                            <h2 className='text-xl'>30 days return period</h2>
                            <a href="#/" className='flex items-center text-sm'>
                            About returns & refunds
                            <FiArrowRight className='ml-1' />
                            </a>
                        </div>
                    </div>
                    <div className='flex items-center  m-2 md:m-0'>
                        <div>
                            <FaShippingFast className='text-3xl text-red-400'/>
                        </div>
                        <div className='pl-5'>
                            <h2 className='text-xl'>Free shipping</h2>
                            <a href="#/" className='flex items-center text-sm'>
                            Shipping details
                            <FiArrowRight className='ml-1' />
                            </a>
                        </div>
                    </div>
                    <div className='flex items-center  m-2 md:m-0'>
                        <div>
                            <AiOutlineSafety className='text-3xl text-red-400'/>
                        </div>
                        <div className='pl-5'>
                            <h2 className='text-xl'>Secure payments</h2>
                            <a href="#/" className='flex items-center text-sm'>
                            About payment methods
                            <FiArrowRight className='ml-1' />
                            </a>
                        </div>
                    </div>
            </div>
        </div>
        </div>

    )
}

export default Sec1