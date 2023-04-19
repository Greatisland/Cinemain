import { useAppSelector } from "../controllers/hooks"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styled from "styled-components"

const DetailContainer = styled.div`
  display: flex;
`

const ImgSection = styled.div`
  
`

const InfoSection = styled.div`
  
`

const Main = () => {
  const { allMovies, currentDetail } = useAppSelector(state => state.moviesData.moviesData)

  return (
    <DetailContainer>
      <Header />
      <ImgSection>
        <img src={`https://image.tmdb.org/t/p/w500/${currentDetail.poster_path}`} />
      </ImgSection>
      <InfoSection>
        <div>
        </div>
      </InfoSection>
      <Footer />
    </DetailContainer>
  )
}

export default Main