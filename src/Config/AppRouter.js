import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Carditem from "../App__Screen/Carditem" 
function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Carditem/>} />
        </Routes>      
      </BrowserRouter>

    </>
  )
}

export default AppRouter