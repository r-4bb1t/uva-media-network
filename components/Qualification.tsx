import classcat from "classcat";

export default function Qualification({ isShowing }: { isShowing: boolean }) {
  return (
    <div className="relative h-screen bg-primary flex flex-col items-center justify-center">
      <div className="overflow-y-clip text-2xl lg:text-4xl font-bold mb-12 text-black">
        <div className={classcat([isShowing && "up"])}>
          지원자격 및 우대사항
        </div>
      </div>
      <div className="w-full px-4 max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="w-full py-8 px-12 bg-black">
          <div className="text-xl lg:text-3xl font-bold mb-4 text-center">
            지원자격
          </div>
          <ul className="text-lg lg:text-xl w-full list-disc gap-list">
            <li>20대 대학생</li>
            <li>수도권 지역 활동 가능자</li>
            <li>
              매월 1회 전체 총회 참석 가능자
              <br />
              <small>(토요일 16시)</small>
            </li>
          </ul>
        </div>
        <div className="w-full py-8 px-12 bg-black">
          <div className="text-xl lg:text-3xl font-bold mb-4 text-center">
            우대사항
          </div>
          <ul className="text-lg lg:text-xl w-full list-disc gap-list">
            <li>
              편집 관련 툴을 다룰 수 있으신 분
              <br />
              <small>
                (프리미어, 애프터이펙트, 포토샵, 일러스트레이터, 마야, 언리얼,
                유니티 등)
              </small>
            </li>
            <li>
              촬영 장비가 있으신 분
              <br />
              <small>(카메라, 렌즈, 삼각대, 짐벌, 드론 등)</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
