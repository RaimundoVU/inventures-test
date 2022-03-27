import Pill from './Pill'
import { useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Emoji = styled.span`
  position: absolute;
  top: 80px;
  left: 160px;
  width: 40px;
  height: 40px;
  font-family: 'Roboto';
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  color: #414046;
`  

const Title = styled.span`
  position: absolute;
  width: 192px;
  height: 29px;
  left: 84px;
  top: 141px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #414046;
`
const Subtitle = styled.span`
  position: absolute;
  width: 320px;
  height: 24px;
  left: 20px;
  top: 172px;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.16px;
  color: #414046;
`

const Section = styled.section`
  position: absolute;
  width: 360px;
  height: 40px;
  left: 0px;
  top: 219px;
  background: #F5F5F5;
`

const SectionTitle = styled(Title)`
  width: 92px;
  height: 29px;
  left: 16px;
  top: 7px;
`

const PillContainer = styled.div`
  position: absolute;
  top: 259px;
`

const Container = () => {
  const [purchases, setPurchases] = useState([])
  const [pills, setPills] = useState([]);
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let productsUrl = 'https://private-anon-2cfc10ba85-inventurestest.apiary-mock.com/products'
    let purchasesUrl = 'https://private-anon-2cfc10ba85-inventurestest.apiary-mock.com/purchases'
    function fetchData(url, isPurchase) {
        setLoading(true);
        fetch(url)
          .then(res => res.json())
          .then(res => {
            isPurchase ? setPurchases(res.payload) : setPills(res.payload)
            setLoading(false)
          }).catch(error => {
            setHasError(true)
            setLoading(false)
          })
    };
    fetchData(purchasesUrl,  true);
    fetchData(productsUrl, false);
  } , [])

  return(
    <div> 
      { loading ? 
        <div>
          <Emoji>💊</Emoji>
          <Title>Revisa tus compras</Title>
          <Subtitle>Agrega al carro si necesitas reponer</Subtitle>
          <Section> <SectionTitle>Te queda</SectionTitle></Section>
          <PillContainer>Loading...</PillContainer>
          </div> 
          : (hasError ? <div>Erorr</div> : 
          <div>
            <Emoji>💊</Emoji>
            <Title>Revisa tus compras</Title>
            <Subtitle>Agrega al carro si necesitas reponer</Subtitle>
            <Section> <SectionTitle>Te queda</SectionTitle></Section>
            <PillContainer>
              {purchases.map( purchase => {
                return (<Pill key={purchase.id} purchase={purchase} pills={pills} />)
              })}
            </PillContainer>
          </div>
          )
      }
    </div>
  )
}
export default Container;
