import Carousel from "../components/Carousel"
import MovieList from "../components/MovieList"
import Header from "../components/Header"
import Footer from "../components/Footer"
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
     <MovieList kind='dailyBoxOffice' title='일일 박스오피스' />
     <MovieList kind='popularity' title='가장 인기있는 영화' />
     <MovieList kind='release_date' title='최신 영화' />
     <MovieList kind='vote_average' title='평점이 높은 영화' />
     <Footer />
    </MainContainer>
  )
}

export default Main