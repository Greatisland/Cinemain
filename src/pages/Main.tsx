import { Link } from "react-router-dom"
import Carousel from "../components/Carousel"
import MovieList from "../components/MovieList"
import Header from "../components/Header"
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Main = () => {
  return (
    <MainContainer>
     <Header />
     <Carousel />
     <MovieList kind='dailyBoxOffice' />
     <MovieList kind='weeklyBoxOffice' />
     <MovieList kind='' />
    </MainContainer>
  )
}

export default Main