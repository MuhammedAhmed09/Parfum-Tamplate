import Button from './Button'
import { Link } from 'react-router-dom'

const FeaturedImage = () => {
  return (
    <section className="p-6 flex flex-col md:flex-row items-center justify-between w-full gap-y-6">
      <div className="w-full flex justify-center">
        <img
          src="/image/featured-image.png"
          alt="Perfume bottle promotional display"
          className="object-contain"
        />
      </div>

      <div className="w-full">
        <div className="flex flex-col gap-6 items-center justify-center text-center">
          <h3 className="text-xl font-semibold sm:font-bold sm:text-2xl md:text-3xl">
            Smell like a dream.
          </h3>
          <p className='md:max-w-lg'>
            With every delicate spritz, our scents weave a tapestry of dreams,
            enveloping you in an irresistible aura that lingers like the sweetest
            reverie. Each note is meticulously crafted to transport you to a realm
            where your aspirations come alive, leaving an impression that's as
            lasting as the memory of a cherished dream.
          </p>
          <Link
            to="shop"
            className="rounded-full bg-Green text-white px-12 py-2 font-semibold"
          >
            <Button text={"SHOP NOW"} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedImage