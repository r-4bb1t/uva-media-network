import Title from "@/components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { useState } from "react";
import Plan from "@/components/Plan";
import "swiper/css";
import "swiper/css/mousewheel";
import Header from "@/components/Header";
import Qualification from "@/components/Qualification";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full bg-black text-white">
      <Header percent={((index + 1) / 5) * 100} />
      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        autoHeight={true}
        followFinger={true}
        mousewheel={true}
        modules={[Mousewheel]}
        onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <Title />
        </SwiperSlide>
        <SwiperSlide>
          <Qualification isShowing={index === 1} />
        </SwiperSlide>
        <SwiperSlide>
          <Plan isShowing={index === 2} />
        </SwiperSlide>
        <SwiperSlide>
          <FAQ isShowing={index === 3} />
        </SwiperSlide>
        <SwiperSlide>
          <Contact isShowing={index === 4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
