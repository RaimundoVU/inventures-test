import GlobalFonts from './fonts/fonts';
import Container  from './components/Container'
import NavBar from './components/NavBar'
import { useState, useEffect} from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#FFF',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  const [pills, setPills] = useState([]);
  const [loading, setLoading] = useState(false)
  const productsUrl = 'https://private-anon-2cfc10ba85-inventurestest.apiary-mock.com/products'

  useEffect(() => {
    console.log('useEffect App');
    fetchInfo(productsUrl);
  } , [])

  const fetchInfo = async (url) => {
    setLoading(true);
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const res = await data.json();
    setPills(res.payload);
    setLoading(false);
  }
  return (
    <ThemeProvider theme={theme}>
    <div>
      <NavBar />
      <GlobalFonts />
      { !loading ?
      <Container loadingProducts={loading} pills={pills} />
      : <div>Loading...</div>}
    </div>
    </ThemeProvider>
  )
}

export default App;
