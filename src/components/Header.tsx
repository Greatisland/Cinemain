import { Link } from "react-router-dom"
import styled from "styled-components"
import { useAppDispatch } from "../controllers/hooks"
import searchFunc from "../controllers/searchFunc"

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
  return (
    <HeaderContainer>
      <Link to="/"><h1>LETFLIX</h1></Link>
      <form>
        <input type="search" placeholder="검색어를 입력해주세요."></input>
      </form>
    </HeaderContainer>
  )
}

export default Header