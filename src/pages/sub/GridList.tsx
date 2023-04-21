import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../controllers/hooks"
import setMoviesSortFunc from "../../controllers/setMoviesSortFunc"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import type { MovieInfo } from "../../controllers/slice"

const GridListContainer = styled.div`
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    width: 185px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 10px;
  }
`

const ImgContainer = styled.div`
  min-height: 278px;
`

const CardMovie = styled.div`
  
`

const FilterButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 0 0 20px 0;
  
  button {
    background: inherit;
    /* border-bottom: 1px solid #fff; */
    padding: 4px 12px;
    cursor: pointer;
    box-shadow: none;
    overflow:visible;
    /* border: none; */
  }
`

const GridList = () => {
  const { allMovies } = useAppSelector(state => state.moviesData.moviesData)
  const location = useLocation()
  const [ renderList, setRenderList ] = useState(location.state)

  let movieList: MovieInfo[] = []
  if(typeof renderList === "string"){
    movieList = setMoviesSortFunc(renderList, allMovies) || []
  }else{
    movieList = []
  }

  return (
    <GridListContainer>
      <Header />
      <FilterButtonContainer>
        <button onClick={() => {setRenderList('popularity')}}>인기순</button>
        <button onClick={() => {setRenderList('release_date')}}>최신순</button>
        <button onClick={() => {setRenderList('vote_average')}}>평점순</button>
      </FilterButtonContainer>
      {movieList?.map((movie, i) => (
        <CardMovie key={i}>
          <Link to='../pages/sub/Detail' state={movieList[i]}>
            <ImgContainer>{movie?.poster_path && <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />}</ImgContainer>
            <span>{movie.title}</span>
          </Link>
        </CardMovie>
      ))}
      <Footer />
    </GridListContainer>
  )
}

export default GridList