import { SwiperSlide } from "swiper/react";
import Circle from "./Circle";
import cc from "classcat";

export default function Title({ index }: { index: number }) {
  return (
    <SwiperSlide>
      <div className="w-full h-screen flex flex-col items-center justify-center px-8">
        <div className="flex flex-col items-center justify-center title-container">
          <Circle />
          <div className="absolute flex flex-col font-['Black_Han_Sans'] tracking-wider font-black text-white text-5xl lg:text-[10rem]">
            <div className="title-container overflow-hidden">
              <div className={cc(["bordered", index === 0 && "title"])}>
                UVA
              </div>
            </div>
            <div className="title-container overflow-hidden lg:-mt-3">
              <div
                className={cc(["bordered relative", index === 0 && "title"])}
              >
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
        <div className="w-full h-screen flex items-end lg:items-start absolute font-[pretendard] py-24">
          <div className="w-full flex flex-col items-end text-right">
            <div className="pr-4 pb-2 pl-24 text-primary border-b-2 border-b-primary lg:font-bold lg:text-2xl">
              영상연합동아리
              <br />
              우바미디어네트워크
              <br />
            </div>
            <div className="text-white font-medium mt-2 pr-4 text-lg">
              2023 F/F RECRUITMENT
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}
