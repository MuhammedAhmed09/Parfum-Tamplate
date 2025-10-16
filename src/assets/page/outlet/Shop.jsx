import { useContext } from "react"
import { GetProductsContext } from "../../context/ProductsAPI"
import { Link } from "react-router-dom";

const Shop = () => {
  const { products, isFailedGotProducts } = useContext(GetProductsContext);

  return (
    <section className="w-full bg-Light-Pink grid gap-y-8">
      {/* HERO */}
      <div className='relative w-full flex justify-center items-center'>
        <img src="/image/collection-banner.png" alt="flower benner"  className="w-full object-contain"/>
        <p className="absolute text-center text-white text-3xl sm:text-4xl md:text-5xl w-92 ">
          All fragrances.
        </p> 
      </div>
      {/* PRODUCTS */}
      <div className="px-6">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id} 
              className="w-full col-span-1 text-center items-center flex flex-col gap-1"
            >
              <img 
                src={product.image}  
                alt={product.title} 
                className="p-8 bg-white w-64 h-82 rounded-2xl m-2"
              />
              <h3 className="font-semibold text-base lg:text-lg w-64">
                {product.title.slice(0, 25)}
              </h3>
              <h5 className="text-sm lg:text-base">{product.price}</h5>
              <Link to={`/product/${product.id}`} className="bg-Green text-black rounded-full px-12 py-1 text-sm font-semibold cursor-pointer">
                <button className="cursor-pointer">SHOP NOW</button>
              </Link>
            </div>
          ))}
        </div>
        {isFailedGotProducts && (
          <h3 className="text-red-600 text-4xl">Failed to get a products</h3>
        )}
      </div>
    </section>
  )
}

export default Shop