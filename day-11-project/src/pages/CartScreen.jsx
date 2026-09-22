import React ,{useContext} from 'react'
import CartCard from '../components/CartCard'
import { MyStore } from '../context/MyContext'

const CartScreen = () => {
  let {cartItems} = useContext(MyStore)
  return (
    <div className = "text-6xl h-[95%] gap-4 grid grid-cols-3">
        {
          cartItems.map((elem)=>{
            return <CartCard key = {elem.id} product={elem}/>
          })
      }
      
    </div>
  )
}

export default CartScreen
