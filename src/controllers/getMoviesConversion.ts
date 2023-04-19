interface MovieList {
  movieNm: string
}

//konfig api의 데이터를 바탕으로 tmdb api의 데이터로 바꾸는 함수
const getMoviesConversion = async (movieList: MovieList[]) => {
  //konfig api의 데이터와 대응되는 tmdb api 데이터호출
  const requests = movieList.map((movie) => (fetch(`${process.env.SEARCH_MOVIE}?api_key=${process.env.TMDB_KEY}&query=${encodeURIComponent(movie.movieNm)}&language=ko&include_adult=true&page=1`)))
  const responses = await Promise.all(requests)
  const jsonData = await Promise.all(responses.map((response) => response.json()))
  const data = []

  //기존에 불러온 tmdb api의 json 구조와 같게 만듦
  for(let dataItem of jsonData){data.push(dataItem?.results[0])}
  const dataObj = {results: data}
  
  return dataObj
}

export default getMoviesConversion