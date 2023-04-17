import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const DailyBoxOfficeContainer = styled.div`
  width: 100%;
  h3 {
    font-size: 1.7em;
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


const DailyBoxOffice = () => {

  //필요한 정보를 state로부터 가져옴. 
  // const { dailyBoxOfficeList } = useSelector((state) => state.moviesData.boxOfficeResult)
  // const [movieImages, setMovieImages] = useState([])

  // //이미지만 가져올 api로부터 state에서 불러온 영화들의 이미지를 요청함
  // const getMoviesImg = async () => {
  //   const imgRequests = dailyBoxOfficeList.map((value) => (fetch(`${process.env.SEARCH_MOVIE}?api_key=${process.env.TMDB_KEY}&query=${encodeURIComponent(value.movieNm)}&language=ko&include_adult=true&page=1`)))
  //   const imgResponses = await Promise.all(imgRequests)
  //   const jsonImg = await Promise.all(imgResponses.map((imgResponse) => imgResponse.json()))
  //   console.log(jsonImg)
  //   setMovieImages(jsonImg)
  // }

  // useEffect(() => {
  //   getMoviesImg()
  // },[dailyBoxOfficeList])


  return (
    <DailyBoxOfficeContainer>
      {/* <h3>오늘의 박스 오피스</h3>
      <ul>
      {dailyBoxOfficeList.map((movie, index: number) => (
          <li key={movie.rank}>
            <Link to='../pages/Detail'>
            {movieImages[index]?.results[0]?.poster_path && <img src={`https://image.tmdb.org/t/p/w342/${movieImages[index]?.results[0]?.poster_path}`} />}
            <span>{movie.movieNm}</span>
            </Link>
          </li>
        ))}
      </ul> */}
    </DailyBoxOfficeContainer>
  )
}

export default DailyBoxOffice