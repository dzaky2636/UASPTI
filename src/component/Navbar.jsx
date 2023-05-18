import { Link } from "react-router-dom";
import "../style/index.css";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
	{ name: "Home", to: "/" },
	{ name: "Play", to: "/play" },
	{ name: "How To", to: "/howto" },
	{ name: "Ranking", to: "/ranking" },
	{ name: "About Us", to: "/aboutus" },
];

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-white">
			{/* Desktop */}
			<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
				{/* Logo */}
				<div className="flex lg:flex-1">
					<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
				</div>
				{/* Button hamburger */}
				<div className="flex lg:hidden">
					<button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				{/* Link */}
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link key={item.name} to={item.to} className="text-base font-semibold leading-6 text-gray-900">
							{item.name}
						</Link>
					))}
				</div>
				{/* Kanan */}
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						Log in <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
			{/* Mobile */}
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					{/* Tombol exit menu navbar mobile */}
					<div className="flex items-right justify-end">
						<button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<Link key={item.name} to={item.to} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										{item.name}
									</Link>
								))}
							</div>
							<div className="py-6">
								<a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									Log in
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
