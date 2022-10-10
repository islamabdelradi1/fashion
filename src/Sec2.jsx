import { FaAngleLeft,FaAngleRight,FaShoppingBag } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import axios from 'axios';
import { Link} from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip, Button, Grid } from "@nextui-org/react";
import { BiDoughnutChart } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineReload ,AiOutlineSafety} from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

function Sec2({products}) {

    return (
        <div className="bordersec1">
            <div className=' relative top-10 '>
                <div className='flex container items-center'>
                    <h1 className='text-2xl'>NEW INCOMES</h1>
                    <a href="#" className=' bg-slate-200 text-[10px] p-1 ml-5'>SHOW MORE</a>
                </div>
            </div>
            <div className='container'>
            <>
    <Swiper
        breakpoints={{
            1200: {
                // width: 576,
                slidesPerView: 5,
            },

            576: {
                // width: 576,
                slidesPerView: 1,
            }

        }}

        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper swiperr"
        
    >
        {products.map((product)=>(
    <SwiperSlide key={product.id} >
    <div className=' relative w-[100%] h-[400px] overflow-hidden'>
        <Link to={`/Veiwsslide/${product.id}`}>
            <img src={product.image}  alt={product.category} className='w-[100%] h-[100%] imgs4' />
        </Link>
            </div>
            <div className=' relative left-[190px] w-[250px] -top-10 '>
                <Tooltip
                color="success"
                content="Select options"
                placement="left"
                >
                <Button auto color="foreground" light>
                <FaShoppingBag className='buy float-right  bg-slate-100 p-2 text-3xl rounded-full mr-4 '/>
                </Button>
                </Tooltip>
                {/* <span className=" relative left-[90px] spansel text-sm pr-5 pl-5 rounded-full text-white">
                    Select options
                </span>
                    <FaShoppingBag className='buy float-right -top-6 relative bg-slate-100 p-2 text-3xl rounded-full mr-4 z-10'/> */}
            </div>
            <div className=' text-center relative -top-8'>
                <h3 className='text-[14px] font-bold'>{product.category}</h3>
                <p className='text-sm'>{product.price}</p>
            </div>
    </SwiperSlide>
        )

        
        )}
        

    </Swiper>
    </>
            </div>
            <div className=' py-10'>
            <div className=' grid grid-cols-1 md:grid-cols-2'>
                <div className=' h-[350px] divabimg'>
                    <div className='w-[100%] h-[100%] overflow-hidden '>
                        <img src="imgs\st777-1024x683.jpg" alt="st777-1024x683.jpg" className='w-[100%] h-[100%] imgdiv'/>
                    </div>
                    <div className=' relative klamonimg -top-[350px] h-[100%] text-center flex items-center justify-center overflow-hidden'>
                        <div className=' text-white'>
                        <h2>Stand out of the croud</h2>
                        <h1 className='text-2xl'>With our stylish bags & accessories  </h1>
                        <button className='border p-2 text-sm my-3 btnshop'>View collection </button>
                        </div>
                    </div>
                </div>
                <div className=' h-[350px] divabimg'>
                    <div className='w-[100%] h-[100%] overflow-hidden '>
                        <img src="imgs\st78-1024x683.jpg" alt="st78-1024x683.jpg" className='w-[100%] h-[100%] imgdiv'/>
                    </div>
                    <div className=' relative klamonimg -top-[350px] h-[100%] text-center flex items-center justify-center overflow-hidden'>
                        <div className=' text-white'>
                        <h2>Comfort & Style</h2>
                        <h1 className='text-2xl'>Perfect shoes for your active everyday life </h1>
                        <button className='border p-2 text-sm my-3 btnshop'>View collection </button>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        <div className=' relative top-10 '>
                <div className='flex container items-center'>
                    <h1 className='text-2xl'>BESTSELLERS</h1>
                    <a href="#" className=' bg-slate-200 text-[10px] p-1 ml-5'>SHOW MORE</a>
                </div>
            </div>
        <div className='container'>
            <>
    <Swiper
breakpoints={{
    1200: {
        // width: 576,
        slidesPerView: 5,
      },

    576: {
        // width: 576,
        slidesPerView: 1,
      }

  }}        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper swiperr"
        
    >
                {products.map((product)=>(
                    <SwiperSlide key={product.id} >
                    <div className=' relative w-[300px] h-[300px] overflow-hidden'>
                            <Link to={`/Veiwsslide/${product.id}`}>
                                <img src={product.image}  alt={product.category} className='w-[100%] h-[100%] imgs4' />
                            </Link >
                            </div>
                            <div className=' relative left-[190px] w-[250px] -top-10 '>
                                <Tooltip
                                color="success"
                                content="Select options"
                                placement="left"
                                >
                                <Button auto color="foreground" light>
                                <FaShoppingBag className='buy float-right  bg-slate-100 p-2 text-3xl rounded-full mr-4 '/>
                                </Button>
                                </Tooltip>
                                {/* <span className=" relative left-[90px] spansel text-sm pr-5 pl-5 rounded-full text-white">
                                    Select options
                                </span>
                                    <FaShoppingBag className='buy float-right -top-6 relative bg-slate-100 p-2 text-3xl rounded-full mr-4 z-10'/> */}
                            </div>
                            <div className=' text-center relative -top-8'>
                            <Link to={`/Veiwsslide/${product.id}`}  className="hover:text-slate-800">
                            <h3 className='text-[14px] font-bold'>{product.category}</h3>
                                <p className='text-sm'>{product.price}</p>
                            </Link >
                            </div>
                    </SwiperSlide>
        )

        
        )}

    </Swiper>
    </>
            </div>
        </div>
    )
}

export default Sec2