export function LeaderboardItem(props) {
	return (
		<div className="flex gap-4 bg-gradient-to-br from-[#4EA8DE] to-[#5E60CE] rounded-xl p-4 w-4/5 lg:w-[50rem] mx-auto border-2 border-white scale-100">
			<div className="text-lg lg:text-xl font-bold content-center my-auto text-white w-4">
				{props.no}
			</div>
			<div className="flex w-16 lg:w-20 h-16 lg:h-20 rounded-full border-4 border-white bg-slate-400">
				<div className="text-4xl lg:text-5xl mx-auto my-auto">{props.icon}</div>
			</div>
			<div className="text-lg lg:text-xl font-bold my-auto text-white">
				{props.nama}
			</div>
		</div>
	);
}
