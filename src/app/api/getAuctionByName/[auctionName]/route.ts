import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

/*
    Make a Get Request to this app at the end of url 
     /auc_name 
    This will find all auction with name given by user 

*/

export async function GET(req: Request) {
  let auc_Name = await req.url.slice(req.url.lastIndexOf("/") + 1);
  auc_Name = decodeURI(auc_Name);

  const auctions = await prisma.auction.findMany({
    where: {
      title: auc_Name,
    },
  });

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
