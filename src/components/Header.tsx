import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useAppDispatch } from "../controllers/hooks"
import React, { useRef } from "react"
import { searchState } from "../controllers/slice"

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0; left: 0;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 50px;
  @media screen and (max-width: 640px) {
    padding: 0 20px;
  }
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0));
  h1 {
    line-height: 70px;
    color: #07d4a8b7;
    font-size: 3em;
  }
  form {
    height: 100px;
    display: flex;
    align-items: center;
    input {
      width: 100px;
      padding: 10px 20px;
      box-sizing: border-box;
      background: #000;
      border-radius: 30px;
      border: 2px solid #ccc;
      color: #fff;
      transition: 0.7s;
      @media screen and (min-width: 641px) {
        :hover, :focus {
          width: 300px;
        }
      }
    }
  }
`


const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const setKeywordToss = (e: React.FormEvent) => {
    e.preventDefault()
    const keyword = inputRef.current?.value
    dispatch(searchState(keyword))
    if(keyword){
      navigate('/pages/sub/GridList')
    }else{
      alert('검색어를 입력해주세요.')
    }
  }

  return (
    <HeaderContainer>
      <Link to="/"><h1>Cinemain</h1></Link>
      <form onSubmit={setKeywordToss}>
        <input type="search" ref={inputRef} placeholder="Search"></input>
      </form>
    </HeaderContainer>
  )
}
export default Header