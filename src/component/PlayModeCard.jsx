import quizpng from "../assets/quiz.png";

export function PlayModeCard() {
	return (
		<div className="md:mt-20 relative col-span-4 md:col-span-2 p-6 rounded-3xl shadow mx-auto bg-gradient-to-b from-pink-500 to-orange-400 flex">
			<div>
				<h5 className="pt-4 mb-2 text-2xl font-bold tracking-tight text-white">
					Mode Main
				</h5>
				<p className="mb-3 font-normal text-white">
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order.
				</p>
			</div>
			<div>
				<img
					className="w-4/5 md:w-36 float-right md:absolute right-5 bottom-2/3"
					src={quizpng}></img>
			</div>
		</div>
	);
}
