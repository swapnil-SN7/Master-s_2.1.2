"use client";

import { ChangeEvent, useState } from "react";
import { FaSearchDollar } from "react-icons/fa";

import Liveauction from "./components/Part2/Liveauction";
import Card from "./components/Card/Card";
import Image from "next/image";



import './globals.css'
export default function Home() {
  const [activeSearch, setActiveSearch] = useState([]);

  function handleSearch(e: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }
  
  return(
    <div  className="home">


      <div className="part_one  mx-auto   border-gray-300 border relative  pb-32 bg-gray-300 z-30  ">

        <div className="searchbar  flex justify-center mb-8  absolute -top-5 left-96">
              
      <form className='w-[500px] relative'>
        <div className="relative">
            <input type="search" placeholder='Type Here' className='w-full text-cyan-50 p-4 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
               ' onChange={(e) => handleSearch(e)}/>
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#6900FF] rounded-full'>
                <FaSearchDollar />
            </button>
        </div>
        
        </form>
        </div>


        <div className="flex flex-row justify-center  mt-24">

        <div className="leftpart pr-20 ">
             <p  className="text-2xl font-extrabold text-opacity-80 text-[#6900FF]">
"Unlock the thrill of winning with every click – bid, win, repeat!"</p>

         <button  className="border-white bottom-2  bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline">
             <div className="bg-[#FFD700] size-3  rounded-lg m-1 "></div>
        <span>  Trending NFT's🔥</span>
          </button>

          <button  className="bottom-2  bg-blue-400 rounded-md  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-1 p-3 ml-3  ">
       
              Time left -10:30 min
          </button>


        </div>
        

        <div className="rightpart">

           <Image src={"/images/imfo.png"} alt=" main image" width={400} height={350}/>

                 <div className="dropdown dropdown-right ml-4 flex">
                 <button  className="border-white bottom-2  text-center bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline">
             <p className="text-sm"> Highest Bid🔥</p>
              
               </button>
     
               <button  className="border-white bottom-2  bg-blue-700   rounded-2xl  backdrop-blur-sm  border  m-4 p-2 ">
                  
             <span className=" text-2xl font-semibold text-white ">Place Bid</span>
               </button>
                  
                  </div>           
 
        </div>
        <Collections/>
      </div>

   <div className="m-7 w-[90%] border border-blue-600 rounded-xl mx-auto shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
   <Liveauction/>

   </div>

   <div className="w-[90%] mx-auto ">
   <p className="font-bold text-xl text-[#9951FF]">
            Trending collections
          </p>
        <div className="w-full border rounded-md border-blue-500  p-7 grid grid-cols-3 grid-flow-row shadow-[5px_5px_0px_0px_rgba(109,40,217)] ">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </div>


   </div>
<div className="grid grid-cols-3 grid-flow-row gap-4 my-28 mx-10">

<Card/>
<Card/>
<Card/>
<Card/>
<Card/>

</div>
      

          
    </div>
  );
}
