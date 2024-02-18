'use client'
import { headers } from "next/headers";
import Image from "next/image";
import { MdHeight } from "react-icons/md";

const Card =()=>{

    return(

        <div className="card relative  h-[80%] w-[95%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7 m-4 content-center mx-auto" >
            <div className="content-center font-medium mx-auto"  > 
          <p className="font-medium text-blue-400 text-xl">Title</p>
            </div>
             <div className="ds mx-auto">
                <h1 className=" font-bold text-sm">Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, soluta.</p>
             </div>

             <div className="flex justify-around gap-4 m-4 border rounded-md p-2 border-[#AEE2FF]">
<p className="text-sm">Start Date;- {"12-2"}</p>
<p className="text-sm">End Date;- {"12-4"}</p>
</div>

    <div className="flex mx-auto">
    <button className="border tracking tracking-wide border-[#AEE2FF] hover:border-[#B799FF] rounded-lg m-[2%]" >
            <p className="text-base p-1 text-blue-500">View Collections</p>
        </button>
       

        <button className="border tracking tracking-wide border-[#AEE2FF] hover:border-[#B799FF] rounded-2xl bg-blue-500 p-1 ml-3" >
            <p className="text-md font-bold text-white">Place Bid</p>
        </button>

    </div>
  

        </div>

/* <div  className="auction">
<div className="card card relative  h-[80%] w-[80%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-2 lg:h-fit lg:py-16   drop-shadow-lg ring-cyan-500 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
<div className="flex justify-center gap-7 ">
<div className="text-blue-500 font-bold">{"item.title"}</div>
</div>
<div className="border rounded-xl h-[80%] drop-shadow-lg bg-blue/60 text-center p-3 m-5 lg:p-7 shadow-xl">
    <p className=" text-blue-500 font-semibold drop-shadow-md ">Description:</p>
    <p className="w-[90%] overflow-x-hidden"> {`${"item.description lorelajfdskakjllalflklkaflkjlalkflkjalkflj;lfjaflajflaldfjakjlflajlfjlafjakjl a faklfjlaljfjla  afdalfd;lalfj"}`}</p>
</div>


<div className="flex justify-around gap-4">
<p className="text-sm">Start Date;- {"12-2"}</p>
<p className="text-sm">End Date;- {"12-4"}</p>
</div>



</div>



</div> */



    )
}

export default Card;