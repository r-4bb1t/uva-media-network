import classcat from "classcat";

export default function Contact({ isShowing }: { isShowing: boolean }) {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div className="overflow-y-clip text-2xl lg:text-4xl font-bold mb-12">
        <div className={classcat([isShowing && "up"])}>연락처</div>
      </div>
      <div className="text-xl lg:text-3xl text-center">
        <div className="font-bold mb-1 lg:mb-3 px-2 py-1 bg-primary text-black">
          회장 조항미
        </div>
        010-9146-2224
        <div className="font-bold mt-6 mb-1 lg:mb-3 px-2 py-1 bg-primary text-black">
          홍보부의장 전민수
        </div>
        010-9855-2752
      </div>
      <div className="absolute bottom-8">
        <img className="w-48" src="/logo.png" />
      </div>
      <footer className="w-full text-center py-6 absolute bottom-0 text-xs lg:text-base">
        Made by
        <a
          href="https://r4bb1t.dev/"
          target="_blank"
          className="inline-block ml-1 lg:ml-2 bg-white text-black px-1 lg:px-2 rounded"
        >
          @r-4bb1t
        </a>
      </footer>
    </div>
  );
}
