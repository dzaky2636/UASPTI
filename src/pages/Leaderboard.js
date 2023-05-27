import { Footer } from "../component/Footer";
import { LeaderboardItem } from "../component/LeaderboardItem";
import { LeaderboardItemTop } from "../component/LeaderboardItemTop";
import { Navbar } from "../component/Navbar";

import leaderboard from "./leaderboard.json";

export function Leaderboard() {
	const unsortedLeaderboardArr = leaderboard;
	const sortedLeaderboardArr = unsortedLeaderboardArr.sort(
		(a, b) => b.score - a.score
	);

	return (
		<div>
			<Navbar />
			<div className="bg-gradient-to-b from-[#CAF0F8] to-[#48CAE4] -z-50">
				<div className="bgPage w-full h-[88rem] lg:h-[106rem] z-0"></div>
				<div className="container mx-auto z-20">
					<h1 className="text-5xl lg:text-6xl font-bold text-center pt-32 text-white scale-100">
						Leaderboard
					</h1>
					<div className="flex gap-0 lg:gap-5 justify-center pt-10 z-10 transition ease-in-out scale-100 lg:scale-125">
						<LeaderboardItemTop
							no="1"
							score={sortedLeaderboardArr[0].score}
							icon={sortedLeaderboardArr[0].avatar}
							className="order-2 scale-100"
							color="bg-yellow-400 border-yellow-400"
							gradient="border-2 border-[#f4c437] bg-gradient-to-br from-[#ffef95] to-[#f4c437]"
						/>
						<LeaderboardItemTop
							no="2"
							score={sortedLeaderboardArr[1].score}
							icon={sortedLeaderboardArr[1].avatar}
							className="order-1 scale-75"
							color="bg-[#afafaf] border-[#afafaf]"
							gradient="border-2 border-[#b0b0b0] bg-gradient-to-br from-[#cfcfcf] to-[#b0b0b0]"
						/>
						<LeaderboardItemTop
							no="3"
							score={sortedLeaderboardArr[2].score}
							icon={sortedLeaderboardArr[2].avatar}
							className="order-3 scale-75"
							color="bg-[#aa895b] border-[#aa895b]"
							gradient="border-2 border-[#af8f5a] bg-gradient-to-br from-[#d3bda0] to-[#af8f5a]"
						/>
					</div>
					<div className="flex gap-4 flex-col pt-10 transition ease-in-out">
						{sortedLeaderboardArr.map((leaderboard, index) => {
							if (index > 2) {
								return (
									<LeaderboardItem
										no={index}
										icon={leaderboard.avatar}
										nama={leaderboard.name}
										score={leaderboard.score}
									/>
								);
							}
						})}
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
