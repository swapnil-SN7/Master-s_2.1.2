
'use client'

import exp from "constants"

 import { useState, useEffect, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

let list = [
    {
         "var": "Latest"

},
    {
        "var": "Upcoming"
    },
        {
            "var": "Closed"
        }

]
const Dropdown =(props: { val: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; })=>{
    const [isopen,setIsopnen] = useState(false);
        return(

            <div className="relative flex flex-col items-center w-[150px] h[50px] rounded-md mt-3">
                <button  onClick={()=>setIsopnen(!isopen)}  className="  p-1 w-full flex  items-center justify-between font-semibold rounded-lg tracking-wider border-4  border-transparent active:hover:border-white duration-300 active:text-white">
                    {props.val}
                    {
                        !isopen ?(
                            <AiOutlineCaretDown className="h-8"/>
                        ):(
                            <AiOutlineCaretUp className=" h-8"/>
                        )
                    }
                </button>
                {isopen && <div className=" absolute top-16 flex flex-col items-start  full border rounded-lg border-blue-500 p-4 ">
                        {list.map((item,i)=>(
                            <div className="flex w-full justify-between hover:bg-[#B799FF] cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4  " key={i}>
                                <h3 className="  font-light">{item.var}</h3>
                            </div>

                        ))}
                
                    </div>}
            </div>
        )


}

export default Dropdown;