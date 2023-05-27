export function HowTo(props) {
	return (
		<div className="flex flex-col gap-4 bg-gradient-to-br from-[#5E60CE] to-[#343694] rounded-2xl border-2 border-white shadow p-7 scale-90 lg:scale-100">
			<div className="flex flex-col gap-4">
				<div className="flex gap-4">
					<img
						className="rounded-2xl border-2 border-white"
						src={props.image}
						alt="alt"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center gap-2">
				<div className="text-xl text-white text-center">{props.title}</div>
				<div className="text-xl text-white">Deskripsi</div>
			</div>
		</div>
	);
}
