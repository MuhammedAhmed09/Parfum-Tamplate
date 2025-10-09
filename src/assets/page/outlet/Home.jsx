import FeaturedImage from '../../homeSections/featuredImage'
import FeaturedImage2 from '../../homeSections/FeaturedImage2'
import FeaturedLogos from '../../homeSections/FeaturedLogos'
import Hero from '../../homeSections/Hero'
import Marquee from '../../homeSections/Marquee'
import Tesimonial from '../../homeSections/Tesimonial'

const Home = () => {
  return (
    <div className='bg-Light-Pink'>
      <Hero />
      <FeaturedLogos />
      <FeaturedImage />
      <Marquee />
      <FeaturedImage2 />
      <Tesimonial />
    </div>
  )
}

export default Home