import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Content = styled.div`
  width: 360px;
  height: 64px;
  background: #0277BD;
  box-shadow: 0px 2px 3px rgb(0,0,0,0.3);
`
const StyledTitle = styled.span`
position: absolute;
height: 29px;
left: 48px;
top: 19px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 19px;
line-height: 28px;
/* identical to box height */

letter-spacing: 0.15px;

color: #FFFFFF;
`

const NavBar = () => {
  return(
      <Content>
<FontAwesomeIcon icon="fa-solid fa-bars" />
        <StyledTitle>Mi pastillero</StyledTitle>
      </Content>
  )
}

export default NavBar
