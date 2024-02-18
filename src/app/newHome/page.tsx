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

  const currentTime = Date.now();

  const liveAuctions = auctions.filter(
    (auction) => currentTime >= auction.startTime.getTime()
  );

  const upcomingAuctions = auctions.filter(
    (auction) => currentTime < auction.startTime.getTime()
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
          <h1 className="text-left font-bold text-4xl text-black">
            Live Auctions
          </h1>
          <div className="grid grid-cols-3">
            {liveAuctions.map((item, index) => (
              <div className="csmall_card mt-8 mx-8" key={index}>
                <h1 className="text-center">{item.title}</h1>
                <p>{item.description}</p>

                <span>Start Time: {item.startTime.toLocaleString()}</span>
                <span>End Time: {item.endTime.toLocaleString()}</span>
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
