const text = "UNITED FILMING CLUB UNITED FILMING CLUB ";

export default function Circle() {
  return (
    <div className="absolute flex items-center justify-center circle-container">
      <div className="circle text-white lg:text-xl text-lg relative top-10 lg:top-40">
        {text.split("").map((char, i) => (
          <span
            className="char"
            /* @ts-ignore */
            style={{ "--char-index": i, "--length": text.length }}
            key={i}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
