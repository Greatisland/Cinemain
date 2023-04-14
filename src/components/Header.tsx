import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderContainer = styled.div`
  height: 70px;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  h1 {
    line-height: 70px;
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