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
  const { dailyBoxOffice } = useSelector(state => state?.moviesData?.moviesData)
  console.log(dailyBoxOffice)
  return (
    <DailyBoxOfficeContainer>
      <h3>오늘의 박스 오피스</h3>
      <ul>
      {dailyBoxOffice?.map((movie) => (
        <li key={movie?.id}>
          <Link to='../pages/Datail'>
            {movie?.poster_path&&<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />}
            <p>{movie?.title}</p>
            <span>{movie?.popularity}</span>
          </Link>
        </li>
      ))}
      </ul>

    </DailyBoxOfficeContainer>
  )
}

export default DailyBoxOffice