import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { getMoviesData } from "./controllers/slice"
import { useAppDispatch } from "./controllers/hooks"
import Main from "./pages/Main"
import Detail from "./pages/sub/Detail"
import GridList from "./pages/sub/GridList"
import GlobalStyle from "./styles/GlobalStyle"
import SubPages from "./pages/sub/SubPages"
import BoxOffice from "./pages/sub/BoxOffice"
import ScrollToTop from "./components/ScrollToTop"


const App = () => {
  const dispatch = useAppDispatch()

  //app이 처음 렌더링 될 때 getMoviesData를 실행하여 모든 필요한 fetch요청을 수행한 후 state에 담음.
  useEffect(() => {
    dispatch(getMoviesData())
  },[])
  return (
   <>
    <GlobalStyle />
    <BrowserRouter>
      {/* ScrollToTop = 페이지 이동 시 스크롤 초기화 */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pages/sub" element={<SubPages children />} />
        <Route path="/pages/sub/Detail" element={<Detail />} />
        <Route path="/pages/sub/GridList" element={<GridList />} />
        <Route path="/pages/sub/BoxOffice" element={<BoxOffice />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App