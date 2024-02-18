"use client";
import React from 'react'
import { useState } from 'react';
import NavLink from './Navlink';
import Link from 'next/link';
import Image from 'next/image';
import MenuOverlay from './MenuOverlay';
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";

const navLinks = [
    
    {
      title: "Live Auctions",
      path: "#auctions",
    },
    
    {
      title: "My Auction",
      path: "#my_auction",
    },
    {
      title: "My Bids",
      path: "#my_bids",
    },
    {
      title: "My NFTS",
      path: "#my_nfts",
    },
  ];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (

    <nav className='absolute mx-auto top-0 right-0 bg-[#121212] bg-opacity-100 left-0 opacity-80 z-10 '>
        <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
          
         
            <Link href={'/'} className=' text-2xl text-white md:text-4-xl lg: text-6-xl sm:text-2xl'>LOGO</Link>
            <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center  px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* <Image
              src="/images/menu.png"
              alt="menu image"
              width={20}
              height={20}
            /> */}
                        <IoMdMenu />

            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center  px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
               {/* <Image
              src="/images/cross.png"
              alt="cross image"
              width={20}
              height={20}
            /> */}
            <ImCross />


            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto">
            <ul className='flex p-4 gap-3 '>
                {navLinks.map((link,index)=>{
                    return(<li className="text-center mx-auto " key={index}><NavLink href={link.path} title={link.title}/></li>)
                })}

            <button className='bg-blue-500 ml-7 text-white text-xl font-semibold hover:bg-blue-600 rounded-2xl p-3'>Connect Wallet</button>
            </ul>
            </div>
            {navbarOpen?<MenuOverlay/>:null}
        </div>
        <hr/>

    </nav>
  )
}

export default Navbar