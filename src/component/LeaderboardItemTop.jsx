export function LeaderboardItemTop(props) {
	return (
		<div className={`flex flex-col justify-center ${props.className}`}>
			<img
				src={`${props.icon}`}
				className={`flex w-32 h-32 bg-slate-10 rounded-full border-4 ${props.color}`}></img>
			<div className="-mt-8">
				<div
					className={`w-12 h-12 p-2 mx-auto border-4 bg- ${props.color} rounded-full`}>
					<div className="ps-[0.5rem] text-xl font-bold text-white">
						{props.no}
					</div>
				</div>
			</div>
		</div>
	);
}
