import { Hero } from "../component/Hero";
import { Navbar } from "../component/Navbar";
import { PlayModeCard } from "../component/PlayModeCard";
import { FlexboxBox } from "../component/FlexboxBox";
import { Footer } from "../component/Footer";
import quizpng from "../assets/quiz.png";
import color from "../color";

export function Home() {
	return (
		<div className="text-white">
			{/* Bagian 1 */}
			<Navbar />
			<div className="bg-gradient-to-b from-[#CAF0F8] to-[#48CAE4] pb-64">
				{/* Flexbox grid */}
				<div className="container mx-auto">
					<div className="mx-2 ">
						{/* Hero */}
						<FlexboxBox content={<Hero />} className="mt-[5.2rem]" />
						{/* How To */}
						<div className="">
							<div className="py-20 text-center">
								<div className="text-7xl font-bold">How To</div>
							</div>
							<div className="flex flex-col lg:flex-row gap-2">
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
									className="w-full lg:w-1/4"
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
									className="w-full lg:w-3/4"
								/>
							</div>
							<div className="flex flex-col lg:flex-row gap-2 mt-2">
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
									className="w-full lg:w-3/4"
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
									className="w-full lg:w-1/4"
								/>
							</div>
							<div className="flex flex-col lg:flex-row gap-2 mt-2">
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
									className="w-full lg:w-1/2"
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
									className="w-full lg:w-1/2"
								/>
							</div>
						</div>
						{/* Select Play */}
					</div>
				</div>
			</div>
			{/* Bagian 2 */}
			<div className="relative bottom-[27rem]">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#5E60CE"
						fill-opacity="1"
						d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
				</svg>
				<div className="bg-[#5E60CE] -mt-1 pb-10">
					<div className="container mx-auto">
						{/* Random Trivia */}
						<div className="py-20 text-center">
							<div className="text-7xl font-bold">Random Trivia</div>
						</div>
						<div className="flex flex-row my-1 gap-2 flex-nowrap overflow-hidden">
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
			{/* Bagian 2 */}
			<div className="relative bottom-[27rem] bg-gradient-to-t from-[#CAF0F8] to-[#48CAE4]">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#5E60CE"
						fill-opacity="1"
						d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,229.3C672,213,768,139,864,112C960,85,1056,107,1152,144C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
				</svg>
				<div className="-mt-1">
					<div className="container mx-auto w-2/3">
						<div className="py-20 text-center">
							<div className="text-7xl font-bold">Select Mode</div>
						</div>
						<div className="flex flex-col lg:flex-row gap-2">
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
								className="flex-none w-full lg:w-1/2 h-96"
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
								className="flex-none w-full lg:w-1/2 h-96"
							/>
						</div>
						<div className="flex flex-col lg:flex-row gap-2 mt-2">
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
								className="flex-none w-full lg:w-1/2 h-96"
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
								className="flex-none w-full lg:w-1/2 h-96"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
