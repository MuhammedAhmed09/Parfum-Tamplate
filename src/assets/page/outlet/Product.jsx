import Featured from '../../productSections/Featured';
import FeaturedImage from '../../productSections/FeaturedImage';
import ProductDetails from '../../productSections/ProductDetails';

const Product = () => {
   
  return (
    <section className='bg-Light-Pink'>
      <ProductDetails />
      <Featured />
      <FeaturedImage />
    </section>
  )
}

export default Product