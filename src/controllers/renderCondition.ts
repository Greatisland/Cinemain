const renderCondition = () => {
  let movieList: MovieInfo[] = []
  if(kind==='dailyBoxOffice'){
    movieList = dailyBoxOffice ?? []
  }else if(typeof kind === "string"){
    movieList = setMoviesSortFunc(kind, allMovies) || []
  }else{
    movieList = []
  }
}

export default renderCondition