export function LeaderboardItemTop(props) {
	return (
		<div className={`flex flex-col justify-center ${props.className}`}>
			<img
				src={`${props.icon}`}
				className={`flex w-32 h-32 bg-slate-10 rounded-full border-4 ${props.color}`}></img>
			<div className="-mt-8">
				<div className={`w-12 h-12 p-2 mx-auto rounded-full ${props.gradient}`}>
					<div className="flex justify-center text-white text-xl">
						{props.no}
					</div>
				</div>
			</div>
		</div>
	);
}
