import "../style/index.css";
export function Hero() {
  const handleClick = () => {
    const targetElement = document.getElementById("HowTo");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-[10vh] sm:py-48 lg:py-[19vh] hover:scale-105 transition ease-in-out">
        <div className="text-center">
          <h1 className="text-[10vw] font-bold tracking-tight sm:text-6xl">
            Hi, Welcome to Our Quiz Website
          </h1>
          <p className="mt-6 text-[2vh] leading-5  para">
            Don't worry about the score, just focus on your answer. In this
            test, you able to know more knowledge.
          </p>
          <div className="mt-10 mb-[5vw] flex items-center justify-center gap-x-6">
            <button
              className="rounded-md bg-[#00787e] px-3.5 py-2.5 text-[1rem] font-semibold  shadow-sm hover:text-black hover:bg-[#fedf51]"
              onClick={handleClick}
            >
              How to Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
