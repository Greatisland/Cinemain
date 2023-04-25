import type { MovieInfo } from "./slice"
const searchFunc = (movieList: MovieInfo[], keyword: string) => {
  const normalKeyword = keyword.replace(/\s/gi,'').toLowerCase()
  return movieList.filter(movie => {
    if(movie.title?.replace(/\s/gi,'').toLowerCase().includes(normalKeyword)||
    movie.overview?.replace(/\s/gi,'').toLowerCase().includes(normalKeyword)){
      return movie
    }
  })
}

export default searchFunc