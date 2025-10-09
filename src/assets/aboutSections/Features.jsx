const Features = () => {
    const featuresData = [
        {id: 0, percent: "95%", title: "Sustainability First", description: "Over 95% of our ingredients are responsibly sourced, supporting local communities and preserving biodiversity. Our commitment to sustainability is more than a principle."},
        {id: 1, percent: "100%", title: "Cruelty-Free Excellence", description: "We are proudly cruelty-free, ensuring that none of our products are tested on animals. This principle is woven into our brand's DNA, and our dedication to ethical standards."},
        {id: 2, percent: "100%", title: "Artistic Expression", description: "Each of our fragrances is a result of creative vision. This commitment to artistic expression leads to scents that are 100% unique, testaments to our creativity and excellence."},
    ];

  return (
    <section className="w-full">
        <h3  className="text-2xl font-semibold sm:font-bold sm:text-3xl md:text-4xl text-center my-8">The artisanal difference.</h3>
        <div className="flex flex-col w-full justify-center md:flex-row gap-2 ">
            {featuresData.map((item) => (
                <div key={item.id} className='flex flex-col gap-6 p-4 text-center justify-center items-center'>
                    <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xlt'>{item.percent}</p>
                    <h3 className='text-lg font-bold'>{item.title}</h3>
                    <p className='text-sm max-w-72 lg:text-base'>{item.description}</p>
                </div> 
            ))}
        </div>
    </section>
  )
}

export default Features