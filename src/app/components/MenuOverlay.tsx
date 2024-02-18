import React from 'react'
import NavLink from './Navlink';

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

const MenuOverlay = () => {
  return (
    <ul className='flex flex-col items-center container py-4 md:flex-row md:justify-end md:py-0'>
      {navLinks.map((link, index) => {
        return (
          <li key={index} className='mb-4 md:mb-0 md:ml-4'>
            <NavLink href={link.path} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
}

export default MenuOverlay;