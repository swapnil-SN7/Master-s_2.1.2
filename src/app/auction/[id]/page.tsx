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
  

  return (
 
    <div className="container">
    <div>
      {
      auction.map((item, index) => (
        <div key={index} className="auction">
          <div className="Maintitle mx-auto">
            <h3>{item.title}</h3>
          </div>
          <div className="otherdetails">
            <p>Description: {item.description}</p>
            <p>Start Time: {item.startTime}</p>
            <p>End Time: {item.endTime}</p>
          </div>
          <div className="grid grid-cols-5 grid-flow-row gap-4 my-10">
            {item.listedItem.map((listed, idx) => (
              <div key={idx} className="listed-item">
               
              </div>
            ))}
          </div>
        </div>
      ))
      }
    </div>
  </div>
  
  );
}
