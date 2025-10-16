
const FeaturedImage = () => {
  return (
    <section className="p-6 flex flex-col md:flex-row-reverse items-center justify-between w-full gap-y-6">
      <div className="w-full flex justify-center">
        <img
          src="\image\productImages\featuredImage.png"
          alt="Perfume bottle promotional display"
          className="object-contain"
        />
      </div>

      <div className="w-full">
        <div className="flex flex-col gap-6 items-center justify-center text-center">
          <h3 className="text-xl font-semibold sm:font-bold sm:text-2xl md:text-3xl">
            Nature as the muse.
          </h3>
          <p className='md:max-w-md'>
            The sweet blush of blooming petals, the woody embrace of a forest, 
            the crisp freshness of morning dew – these elements find their way into our fragrances, 
            infusing them with life and authenticity. 
            Our artisans capture these fleeting moments, 
            distilling them into scents that encapsulate the beauty of the natural world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedImage