import styled from "styled-components"

const FooterContainer = styled.div`
  width: 100%;
  height: 70px;
  background: #000;
  padding: 30px 50px;
  @media screen and (max-width: 640px) {
    padding: 30px 20px;
  }
  box-sizing: border-box;
  p {
    font-size: 0.7em;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>본 사이트의 영화 정보는 영화진흥위원회(www.kobis.or.kr) 및 TMDB(https://www.themoviedb.org/)를 기반으로 하고 있습니다.</p>
    </FooterContainer>
  )
}

export default Footer