import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Table } from "@nextui-org/react";
import { useCounter } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { FaPlus,FaWindowMinimize } from "react-icons/fa";
import { useCart } from 'react-use-cart';

function Cart({coun}) {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart ,
        clearCartMetadata,
        } = useCart();
        if (isEmpty) return <p className=' text-center text-4xl py-10 h-[100vh]'>Your cart is empty</p>;

    // const  {id}  = useParams();
    // const [products,setproducts]=useState({});
    // const [count, handlers] = useCounter(0, { min: 0, max: 10 });
    // handlers(coun)
    // useEffect(()=>{
    //     axios.get(`http://localhost:9000/products/${id}`)
    //     .then( (res)=> {
    //     // handle success
    //     setproducts(res.data)
    //     })
    //     .catch( (error) => {
    //     // handle error
    //     console.log(error);
    //     })
    //     },[])
    return (
        <div className='h-[100vh]'>
            <table className=' w-[100%]'>
        <thead className=' bg-red-300'>
            <th>NAME</th>
            <th>Count</th>
            <th>Price</th>
            <th>Buy</th>

        </thead>
        <tbody >
                {items.map((item)=>(
                <tr key={item.id}>
                    <td className='p-3'>{item.title}</td>
                    <td>
                                <div className='flex items-center'>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                    <FaWindowMinimize  className='mx-3 border rounded-full p-1 text-2xl '/>
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                    <FaPlus  className='mx-3 border rounded-full p-1 text-2xl '/>
                                    </button>
                                    <button onClick={() => removeItem(item.id)}>&times;</button>
                                </div>
                    </td>
                    <td className=' text-center'>{item.quantity * item.price } </td>
                    <td className=' text-center'>
                        <button>Buy</button>
                    </td>
                    </tr>

                ))}
            

        </tbody>

        </table>
        <button className='btn bg-black text-white my-2 flex mx-auto' onClick={() => emptyCart()}>EmptyCart</button>

        </div>

    )
}

export default Cart