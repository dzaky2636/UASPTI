import { Navbar } from "../component/Navbar";

export function Leaderboard() {
	return (
		<div>
			<Navbar />
			<div className="mx-2">
				<div className="flex gap-2">
					<div className="w-full lg:w-1/3 bg-cyan-600 rounded-lg mt-[5.5rem] p-20">
						<h1 className="text-8xl font-bold">Ranking pemain</h1>
					</div>
					<div className="w-full lg:w-4/6 bg-cyan-600 rounded-lg mt-[5.5rem] p-20">
						<h1 className="text-4xl font-bold">Lorem ipsum</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
