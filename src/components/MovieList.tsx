import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useAppSelector, useAppDispatch } from '../controllers/hooks'
import setMoviesSortFunc from '../controllers/setMoviesSortFunc'
import type { MovieInfo } from '../controllers/slice'
import { setDetail } from '../controllers/slice'

const MovieListContainer = styled.div`
  width: 100%;
  padding: 0 50px; 
  box-sizing: border-box;
  h3 {
    font-size: 1.7em;
    margin: 0 0 20px;
  }
  ul {
    width: 100%;
    overflow: hidden;
    display: flex;
    li {
      display: flex;
      flex-wrap: wrap;
      img {                                                                                                                                                                   
      }
    }
  }
`

interface Props {
  kind: string
  title: string
}

const MovieList = ({ kind, title }: Props) => {

  const dispatch = useAppDispatch()

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

  
  return (
    <MovieListContainer>
      <h3>{title}</h3>
      <ul>
        {movieList?.map((movie: MovieInfo, i: number) => (
          <li key={i}>
            <Link to='pages/sub/Detail' onClick={() => {dispatch(setDetail(movieList[i]))}}>
              {movie?.poster_path && <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />}
              <p>{movie?.title}</p>
              <span>{kind==='dailyBoxOffice'?i+1+'위':movie[kind as keyof MovieInfo]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </MovieListContainer>
  )
}

export default MovieList