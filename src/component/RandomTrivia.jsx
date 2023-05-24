import quizpng from "../assets/quiz.png";

export function RandomTrivia(props) {
	return (
		<div
			className={`bg-gradient-to-br from-[#4EA8DE] to-[#5E60CE] rounded-2xl border-2 border-white shadow p-6 transition ease-in-out ${props.className}`}>
			<div className="flex flex-col gap-4">
				<div className="flex gap-4 -me-40">
					<img class="rounded-2xl max-w-[10%]" src={quizpng} alt="" />
					<div className="flex flex-col justify-center">
						<div className="text-4xl">Did you know?</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="text-2xl font-bold">{props.title}</div>
					<div className="text-lg text-left">{props.description}</div>
				</div>
			</div>
		</div>
	);
}
