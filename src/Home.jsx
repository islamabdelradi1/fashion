import React from 'react'
import Blogs from './Blogs'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Slid from './Slid'

function Home({products}) {
    return (
    <div>
        <Slid products={products}/>
        <Sec1 />
        <Sec2 products={products}/>
        <Blogs />
    </div>
    )
}

export default Home