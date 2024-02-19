"use client";

import Dropdown from "@/components/Dropdown";
import { Auction } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import Landing from "@/components/Landing/Landing";
import { useRouter } from "next/navigation";
import Image from "next/image";

function AuctionCard({ title, description, startTime, endTime }: Auction) {
  return <div>{/* display the auction card */}</div>;
}

export default function Home() {
  const { push } = useRouter();
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
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/getAllAuctions");
        setAuctions(res.data.auctions);
      } catch (error) {
        // Handle the error, e.g., log it or show a user-friendly message
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Landing />

      <div className="w-11/12 mx-auto p-7">
        <div className="m-7 w-[90%] border border-blue-600 rounded-xl mx-auto shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          <div className="All_data flex justify-between items-center gap-4">
            <div className="leftpart">
              <p className="p-2 font-extrabold text-2xl text-[#6900FF]">
                Live Auction
              </p>
              <button className="btn border rounded-xl  border-blue-500 ring-yellow-500 p-1 ">
                ^$# Live Auction
              </button>

              <div className="flex justify-center gap-2">
                <Dropdown val={"Sort"} />
                <Dropdown val={"Filter"} />
              </div>

              <div className=" grid-cols-2 grid-flow-row gap-y-8 gap-x-4 sm:grid">
                {liveAuctions.map((item, index) => (
                  <div
                    key={index}
                    className="card relative  h-[80%] w-[95%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7 m-4 content-center mx-auto"
                  >
                    <div className="content-center font-medium mx-auto">
                      <p className="font-medium text-blue-400 text-xl">
                        {item.title}
                      </p>
                    </div>
                    <div className="ds mx-auto">
                      <h1 className=" font-bold text-sm">Description</h1>
                      <p>{item.description}</p>
                    </div>

                    <div className="flex justify-around gap-4 m-4 border rounded-md p-2 border-[#AEE2FF]">
                      <p className="text-sm">
                        Start Date;- {item.startTime.toString()}
                      </p>
                      <p className="text-sm">
                        End Date;- {item.endTime.toString()}
                      </p>
                    </div>

                    <div className=" mx-auto">
                      <button
                        onClick={(e) => push(`/auction/${item.id}`)}
                        className="border tracking tracking-wide border-[#AEE2FF] hover:border-[#B799FF] rounded-lg m-[2%]"
                      >
                        <p className="text-base p-1 text-blue-500">
                          View Collections
                        </p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="m-7 w-[90%] border border-blue-600 rounded-xl mx-auto shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          <div className="rightpart">
            <div className="grid grid-cols-2 grid-flow-row gap-y-6 p-7 border rounded-lg ring-2 drop-shadow-xl content-center   w-[50%] mx-auto  mt-[7%]  mb-[4%]">
              <h2 className="font-bold text-[#6900FF] text-lg">
                Upcoming Auction
              </h2>

              {upcomingAuctions.map((item, index) => (
                <div
                  key={index}
                  className="card flex gap-3 border rounded-lg border-[#AEE2FF] shadow-xl drop-shadow-lg p-4"
                >
                  <div className="part1 ">
                    <div>
                      <Image
                        src="/images/auction.png"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <div>
                        <p className="font-light">{item.id}</p>
                        <p className=" font-bold"> {item.title}</p>
                      </div>
                    </div>
                    <button className="w-full border rounded-lg border-blue-200 p-1 ">
                      <p className="text-sm">
                        Starts on : {item.startTime.toString()}
                      </p>
                      <p className="text-sm">
                        Ends on : {item.endTime.toString()}
                      </p>
                    </button>
                  </div>
                  <div className="part2">
                    <h2 className="font-bold text-blue-700 text-xl mb-[9%]">
                      {item.organiserId}
                    </h2>
                    <button className="border tracking tracking-wide border-[#AEE2FF] hover:border-[#B799FF] rounded-2xl bg-blue-500 p-1 ml-3">
                      <p className="text-md font-bold text-white">Place Bid</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
