import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

/*
    Make a GET Request to This api To get all The Availale Auction to Display on the Dashboard

*/

export async function GET(req: Request) {
  const auctions = await prisma.auction.findMany({});

  if (auctions) {
    return NextResponse.json({
      status: "success",
      msg: auctions.length + " available Auctions",
      auctions,
    });
  } else {
    return NextResponse.json({
      status: "success",
      msg: "No available Auctions",
    });
  }
}
