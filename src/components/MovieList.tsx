import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from "react-router-dom"

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
}

const MovieList = ({kind}: Props) => {

  //필요한 정보를 state로부터 가져옴. 
  const { dailyBoxOffice, weeklyBoxOffice, allMovies } = useSelector(state => state?.moviesData?.moviesData)
  console.log(allMovies)
  const setRenderFilter = (list) => {
    
  }

  // console.log(dailyBoxOffice,weeklyBoxOffice)
  
  //조건부 렌더링 위한 switch문
  let [title, list] = ['',[]]
  switch (kind) {
    case 'dailyBoxOffice': title='일일 박스오피스'; list = dailyBoxOffice
    break
    case 'weeklyBoxOffice': title='주간 박스오피스'; list = weeklyBoxOffice
    break
  }
  
  return (
    <MovieListContainer>
      <h3>{title}</h3>
      <ul>
      {list?.map((movie) => (
        <li key={movie?.id}>
          <Link to='../pages/Datail'>
            {movie?.poster_path&&<img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />}
            <p>{movie?.title}</p>
            <span>{movie?.popularity}</span>
          </Link>
        </li>
      ))}
      </ul>
    </MovieListContainer>
  )
}

export default MovieList