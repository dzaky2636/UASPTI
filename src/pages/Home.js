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
					{/* How To */}
					<div className="py-20 text-center">
						<div className="text-7xl font-bold">How To</div>
					</div>
					<div className="flex flex-col lg:flex-row">
						<FlexboxBox content={"Hello"} className="w-full lg:h-1/2" />
						<FlexboxBox content={"Hello"} className="w-full lg:h-1/2" />
					</div>
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
										<div className="text-3xl font-bold p-6">Did you know?</div>
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
										<div className="text-3xl font-bold p-6">Did you know?</div>
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
										<div className="text-3xl font-bold p-6">Did you know?</div>
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
					{/* Select Play */}
				</div>
			</div>
		</div>
	);
}
