import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../controllers/hooks"
import setMoviesSortFunc from "../../controllers/setMoviesSortFunc"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import type { MovieInfo } from "../../controllers/slice"
import searchFunc from "../../controllers/searchFunc"

const GridListContainer = styled.div`
  padding: 100px 0 0;
  min-height: 100vh;
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
  img {
    max-width: 185px;
    height: 278px;
  }
`

const CardMovie = styled.div`
  span {
    text-align: center;
    padding: 0 4px;
    box-sizing: border-box;
  }
`

const FilterButtonContainer = styled.div`
  width: 100%;
  height: 33px;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 0 0 20px 0;
  
  .button {
    padding: 4px 12px;
    cursor: pointer;
    &.on {
      border-bottom: 4px solid #07d4a8b7;
    }
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
        <div className={`button ${renderList==='popularity'?'on':''}`} onClick={() => {setRenderList('popularity')}}>인기순</div>
        <div className={`button ${renderList==='release_date'?'on':''}`} onClick={() => {setRenderList('release_date')}}>최신순</div>
        <div className={`button ${renderList==='vote_average'?'on':''}`} onClick={() => {setRenderList('vote_average')}}>평점순</div>
      </FilterButtonContainer>
      {movieList?.map((movie, i) => (
        <CardMovie key={i}>
          <Link to='../pages/sub/Detail' state={movie}>
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