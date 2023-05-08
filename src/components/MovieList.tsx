import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useAppSelector } from '../controllers/hooks'
import setMoviesSortFunc from '../controllers/setMoviesSortFunc'
import type { MovieInfo } from '../controllers/slice'
import 'swiper/css'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'


const MovieListContainer = styled.div`
  width: 100%;
  padding: 0 50px;
  @media screen and (max-width: 640px) {
    padding: 0 20px;
  }
  box-sizing: border-box;
  h3 {
    font-size: 1.7em;
    margin: 0 0 20px;
    a::after {
      content: 'View all';
      font-size: 0.6em;
      margin: 0 10px;
      color: #07d4a8b7;
      letter-spacing: 0.04em;
    }
  }
  /* ul {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    li {
      display: flex;
      flex-wrap: wrap;
      img {                  
        min-height: 278px;
      }
      p {
        max-width: 185px;
        letter-spacing: -0.04em;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding: 0 3px;
      }
      span {
        font-size: 0.8em;
      }
    }
  } */
  .swiper {
    &-wrapper,
    &-container {
      width: 100%;
      margin: 0;
    }
    &-slide {
      flex: 1;
      img {                  
        min-height: 278px;
        @media screen and (max-width: 640px) {
          min-height: auto;
          max-width: 125px;
        }
      }
      p {
        max-width: 185px;
        @media screen and (max-width: 640px) {
          max-width: 125px;
        }
        letter-spacing: -0.04em;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding: 0 3px;
        box-sizing: border-box;
      }
      span {
        font-size: 0.8em;
      }
    }
  }
`

interface Props {
  kind: string
  title: string
}

const MovieList = ({ kind, title }: Props) => {

  //필요한 정보를 state로부터 가져옴. 
  const { dailyBoxOffice, allMovies } = useAppSelector(state => state.moviesData.moviesData)

  //조건부 렌더링 위한 if문
  let movieList: MovieInfo[] = []
  if(kind==='dailyBoxOffice'){
    movieList = dailyBoxOffice ?? []
  }else if(typeof kind === "string"){
    movieList = setMoviesSortFunc(kind, allMovies) || []
  }else{
    movieList = []
  }

  const setting: SwiperProps = {
    slidesPerView: "auto",
  }

  return (
    <MovieListContainer>
      <h3>
        <Link to={kind==='dailyBoxOffice'?'pages/sub/BoxOffice':'pages/sub/GridList'} state={kind}>{title}</Link>
      </h3>
      <Swiper {...setting}>
        {movieList?.slice(0, 10).map((movie: MovieInfo, i: number) => (
          <SwiperSlide key={i}>
            <Link to={'pages/sub/Detail'} state={movie}>
              {movie?.poster_path && <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />}
              <p>{movie?.title}</p>
              <span>{
              kind==='dailyBoxOffice'?i+1+'위':
              kind==='popularity'?Math.floor(movie[kind as keyof MovieInfo] as number)+'점':movie[kind as keyof MovieInfo]
              }</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </MovieListContainer>
  )
}

export default MovieList