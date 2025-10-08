import { Link } from "react-router-dom"
import Button from "./Button"

const Hero = () => {
  return (
    <div>
      <div className="relative w-full max-h-[90vh] flex justify-center">
        <video autoPlay loop muted width={1000} height={1000} className="w-full object-cover">
          <source src="/video/benner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center overflow-hidden">
          <p className="text-white text-5xl text-center w-92">
            Elevate everyday moments to extraordinary.
          </p>   
          <Link to='shop' className='rounded-full text-xs sm:text-sm font-semibold text-center bg-white text-black py-2 px-10'>
            <Button text={'SHOP OUR FRAGRANCES'} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero