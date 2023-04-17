import { useDispatch, useSelector } from 'react-redux'
const Main = () => {

  //필요한 정보를 state로부터 가져옴. 
  const { dailyBoxOfficeList } = useSelector((state) => state.moviesData.boxOfficeResult)
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