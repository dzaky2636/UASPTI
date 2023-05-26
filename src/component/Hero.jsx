import "../style/index.css";
export function Hero() {
	return (
		<div className="relative isolate px-6 pt-14 lg:px-8">
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-60 hover:scale-105 transition ease-in-out">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
						Hi, Welcome to Our Quiz Website
					</h1>
					<p className="mt-6 text-lg leading-8  para">
						Don't worry about the score, just focus on your answer. In this
						test, you able to know more knowledge.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-[#00787e] px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:text-black hover:bg-[#fedf52]">
							Play the Game
						</a>
						<a
							href="#"
							className="rounded-md bg-[#00787e] px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:text-black hover:bg-[#fedf51]">
							How to Play
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
