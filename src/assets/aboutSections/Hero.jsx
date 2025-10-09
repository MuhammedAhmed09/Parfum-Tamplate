import { Link } from "react-router-dom"
import Button from "../homeSections/Button"
const Hero = () => {
  return (
    <div className='relative w-full flex justify-center items-center'>
      <img src="/image/about-banner.png" alt="flower about benner" />
      <div className="absolute flex flex-col gap-6 items-center justify-center overflow-hidden text-white ">
        <p className="text-3xl sm:text-4xl md:text-5xl text-center w-92 ">
          Our guiding <br /> principles.
        </p> 
        <Link to='/shop' className='rounded-full text-xs sm:text-sm font-semibold text-center bg-white text-black py-2 px-10'>
          <Button text={'SHOP OUR FRAGRANCES'} />
        </Link>
      </div>
    </div>
  )
}

export default Hero