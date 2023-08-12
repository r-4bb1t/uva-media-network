export default function Logo() {
  return (
    <div>
      <div className="flex flex-col font-[amiko] text-white text-xl lg:text-xl">
        <div className="overflow-hidden">
          <div>UVA</div>
        </div>
        <div className="overflow-hidden">
          <div className="relative w-fit">
            MEDIA
            <div className="inline-block absolute top-0 -right-2 w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>
        </div>
        <div className=" overflow-hidden">
          <div>NETWORK</div>
        </div>
      </div>
    </div>
  );
}
