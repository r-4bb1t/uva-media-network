import Circle from "./Circle";

export default function Title() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-8 relative">
      <div className="w-full h-full flex flex-col items-center justify-center title-container">
        <Circle />
        <div className="absolute w-[260px] lg:w-[650px] h-full">
          <img src="/title.png" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="w-full h-screen flex items-end lg:items-start absolute font-[pretendard] py-32">
        <div className="w-full flex flex-col items-end text-right">
          <div className="pr-4 pb-2 pl-24 text-primary border-b-2 border-b-primary lg:font-bold lg:text-2xl">
            영상연합동아리
            <br />
            우바미디어네트워크
            <br />
          </div>
          <div className="text-white font-medium mt-2 pr-4 text-lg">
            22ND RECRUITMENT
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 flex justify-center p-1 rounded-full h-8 border-2 border-white">
        <div className="mouse-scroll w-1 h-1 rounded-full bg-white" />
      </div>
      <div className="absolute left-0 lg:-bottom-36 top-0 lg:top-auto">
        <img className="lg:w-[500px] w-[250px]" src="/slogan.png" />
      </div>
    </div>
  );
}
