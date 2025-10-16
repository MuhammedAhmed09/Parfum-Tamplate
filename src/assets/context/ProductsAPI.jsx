import axios from "axios";
import { createContext, useEffect, useState } from "react";
const productsURL = 'https://fakestoreapi.com/products'

// eslint-disable-next-line react-refresh/only-export-components
export const GetProductsContext = createContext();


const GetProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isFailedGotProducts, setIsFailedGotProducts] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(productsURL);
            setProducts(response.data);
            setIsFailedGotProducts(false);
        } catch (error) {
            console.error("Failed to fetch products:", error);
            setIsFailedGotProducts(true);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <GetProductsContext.Provider value={{ products, isFailedGotProducts }}>
            { children }
        </GetProductsContext.Provider>
    )
}

export default GetProductsProvider;