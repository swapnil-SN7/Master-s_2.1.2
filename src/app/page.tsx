"use client";

import Dropdown from "@/components/Dropdown";
import { Auction } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import Landing from "@/components/Landing/Landing";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

function AuctionCard({ title, description, startTime, endTime }: Auction) {
  return <div>{/* display the auction card */}</div>;
}

export default function Home() {
  const { push } = useRouter();

  const { data, status } = useSession();
  if (status !== "authenticated") {
    push("/api/auth/signin");
  }
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
      <nav className="flex gap-2 justify-end items-center p-5">
        <Image
          src={data?.user?.image as string}
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-xl">{data?.user?.name}</p>
        <button
          className="rounded border px-2 py-1 bg-slate-50 text-lg"
          onClick={(e) => signOut()}
        >
          Logout
        </button>
      </nav>

      <Landing />

      <div className="w-11/12 mx-auto p-7">
        <div className="m-7 w-[90%] border border-blue-600 rounded-xl mx-auto shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          <div className="All_data mx-auto ">
            <div className="leftpart p-4">
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

              {/* <div className="grid-flow-row grid-cols-1 gap-y-8 gap-x-4 sm:grid"> */}
              <div className="flex gap-2 flex-wrap justify-center mx-auto ali">
                {liveAuctions.map((item, index) => (
                  <div
                    key={index}
                    className="card h-[80%] w-[50%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7 m-4 content-center mx-auto"
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
        <div className="m-7 p-3 w-[90%] border border-blue-600 rounded-xl mx-auto shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          <div className="rightpart">
            <h2 className="font-bold text-[#6900FF] text-2xl m-4">
              Upcoming Auction
            </h2>
            {/* <div className="grid grid-cols-2 grid-flow-row gap-y-6 p-7 rounded-lg content-center w-[50%] mx-auto mt-[7%] mb-[4%]"> */}
            <div className="flex flex-wrap gap-2 justify-center">
              {upcomingAuctions.map((item, index) => (
                <div
                  key={index}
                  className="card w-0.5/2 flex justify-center gap-2 border rounded-lg border-[#AEE2FF] shadow-xl drop-shadow-lg p-2 pb-[4%]"
                >
                  <div className="part1 m-1 mx-auto flex flex-col justify-center ">
                    <div className=" mx-auto">
                      <Image
                        src="/images/auction.png"
                        alt=""
                        height={150}
                        width={170}
                      />
                      <div className="mb-[5%]">
                        <p className=" font-bold text-center "> {item.title}</p>
                      </div>
                    </div>
                    <button className="w-[80%] border flex gap-2 rounded-lg border-blue-200 p-1 mx-auto ">
                      <p className="text-sm">
                        Starts on : {item.startTime.toString()}
                      </p>
                      <p className="text-sm">
                        Ends on : {item.endTime.toString()}
                      </p>
                    </button>
                  </div>
                  <div className="part2 mt-28">
                    <button className="border mt tracking tracking-wide border-[#AEE2FF] hover:border-[#B799FF] rounded-2xl bg-blue-500 p-2 ml-3">
                      <p className="text-md font-bold text-white p-1">
                        Place Bid
                      </p>
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
