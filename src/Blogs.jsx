import { FaAngleLeft,FaAngleRight,FaShoppingBag } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { Link} from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip, Button, Grid } from "@nextui-org/react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineReload ,AiOutlineSafety} from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import axios from "axios";
function Blogs() {
    const [products,setproducts]=useState([]);

useEffect(()=>{
    axios.get('https://fashion-beta.vercel.app/products/')
    .then( (res)=> {
      // handle success
      setproducts(res.data);
      console.log(products);
    })
    .catch( (error) => {
      // handle error
      console.log(error);
    })
})
    return (
        <div>
            <div className=' relative top-10 '>
                <div className='flex container items-center'>
                    <h1 className='text-2xl'>LATEST ARTICLES</h1>
                    <a href="#" className=' bg-slate-200 text-[10px] p-1 ml-5'>VISIT OUR BLOG</a>
                </div>
            </div>
            <div className='container'>
            <>
    <Swiper
breakpoints={{
    1200: {
        // width: 576,
        slidesPerView:4,
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
    <div className=' relative w-[350px] h-[250px] overflow-hidden abimg'>
                <Link to={`/Veiwsslide/${product.id}`}>
                <img src={product.image}  alt={product.category} className='w-[100%] h-[250px] imgs4 imgs4s z-20' />

                <div className="w-[100%] h-[100%] flex justify-center items-center relative -top-[250px]">
                <p className='  relative  items-center  justify-center dotimg'><AiOutlineEllipsis className=" text-4xl text-white" /></p>
            </div>
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
            <Link to={`/Veiwsslide/${product.id}`} className="hover:text-slate-800">
            <div className=' text-center relative -top-8'>
                <h3 className='text-[14px] font-bold '>{product.title}</h3>
                <p className='text-sm '>Fashion trends rate: <span>{product.rating.rate}</span></p>
            </div>
            </Link >

    </SwiperSlide>
        )

        
        )}


    </Swiper>
    </>
            </div>

        </div>
    )
}

export default Blogs
