'use client'
import Image from "next/image";



export default function Home() {

    return (
        <div>
          
         <div className=" flex gap-4 bg-blue-400">
            <div className='left part'>
              <Image src={"/autheticate.png"} alt="" width={200} height={200}/>
            </div>
            <div className='right part'>
              <div className='w-79% mx-auto text-center'>
              <p>t our auction platform, we take the security and authenticity of every bid seriously. Our comprehensive authentication process ensures that only verified users participate, creating a safe and trustworthy environment for all. Bid with confidence, knowing that each transaction is backed by our commitment to maintaining the highest standards of integrity and security."</p>
  
              </div>
            </div>
  
  
         </div>
        </div>
    );
  }
  