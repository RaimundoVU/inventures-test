import  Container  from './components/Container'
import  Pill  from './components/Pill'

function App() {
  return (
    <div>
      <nav>
        <button onClick={() => console.log('hola')}>Menu lateral</button>
        <button onClick={() => console.log('hola')}>BUSQUEDA</button>
        <button onClick={() => console.log('hola')}>carrito</button>
      </nav>
      <Container>EMOJI REVISA TUS COMPRAS
      </Container> 
    </div>
  )
}

export default App;
