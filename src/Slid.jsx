import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import axios from 'axios';
// ..
AOS.init();
function Slid({products}) {

    return (

        <div>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
{products.map((product)=>(
                <SwiperSlide key={product.id}>
                <div className='slid'>
                    <img src={product.image} alt={product.category} />
                    <div className='imgon ' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"></div>
                    <div className='imgon2 ' data-aos="fade-left"
     data-aos-offset="300"data-aos-easing="ease-in-sine"></div>
                <div className=' relative pt-[107px] -left-[90px] md:-left-0 pl-[100px]  -top-[1000px] w-[900px] h-[440px] bgslidleft z-10'>
                    <h1 className='text-2xl text-rose-400' data-aos="fade-up"
     data-aos-duration="3000">{product.title.slice(0,15)}..</h1>
                    <h1 className='text-sm md:text-4xl z-20' data-aos="fade-up"
     data-aos-duration="3000" >{product.category}</h1>
                    <button className='border text-1xl p-2 ' data-aos="fade-up"
     data-aos-duration="3000">Shop new collection</button>
                </div>
                </div>
                
            </SwiperSlide>
))}

            {/* <SwiperSlide>
                <div className='slid'>
                <img src="imgs\slid03.jpg" alt="slid03.jpg" />
                    <div className='imgon' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"></div>
                    <div className='imgon2' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"></div>
                <div className=' relative pt-[107px] pl-[100px]   -top-[1000px] w-[900px] h-[440px] bgslidleft z-10'>
                    <h1 className='text-2xl text-rose-400'>Classic & elegant shoes</h1>
                    <h1 className='text-sm md:text-4xl'>Natural leather & suede shoes</h1>
                    <button className='border text-1xl p-2 '>Shop collection now</button>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slid'>
                <img src="imgs\z009.jpg" alt="z009.jpg" />
                    <div className='imgon' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"></div>
                    <div className='imgon2' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"></div>
                <div className=' relative pt-[107px] pl-[100px]   -top-[1000px] w-[900px] h-[440px] bgslidleft z-10'>
                    <h1 className='text-2xl text-rose-400'>Check out our limited S/S 2020 collection!</h1>
                    <h1 className='text-4xl'>Latest trends actual models</h1>
                    <button className='border text-1xl p-2 '>Shop new collection</button>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slid'>
                <img src="imgs\skid980.jpg" alt="skid980.jpg" />
                    <div className='imgon' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"></div>
                    <div className='imgon2 ' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"></div>
                <div className=' relative pt-[107px] pl-[100px]   -top-[1000px] w-[900px] h-[440px] bgslidleft z-10'>
                    <h1 className='text-2xl text-rose-400'>Check out our limited S/S 2020 collection!</h1>
                    <h1 className='text-4xl'>Light skirts & summer dresses</h1>
                    <button className='border text-1xl p-2 '>Shop new collection</button>
                </div>
                </div>
            </SwiperSlide> */}
        </Swiper>
        </div>
    )
}

export default Slid