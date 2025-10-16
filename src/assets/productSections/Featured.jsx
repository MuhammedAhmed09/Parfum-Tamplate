const Featured = () => {
    const featuresData = [
        {id: 0, iconURL: "/image/productImages/features-icon.png", title: "ARTISANAL CRAFTSMANSHIP", description: "Our fragrances are meticulously crafted by skilled artisans who blend science with creativity. Every note is carefully chosen and combined, resulting in captivating scents."},
        {id: 1, iconURL: "/image/productImages/features-icon1.png", title: "SCENT JOURNEY INNOVATION", description: "Our fragrances take you on a dynamic scent journey. As the day unfolds, our perfumes reveal different facets, adapting to your body chemistry and surroundings."},
        {id: 2, iconURL: "/image/productImages/features-icon3.png", title: "INSPIRED BY NATURE", description: "Our fragrances are born from nature's palette, capturing the essence of blooming flowers, lush landscapes, and serene moments. We draw inspiration from the beauty around us."},
    ];

  return (
    <section className="w-full">
        <h3  className="text-2xl font-semibold sm:font-bold sm:text-3xl md:text-4xl text-center my-8">Unvieling creative mastery.</h3>
        <div className="flex flex-col w-full justify-center md:flex-row gap-2 ">
            {featuresData.map((item) => (
                <div key={item.id} className='flex flex-col gap-6 p-4 text-center justify-center items-center'>
                    <img src={item.iconURL} alt={item.title} className='text-4xl sm:text-5xl md:text-6xl lg:text-7xlt'/>
                    <h3 className='text-lg font-bold'>{item.title}</h3>
                    <p className='text-sm max-w-72 lg:text-base'>{item.description}</p>
                </div> 
            ))}
        </div>
    </section>
  )
}

export default Featured