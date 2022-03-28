import Pill from './Pill'
import { useState, useEffect} from 'react'
import styled from 'styled-components'

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

const Container = ({...props}) => {
  const { loadingProducts, pills } = props;
  const [purchases, setPurchases] = useState([])
  const [loading, setLoading] = useState(false)
  const purchasesUrl = 'https://private-anon-2cfc10ba85-inventurestest.apiary-mock.com/purchases'

  useEffect(() => {
    fetchInfo(purchasesUrl);
  } , [loadingProducts])

  const fetchInfo = async (url) => {
    if (!loadingProducts){
      setLoading(true);
      const data = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const res = await data.json();
      setPurchases(res.payload);
      setLoading(false);
    }
  }

  const reducePurchases = (purchases) => {
    let reducedPurchases = [];
    // revisar si ya termino de cargar las compras
    if (purchases.length !== 0) {
      //si existen compras, recorremos el arreglo de todas las pastillas
      pills.forEach((pill) => {
        // para cada pastilla usamos la funcion reduce
        // dentro de el arreglo de compras
        let pillSum = purchases.reduce( (a, b, i, arr) => {
          
          // dentro de las compras, entramos a los detalles y encontramos
          // el producto que coincida con el id del producto que estamos
          // recorriendo en este momento del forEach
          let currentValue = b.details.find( product => product.product_id === pill.id);
          // si lo encuentra, le sumamos la quantity, caso contrario no sumamos nada.
          // esto se hace ya que puede darse el caso que en una compra se haya encargado un producto,
          // y en otra no
          let days = 0;
          if ( i !== 0) { //condicion para no hacer esta operacion en la primera compra
            let previousPurchaseDate = new Date(arr[i-1].received_date);
            let currentPurchase = new Date(arr[i].received_date);
            let result = Math.abs(currentPurchase - previousPurchaseDate);
            //days es cuantos dias han pasado desde la ultima compra.
            days = Math.ceil(result / (1000 * 60 * 60 * 24));
          }
          if ( currentValue !== undefined)  {
            let pillsLeft = a - days; // pastillas consumidas
            // si ya consumio todas las pastillas, esta compra es para reponer, por lo que 
            // se retorna la cantidad que indica en la compra.
            // caso del product_id: 5, de la segunda compra a la tercera
            // no quedan pastillas.
            if ( pillsLeft < 0 ) return currentValue.quantity
            return currentValue.quantity + pillsLeft;
          }
          return a + 0;
        }, 0 )
        if (pillSum !== 0) {
          let res = { product_id: pill.id, total: pillSum }
          reducedPurchases.push(res);
        }
      }) 
    }
    return reducedPurchases;
  }

  const finalPurchases = (!loading && !loadingProducts) ? reducePurchases(purchases) : []

  return(
    <div>
      <Emoji>💊</Emoji>
      <Title>Revisa tus compras</Title>
      <Subtitle>Agrega al carro si necesitas reponer</Subtitle>
      <Section> <SectionTitle>Te queda</SectionTitle></Section>
      { loading ? 
        <PillContainer> Loading...</PillContainer> :
        <PillContainer>
          { finalPurchases !== undefined ? finalPurchases.map( purchase => {
            return (
              <Pill 
                key={purchase.product_id} 
                purchase={purchase} 
                pills={pills} 
                lastReceived={purchases[purchases.length - 1].received_date}
              />
          )
          }) : null }
        </PillContainer>
          //<PillContainer>
            //{ finalPurchases !== undefined 
            //? 
              //finalPurchases.map( purchase => {
                //return ( <Pill key={purchase.product_id} purchase></Pill> )
              //} )
            //}
          //</PillContainer>
        
      }
    </div> 
  )
}
export default Container;
