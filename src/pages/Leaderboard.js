import { Footer } from "../component/Footer";
import { LeaderboardItem } from "../component/LeaderboardItem";
import { LeaderboardItemTop } from "../component/LeaderboardItemTop";
import { Navbar } from "../component/Navbar";

export function Leaderboard() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-[#CAF0F8] to-[#48CAE4] -z-50">
        <div className="bgPage w-full h-[88rem] lg:h-[106rem] z-0"></div>
        <div className="container mx-auto z-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-center pt-32 text-white scale-100">
            Leaderboard
          </h1>
          <div className="flex flex-wrap gap-2 lg:gap-4 justify-center pt-8 text-white scale-100">
            <button className="p-2 px-4 lg:px-12 rounded-full font-bold text-md lg:text-lg border-4 border-blue-800 bg-blue-500 hover:bg-indigo-500 transition ease-in-out hover:-translate-y-1 hover:scale-110">
              Kategori
            </button>
            <button className="p-2 px-4 lg:px-12 rounded-full font-bold text-md lg:text-lg border-4 border-blue-800 bg-blue-500 hover:bg-indigo-500 transition ease-in-out hover:-translate-y-1 hover:scale-110">
              Kategori
            </button>
            <button className="p-2 px-4 lg:px-12 rounded-full font-bold text-md lg:text-lg border-4 border-blue-800 bg-blue-500 hover:bg-indigo-500 transition ease-in-out hover:-translate-y-1 hover:scale-110">
              Kategori
            </button>
            <button className="p-2 px-4 lg:px-12 rounded-full font-bold text-md lg:text-lg border-4 border-blue-800 bg-blue-500 hover:bg-indigo-500 transition ease-in-out hover:-translate-y-1 hover:scale-110">
              Kategori
            </button>
          </div>
          <div className="flex gap-0 lg:gap-5 justify-center pt-10 z-10 transition ease-in-out scale-100 lg:scale-125">
            <LeaderboardItemTop
              no="1"
              className="order-2 scale-100"
              icon="https://www.w3schools.com/html/pic_trulli.jpg"
              score="100"
              color="bg-yellow-400 border-yellow-400"
              gradient="border-2 border-[#f4c437] bg-gradient-to-br from-[#ffef95] to-[#f4c437]"
            />
            <LeaderboardItemTop
              no="2"
              className="order-1 scale-75"
              score="100"
              icon="https://www.w3schools.com/html/pic_trulli.jpg"
              color="bg-[#afafaf] border-[#afafaf]"
              gradient="border-2 border-[#b0b0b0] bg-gradient-to-br from-[#cfcfcf] to-[#b0b0b0]"
            />
            <LeaderboardItemTop
              no="3"
              className="order-3 scale-75"
              score="100"
              icon="https://www.w3schools.com/html/pic_trulli.jpg"
              color="bg-[#aa895b] border-[#aa895b]"
              gradient="border-2 border-[#af8f5a] bg-gradient-to-br from-[#d3bda0] to-[#af8f5a]"
            />
          </div>
          <div className="flex gap-4 flex-col pt-10 transition ease-in-out">
            <LeaderboardItem
              no="4"
              icon="https://www.w3schools.com/html/pic_trulli.jpg"
              nama="John Thor"
              score="100"
            />
            <LeaderboardItem
              no="5"
              icon="https://www.w3schools.com/html/pic_trulli.jpg"
              nama="John Thor"
              score="100"
            />
            <LeaderboardItem
              no="6"
              icon="https://www.w3schools.com/html/pic_trulli.jpg"
              nama="John Thor"
              score="100"
            />
            <LeaderboardItem
              no="7"
              icon="https://www.w3schools.com/html/pic_trulli.jpg"
              nama="John Thor"
              score="100"
            />
            <LeaderboardItem
              no="8"
              icon="https://www.w3schools.com/html/pic_trulli.jpg"
              nama="John Thor"
              score="100"
            />
            <LeaderboardItem
              no="9"
              icon="https://www.w3schools.com/html/pic_trulli.jpg"
              nama="John Thor"
              score="100"
            />
            <LeaderboardItem
              no="10"
              icon="https://www.w3schools.com/html/pic_trulli.jpg"
              nama="John Thor"
              score="100"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
