import type { MovieInfo } from "../components/MovieList"
const setMoviesSortFunc = (param: string, movies:MovieInfo[] ) => {
  
  //날짜의 sort를 위한 절대값을 반환하는 함수
  const releaseCalc = (date?: string) => {
    //date가 undefined나 null일 경우 0을 반환
    if(!date) return 0
    const [year, month, day] = date.split('-').map(Number)
    const daysInMonth = new Date(year, month, 0).getDate()
    const total = (year * 12 + month - 1) * daysInMonth + day
    return total
  }
  let renderMovie = [...movies]
  if(param==='release_date'){
    renderMovie.sort((a, b) => {
      return releaseCalc(b[param]) - releaseCalc(a[param])
    })
  }
  return renderMovie.sort((a, b) => Number(b[param as keyof MovieInfo] ) - Number(a[param as keyof MovieInfo]))
}

export default setMoviesSortFunc

