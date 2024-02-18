

'use client'
import Card from "../Card/Card";
import Dropdown from "../Dropdown";
// import Smallcard from "@components/Smallcard/Smallcard"
import Smallcard from "../Smallcard/Smallcard";
import { useState,useEffect } from "react";
import axios from "axios";
const Liveauction =()=>{
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/getAllAuctions");
      let auctiondata =await res.data.auctions;
      setAuctions(auctiondata);
      console.log(auctiondata)
    })();
  }, []);
    return(
      <div className="w-11/12 mx-auto p-7">


     <div>
       
     
    
     </div> 
       <div className="All_data flex justify-between items-center gap-4">

       <div className="leftpart">
       <p className="p-2 font-extrabold text-2xl text-[#6900FF]">Live Auction</p> 
        <button className="btn border rounded-xl  border-blue-500 ring-yellow-500 p-1 ">
            ^$# Live Auction
        </button>
           

           <div className="flex justify-center gap-2">
           <Dropdown val={"Sort"}/>
          <Dropdown val={"Filter"}/>
           </div>
          
          <div className=" grid-cols-2 grid-flow-row gap-y-8 gap-x-4 sm:grid">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>


          </div>

       </div>
     <div className="rightpart">


        <div className="grid grid-cols-1 grid-flow-row gap-y-6 p-7 border rounded-lg ring-2 drop-shadow-xl ">
           <h2 className="font-bold text-[#6900FF] text-lg">Top Bids</h2>
            <Smallcard/>
            <Smallcard/>
            <Smallcard/>
            <Smallcard/>
            <Smallcard/>
            

            
        </div>
     </div>

       </div>
    

      </div>

    )
    
}

export default Liveauction;