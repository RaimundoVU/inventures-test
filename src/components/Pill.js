import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
const Button = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 16px;
  top: 23px;
  background: rgba(0, 0, 0, 0.0001);
  cursor: pointer;
`
const TextContent = styled.div`
  position: absolute;
  top: 9.17px;
  left: 98px;
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

const StyledDescription = styled.span`
  height: 20px;
  color: rgba(0, 0, 0, 0.54);
  font-family: 'Poppins';
  font-style: normal;
  font-size: 13px;
  font-weight: 400;
  top: 30.17px;
  line-height: 20px;
  letter-spacing: 0.15px;
`

const PillLeft = styled.span`
width: 158px;
height: 20px;
top: 49px;
font-family: 'Poppins';
font-weight: 400;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.15px;
text-decoration-line: underline;
color: ${props => props.pillsLeft < 5 ? '#F44336' : '#0277BD'};
`

const PillDays = styled.span`
height: 18px;
left: 98px;
top: 68px;
font-family: 'Poppins';
font-weight: 400;
font-size: 10px;
line-height: 18px;
letter-spacing: 0.4px;
text-decoration-line: underline;
color: ${props => props.pillsLeft < 5 ? '#F44336' : '#0277BD'};
`

const Circle = styled.div`
position: absolute;
left: 322px;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;
`

const Pill = ({...props}) => {
  const { purchase, pills, lastReceived} = props;
  console.log(props)

  const calculateDaysLeft = ( purchase, lastReceived ) => {
    let today = new Date()
    let received_date = new Date(lastReceived);
    let result = Math.abs(today - received_date);
    let days = Math.ceil(result / (1000 * 60 * 60 * 24));
    let pillsLeft = purchase.total - days;
    return pillsLeft < 0 ? 0 : pillsLeft;
  }

  const pill = pills.find( p => p.id === purchase.product_id )
  const pillsLeft = calculateDaysLeft(purchase, lastReceived)
  return (
    <div>
      {
        <Content key={purchase.product_id}>
          <StyledImage alt='REMEDIO' src={pill.imagesUrl !== null ? pill.imagesUrl : ''}/>
          <TextContent>
          <StyledName>{pill.name}</StyledName>
            <StyledDescription>{pill.concentration}</StyledDescription>
            <PillLeft pillsLeft={pillsLeft}>
              Quedan {pillsLeft} comprimidos
            </PillLeft>
            <PillDays 
              pillsLeft={pillsLeft}
            > 
              Para {pillsLeft} días
            </PillDays>
          </TextContent>
          <Button> <ShoppingCartIcon fontSize="large" /></Button>
          <Circle> <AddCircleIcon /></Circle>
        </Content>
      }
    </div>
  )
}

export default Pill;
