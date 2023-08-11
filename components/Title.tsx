import { SwiperSlide } from "swiper/react";
import cc from "classcat";

export default function Title({ index }: { index: number }) {
  return (
    <SwiperSlide>
      <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
        <div className="flex flex-col font-[amikobold] text-white w-96 text-7xl gap-3">
          <div className="h-16 title-container overflow-hidden">
            <div className={cc([index === 0 && "title"])}>UVA</div>
          </div>
          <div className="h-16 title-container overflow-hidden">
            <div className={cc(["relative w-fit", index === 0 && "title"])}>
              MEDIA
              <div className="inline-block absolute top-0 -right-2 w-3 h-3 rounded-full bg-white"></div>
            </div>
          </div>
          <div className="h-16 title-container overflow-hidden">
            <div className={cc([index === 0 && "title"])}>NETWORK</div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}
