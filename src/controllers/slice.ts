import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import getMoviesConversion from "./getMoviesConversion"
import dateCalc from "./dataCalc"

//api urls
const urls = [
  //한국 영화 konfig api (한국의 박스오피스 불러오는 용도로 사용)
  `${process.env.DAILY_BOX_OFFICE}?key=${process.env.KONFIC_KEY}&targetDt=${dateCalc(1)}&itemPerPage=10`,
  `${process.env.WEEKLY_BOX_OFFICE}?key=${process.env.KONFIC_KEY}&targetDt=${dateCalc(8)}&itemPerPage=10`,
  //외국 영화 tmdb api (메인 api로 사용)
  `${process.env.GENRE_MOVIE}?api_key=${process.env.TMDB_KEY}&language=ko`,
  `${process.env.POPULAR_MOVIE}?api_key=${process.env.TMDB_KEY}&language=ko&page=`,
]

//fetch요청 작성.
const fetchRequests = [fetch(urls[0]),fetch(urls[1]),fetch(urls[2])]

//tmdb api의 불러오고 싶은 page 숫자만큼 반복문 설정.
for(let i=0; i<30; i++){
  fetchRequests.push(
    fetch(urls[3] + String(i+1))
  )
}

//비동기 실행 thunk
export const getMoviesData = createAsyncThunk("movies/getMoviesData", async () => {
  //여러 개의 fetch요청을 동시에 수행하기 위해 promise.all 사용
  const responses = await Promise.all(fetchRequests)
  const jsonData = await Promise.all(responses.map((response) => response.json()))
  let data = [...jsonData]

  //konfig api의 json data는 getMoviesConversion를 통해 tmdb api와 같은 형식으로 변환
  data[0] = await getMoviesConversion(jsonData[0]?.boxOfficeResult?.dailyBoxOfficeList)
  data[1] = await getMoviesConversion(jsonData[1]?.boxOfficeResult?.weeklyBoxOfficeList)

  return data
})

//state 초기 값
interface InitialState {
  moviesData: MoviesData
}

interface MoviesData {
  dailyBoxOffice: MovieInfo[]
  weeklyBoxOffice: MovieInfo[]
  allMovies: MovieInfo[]
  genres: Genres
  keyword: string
}

export interface MovieInfo {
  backdrop_path?: string
  genre_ids?: number[]
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  vote_average?: number
  vote_count?: number
  id?: number
  adult?:boolean
}

interface Genres {
  [key: number]: string
}

interface JsonGenre {
  id: number
  name: string
}

const initialState: InitialState = {
  moviesData: {
    dailyBoxOffice : [],
    weeklyBoxOffice : [],
    allMovies: [],
    genres: {0: ''},
    keyword: ''
  }
}

//reducer, state를 모두 관리할 slice
const moviesDataSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {
    searchState: (state, action) => {
      state.moviesData.keyword = action.payload
    }
  },
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

      //genre 정보 state 저장
      const genreArray = action.payload[2]?.genres
      let genreUpdate: Genres = {}
      genreArray.forEach((genre: JsonGenre) => {
        const [key, value] = Object.values(genre)
        genreUpdate[key] = value
      })
      
      
      state.moviesData.genres = genreUpdate

      //merge 할 데이터 중 중복되는 konfig api data 및 장르 데이터 제외
      const setData = action.payload.slice(3)
      //각각 fetch해온 모든 movie data를 하나의 배열로 합침
      const mergeData = setData.reduce((acc, movieList) => {
        return [...acc, ...movieList.results]
      }, [])

      state.moviesData.allMovies = mergeData
    })

    .addCase(getMoviesData.rejected, (state) => {
      //fetch 실패 시 수행할 action 작성
      console.log('fetch 실패 ㅠㅠ')
    })
  },
})
export const { searchState } = moviesDataSlice.actions
export default moviesDataSlice.reducer