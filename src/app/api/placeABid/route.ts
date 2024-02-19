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
      currentPrice: true,
    },
  });

  if (!item) {
    return NextResponse.json({ status: "fail", msg: "No Item Found" });
  }

  if (item.bid.length > 0) {
    if (item.currentPrice >= price) {
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

    var upt = await prisma.item.update({
      where: {
        id: item_id,
      },
      data: {
        currentPrice: price,
      },
    });

    return NextResponse.json({
      status: "success",
      msg: "Bid Placed",
      current_price: price,
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

    var upt = await prisma.item.update({
      where: {
        id: item_id,
      },
      data: {
        currentPrice: price,
      },
    });

    return NextResponse.json({
      status: "success",
      msg: "Bid Placed",
      current_price: price,
    });
  }
}
