const Text = () => {
  return (
    <div className="flex w-full h-full items-center justify-center flex-nowrap whitespace-nowrap">
      UVA MEDIA
      <div className="inline-block relative w-2 h-full">
        <div className="absolute top-1.5 left-0 w-1 h-1 rounded-full bg-black"></div>
      </div>
      NETWORK
    </div>
  );
};

export default function Header({ percent }: { percent: number }) {
  return (
    <header className="fixed z-10 inset-x-0 top-2 font-[amiko] bg-white text-black flex justify-center h-6 text-xs gap-6">
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <div
        className="absolute -left-full -bottom-2 h-0.5 bg-white w-full transition-all"
        style={{ transform: `translateX(${percent}%)` }}
      ></div>
    </header>
  );
}
