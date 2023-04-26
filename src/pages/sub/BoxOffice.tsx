import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"
import { useAppSelector } from "../../controllers/hooks"
import { Link } from "react-router-dom"
import BoxOfficeList from "../../components/BoxOfficeList"


const BoxOfficeContainer = styled.div`
  padding: 100px 50px;
  display: flex;
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