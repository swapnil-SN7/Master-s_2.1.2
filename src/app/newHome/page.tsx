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
    <div>
      <section className="live-auctions"></section>
      <section className="upcoming-auctions"></section>
    </div>
  );
}
