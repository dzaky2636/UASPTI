import paperrip from "../assets/paperrip.png";

export function ClipPaperTitle2(props) {
	return (
		<div className="relative py-10 scale-75 lg:scale-75 transition ease-in-out rotate-[4deg] hover:rotate-0 pointer-events-none">
			<div className="flex justify-center">
				<img src={paperrip} className="h-80 pointer-events-auto"></img>
			</div>
			<h1 className="absolute text-5xl overlay-text text-black">
				{props.title}
			</h1>
		</div>
	);
}
