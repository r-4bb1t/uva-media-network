import classcat from "classcat";

export default function FAQ({ isShowing }: { isShowing: boolean }) {
  return (
    <div className="relative h-screen flex flex-col bg-primary items-center justify-center px-4">
      <div className="overflow-y-clip text-2xl lg:text-4xl font-bold mb-12 text-black">
        <div className={classcat([isShowing && "up"])}>FAQ</div>
      </div>
      <ul className="text-xl text-center px-6 py-8 flex flex-col gap-5 justify-center break-keep bg-black">
        <li>
          <div className="font-bold">
            Q. 토요일 정기총회는 언제, 어디에서 이루어지나요?
          </div>
          <div className="text-base mt-2">
            A. 주로 서울 소재의 대학교 강의실에서 16:00 ~ 18:00에 진행하고
            있습니다. 시간은 유동적으로 바뀔 수 있어, 토요일에 여유롭게 참여할
            수 있으신지 확인하고 있어요!
          </div>
        </li>
        <li>
          <div className="font-bold">Q. 영상 초보인데 지원해도 될까요?</div>
          <div className="text-base mt-2">
            A. 네, 물론입니다! 우바라기 멘토링을 통해 영상의 기초를 배우고 정규
            프로젝트를 통해 영상 경험을 쌓을 수 있으니 걱정 마시고 지원해주세요!
          </div>
        </li>
      </ul>
    </div>
  );
}
