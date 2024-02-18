import React from 'react'
import "./collections.css"
import Image from 'next/image'

const Collections = () => {
  return (
    <div>
<h1 className='text-4xl font-bold mt-10 text-left' >Trending Collections</h1>
<div className='collection_card mt-5 grid grid-cols-3  '>
    <div className='csmall_card mx-8 mt-8 flex flex-col align-center'>
    <Image className='mx-auto' alt="" height={200} width={200} src="/images/auction.jpg" />

    </div>
    
</div>
    </div>
  )
}

export default Collections