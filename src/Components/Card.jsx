import React, { useState } from "react";

const Card = ({value})=>{
  // console.log(value["Name"])
  return(
    <div className="border border-black rounded w-full max-w-[320px] h-auto p-5">
      <p className="text-lg md:text-xl"><span className="font-bold">Name: </span>{value.Name}</p>
      <p className="text-lg md:text-xl"><span className="font-bold">Branch Type: </span>{value.BranchType}</p>
      <p className="text-lg md:text-xl"><span className="font-bold">Delivery Status: </span>{value.DeliveryStatus}</p>
      <p className="text-lg md:text-xl"><span className="font-bold">District: </span>{value.District}</p>
      <p className="text-lg md:text-xl"><span className="font-bold">Division: </span>{value.Division}</p>
    </div>
  )
}

export default Card;