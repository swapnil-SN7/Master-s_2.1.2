"use client";

import { ChangeEvent, useState } from "react";
import { FaSearchDollar } from "react-icons/fa";
import Image from "next/image";
import "./globals.css";
import Navbar from "./components/Navbar";
export default function Home() {
  const [activeSearch, setActiveSearch] = useState([]);

  function handleSearch(e: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Navbar/>
      <div className="container mx-auto mt-1 px-4 sm:px-6 lg:px-8">

      <div className="part_one  mx-auto  mt-20 border-gray-300 border relative bg-[#ccaafd] pb-32  ">
        <div className="searchbar  flex justify-center mb-8  absolute -top-5 left-96">
          <form className="w-[500px] relative">
            <div className="relative">
              <input
                type="search"
                placeholder="Type Here"
                className="w-full text-cyan-50 p-4 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
               "
                onChange={(e) => handleSearch(e)}
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#6900FF] rounded-full">
                <FaSearchDollar />
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-row justify-center  mt-24">
          <div className="leftpart pr-20 ">
            <p className="text-2xl font-extrabold text-opacity-80 text-[#6900FF]">
              "Unlock the thrill of winning with every click – bid, win,
              repeat!"
            </p>

            <button className="border-white bottom-2  bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline">
              <div className="bg-[#FFD700] size-3  rounded-full m-1 "></div>
              <span> Trending NFT's🔥</span>
            </button>

            <button className="bottom-2  bg-blue-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-1 p-2 ml-3  ">
              Time left -10:30 min
            </button>
          </div>

          <div className="rightpart">
            <Image alt="" height={30} width={30} src="/images/auction.jpg" />

            <div className="dropdown dropdown-right ml-4 flex">
              <button className="border-white bottom-2  text-center bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline">
                <p className="text-sm"> Highest Bid🔥</p>
              </button>

              <button className="border-white bottom-2  bg-[#6900FF]    rounded-full   backdrop-blur-sm  border  m-4 p-2 ">
                <span className=" text-2xl font-semibold text-whitest">
                  Place Bid
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
