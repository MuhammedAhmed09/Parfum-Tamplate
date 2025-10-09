const FAQ = () => {
  const FAQData = [
    {id: 0, summary: "How long can I expect the fragrance to last on my skin?", description: "The longevity of our fragrances varies based on factors such as skin type, climate, and activity level. However, our carefully crafted scents are designed to have a lasting presence. On average, you can enjoy the captivating notes for 6 to 8 hours. To enhance the longevity, consider applying the fragrance to pulse points and using our complementary scented body products."},
    {id: 1, summary: "Are your perfumes suitable for sensitive skin or allergies?", description: "The longevity of our fragrances varies based on factors such as skin type, climate, and activity level. However, our carefully crafted scents are designed to have a lasting presence. On average, you can enjoy the captivating notes for 6 to 8 hours. To enhance the longevity, consider applying the fragrance to pulse points and using our complementary scented body products."},
    {id: 2, summary: "How do you ensure your commitment to sustainability?", description: "The longevity of our fragrances varies based on factors such as skin type, climate, and activity level. However, our carefully crafted scents are designed to have a lasting presence. On average, you can enjoy the captivating notes for 6 to 8 hours. To enhance the longevity, consider applying the fragrance to pulse points and using our complementary scented body products."},
  ]

  return (
    <div className='w-full px-4 sm:px-6 md:px-8 lg:px-10'>
      <h3 className="text-2xl font-semibold sm:font-bold sm:text-3xl md:text-4xl text-center my-8">The artisanal difference.</h3>
      <div className="flex flex-col gap-4">
        {FAQData.map((item) => (
          <details key={item.id} className="bg-white rounded-2xl">
            <summary className="p-2 font-semibold cursor-pointer">{item.summary}</summary>
            <p className="p-2 text-sm">{item.description}</p>
          </details>
        ))}
      </div>
    </div>
  )
}

export default FAQ