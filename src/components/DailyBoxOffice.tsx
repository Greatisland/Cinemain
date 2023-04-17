import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
const DailyBoxOffice = () => {

  //필요한 정보를 state로부터 가져옴. 
  const { dailyBoxOfficeList } = useSelector((state) => state.moviesData.boxOfficeResult)
  const [movieImages, setMovieImages] = useState([])

  //이미지만 가져올 api로부터 state에서 불러온 영화들의 이미지를 요청함
  const getMoviesImg = async () => {
    const imgRequests = dailyBoxOfficeList.map((value) => (fetch(`${process.env.SEARCH_MOVIE}?api_key=${process.env.TMDB_KEY}&query=${encodeURIComponent(value.movieNm)}&language=ko&include_adult=true&page=1`)))
    const imgResponses = await Promise.all(imgRequests)
    const jsonImg = await Promise.all(imgResponses.map((imgResponse) => imgResponse.json()))
    setMovieImages(jsonImg)
  }

  useEffect(() => {
    getMoviesImg()
  },[dailyBoxOfficeList])


  return (
    <>
     <div>ㅏ알아보장</div>
     <ul>
     {dailyBoxOfficeList.map((movie, index) => (
          <li key={movie.rank}>
            {movieImages[index]?.results[0]?.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${movieImages[index].results[0].poster_path}`} />}
            {movie.movieNm}
          </li>
        ))}
     </ul>
    </>
  )
}

export default DailyBoxOffice