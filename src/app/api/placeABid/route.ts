import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { bidder_id, price, item_id } = await req.json();

  let bid;

  const item = await prisma.item.findFirst({
    where: {
      id: item_id,
    },
    select: {
      bid: true,
      basePrice: true,
    },
  });

  if (!item) {
    return NextResponse.json({ status: "fail", msg: "No Item Found" });
  }

  if (item.bid.length > 0) {
    if (item.bid[item.bid.length - 1].price >= price) {
      return NextResponse.json({
        status: "fail",
        msg: "Current Bid Less The Previous Bid",
      });
    }

    try {
      bid = await prisma.bid.create({
        data: {
          bidderId: bidder_id,
          itemId: item_id,
          price: price,
        },
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        return NextResponse.json({
          status: "fail",
          msg: err.message,
        });
      }
    }

    return NextResponse.json({
      status: "success",
      msg: "Bid Placed",
      current_Price: price,
    });
  } else {
    if (item.basePrice > price) {
      return NextResponse.json({
        status: "fail",
        msg: "Current Bid Less The Previous Bid",
      });
    }

    try {
      bid = await prisma.bid.create({
        data: {
          bidderId: bidder_id,
          itemId: item_id,
          price: price,
        },
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        return NextResponse.json({
          status: "fail",
          msg: err.message,
        });
      }
    }

    return NextResponse.json({
      status: "success",
      msg: "Bid Placed",
      current_Price: price,
    });
  }
}
