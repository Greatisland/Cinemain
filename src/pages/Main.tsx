import { Link } from "react-router-dom"
import Carousel from "../components/Carousel"
import DailyBoxOffice from "../components/DailyBoxOffice"
import Header from "../components/Header"

const Main = () => {
  return (
    <>
     <Header />
     <Carousel />
     <DailyBoxOffice />
     <Link to='./pages/Detail'><p>간당!</p></Link>
    </>
  )
}

export default Main