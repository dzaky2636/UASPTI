export function Footer() {
	return (
		<footer class="m-4">
			<hr className="border-slate-900" />
			<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-black">
				<div className="flex flex-row justify-between">
					<div className="flex">
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							class="h-8 mr-3"
							alt="Flowbite Logo"
						/>
						<span class="self-center text-2xl font-semibold whitespace-nowrap text-black">
							Quiz Game
						</span>
					</div>
					<div>
						<span class="self-center text-2xl font-semibold whitespace-nowrap text-black">
							© 2023 Kelompok 2™ . All Rights Reserved.
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
