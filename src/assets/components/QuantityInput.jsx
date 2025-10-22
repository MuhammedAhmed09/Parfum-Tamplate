import { useContext } from "react"
import { ProductsContext } from "../context/CartProducts"

const QuantityInput = ({ item }) => {
  const { updateQuantity } = useContext(ProductsContext);

  return (
    <input 
        value={item.quantity}
        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
        type="number" 
        min={1}
        className='border rounded-full mx-4 px-4 py-1 max-w-20 text-center'
    />
  )
}

export default QuantityInput