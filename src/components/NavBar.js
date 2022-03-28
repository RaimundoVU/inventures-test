import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
const StyledMenu = styled.div`
position: absolute;
width: 48px;
height: 48px;
top: 20px;
left: 15px;
`

const StyledSearch = styled.div`
position: absolute;
width: 48px;
height: 48px;
left: 264px;
top: 20px;
`

const StyledCart = styled.div`
position: absolute;
width: 48px;
height: 48px;
top: 20px;
left: 312px;
`
const NavBar = () => {
  return(
      <Content>
        <StyledMenu>
          <MenuIcon fontSize="medium" color="primary"/>
        </StyledMenu>
        <StyledTitle>Mi pastillero</StyledTitle>
        <StyledSearch>
          <SearchIcon fontSize="medium" color="primary"/>
        </StyledSearch>
        <StyledCart> 
          <ShoppingCartIcon fontSize="medium" color="primary"/> 
        </StyledCart>
      </Content>
  )
}

export default NavBar
