import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    
    const handleAddItem = ( product ) => {
        const quantityToAdd = Number(product.quantity || 1);

        const existingProduct = cartItems.find((item) => item.id === product.id);
        if (existingProduct) {
            // لو المنتج موجود, حدث الكميه
            const updatedProducts = cartItems.map((item) => 
                item.id === product.id 
                ? {...item, quantity: Number(item.quantity || 1) + quantityToAdd} 
                : item
            );
            setCartItems(updatedProducts);
        } else{
            setCartItems([...cartItems, {...product,  quantity: quantityToAdd}])
        }
    };

    const handleRemoveItem = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId)) 
    };

    const updateQuantity = ({ productId, newQuantity }) => {
        setCartItems((prevItems) => 
            prevItems.map((item) => 
                item.id === productId ? {
                    ...item, 
                    quantity: newQuantity > 0 ? newQuantity : 1
                } : item
            )
        ) 
    };

    const totalQuantity = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0)
    };

    return (
        <ProductsContext.Provider value={{ cartItems, setCartItems, handleAddItem, updateQuantity, handleRemoveItem, totalQuantity }}>
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;