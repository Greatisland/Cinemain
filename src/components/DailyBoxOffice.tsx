import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getTodos } from './logic/slice'
const DailyBoxOffice = () => {

  //오늘 날짜 구하기
  // const dailyDate = () => {
  //   const date = new Date()
  //   const year = date.getFullYear()
  //   const month = String(date.getMonth() + 1).padStart(2,'0')
  //   const day = String(date.getDay()).padStart(2,'0')
  //   return `${year}${month}${day}`
  // }

  //박스오피스 api 요청
  // const getData = async () => {
  //   const data = await fetch(`${process.env.DAILY_BOX_OFFICE}?key=${process.env.KONFIC_KEY}&targetDt=${dailyDate()}`)
  //   const json = await data.json()
  //   console.log(json)
  // }


  // useEffect(() => {
  //   dispatch(fetchApiAsync())
  // }, [dispatch])
  // const dispatch = useDispatch()
  const { dailyBoxOfficeList } = useSelector((state) => state.todoList)

  // useEffect(() => {
  //   dispatch(getTodos())
  // },[dispatch])
  return (
    <>
     <div>ㅏ알아보장</div>
     <ul>
     {dailyBoxOfficeList.map((movie) => (
          <li key={movie.rank}>{movie.movieNm}</li>
        ))}
     </ul>
    </>
  )
}

export default DailyBoxOffice