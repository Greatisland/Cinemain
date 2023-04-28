import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"
import BoxOfficeList from "../../components/BoxOfficeList"

const BoxOfficeContainer = styled.div`
  padding: 100px 50px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
`

const BoxOffice = () => {
  return (
    <BoxOfficeContainer>
      <Header />
      <BoxOfficeList kind='daily'/>
      <BoxOfficeList kind='weekly'/>
      <Footer />
    </BoxOfficeContainer>
  )
}

export default BoxOffice