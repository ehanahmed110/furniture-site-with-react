import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const cards = [
    { title: 'Ali Haider', img: '/table.jpg',para: 'Your table is very beautiful and comfortable in use.' },
    { title: 'Ali Hasan', img: '/sofa.jpg',para: 'Your table is very beautiful and comfortable in use.' },
    { title: 'Abdullah', img: '/dinning-table-1.jpg',para: 'Your table is very beautiful and comfortable in use.' },
    { title: 'Shafiq Ali', img: '/chairs-1.jpg',para: 'Your table is very beautiful and comfortable in use.' },
    { title: 'Ehan Ahmed', img: '/beds.jpg',para: 'Your table is very beautiful and comfortable in use.' },
    { title: 'Baqar Ali', img: '/beds-1.jpg',para: 'Your table is very beautiful and comfortable in use.' },
  ];

  return (
    <div className="w-[90%] mx-auto">
        <h1 className='text-4xl font-bold text-center uppercase mt-16 mb-2'>coustomer reviews</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="rounded-2xl"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center mt-4 mb-4">
              <img src={card.img} alt={card.title} className="rounded-lg mb-2 h-[200px] md:w-[230px] w-full" />
              <h3 className="text-lg font-bold mb-2 ">{card.title}</h3>
              <p className='text-center'>{card.para}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;


