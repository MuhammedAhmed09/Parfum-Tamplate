import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {

    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [isError, setIsFailedGotProduct] = useState(false);

    console.log(product);
    
    const { id } = useParams();
    const productURL = `https://fakestoreapi.com/products/${id}`;

    const fetchProduct = async () => {
        try {
        const response = await axios.get(productURL);
        setProduct(response.data);
        setIsFailedGotProduct(false);
        } catch (error) {
        console.error("Failed to fetch product:", error);
        setIsFailedGotProduct(true);
        }
    };

    useEffect(() => {
        fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (isError) {
        return <h3 className="text-red-600 text-4xl">Failed to get a product</h3>;
    }

    if (!product) {
        return <h3>Loading product...</h3>;
    }


  return (
    <>
    {!isError ? (
        <section className='bg-Light-Pink w-full flex px-6 flex-col items-center justify-center min-h-[100vh] gap-4 md:gap-6'>
            <div className='flex flex-col sm:flex-row justify-between p-8 w-full gap-8 mt-20'>
                <div className='w-full'>
                    <img src={product.image} alt={product.title} className='max-h-[75vh]'/>
                </div>
                <div className='w-full grid gap-4 sm:gap-6 md:gap-8'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>{product.title}</h3>
                    <div className='flex w-full justify-between font-semibold'>
                        <h4>{product.category}</h4>
                        <h4>{`${product.price} LE`}</h4>
                    </div>
                    <p className='text-sm lg:text-base text-black/80 text-start'>{product.description}</p>
                    <button className='rounded-full border px-12 py-1 border-Red max-w-52 text-Red font-semibold'>SOLD OUT!</button>
                    <label htmlFor="quantity" className='font-semibold'>
                        QTY
                        <input 
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            type="number" 
                            className='border rounded-full mx-4 px-4 py-1 max-w-20 text-center'
                        />
                    </label>
                    <button className='rounded-full cursor-pointer bg-Green text-sm md:text-base px-12 py-2 font-semibold'>ADD TO CART</button>
                </div>
            </div>
        </section>
    ) : (
        <h3 className="text-red-600 text-4xl">Failed to get a product</h3>
    )}
    </>
  )
}

export default ProductDetails