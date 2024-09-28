import React, {useState} from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Home = ()=>{

  const [inputValue,setInputValue]=useState("")
  const [inputError,setInputError]=useState("")
  const [fetchError,setFetchError]=useState("");
  const [isLoading,setIsLoading]=useState(false)
  const [postData,setPostData]=useState([]);
  const navigate = useNavigate();

  const handleOnSubmit = async () =>{
    // console.log("called")
    setFetchError("");
    if(inputValue.trim()===""){
      setInputError(
        <>
          <span className="text-red-500 mt-3 font-bold">Please enter pincode.</span>
        </>
      )
      return;
    }
    else if(inputValue.trim().length!==6){
      setInputError(
        <>
          <span className="text-red-500 mt-3 font-bold">Pincode should be of 6 digits.</span>
        </>
      )
      return;
    }
    setInputError("");
    setIsLoading(true);

    try{
      // console.log("clicked")
      const response = await fetch(`https://api.postalpincode.in/pincode/${inputValue}`)
      // console.log(response)
      const data = await response.json();
      // console.log(data)
      if(data[0].Status==="Error" || data===""){
        setFetchError(
          <>
            <span className="text-red-500 mt-3 font-bold">Couldn't find the postal data you’re looking for...</span>
          </>
        )
      }else{
        setPostData(data)
        // console.log(postData)
        setFetchError("")
        navigate("/result",{state:{postData: data,inputValue}})
      }
    }catch(err){
      setFetchError(
        <>
          <span className="text-red-500 mt-3 font-bold">Error fetching the data</span>
        </>
      )
    }finally{
      setIsLoading(false);
    }
    
  }


  return(
    <div>
      <form onSubmit={(e)=>e.preventDefault()} className="w-full max-w-[500px] m-auto min-h-screen mt-[50px]">
        <label htmlFor="pincode" className="text-3xl font-bold md:text-3xl">Enter Pincode</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          className="border w-full mt-5 p-3 rounded border-black"
        />
        {inputError && <p>{inputError}</p>}
        <button 
          className="border rounded px-[50px] py-2 mt-5 bg-black text-white"
          onClick={handleOnSubmit}
        >
          Lookup
        </button>
        {isLoading && <p className="text-green-500 font-bold mt-3">Loading...</p>}
        {fetchError && <p>{fetchError}</p>}
        </form>
    </div>
  )
}

export default Home;