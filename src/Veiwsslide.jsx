import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Link} from "react-router-dom";
import { FaPlus,FaWindowMinimize } from "react-icons/fa";
import { useCounter } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { CartProvider, useCart } from "react-use-cart";

function Veiwsslide({coun}) {
    const { addItem } = useCart();

    const  {id}  = useParams();
    const [products,setproducts]=useState({});
    const [count, handlers] = useCounter(0, { min: 0, max: 10 });

        useEffect(()=>{
        axios.get(`https://fashion-beta.vercel.app/products/${id}`)
        .then( (res)=> {
        // handle success
        setproducts(res.data);
        })
        .catch( (error) => {
        // handle error
        console.log(error);
        })
        },[])
        
        const form = useForm({
                initialValues: { name: '', email: '' },
                validate: {
                name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
                email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
                },
            });
            
            const handleError = (errors: typeof form.errors) => {
                if (errors.name) {
                showNotification({ message: 'Please fill name field', color: 'red' });
                } else if (errors.email) {
                showNotification({ message: 'Please provide a valid email', color: 'red' });
                }
            };
            
            const handleSubmit = (values: typeof form.values) => {};

    return (
<div>
<div className='container my-5'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className=' h-[700px] overflow-hidden'>
                    <img src={products.image} alt={products.title} className='w-[100%] h-[100%] imgs4'/>
                </div>
                <div>
                    <h1 className='text-3xl py-3'>{products.title}</h1>
                    <p className='text-xl py-3'>${products.price} </p>
                    <p className=' py-3'>{products.description}</p>
                    <div className='flex'>
                        <div className='flex items-center'>
                            <button onClick={handlers.decrement}>
                            <FaWindowMinimize  className='mx-3 border rounded-full p-1 text-2xl '/>
                            </button>
                            <span>{count}</span>
                            <button onClick={handlers.increment}>
                            <FaPlus  className='mx-3 border rounded-full p-1 text-2xl '/>
                            </button>
                        </div>
                    <div>
                            <button className='border p-3' onClick={() => addItem(products)}>ADD TO CART</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className=' bg-slate-50 py-3'>
<div className='container my-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5">
                <div>
                    <h1 className='py-3'>{products.title}</h1>
                    <p className='py-3'>Your email address will not be published. Required fields are marked *</p>
                    <span className='py-6 flex 00'>Your rating *</span>

                    <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
                    <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
                    <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
                    <Button type="submit" mt="sm" className='btns'>
                        Submit
                    </Button>
                    </form>

                </div>
                <div>
                    <h1 className='py-3'>Description</h1>
                    <p>{products.description}</p>
                </div>
            </div>
    </div>
</div>
</div>

    )
}

export default Veiwsslide
