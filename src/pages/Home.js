import { Hero } from "../component/Hero";
import { Navbar } from "../component/Navbar";
import { PlayModeCard } from "../component/PlayModeCard";

export function Home() {
	return (
		<div>
			<Navbar />
			{/* Flexbox grid */}
			<div className="mx-2">
				<div className=" bg-amber-300 rounded-lg mt-[5.5rem]">
					<Hero />
				</div>
				<div className="flex flex-col gap-2 lg:flex-row my-2">
					<div className="w-full lg:w-1/3 bg-amber-300 rounded-lg py-28 px-14">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Fun Fact
						</h1>
					</div>
					<h1 className="w-full lg:w-4/6 bg-amber-300 rounded-lg py-28 px-14">
						<PlayModeCard />
						<PlayModeCard />
						<PlayModeCard />
					</h1>
				</div>
				<div className="md:col-span-4 bg-amber-300 rounded-lg"></div>
			</div>
		</div>
	);
}
