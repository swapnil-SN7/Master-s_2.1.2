"use client";

import { Auction } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import "./newHome.css"
function AuctionCard({ title, description, startTime, endTime }: Auction) {
  return <div>{/* display the auction card */}</div>;
}

export default function Home() {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  console.log(auctions);

  const currentTime = new Date();

  const liveAuctions = auctions.filter(
    (auction) => currentTime >= auction.startTime
  );

  const upcomingAuctions = auctions.filter(
    (auction) => currentTime < auction.startTime
  );

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
        <h1 className="text-left font-bold text-4xl text-black">Live Auctions</h1>
        <div className="grid grid-cols-3">
        {liveAuctions.map((item, index) => (
  <div className="csmall_card mt-8 mx-8 p-15" key={index}>
  <h1 className="text-center text-2xl font-bold">{item.title}</h1>
    <p className="text-xl p-5 ">{item.description}</p>
    
    <span className="font-bold text-2xl">Start Time: {item.startTime.toLocaleString()}</span>
    <span className="font-bold text-2xl">End  Time: {item.endTime.toLocaleString()}</span>
    

  </div>
))}

        </div>
      </section>
      <section className="upcoming-auctions">
      <h1 className="text-left font-bold text-4xl text-black">Upcoming Auctions</h1>
        <div className="grid grid-cols-3">
        {upcomingAuctions.map((item, index) => (
  <div className="csmall_card mt-8 mx-8 p-15" key={index}>
  <h1 className="text-center text-2xl font-bold">{item.title}</h1>
    <p className="text-xl p-5 ">{item.description}</p>
    
     
    <span className="font-bold text-2xl">Start Time: {item.startTime.toLocaleString()}</span>
    <span className="font-bold text-2xl">End  Time: {item.endTime.toLocaleString()}</span>
    

  </div>
))}
</div>

      </section>
      </div>
    </main>
  );
}
