import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Tesimonial = () => {
    const tesimonialData = [
        {
            id: 0,
            description: "“With a scent built around the Gardenia flower, the joyful floral signature has been admired since the dawn of time and said to be used in elixirs and magic potions.”",
            source: "/image/testimonial-photo.jpg",
            name: "Jhon S.",
            sity: "TAMPA, FL"
        },
        {
            id: 1,
            description: "“A definite must-have for anyone seeking an enchanting and long-lasting fragrance experience. A true floral symphony in every bottle!”",
            source: "/image/testimonial-photo2.jpg",
            name: "Marko A.",
            sity: "CAIRO, EG"
        },
        {
            id: 2,
            description: "“Delighted to have found a perfume that uplifts my mood and receives compliments wherever I go. The scents are like a bouquet of nature's finest flowers fresh everyday.”",
            source: "/image/testimonial-photo3.jpg",
            name: "Sanad R.",
            sity: "SANGAFORA, IN"
        },
        {
            id: 3,
            description: "“With a scent built around the Gardenia flower, the joyful floral signature has been admired since the dawn of time and said to be used in elixirs and magic potions.”",
            source: "/image/testimonial-photo4.jpg",
            name: "Natalei F.",
            sity: "ATLANTA, GA"
        },
        {
            id: 4,
            description: "“A definite must-have for anyone seeking an enchanting and long-lasting fragrance experience. A true floral symphony in every bottle!”",
            source: "/image/testimonial-photo5.jpg",
            name: "Samantha R.",
            sity: "MIAMI, FL"
        },
        {
            id: 5,
            description: "“Delighted to have found a perfume that uplifts my mood and receives compliments wherever I go. The scents are like a bouquet of nature's finest flowers fresh everyday.”",
            source: "/image/testimonial-photo6.jpg",
            name: "Jessica C.",
            sity: "RIYADH, SA"
        },
    ];

    return (
        <section className='px-4 py-10 bg-Light-Pink'>
            <h3 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl text-gray-800 mb-10">
                Everyone is enchanted by us.
            </h3>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Navigation, Pagination]}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="!pb-10"
            >
                {tesimonialData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='shadow-md bg-white hover:shadow-xl transition-all duration-300 rounded-2xl p-6 flex flex-col gap-4 h-full'>
                            <div className='text-yellow-400 text-sm flex gap-1'>
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                            </div>

                            <p className='text-gray-600 text-sm italic leading-relaxed'>
                                {item.description}
                            </p>

                            <div className='flex items-center gap-3 mt-auto'>
                                <img
                                    src={item.source}
                                    alt={`Photo of ${item.name}`}
                                    className='w-12 h-12 rounded-full object-cover border border-gray-300'
                                />
                                <div>
                                    <h3 className='text-base font-semibold text-gray-800'>{item.name}</h3>
                                    <h5 className='text-xs text-gray-500'>{item.sity}</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Tesimonial;
