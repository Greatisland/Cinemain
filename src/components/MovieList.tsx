import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useAppSelector } from '../controllers/hooks'

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

interface MovieInfo {
  backdrop_path: string
  genre_ids: number[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
}

const MovieList = ({ kind, title }: Props) => {

  //필요한 정보를 state로부터 가져옴. 
  const { dailyBoxOffice, allMovies } = useAppSelector(state => state.moviesData.moviesData)
  // console.log(allMovies)

  const releaseCalc = (date?: string) => {
    if(!date) return 0
    const sliceDate = date.split('-')
    return ((Number(sliceDate[0])*12*30) + (Number(sliceDate[1])*12) + Number(sliceDate[2]))
  }


  const setRenderFilter = (param: string) => {
    let renderMovie = [...allMovies]
    if(param==='release_date'){
      renderMovie.sort((a, b) => {
        return releaseCalc(b[param]) - releaseCalc(a[param])
      })
    }
    return renderMovie.sort((a, b) => b[param] - a[param])
  }

  //조건부 렌더링 위한 if문
  let movieList: MovieInfo[] = []
  if(kind==='dailyBoxOffice'){
    movieList = dailyBoxOffice ?? []
  }else if(typeof kind === "string"){
    movieList = setRenderFilter(kind) || []
  }else{
    movieList = []
  }

  return (
    <MovieListContainer>
      <h3>{title}</h3>
      <ul>
        {movieList?.map((movie: MovieInfo, i: number) => (
          <li key={i}>
            <Link to='/pages/Datail'>
              {movie?.poster_path && <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />}
              <p>{movie?.title}</p>
              <span>{movie[kind]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </MovieListContainer>
  )
}

export default MovieList