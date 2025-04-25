import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  "Graphic Design", "Presentation Design", "Animation Videos",
  "Research Services", "Translation Services", "Audio Video Editing",
  "Document Creation", "Logo Making", "Brand Identity",
  "Pitch Decks", "Business Cards", "Explainer Videos",
  "Infographics", "Brochure Design", "Motion Graphics"
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-white" id="services">
      <h2 className="text-2xl font-bold mb-8 text-center">Our Services</h2>
      
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="w-full max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="w-[260px]">
            <div className="bg-white border p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-40 flex items-center justify-center text-center">
              <span className="font-semibold text-gray-800">{service}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesSection;
