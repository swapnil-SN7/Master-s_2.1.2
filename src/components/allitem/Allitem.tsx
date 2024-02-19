'use client'
import Image from "next/image";

const Allitem = ()=>{




    return(

        <div>
             <div className="mainheading mx-auto ">

      <h1 className="font-medium text-3xl text-blue-600 text-center">Name</h1>
         </div>

            <div className="container mx-auto flex gap-9">
           

                <div className="leftpart rounded-md  w-[50%] h-fit  mx-auto relative p-2" >
                    <div className="w-[70%] mx-auto">


                    <div className="border rounded-lg drop-shadow-lg p-2 m-3 ">
                    <Image src={"/imfo.png"} alt="" width={200} height={250}/> 

                    </div>
                    <div className="mx-auto text-center">
                            <h2 className="font-bold text-lg">Description:-</h2>
                            <div className="w-[80%] font-normal text-blue-500 mx-auto ">
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit beatae asperiores corporis accusamus rem vero?</p>
                            </div>

                    </div>
                    <div>
                    <div className="flex justify-around gap-4 m-4 border rounded-md p-2 border-[#AEE2FF] ring-1 hover:ring-4">
                      <p className="text-sm">
                        Start Date;- {"item.startTime.toString()"}
                      </p>
                      <p className="text-sm">
                        End Date;- {"item.endTime.toString()"}
                      </p>
                    </div>

                    </div>
                    
                
                    </div>
                   
                
            

                </div>

                <div className="rightpart mx-auto font-bold ">

                    <div>
                        <button className="bg-red-600 rounded-md p-3 text-pretty shadow-md ring-2">Live Auction</button>
                    </div>
                    <div className="border rounded-xl border-blue-600 m-3"></div>


                </div>


           
      

        </div>

        </div>
       

    ) 

}

export default Allitem;