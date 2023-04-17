import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getTodos } from '../components/logic/slice'
const Main = () => {
  // const dispatch = useDispatch()
  const { dailyBoxOfficeList } = useSelector((state) => state.todoList)

  return (
    <>
     <p>몰?루</p>
     <ul>
     {dailyBoxOfficeList.map((movie) => (
          <li key={movie.rank}>{movie.movieNm}</li>
        ))}
     </ul>
    </>
  )
}

export default Main