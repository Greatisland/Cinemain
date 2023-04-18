import { useSelector } from "react-redux"
import styled from "styled-components"

const CarouselContainer = styled.div`
  width: 100%;
  height: 480px;
  background: url('https://image.tmdb.org/t/p/original/${props => props.image}') no-repeat center center/cover;
`;


const Carousel = () => {
  const { weeklyBoxOffice } = useSelector(state => state?.moviesData?.moviesData)
  console.log(weeklyBoxOffice[0]?.backdrop_path)
  return (
    <CarouselContainer image={weeklyBoxOffice[0]?.backdrop_path}>

    </CarouselContainer>
  )
}

export default Carousel