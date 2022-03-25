import styled from 'styled-components';

const Content = styled.div`
  position: relative;
  top: 0px;
  width: 360px;
  height: 94px;
  left: 0px;
  background: #FFFFFF;
  display: flex;
`

const StyledImage = styled.img`
  position: absolute;
  width: 62px;
  height: 62.66px;
  left: 20px;
  top: 16px;
`
const TextContent = styled.div`
  position: absolute;
  top: 9.17px;
  left: 98px;
  width: 151px;
  display: flex;
  flex-direction: column;
`

const StyledName = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  height: 23px;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.15px;
  color: #000000;
`

const StyledDescription = styled(StyledName)`
  color: rgba(0, 0, 0, 0.54);
  font-size: 13px;
  font-weight: 400;
  top: 30.17px;
  line-height: 20px;
  letter-spacing: 0.15px;
`

const Button = styled.button`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 296px;
  top: 22px;
  background: rgba(0, 0, 0, 0.0001);
`

const PillLeft = styled.span`
width: 158px;
height: 20px;
left: 98px;
top: 308px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
letter-spacing: 0.15px;
text-decoration-line: underline;
color: #F44336;
`

const PillDays = styled.span`
width: 72px;
height: 18px;
left: 98px;
top: 327px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.4px;
text-decoration-line: underline;
color: #F44336;
`

const Pill = ({...props}) => {
  console.log(props)
  return (
    <Content>
      <StyledImage />
      <TextContent>
        <StyledName>Eutirox</StyledName>
        <StyledDescription>75 mg</StyledDescription>
        <PillLeft> Quedan 5 comprimidos</PillLeft>
        <PillDays> Para 5 días</PillDays>
      </TextContent>
      <Button>Carrito</Button>
    </Content>
  )
}

export default Pill;
