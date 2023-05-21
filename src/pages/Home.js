import quizpng from "../assets/quiz.png";
import { FlexboxBox } from "../component/FlexboxBox";
import { Hero } from "../component/Hero";
import { Navbar } from "../component/Navbar";

export function Home() {
  return (
    <div>
      {/* Bagian 1 */}
      <div className="bg-gradient-to-b from-[#7ec7d0] to-blue-500 pb-64">
        <Navbar />
        {/* Flexbox grid */}
        <div className="container mx-auto">
          <div className="mx-2 text-white">
            {/* Hero */}
            <FlexboxBox content={<Hero />} className="mt-[5.2rem]" />
            {/* How To */}
            <div className="py-20 text-center">
              <div className="text-7xl font-bold">How To</div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <FlexboxBox content={"Hello"} className="w-full lg:h-1/2" />
              <FlexboxBox content={"Hello"} className="w-full lg:h-1/2" />
            </div>
            {/* Select Play */}
          </div>
        </div>
      </div>
      {/* Bagian 2 */}
      <div className="relative bottom-[27rem]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2365e8"
            fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="bg-[#2365e8] -mt-1">
          <div className="container mx-auto text-white">
            {/* Random Trivia */}
            <div className="py-20 text-center">
              <div className="text-7xl font-bold">Random Trivia</div>
            </div>
            <div className="flex flex-col lg:flex-row my-1 gap-1 flex-nowrap overflow-hidden">
              <FlexboxBox
                content={
                  <div className="p-7 text-center h-full">
                    <div className="flex h-1/3">
                      <img className="h-24" src={quizpng}></img>
                      <div className="text-3xl font-bold p-6">
                        Did you know?
                      </div>
                    </div>
                    <div className="h-2/3 content-center align-middle pt-10">
                      <div className="text-3xl font-bold italic">
                        Jakarta merupakan ibukota Indonesia!
                      </div>
                    </div>
                  </div>
                }
                className="flex-none w-full lg:w-1/3 h-96"
              />
              <FlexboxBox
                content={
                  <div className="p-7 text-center h-full">
                    <div className="flex h-1/3">
                      <img className="h-24" src={quizpng}></img>
                      <div className="text-3xl font-bold p-6">
                        Did you know?
                      </div>
                    </div>
                    <div className="h-2/3 content-center align-middle pt-10">
                      <div className="text-3xl font-bold italic">
                        Jakarta merupakan ibukota Indonesia!
                      </div>
                    </div>
                  </div>
                }
                className="flex-none w-full lg:w-1/3 h-96"
              />
              <FlexboxBox
                content={
                  <div className="p-7 text-center h-full">
                    <div className="flex h-1/3">
                      <img className="h-24" src={quizpng}></img>
                      <div className="text-3xl font-bold p-6">
                        Did you know?
                      </div>
                    </div>
                    <div className="h-2/3 content-center align-middle pt-10">
                      <div className="text-3xl font-bold italic">
                        Jakarta merupakan ibukota Indonesia!
                      </div>
                    </div>
                  </div>
                }
                className="flex-none w-full lg:w-1/3 h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
