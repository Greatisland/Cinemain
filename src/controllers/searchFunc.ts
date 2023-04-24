import type { MovieInfo } from "./slice"
const searchFunc = (movieList: MovieInfo[], keyword: string) => {
  const normalKeyword = keyword.replace(/\s/gi,'')
  return movieList.filter(movie => {
    if(movie.title?.replace(/\s/gi,'').includes(normalKeyword)||
    movie.overview?.replace(/\s/gi,'').includes(normalKeyword)){
      return movie
    }
  })
}

export default searchFunc