import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/allapps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
      });
  }, []);

  return (
    <div className="w-full my-8 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="full rounded"
      >
        {apps.map((app, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
              <img
                src={app.banner}
                alt={app.name}
                className="w-full h-full object-cover"
              />
            </div>           
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
