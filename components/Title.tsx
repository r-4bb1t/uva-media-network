import { SwiperSlide } from "swiper/react";
import Circle from "./Circle";
import cc from "classcat";

export default function Title({ index }: { index: number }) {
  return (
    <SwiperSlide>
      <div className="w-full h-screen flex flex-col items-center justify-center px-8 title-container">
        <Circle />
        <div className="absolute flex flex-col font-['Black_Han_Sans'] tracking-wider font-black text-white text-5xl lg:text-[10rem]">
          <div className="title-container overflow-hidden">
            <div className={cc(["bordered", index === 0 && "title"])}>UVA</div>
          </div>
          <div className="title-container overflow-hidden lg:-mt-3">
            <div className={cc(["bordered relative", index === 0 && "title"])}>
              MEDIA
            </div>
          </div>
          <div className="title-container overflow-hidden lg:-mt-3">
            <div className={cc([index === 0 && "title"])}>NET</div>
          </div>
          <div className="title-container overflow-hidden lg:-mt-3">
            <div className={cc([index === 0 && "title"])}>WORK</div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}
