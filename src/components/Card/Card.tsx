'use client'
import { headers } from "next/headers";
import Image from "next/image";
import { MdHeight } from "react-icons/md";

const Card =()=>{

    return(

        <div className="card relative  h-[80%] w-[95%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7 m-4" >
    <div className="absolute">
   {/* <Image  src="/images/Product.jpg" alt="Profile Picture"/>  */}
    </div>
    <div className="flex ">
    <div className="flex flex-col gap-2 ">
        <p className=" font-light text-sm "> Started by</p>
        <h1 className="font-extrabold text-xl">Name</h1>
    </div>
    <div>
        
       
    </div>
  

    </div>

    <div className="flex-col items-center justify-start">
    <button className="border tracking tracking-wide border-[#AEE2FF] hover:border-[#B799FF] rounded-lg m-[2%]" >
            <p className="text-base p-1 text-blue-500">View Collections</p>
        </button>
       

        <button className="border tracking tracking-wide border-[#AEE2FF] hover:border-[#B799FF] rounded-2xl bg-blue-500 p-1 ml-3" >
            <p className="text-md font-bold text-white">Place Bid</p>
        </button>

    </div>
  

        </div>
    )
}

export default Card;