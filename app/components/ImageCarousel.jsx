"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Added Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import Image from 'next/image';
import SlideImage from '../public/images/Slide.png'; // Import the image from your public folder
import SlideImage2 from '../public/images/Slide2.png'; // Import the image from your public folder
import SlideImage3 from '../public/images/Slide3.png'; // Import the image from your public folder

// Pixabay images and local image
const images = [
  {
    url: SlideImage,
    title: 'Latest News & Updates',
    description:
      'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.',
  },
  {
    url: SlideImage2,
    title: 'Explore New Horizons',
    description:
      'Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non.',
  },
  {
    url: SlideImage3,
    title: 'Adventure Awaits',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ut tellus.',
  },
];

const ImageCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Added Autoplay
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet"></span>`, // Custom bullet class
        }}
        autoplay={{
          delay: 3000, // Set autoplay delay
          disableOnInteraction: false, // Keep autoplay functional even after interactions
        }}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={img.url}
                alt={img.title}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold">{img.title}</h2>
                <p className="text-sm">{img.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Left and Right Navigation Buttons */}
      <div
        ref={prevRef}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg cursor-pointer p-2 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <div
        ref={nextRef}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg cursor-pointer p-2 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default ImageCarousel;
