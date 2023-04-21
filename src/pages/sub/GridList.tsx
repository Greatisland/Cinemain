import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../controllers/hooks"
import setMoviesSortFunc from "../../controllers/setMoviesSortFunc"
import { useEffect } from "react"
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
`

const FilterButton = styled.div`
  
`

const GridList = () => {
  const { allMovies } = useAppSelector(state => state.moviesData.moviesData)
  const location = useLocation()

  let movieList: MovieInfo[] = []
  if(typeof location.state === "string"){
    movieList = setMoviesSortFunc(location.state, allMovies) || []
  }else{
    movieList = []
  }
  useEffect(() => {
    
  }, [movieList])  

  return (
    <GridListContainer>
      <Header />
      <FilterButtonContainer>
        <FilterButton>인기순</FilterButton>
        <FilterButton>최신순</FilterButton>
        <FilterButton>평점순</FilterButton>
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