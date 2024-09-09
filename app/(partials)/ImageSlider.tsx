"use client";

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { motion, useAnimation, useInView } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const GallerySection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const slides = [
    { id: 1, image: "https://pagedone.io/asset/uploads/1712568734.png", title: "Golden&Silver Metal Belt Watch", description: "a chic and understated accessory for any occasion." },
    { id: 2, image: "https://pagedone.io/asset/uploads/1712569721.png", title: "Golden Metal Belt Watch", description: "a chic and understated accessory for any occasion." },
    { id: 3, image: "https://pagedone.io/asset/uploads/1712568744.png", title: "Silver Metal Belt Watch", description: "a chic and understated accessory for any occasion." },
    // ... Add more slides as needed
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div variants={itemVariants} className="pb-16">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-loose pb-2.5">Our Gallery</h2>
          <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">Explore the essence of beauty in our gallery's intimate space.</p>
        </motion.div>
        
        <div className="mx-auto w-auto relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              1920: { slidesPerView: 3, spaceBetween: 20 },
              1400: { slidesPerView: 3, spaceBetween: 20 },
              900: { slidesPerView: 3, spaceBetween: 15 },
              200: { slidesPerView: 2, spaceBetween: 15 },
            }}
            className="gallery-top w-full md:w-[1028px] mx-auto xl:overflow-hidden pt-6"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="max-w-[319px] grid">
                <motion.div variants={itemVariants}>
                  <img className="grow shrink basis-0 w-full rounded-xl object-cover" src={slide.image} alt={slide.title} />
                  <div className="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-5">
                    <h5 className="w-full text-center text-gray-900 text-xl font-medium leading-loose">{slide.title}</h5>
                    <p className="w-full text-center text-gray-600 text-base font-normal leading-relaxed">{slide.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev top-[35%] xl:flex hidden shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-11 h-11 items-center justify-center border border-gray-300 rounded-lg group hover:bg-gray-900 transition-all duration-700 ease-in-out">
            <svg className="text-gray-900 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5002 14.9999L7.50005 9.99973L12.5032 4.99658" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="swiper-button-next top-[35%] xl:flex hidden shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-11 h-11 items-center justify-center border border-gray-300 rounded-lg group transition-all duration-700 ease-in-out hover:bg-gray-900">
            <svg className="text-gray-900 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.50301 4.99637L12.5032 9.99657L7.50006 14.9997" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default GallerySection;