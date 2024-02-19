"use client";
import { useState, useEffect, ChangeEvent, MouseEventHandler } from "react";
import axios from "axios";
import Image from "next/image";
import { Item } from "@prisma/client";
import { useSession } from "next-auth/react";

function Item({ item }: { item: Item }) {
  const { data } = useSession();
  const [bidPrice, setBidPrice] = useState(item.basePrice);
  const [currentBid, setCurrentBid] = useState(item.basePrice);
  const [errorMsg, setErrorMsg] = useState("");
  const bidderEmail = data?.user?.email;

  const handlePlaceBid: MouseEventHandler<HTMLButtonElement> = async (e) => {
    setErrorMsg("");
    const res2 = await axios.get(`/api/getBidderDetails/${bidderEmail}`);
    const bidderId = res2.data.bidder.id;

    const res = await axios.post("/api/placeABid", {
      bidder_id: bidderId,
      price: bidPrice,
      item_id: item.id,
    });
    console.log(res);
    if (res.data.status === "fail") {
      setErrorMsg(res.data.msg);
    } else {
      setErrorMsg("");
      setCurrentBid(res.data.current_price);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/api/ItemBids/${item.id}`);
      console.log(res);
      setCurrentBid(res.data.current_price);
    })();
  }, [item.id]);

  return (
    <div className="auction">
      <div className="card card relative  h-[80%] w-[95%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7 lg:h-fit lg:py-16  drop-shadow-lg ring-cyan-500 ">
        <div className="flex  gap-12 justify-around">
          <div className="text-blue-500 font-bold">{item.name}</div>
          <Image alt="dummyimage" src={"/imfo.png"} width={100} height={100} />
        </div>
        <div className="border rounded-xl h-[80%] border-gray-900 drop-shadow-lg bg-blue/60 text-center p-3 m-5 lg:p-7">
          <p className=" text-blue-500 font-semibold drop-shadow-md ">
            Description:
          </p>
          <p> {`${item.description}`}</p>
        </div>
        <div className="flex gap-4 justify-around ">
          <button>{item.tags}</button>
        </div>

        <div className="flex gap-3">
          <button className="border-white bottom-2  bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline mx-auto">
            <div className="bg-[#FFD700] size-3  rounded-lg m-1 "></div>
            <span>Base Price:- {item.basePrice}</span>
          </button>
          <button className="border-white bottom-2  bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline mx-auto">
            <div className="bg-[#FFD700] size-3  rounded-lg m-1 "></div>
            <span>Current Price:- {currentBid}</span>
          </button>
        </div>

        <div className="flex justify-around gap-4">
          <p className="text-sm">Start Date:- {item.startTime.toString()}</p>
          <p className="text-sm">End Date:- {item.endTime.toString()}</p>
        </div>
        <div className="flex gap-5">
          {/* <button className="border-white bottom-2  bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline mx-auto">
            <div className="bg-[#2a97e5] size-3  rounded-lg m-1 "></div>
            <span className="drop-shadow-md text-sm font-medium">
              Bidder ID:- {item.bidderId}
            </span>
          </button> */}
          <button className="border-white bottom-2  bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border  m-4 p-2 flex justify-around content-baseline mx-auto">
            <div className="bg-[#2852d1] size-3  rounded-lg m-1 "></div>
            <span className="drop-shadow-md text-sm font-medium">
              Auction Id:- {item.auctionId}
            </span>
          </button>
        </div>
        {errorMsg !== "" ? (
          <div className="text-red-500">{errorMsg}</div>
        ) : (
          <div></div>
        )}
        <div className="mx-auto flex justify-center gap-4">
          <input
            className="rounded-md text-center"
            type="text"
            value={bidPrice}
            onChange={(e) => setBidPrice(+e.target.value)}
          />
          <button
            className="border ring-2 rounded-lg p-1 w-[50%] text-white bg-blue-700"
            onClick={handlePlaceBid}
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Auctiondetails({ params }: { params: { id: string } }) {
  const [auction, setAuction] = useState<{
    title: string;
    listedItems: {
      id: string;
      name: string;
      description: string;
      tags: string[];
      has3dModel: boolean;
      basePrice: number;
      currentPrice: number;
      startTime: Date;
      endTime: Date;
      bidderId: string | null;
      auctionId: string;
    }[];
  }>();

  useEffect(() => {
    (async () => {
      const res = await axios.post("/api/getAuctionDetails", {
        auc_id: params.id,
      });
      setAuction(res.data.auction_details);
    })();
  }, [params.id]);

  return (
    <div className="container mx-auto text-center">
      <div className="maintitle mx-auto text-2xl font-semibold">
        {auction?.title}
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-6 my-10 p-5">
        {auction?.listedItems.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
