import { Navbar } from "../component/Navbar";
import { LeaderboardItem } from "../component/LeaderboardItem";
import { Footer } from "../component/Footer";

export function Leaderboard() {
	return (
		<div>
			<Navbar />
			<div className="bg-gradient-to-b from-[#CAF0F8] to-[#48CAE4] -z-50">
				<div className="bgPage w-full h-[88rem] lg:h-[106rem] z-0"></div>
				<div className="container mx-auto z-20">
					<h1 className="text-3xl lg:text-4xl font-bold text-center pt-28 text-white scale-100">
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
						<div className="flex flex-col justify-center order-2 scale-100">
							<img
								src="https://www.w3schools.com/html/pic_trulli.jpg"
								className="flex w-32 h-32 bg-slate-100 border-4 border-yellow-400 rounded-full"></img>
							<div className="-mt-8">
								<div className="w-12 h-12 p-2 mx-auto bg-yellow-400 border-4 border-yellow-400 rounded-full">
									<div className="ps-[0.5rem] text-xl font-bold text-white">
										1
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-center order-1 scale-75">
							<img
								src="https://www.w3schools.com/html/pic_trulli.jpg"
								className="flex w-32 h-32 bg-slate-100 border-4 border-[#afafaf] rounded-full"></img>
							<div className="-mt-8">
								<div className="w-12 h-12 p-2 mx-auto bg-[#afafaf] border-4 border-[#afafaf]  rounded-full">
									<div className="ps-[0.5rem] text-xl font-bold text-white">
										2
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-center order-3 scale-75">
							<img
								src="https://www.w3schools.com/html/pic_trulli.jpg"
								className="flex w-32 h-32 bg-slate-100 border-4 border-[#aa895b] rounded-full"></img>
							<div className="-mt-8">
								<div className="w-12 h-12 p-2 mx-auto bg-[#aa895b] border-4 border-[#aa895b] rounded-full">
									<div className="ps-[0.5rem] text-xl font-bold text-white">
										3
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex gap-4 flex-col pt-10 transition ease-in-out">
						<LeaderboardItem no="4" icon="👎" nama="John Thor" />
						<LeaderboardItem no="5" icon="🐗" nama="John Thor" />
						<LeaderboardItem no="6" icon="🤦‍♂️" nama="John Thor" />
						<LeaderboardItem no="7" icon="🗾" nama="John Thor" />
						<LeaderboardItem no="8" icon="🎶" nama="John Thor" />
						<LeaderboardItem no="9" icon="😜" nama="John Thor" />
						<LeaderboardItem no="10" icon="🔥" nama="John Thor" />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
