import styled from "styled-components"
import { useAppSelector } from "../controllers/hooks"
import { Link } from "react-router-dom"
import dateCalc from "../controllers/dataCalc"

const BoxOfficeListCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  min-width: 300px;
  h3 {
    display: flex;
    align-items: center;
    font-size: 1.4em;
    text-align: center;
    padding: 10px 0;
    letter-spacing: 0.04em;

    ::before {
      display: inline-block;
      content: '';
      width: 4px;
      height: 29px;
      background: #07d4a8;
      margin: 0 20px 0 0;
      box-sizing: border-box;
    }
  }
  .dateInfo {
    color: #ccc;
    font-style: italic;
    letter-spacing: 0.04em;
  }

  li a {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    ::after {
      content: '';
      transition: 1s;
      display: block;
      width: 0;
      height: 1px;
      position: absolute;
      background: #07d4a8;
      bottom: 0px;
    }

    :hover::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
      background: #07d4a8;
      bottom: 0px;
    }
    .title {
      font-size: 1.2em;
      padding: 0 20px;
      @media screen and (max-width: 640px) {
        font-size: 1em;
      }
    }
    p span {
      color: #07d4a8;
      font-weight: 700;
    }
  }
`

const ImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  strong {
    padding: 2px 6px;
    background: #07d4a8;
    color: #333;
  }
`
interface Props {
  kind: string
}

const BoxOfficeList = ({kind}: Props) => {
  const { dailyBoxOffice, weeklyBoxOffice } = useAppSelector(state => state.moviesData.moviesData)
  return (
    <BoxOfficeListCon>
      <h3>{kind==='daily'?'일일':'주간'} 박스오피스 순위</h3>
      <p className='dateInfo'>
      {kind==='daily'?
        `${dateCalc(1).replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')} 기준`:
        `${dateCalc(8).replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')} ~ ${dateCalc(1).replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')} 기준`
      }
      </p>
      <ul>
      {(kind==='daily'?dailyBoxOffice:weeklyBoxOffice)?.map((movie, i) => (
        <li key={i}>
          <Link to='../pages/sub/Detail' state={movie}>
            <ImgContainer>
              {movie?.poster_path && <img src={`https://image.tmdb.org/t/p/w45/${movie.poster_path}`} />}
              <strong>{i+1}</strong>
            </ImgContainer>
            <p className="title">{movie?.title}</p>
            <p className='vote_average'>{Math.floor(movie?.vote_average as number *10)/10} <span>☆</span></p>
          </Link>
        </li>
      ))}
      </ul>
    </BoxOfficeListCon>
  )
}

export default BoxOfficeList