"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { FaSearchDollar } from "react-icons/fa";


import Liveauction from "../components/Part2/Liveauction";
import Card from "../components/Card/Card";
import Image from "next/image";
import Collections from "../components/Collections/Collections";
import axios from "axios";

export default function Home() {
  const [activeSearch, setActiveSearch] = useState([]);
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/getAllAuctions");
      setAuctions(res.data.auctions);
    })();
  }, []);

  function handleSearch(e: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="home">
      <div className="part_one  mx-auto   border-gray-700 border relative  pb-32 z-30 shadow-2xl  drop-shadow-md  ">
        <div className="searchbar  flex justify-center mb-8  absolute -top-5 left-96">
          <form className="w-[500px] relative">
            <div className="relative">
              <input
                type="search"
                placeholder="Type Here"
                className="w-full text-cyan-50 p-4 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
                onChange={(e) => handleSearch(e)}
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#6900FF] rounded-full">
                <FaSearchDollar />
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-row justify-center  mt-24">
          <div className="leftpart pr-20 pt-[10%] ">
            <p className="text-2xl font-extrabold text-opacity-80 text-[#6900FF]">
              &quot;Unlock the thrill of winning with every click – bid, win,
              repeat!&quot;
            </p>
            <Image alt="hero" src={"/images/image.png"} height={400} width={350} className="mx-auto mb-4"/>

                <div className="mx-auto">
                <button className="border-white bottom-2  bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline">
              <div className="bg-[#FFD700] size-3  rounded-lg m-1 "></div>
              <span>Buy trending Bid&apos;s🔥</span>
            </button>

            <button className="bottom-2  bg-blue-400 rounded-md  font-bold bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-1 p-3 ml-3  ">
              Join Online Auction Now
            </button>

                </div>
            
          </div>

          <div className="rightpart">
            <Image
              src={"/images/imfo.png"}
              alt=" main image"
              width={400}
              height={350}
            />

            <div className="dropdown dropdown-right ml-4 flex">
              <button className="border-white bottom-2  text-center bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline">
                <p className="text-sm"> Highest Bid🔥</p>
              </button>

              <button className="border-white bottom-2  bg-blue-700   rounded-2xl  backdrop-blur-sm  border  m-4 p-2 ">
                <span className=" text-2xl font-semibold text-white ">
                  Place Bid
                </span>
              </button>
            </div>
          </div>
        </div>

       

        
      

      </div>
      <div className="m-7 w-[90%] border border-blue-600 rounded-xl mx-auto shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          <Liveauction />
         
        </div>

        
          <div className="mx-auto w-[90%]">
          <Collections />
            </div>       
        
    </div>
  );
}
