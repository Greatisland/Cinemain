import { useState, useEffect } from "react"
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail"
import GlobalStyle from "./styles/GlobalStyle"
import { getTodos } from "./components/logic/slice";
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const { dailyBoxOfficeList } = useSelector((state) => state.todoList)
  useEffect(() => {
    dispatch(getTodos())
  },[dispatch])
 
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
