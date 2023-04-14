import { useState, useEffect } from "react"
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail"
import GlobalStyle from "./styles/GlobalStyle"

const App = () => {
 
  return (
   <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pages/Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>

   </>
  )
}

export default App
