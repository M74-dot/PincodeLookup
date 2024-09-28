import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";

const Result = () =>{

    const location = useLocation();
    const {postData, inputValue} = location.state
    // console.log(inputValue)
    // console.log(postData)
    const [filterValue,setFilterValue]=useState("");


    const filteredPostOffices = filterValue
    ? postData[0].PostOffice.filter((postOffice) =>
        postOffice.Name.toLowerCase().includes(filterValue.toLowerCase())
      )
    : postData[0]?.PostOffice || [];


    return(
        <>
            {postData && postData.length>0 && (
          <div className="w-full max-w-[700px] m-auto mt-10">
            {console.log(postData[0].PostOffice)}
            <p className="font-bold text-lg md:text-xl">Pincode: {inputValue}</p>
            <p className="text-lg md:text-xl mt-3"><span className="font-bold">Message: </span>{postData[0].Message}</p>
            <input
              type="text"
              value={filterValue}
              placeholder="Filter"
              onChange={(e) => setFilterValue(e.target.value)}
              className="border w-full mt-5 p-3 rounded border-black"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3 mt-5 h-[400px] overflow-y-auto scrollbar-hide">
              {
                filteredPostOffices.map((value,index)=>(
                  <Card value={value} key={index}/>
                ))
              }
            </div>
            
          </div>
        )}
        </>
    )
}

export default Result