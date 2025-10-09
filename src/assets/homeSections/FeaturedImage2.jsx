const FeaturedImage2 = () => {
    const featured = [
        {id: 0, source: "/image/featured-image-icon1.png", alt: "flower icon sustainable", title: "sustainable sourcing", description: "We meticulously source our ingredients from sustainable and eco-friendly suppliers, ensuring that the delicate balance of nature is preserved."},
        {id: 1, source: "/image/featured-image-icon2.png", alt: "flower icon sustainable", title: "Clean Formulations", description: "Our perfumes are crafted using clean and non-toxic ingredients, free from harmful chemicals that could compromise your health or the environment."},
        {id: 2, source: "/image/featured-image-icon3.png", alt: "flower icon sustainable", title: "Minimalist Packaging", description: "Our bottles and boxes are thoughtfully designed to minimize waste, using eco-friendly materials that are both beautiful and sustainable."},
        {id: 3, source: "/image/featured-image-icon4.png", alt: "flower icon sustainable", title: "Cruelty-Free Practices", description: "We are proud to be a cruelty-free brand, never testing our products on animals.Our dedication to safety extends to our furry friends."},
    ]

  return (
    <section className="p-6 flex flex-col md:flex-row-reverse items-center justify-between w-full gap-y-6">
      <div className="w-full flex justify-center">
        <img
          src="/image/featured-image2.png"
          alt="Perfume bottle promotional display"
          className=" object-contain"
        />
      </div>

      <div className="w-full">
        <div className="flex flex-col gap-6 items-center justify-center text-center">
          <h3 className="text-xl font-semibold sm:font-bold sm:text-2xl md:text-3xl">
            Safe for you, safe for the earth.
          </h3>
          <div className="flex flex-wrap gap-8">
            {featured.map((data) => (
                <div key={data.id} className='w-64 flex flex-col gap-3 justify-start items-start text-start'>
                    <img src={data.source} alt={data.alt} />
                    <h5 className='text-sm md:text-base font-semibold'>{data.title}</h5>
                    <p className='text-sm text-black/80'>{data.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedImage2