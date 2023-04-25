import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../controllers/hooks"
import setMoviesSortFunc from "../../controllers/setMoviesSortFunc"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import type { MovieInfo } from "../../controllers/slice"
import searchFunc from "../../controllers/searchFunc"
import { searchState } from "../../controllers/slice"

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
    padding: 4px 12px;
    cursor: pointer;
    box-shadow: none;
    overflow:visible;
  }
`

const GridList = () => {
  const { allMovies, keyword } = useAppSelector(state => state.moviesData.moviesData)
  const location = useLocation()
  const [ renderList, setRenderList ] = useState(location.state)
  
  let filterMovies = searchFunc(allMovies, keyword)

  let movieList: MovieInfo[] = []
  //카테고리 선택으로 페이지에 진입했을 경우 필터링하지 않음
  if(location.state){
    movieList = setMoviesSortFunc(renderList, allMovies)
  //검색으로 페이지에 진입했을 경우 검색 키워드에 따른 필터링
  }else if(renderList){
    movieList = setMoviesSortFunc(renderList, filterMovies)
  }else{
    movieList = filterMovies
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