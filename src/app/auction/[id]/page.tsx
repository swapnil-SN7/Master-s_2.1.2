"use client"
import  { useState, useEffect } from 'react';
import { Auction } from "@prisma/client";
import axios from "axios";

export default function Auctiondetails({params}:Props) {

            const [Auction,setAuctions] = useState<Auction[]>([]);
              useEffect(() => {
                (async () => {
                  const res = await axios.get(/api/getAuctionDetails/${params.id});
                  setAuctions(res.data.auctions);
               })();
                }, []);
              console.log(Auction)


       





    
  return <div>Auction</div>;
}