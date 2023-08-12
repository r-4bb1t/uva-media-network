import classcat from "classcat";

export default function Plan({ isShowing }: { isShowing: boolean }) {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div className="overflow-y-clip text-2xl lg:text-4xl font-bold mb-12">
        <div className={classcat([isShowing && "up"])}>모집 일정</div>
      </div>
      <div className="flex flex-col items-center lg:scale-100">
        <div className="relative lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center font-bold border-2 border-primary text-center lg:text-sm text-xs">
          <div className="absolute lg:left-20 left-16 -translate-x-1 lg:w-16 w-8 h-0.5 bg-primary"></div>
          <div className="absolute lg:left-28 left-20 rounded-full bg-primary text-black px-4 py-2 whitespace-nowrap lg:text-xl text-sm font-semibold">
            1차 서류모집
          </div>
          08/04
        </div>
        <div className="w-0.5 h-12 bg-primary" />
        <div className="relative lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center font-bold border-2 border-primary text-center lg:text-sm text-xs">
          <div className="absolute lg:right-20 right-16 translate-x-1 lg:w-16 w-8 h-0.5 bg-primary"></div>
          <div className="absolute lg:right-28 right-20 rounded-full bg-primary text-black px-4 py-2 whitespace-nowrap lg:text-xl text-sm font-semibold">
            1차 합격자 공고
          </div>
          08/08
          <br />- 08/09
        </div>
        <div className="w-0.5 h-12 bg-primary" />
        <div className="relative lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center font-bold border-2 border-primary text-center lg:text-sm text-xs">
          <div className="absolute lg:left-20 left-16 -translate-x-1 lg:w-16 w-8 h-0.5 bg-primary"></div>
          <div className="absolute lg:left-28 left-20 rounded-full bg-primary text-black px-4 py-2 whitespace-nowrap lg:text-xl text-sm font-semibold">
            2차 오프라인 면접
          </div>
          08/12
          <br />- 08/13
        </div>
        <div className="w-0.5 h-12 bg-primary" />
        <div className="relative lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center font-bold border-2 border-primary text-center lg:text-sm text-xs">
          <div className="absolute lg:right-20 right-16 translate-x-1 lg:w-16 w-8 h-0.5 bg-primary"></div>
          <div className="absolute lg:right-28 right-20 rounded-full bg-primary text-black px-4 py-2 whitespace-nowrap lg:text-xl text-sm font-semibold">
            최종 합격자 공고
          </div>
          08/15
        </div>
      </div>
    </div>
  );
}
