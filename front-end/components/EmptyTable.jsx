import React from 'react'
import Lottie from 'lottie-react'
import unavailable from "@/public/images/Animation - 1706087584140.json"

const EmptyTable = () => {
  return (
    <div>
         <div className="flex flex-col justify-center items-center m-auto h-80 w-3/5">
            <h1 className="text-4xl">No customer data available :(</h1>
            <Lottie animationData={unavailable}/>
        </div>
    </div>
  )
}

export default EmptyTable