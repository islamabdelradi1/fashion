import React from 'react'
import { AiFillFacebook,AiFillTwitterSquare,AiFillYoutube,AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <div className=' bg-slate-100 py-20'>
        <div className='container'>
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="logoimgFooter">
                    <img src="imgs\logo-fashion-store-ext.svg" alt="logo-fashion-store-ext.svg" className='w-[150px]'/>
                </div>
                <div className="navfourone grid">
                    <a href="#">About us</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                    <a href="#">Demo design system</a>
                </div>
                <div className="navfourone grid">
                    <a href="#">My account</a>
                    <a href="#">Payment</a>
                    <a href="#">Shipping</a>
                    <a href="#">Returns and refunds</a>
                </div>
                <div className="navfourone grid">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Order tracking</a>
                    <a href="#">FAQs</a>
                    <a href="#">404 error page</a>
                </div>
                <div>
                    <p className='py-2'>Newsletter signup</p>
                    <form  className='py-2'> 
                        <input  className='p-2 mr-2' type="text" placeholder='Enter Your Email' />
                        <button  className='text-sm border p-2'>SUBSCRIBE</button>
                    </form>
                    <p>Subscribe now and get 10% off new collection garments!</p>
                </div>
            </div>
            <div  className='d-flex justify-around pt-10'>
                <div>
                    <p>© Copyright 2021 Seven Fashion Store. All rights reserved.</p>
                </div>
                <div className='d-flex'>
                    <div>
                        <p>Customer support: 001-234-5678</p>
                    </div>
                    <div  className='d-flex'>
                        <AiFillFacebook className=' bg-slate-300 text-2xl p-1 ml-7 mr-1 text-slate-400'/>
                        <AiFillTwitterSquare  className=' bg-slate-300 text-2xl p-1  mr-1 text-slate-400'/>
                        <AiFillInstagram  className=' bg-slate-300 text-2xl p-1  mr-1 text-slate-400'/>
                        <AiFillYoutube  className=' bg-slate-300 text-2xl p-1 text-slate-400'/>

                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Footer