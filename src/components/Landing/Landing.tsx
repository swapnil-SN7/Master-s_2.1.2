
'use client'
import { ChangeEvent, useEffect, useState } from "react";
import { FaSearchDollar } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";

const Landing = ()=>{
    const [activeSearch, setActiveSearch] = useState([]);
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/getAllAuctions");
      let data =await res.data.auctions;
      setAuctions(data);
      console.log(data)
    })();
  }, []);

  async function handleSearch(e: ChangeEvent<HTMLInputElement>): Promise<void> {
    try {
      let name = e.target.value;
      const searchres = await axios.get(`/api/getAuctionByName/${name}`);
      let result = searchres.data.auctions;
      console.log(result);
    } catch (error) {
      console.error("Error occurred during search:", error);
      // Handle error here if necessary
    }
  }

    return(

        <div className="part_one  mx-auto   border-gray-700  relative  pb-32 z-30 shadow-2xl  drop-shadow-md   border-top-none">
        <div className="searchbar  flex justify-center mb-8  absolute -top-5 left-96 z-35">
          <form className="w-[500px] relative">
            <div className="relative">
              <input
                type="search"
                placeholder="Type Here"
                className="w-full text-cyan-50 p-4 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
                onChange={(e) => handleSearch(e)}
              />
              <button  className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#6900FF] rounded-full">
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
                <button className="border-white bottom-2  text-center bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline">
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

            <div className="dropdown dropdown-right ml-4 flex mt-[12%]">
              <button className="border-white bottom-2  text-center mx-auto bg-gray-400 rounded-2xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline">
                <p className="text-sm text-center p-[1.2%]"> Highest Bid🔥</p>
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
    )
}

export default Landing;