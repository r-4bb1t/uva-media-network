import Title from "@/components/Title";
import { Swiper } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import { useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  return (
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
      <Title index={index} />
    </Swiper>
  );
}
