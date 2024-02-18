'use client'

const Smallcard = ()=>{

    return(

     

              <div className="card flex gap-3 border rounded-lg border-[#AEE2FF] shadow-xl drop-shadow-lg p-4">
                <div className="part1 ">
                    <div>
                        <img src="/images/auction.png" alt="" />
                        <div>
                            <p className="font-light">Auction:Type</p>
                            <p className=" font-bold"> NFT  Name</p>
                        </div>
                    </div>
                    <button className="w-full border rounded-lg border-blue-200 p-1 ">
                        <p className="text-sm">Ends in :  5d 6h 9m 37s</p>
                    </button>

                </div>
                <div className="part2">
                    <h2 className="font-bold text-blue-700 text-xl mb-[9%]">1.26 ETH</h2>
                    <button className="border tracking tracking-wide border-[#AEE2FF] hover:border-[#B799FF] rounded-2xl bg-blue-500 p-1 ml-3" >
            <p className="text-md font-bold text-white">Place Bid</p>
        </button>
                </div>

              </div>
       
    )

}

export  default Smallcard;