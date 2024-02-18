"use client";
import { useState, useEffect } from "react";
import { Auction } from "@prisma/client";
import axios from "axios";

export default function Auctiondetails({ params }: { params: { id: string } }) {
  const [auction, setAuction] = useState<Auction>();
  console.log(auction);

  useEffect(() => {
    (async () => {
      const res = await axios.post("/api/getAuctionDetails", {
        auc_id: params.id,
      });
      setAuction(res.data.auction_details);
    })();
  }, [params.id]);

  return <div>Auction</div>;
}
