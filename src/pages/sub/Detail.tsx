import { useAppSelector } from "../../controllers/hooks"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

const DetailContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 100px 0 0;
  gap: 40px;
  justify-content: center;
`

const InfoSection = styled.div`
  display: flex;
  flex: 1;
  max-width: 700px;
  flex-direction: column;
  justify-content: center;
  section {
    display: flex;
    width: 100%;
    align-items: flex-end;
    gap: 5px;
    h3 {
      flex: 1;
      font-size: 2.2em;
    }
    span {
      font-size: 1.4em;
      font-weight: 700;
    }
  }
`

const SubTitle = styled.p`
  color: #777;
`

const OverviewSection = styled.div`
  padding: 50px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  span {
    width: 100%;
    font-weight: 700;
    font-size: 1em;
    ::after {
      content: '';
      display: block;
      width: 70px;
      margin: 10px 0 0;
      height: 3px;
      background: #07d4a8b7;
    }
  }

  strong {color: #777;}

  p {
    width: 100%;
    letter-spacing: 0.02em;
  }

  ul {
    display: flex;
    gap: 0.5em;

    li {
      //마지막 요소를 제외한 모든 요소에 쉼표 찍음
      &:not(:last-child)::after {
        content: ',';
        display: inline-block;
      }
    }
  }
`

const Detail = () => {
  const { genres } = useAppSelector(state => state.moviesData.moviesData)
  const location = useLocation()
  return (
    <DetailContainer>
      <Header />
      <img src={`https://image.tmdb.org/t/p/w500/${location.state.poster_path}`} />
      <InfoSection>
        <section>
          <h3>{location.state.title}</h3>
          <span>{Math.floor(Number(location.state.vote_average)*10)/10}</span>
          <span>☆</span>
        </section>
        <SubTitle>{location.state.release_date?.split('-')[0]}{location.state.adult?'| 청소년 관람 불가': null}</SubTitle>   
        <OverviewSection>
          <span>OVERVIEW</span>
          <p>{location.state.overview}</p>
          <strong>장르</strong>
          <ul>
          {location.state?.genre_ids?.map((genre: number) => (
            <li>{genres[genre]}</li>
          ))}
          </ul>
        </OverviewSection>     
      </InfoSection>
      <Footer />
    </DetailContainer>
  )
}

export default Detail