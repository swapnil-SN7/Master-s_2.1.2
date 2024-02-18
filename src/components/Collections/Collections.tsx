import React from "react";
import Image from "next/image";
import "./collections.css"; // Make sure to include your custom styles if needed
// import styles from "./collections.module.css"; // Import module styles if needed

const Collections = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mt-10 text-left">
        Trending Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className={`csmall_card  mb-8`}>
            <Image
              className="mx-auto"
              alt=""
              height={200}
              width={200}
              src="/images/auction.png"
            />
            <h1 className="text-center text-xl font-bold mt-4">
              Collection Name
            </h1>
            <h3 className="text-center text-xl">By Artist</h3>
            <div className="flex justify-between mt-2">
              <span className="text-left text-black">Current Bid:</span>
              <span className="font-bold text-xl">$12</span>
            </div>
            <button className="bg-blue-800 w-full md:w-52 h-9 rounded-2xl text-white font-semibold text-center mx-auto mt-4 hover:bg-blue-500">
              Place Bid
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
