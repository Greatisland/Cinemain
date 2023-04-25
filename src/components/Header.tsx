import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useAppDispatch } from "../controllers/hooks"
import React, { useRef } from "react"
import { searchState } from "../controllers/slice"

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0; left: 0;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0));
  h1 {
    line-height: 70px;
    color: #d60b0b;
    font-size: 3em;
  }
  form {
    height: 70px;
    display: flex;
    align-items: center;
    input {
      width: 400px;
      padding: 10px 20px;
      box-sizing: border-box;
      background: #fff;
      color: #333;
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
      <Link to="/"><h1>LETFLIX</h1></Link>
      <form onSubmit={setKeywordToss}>
        <input type="search" ref={inputRef} placeholder="검색어를 입력해주세요."></input>
      </form>
    </HeaderContainer>
  )
}
export default Header