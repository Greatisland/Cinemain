import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getMoviesConversion from "./getMoviesConversion";

//어제 날짜 계산
const yesterDayDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2,'0')
  //가장 최근의 박스오피스 값을 불러오는 데 필요하므로 오늘이 아닌 어제로 계산
  const day = String(date.getDate()-1).padStart(2,'0')
  return `${year}${month}${day}`
}

//fetch 요청 urls
const urls = [
  `${process.env.DAILY_BOX_OFFICE}?key=${process.env.KONFIC_KEY}&targetDt=${yesterDayDate()}&itemPerPage=10`,
  `${process.env.WEEKLY_BOX_OFFICE}?key=${process.env.KONFIC_KEY}&targetDt=${yesterDayDate()}&itemPerPage=10`,
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
  let data = [...jsonData]

  //다른 api로부터 받아온 json data는 getMoviesConversion를 통해 같은 형식으로 변환
  data[0] = await getMoviesConversion(jsonData[0]?.boxOfficeResult?.dailyBoxOfficeList)
  data[1] = await getMoviesConversion(jsonData[1]?.boxOfficeResult?.weeklyBoxOfficeList)
  return data
})

//state 초기 값
const initialState = {
  moviesData: {
    dailyBoxOffice : [],
    weeklyBoxOffice: [],
    allMovies: []
  }
}


const moviesDataSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getMoviesData.pending, (state) => {
      //fetch되기 전 수행할 action 작성
      console.log('로딩중..')
    })

    .addCase(getMoviesData.fulfilled, (state, action) => {
      //fetch성공 후 수행할 action 작성

      //boxOffice만 따로 별개의 state로 관리
      const dailyUpdate = action.payload[0]?.results
      const weeklyUpdate = action.payload[1]?.results

      state.moviesData.dailyBoxOffice = dailyUpdate
      state.moviesData.weeklyBoxOffice = weeklyUpdate

      console.log(state.moviesData.dailyBoxOffice)

      //각각 fetch해온 모든 movie data를 같은 data 형식의 하나의 배열로 합침
      const mergeData = action.payload.reduce((acc, movieList) => {
        return [...acc, ...movieList.results]
      }, [])
      state.moviesData.allMovies = mergeData
    })

    .addCase(getMoviesData.rejected, (state) => {
      //fetch 실패 시 수행할 action 작성
      console.log('실패 ㅠㅠ')
    })
  },
})

export default moviesDataSlice.reducer