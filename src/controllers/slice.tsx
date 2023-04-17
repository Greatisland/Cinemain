import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//어제 날짜 계산
const dailyDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2,'0')
  //가장 최근의 박스오피스 값을 불러오는 데 필요하므로 오늘이 아닌 어제로 계산
  const day = String(date.getDate()-1).padStart(2,'0')
  return `${year}${month}${day}`
}

const getMoviesConversion = async (movieList) => {
  const requests = movieList.map((movie) => (fetch(`${process.env.SEARCH_MOVIE}?api_key=${process.env.TMDB_KEY}&query=${encodeURIComponent(movie.movieNm)}&language=ko&include_adult=true&page=1`)))
  const responses = await Promise.all(requests)
  const jsonData = await Promise.all(responses.map((response) => response.json()))
  const data = []

  for(let dataItem of jsonData){data.push(dataItem?.results[0])}
  const dataObj = {result: data}
  
  return dataObj
}

//fetch 요청 urls
const urls = [
  `${process.env.POPULAR_MOVIE}?api_key=${process.env.TMDB_KEY}&language=ko&page=1`,
  `${process.env.POPULAR_MOVIE}?api_key=${process.env.TMDB_KEY}&language=ko&page=2`,
  `${process.env.POPULAR_MOVIE}?api_key=${process.env.TMDB_KEY}&language=ko&page=3`,
  `${process.env.POPULAR_MOVIE}?api_key=${process.env.TMDB_KEY}&language=ko&page=4`
]

const fetchRequests = urls.map((url) => fetch(url))

//비동기 실행 thunk
export const getMoviesData = createAsyncThunk("moviesData/getMoviesData", async () => {
  //여러 개의 fetch요청을 동시에 수행하기 위해 promise.all 사용
  const responses = await Promise.all(fetchRequests)
  const jsonData = await Promise.all(responses.map((response) => response.json()))
  console.log(jsonData)
  return jsonData
})

//state 초기 값
const initialState = {
  moviesData: []
}


const moviesDataSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getMoviesData.pending, (state) => {
      //fetch되기 전 수행할 action 작성
    })
    .addCase(getMoviesData.fulfilled, (state, action) => {
      //fetch성공 후 수행할 action 작성
      const merge = action.payload.reduce((acc,pages) => {
        acc = [...acc, ...pages?.results]
      }, [])
      console.log(merge)

    })
    .addCase(getMoviesData.rejected, (state) => {
      //fetch 실패 시 수행할 action 작성
    })
  },
})

export default moviesDataSlice.reducer