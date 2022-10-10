import React from 'react'
import { FaSearch,FaUserAlt,FaShoppingBag } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCart } from "react-use-cart";
import { NavLink} from "react-router-dom";



function Navbars({coun}) {
  const { totalUniqueItems  } = useCart();

    return (
        <div className='py-3'>
        <div className='flex justify-around items-center'>
            <div className="navleft hidden md:flex">
                <p className='text-[12px] text-slate-400'>Questions? Call us:</p>
                <h6>1-001-234-5678</h6>
            </div>
            <div className="navcen">
                <img src="imgs\logo-fashion-store.svg" alt="fashion-store.svg" className=' w-72'/>
            </div>
            <div className="navrt flex items-center">
                <a href="#" className='px-3'>
                <FaSearch />
                </a>
                <a href="#" className='px-3'>
                <FaUserAlt />
                </a>
                <a href="/Cart" className='px-3'>
                    <span className=' relative bg-amber-800 text-[11px] text-white rounded-full px-1 left-4'>
                    { totalUniqueItems  }
                    </span>
                    <FaShoppingBag  className=' relative -top-3'/>

                </a>
            </div>
        </div>
        <Navbar expand="lg">
      <Container className='mx-auto'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" flex mx-auto">
            <NavLink to="/" className=' font-bold px-3'>Home</NavLink>
            <NavLink to="/CLOTHING" className=' px-3'>CLOTHING</NavLink>
            <NavLink to="/SHOES" className=' px-3'>SHOES</NavLink>
            <NavLink to="/ACCESSORIES" className=' px-3'>ACCESSORIES</NavLink>
            <NavLink to="/BESTSELLERS" className='px-3'>BESTSELLERS</NavLink>
            <NavLink to="/SALE" className='px-3'>SALE</NavLink>
            <NavLink to="/INFO" className='  px-3'>INFO</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
        </div>
    )
}

export default Navbars
