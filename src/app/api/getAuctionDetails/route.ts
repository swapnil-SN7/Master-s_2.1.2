import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

/*
    This API will Take Auction uuid( as auc_id ) in Request and return Auction Details including the
    items in the Auction
*/

export async function POST(req: Request) {
  const { auc_id } = await req.json();

  if (!auc_id) {
    return NextResponse.json({ status: "Fail", msg: "Invalid Params" });
  }

  let auc;

  try {
    auc = await prisma.auction.findFirstOrThrow({
      where: {
        id: auc_id,
      },
      select: {
        title: true,
        listedItems: true,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        return NextResponse.json({
          status: "Fail",
          msg: "Auction Does Not Exists",
        });
      }
    }
  }

  return NextResponse.json({ status: "success", auction_details: auc });
}
