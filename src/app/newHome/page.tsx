"use client";

import { Auction } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

function AuctionCard({ title, description, startTime, endTime }: Auction) {
  return <div>{/* display the auction card */}</div>;
}

export default function Home() {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  console.log(auctions);

  const currentTimeString = new Date().toISOString();
  const currentTime = new Date(currentTimeString).getTime();

  const liveAuctions = auctions.filter((auction) => {
    const startTimeString = new Date(auction.startTime).toISOString();
    const startTime = new Date(startTimeString).getTime();
    return currentTime >= startTime;
  });

  const upcomingAuctions = auctions.filter((auction) => {
    const startTimeString = new Date(auction.startTime).toISOString();
    const startTime = new Date(startTimeString).getTime();
    return currentTime < startTime;
  });

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/getAllAuctions");
      setAuctions(res.data.auctions);
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-10">
      <div className="container mt-24 mx-auto px-12 py-3">
        <section className="live-auctions">
          <h1 className="text-left font-bold text-4xl text-black">
            Live Auctions
          </h1>
          <div className="grid grid-cols-3">
            {liveAuctions.map((item, index) => (
              // <div className="csmall_card mt-8 mx-8" key={index}>
              //   <h1 className="text-center">{item.title}</h1>
              //   <p>{item.description}</p>

              //   <span>Start Time: {item.startTime.toLocaleString()}</span>
              //   <span>End Time: {item.endTime.toLocaleString()}</span>
              // </div>
              
    //           <div key={index} className="auction">
    //           <div className="card card relative  h-[80%] w-[95%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7 lg:h-fit lg:py-16  drop-shadow-lg ring-cyan-500 ">
    //           <div className="flex justify-center gap-7 ">
    //           <div className="text-blue-500 font-bold">{item.title}</div>
    //           <p  className='text-lg font-bold border rounded-lg border-blue-400 w-[30%]  text-center'>{item.id}</p>
    //           </div>
    //           <div className="border rounded-xl h-[80%] border-gray-900 drop-shadow-lg bg-blue/60 text-center p-3 m-5 lg:p-7">
    //               <p className=" text-blue-500 font-semibold drop-shadow-md ">Description:</p>
    //               <p> {`${item.description}`}</p>
    //           </div>
              
              
    //           <div className="flex justify-around gap-4">
    //           <p className="text-sm">Start Date;- {item.startTime.toString()}</p>
    //           <p className="text-sm">End Date;- {item.endTime.toString()}</p>
    //           </div>
              


    //           </div>


      
    // </div>
    <div className="card relative  h-[80%] w-[95%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7 m-4 content-center mx-auto"  key={index}>
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


            ))}
          </div>
        </section>
        <section className="upcoming-auctions">
          <h1 className="text-left font-bold text-4xl text-black">
            Upcoming Auctions
          </h1>
          <div className="grid grid-cols-3">
            {upcomingAuctions.map((item, index) => (
              <div className="csmall_card mt-8 mx-8" key={index}>
                <h1 className="text-center">{item.title}</h1>
                <p>{item.description}</p>

                <span>Start Time: {item.startTime.toLocaleString()}</span>
                <span>End Time: {item.endTime.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
