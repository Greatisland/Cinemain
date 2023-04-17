import { Link } from "react-router-dom"
import Carousel from "../components/Carousel"
import DailyBoxOffice from "../components/DailyBoxOffice"
import Header from "../components/Header"
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Main = () => {
  return (
    <MainContainer>
     <Header />
     <Carousel />
     <DailyBoxOffice />
     <Link to='./pages/Detail'><p>간당!</p></Link>
    </MainContainer>
  )
}

export default Main