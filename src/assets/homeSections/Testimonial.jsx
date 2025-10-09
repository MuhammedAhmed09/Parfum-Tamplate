
const Testimonial = () => {
    const tesimonialData = [
        {id: 0, description: "“With a scent built around the Gardenia flower, the joyful floral signature has been admired since the dawn of time and said to be used in elixirs and magic potions. ”", source: "/image/testimonial-photo.jpg", name: "Jhon S.", sity: "TAMPA. FL"},
        {id: 1, description: "“A definite must-have for anyone seeking an enchanting and long-lasting fragrance experience. A true floral symphony in every bottle!”", source: "/image/testimonial-photo2.jpg", name: "Marko A.", sity: "CAIRO. EG"},
        {id: 2, description: "“Delighted to have found a perfume that uplifts my mood and receives compliments wherever I go. The scents are like a bouquet of nature's finest flowers fresh everyday.”", source: "/image/testimonial-photo3.jpg", name: "Sanad R.", sity: "SANGAFORA. IN"},
        {id: 3, description: "“With a scent built around the Gardenia flower, the joyful floral signature has been admired since the dawn of time and said to be used in elixirs and magic potions. ”", source: "/image/testimonial-photo4.jpg", name: "Natalei F.", sity: "ATLANTA. GA"},
        {id: 4, description: "“A definite must-have for anyone seeking an enchanting and long-lasting fragrance experience. A true floral symphony in every bottle!”", source: "/image/testimonial-photo5.jpg", name: "Samantha R.", sity: "MIAMI. FL"},
        {id: 5, description: "“Delighted to have found a perfume that uplifts my mood and receives compliments wherever I go. The scents are like a bouquet of nature's finest flowers fresh everyday.”", source: "/image/testimonial-photo6.jpg", name: "Jessica C.", sity: "RIAD. SE"},
    ]

  return (
    <section className='p-6'>
        <h3 className="text-xl text-center my-6
         font-semibold sm:font-bold sm:text-2xl md:text-3xl">
            Everyone is enchanted by us.
        </h3>
        <div className="flex justify-center flex-wrap gap-4">
            {tesimonialData.map((item) => (
                <div key={item.id} className='bg-white rounded-2xl p-6 flex flex-col gap-2'>
                    <p>rate</p>
                    <p className='text-sm max-w-md text-black/80'>{item.description}</p>
                    <div className='flex gap-2'>
                        <img src={item.source} alt="Person's Photo" className='w-12 h-12 rounded-full' />
                        <div>
                            <h3 className='text-base font-semibold'>{item.name}</h3>
                            <h5 className='text-xs font-semibold'>{item.sity}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    </section>
  )
}

export default Testimonial