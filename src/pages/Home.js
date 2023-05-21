import { Hero } from "../component/Hero";
import { Navbar } from "../component/Navbar";
import { PlayModeCard } from "../component/PlayModeCard";
import { FlexboxBox } from "../component/FlexboxBox";
import quizpng from "../assets/quiz.png";

export function Home() {
	return (
		<div>
			<Navbar />
			{/* Flexbox grid */}
			<div className="container mx-auto">
				<div className="mx-2 text-white">
					{/* Hero */}
					<FlexboxBox content={<Hero />} className="mt-[5.2rem]" />
					<div className="flex flex-col lg:flex-row my-1 gap-1 flex-nowrap overflow-hidden">
						<FlexboxBox
							content={
								<div className="p-10 text-center">
									<div>
										<div className="text-3xl font-bold">Did you know?</div>
									</div>
									<div className="text-3xl font-bold italic pt-10">
										Jakarta merupakan ibukota Indonesia!
									</div>
									<div>
										<img
											className="w-4/5 md:w-36 float-right md:absolute right-5 bottom-2/3"
											src={quizpng}></img>
									</div>
								</div>
							}
							className="flex-none w-full lg:w-1/3 h-96 relative"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
