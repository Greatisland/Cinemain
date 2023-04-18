import { useSelector } from "react-redux"
import styled from "styled-components"
import { Link } from "react-router-dom"


interface CarouselContainerProps {
  background?: string;
}

const CarouselContainer = styled.div<CarouselContainerProps>`
  width: 100%;
  height: 480px;
  background: url('https://image.tmdb.org/t/p/original/${props => props.background}') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding: 0 50px;
  box-sizing: border-box;

  h3 {
    font-size: 4em;
  }
  a {
    background: #fff;
    color: #333;
    font-size: 0.8em;
    letter-spacing: 0.01em;
    padding: 4px 10px;
    :hover {
      background: #333;
      color: #fff;
    }
  }
  p {
    width: 40%;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    line-height: 1.3em;
    display: -webkit-box;
    max-height: 6.5em;
    word-wrap: break-word;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;


const Carousel = () => {
  //매번 다른 carousel이 나오도록 랜덤 난수화 적용
  let randomNumber = Math.floor(Math.random() * 10) - 1

  const { weeklyBoxOffice } = useSelector(state => state?.moviesData?.moviesData)

  return (
    <CarouselContainer background={weeklyBoxOffice[randomNumber]?.backdrop_path}>
      <h3>{weeklyBoxOffice?.[randomNumber]?.title}</h3>
      <Link to='../pages/Detail'>바로가기</Link>
      <p>{weeklyBoxOffice?.[randomNumber]?.overview}</p>
    </CarouselContainer>
  )
}

export default Carousel