import { Navbar } from "../component/Navbar";
import { Fragment, useState } from "react";
import avatar from "../assets/avatar.png";

import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { Footer } from "../component/Footer";
import { AboutUsItem } from "../component/AboutUsItem";

function Icon({ id, open }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`${
				id === open ? "rotate-180" : ""
			} h-5 w-5 transition-transform`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	);
}

export function AboutUs() {
	const [open, setOpen] = useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<div className="text-white">
			<Navbar />
			<div className="bg-gradient-to-b from-[#7ec7d0] to-blue-400">
				<div className="bgPage w-full h-[88rem] lg:h-[106rem] z-0"></div>
				{/* Team Section */}
				<div class="flex items-center justify-center min-h-screeny py-5">
					<div class="flex flex-col">
						<span class="text-center font-bold my-10 opacity-30">
							<hr class="my-4"></hr>
							<a
								href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
								target="_blank"
								class="text-blue-600"></a>
						</span>

						<div class="flex flex-col mt-8">
							<div class="container max-w-7xl">
								<div class="flex justify-center text-center lg:mb-12 scale-100">
									<div class="w-full lg:w-6/12 px-4">
										<h1 class="text-white text-7xl font-bold mb-8">Our Team</h1>
										<p class="text-white text-lg font-normal">Group 2</p>
									</div>
								</div>
								<div class="flex flex-wrap items-center scale-75 lg:scale-100 gap-3 lg:gap-0">
									<AboutUsItem
										foto="https://www.w3schools.com/html/pic_trulli.jpg"
										nama="Batara Hotdo Horas Simbolon"
										nim="00000078626"
									/>
									<AboutUsItem
										foto="https://www.w3schools.com/html/pic_trulli.jpg"
										nama="Efri Ramadhan"
										nim="00000078662"
									/>
									<AboutUsItem
										foto="https://www.w3schools.com/html/pic_trulli.jpg"
										nama="Raphael Dikstra Satya Prameswara"
										nim="00000078564"
									/>
									<AboutUsItem
										foto="https://www.w3schools.com/html/pic_trulli.jpg"
										nama="Dzaky Fatur Rahman"
										nim="00000089614"
									/>
									<AboutUsItem
										foto="https://www.w3schools.com/html/pic_trulli.jpg"
										nama="Axel Reginald Wiranto"
										nim="00000078456"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="scale-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#5E60CE"
							fill-opacity="1"
							d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,160C672,192,768,224,864,218.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
					</svg>
				</div>
				<div className="bg-[#5E60CE] -mt-1 scale-100">
					<div className="container mx-auto relative bottom-20">
						{/* Accordion */}
						<div className="py-20 text-center">
							<div className="text-6xl lg:text-7xl font-bold">FAQ</div>
						</div>
						<div className="mx-4 lg:mx-32 text-white">
							<Fragment>
								<Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
									<AccordionHeader
										className="bg-[#6930C3] border-2 border-[#7400B8] p-6 rounded-t-xl"
										onClick={() => handleOpen(1)}>
										What is Material Tailwind?
									</AccordionHeader>
									<AccordionBody className="bg-[#5E60CE] border-2 border-[#7400B8] p-6 text-white text-xl">
										We&apos;re not always in the position that we want to be at.
										We&apos;re constantly growing. We&apos;re constantly making
										mistakes. We&apos;re constantly trying to express ourselves
										and actualize our dreams.
									</AccordionBody>
								</Accordion>
								<Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
									<AccordionHeader
										className="bg-[#6930C3] border-2 border-[#7400B8] p-6"
										onClick={() => handleOpen(2)}>
										What is Material Tailwind?
									</AccordionHeader>
									<AccordionBody className="bg-[#5E60CE] border-2 border-[#7400B8] p-6 text-white text-xl">
										We&apos;re not always in the position that we want to be at.
										We&apos;re constantly growing. We&apos;re constantly making
										mistakes. We&apos;re constantly trying to express ourselves
										and actualize our dreams.
									</AccordionBody>
								</Accordion>
								<Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
									<AccordionHeader
										className="bg-[#6930C3] border-2 border-[#7400B8] p-6"
										onClick={() => handleOpen(3)}>
										What is Material Tailwind?
									</AccordionHeader>
									<AccordionBody className="bg-[#5E60CE] border-2 border-[#7400B8] p-6 text-white rounded-b-xl text-xl">
										We&apos;re not always in the position that we want to be at.
										We&apos;re constantly growing. We&apos;re constantly making
										mistakes. We&apos;re constantly trying to express ourselves
										and actualize our dreams.
									</AccordionBody>
								</Accordion>
							</Fragment>
						</div>
					</div>
				</div>
			</div>
			{/* Footer */}
			<div className="bg-[#5E60CE] text-white py-10">
				<footer class="m-4">
					<hr className="border-white" />
					<div class="w-full max-w-screen-xl mx-auto p-4 ">
						<div className="flex flex-row justify-between">
							<div className="flex">
								<img
									src="https://flowbite.com/docs/images/logo.svg"
									class="h-8 mr-3"
									alt="Flowbite Logo"
								/>
								<span class="self-center text-md lg:text-2xl font-semibold whitespace-nowrap">
									Quiz Game
								</span>
							</div>
							<div>
								<span class="hidden lg:inline text-md lg:text-2xl font-semibold ">
									© 2023 Kelompok 2™ . All Rights Reserved.
								</span>
								<span class="inline lg:hidden text-md lg:text-2xl font-semibold ">
									© 2023 Kelompok 2™
								</span>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
