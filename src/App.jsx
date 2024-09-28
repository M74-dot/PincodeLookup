import React, { useState } from "react";
import Home from "./Components/home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Result from "./Components/Result";


const App = ()=>{

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/result" element={<Result/>} />
        </Routes>
      </BrowserRouter>   
    </div>
  )
}

export default App;