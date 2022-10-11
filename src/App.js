import axios from "axios";
import "./App.css";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Navbars from "./Navbars";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Slid from "./Slid";
import { BrowserRouter,Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import Veiwsslide from "./Veiwsslide";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
function App() {
  
  const [coun,setcoun]=useState(0);
  const [products,setproducts]=useState([]);

  useEffect(()=>{
      axios.get('https://fashion-beta.vercel.app/products/')
      .then( (res)=> {
        // handle success
        setproducts(res.data);
      })
      .catch( (error) => {
        // handle error
        console.log(error);
      })
  })

  
  
  return (
    <CartProvider>

    <BrowserRouter>
      <Navbars coun={coun}/>
      <Routes>
        <Route path="/" element={<Home products={products}/>}/>
        <Route path="/Veiwsslide/:id" element={<Veiwsslide  coun={setcoun}/>}/>
        <Route path="/Cart" element={<Cart />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>

  );
}

export default App;
