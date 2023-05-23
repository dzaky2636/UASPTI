import { Navbar } from "../component/Navbar";
import { Fragment, useState } from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { Footer } from "../component/Footer";

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
		<div className="text-white flex flex-col justify-between min-h-screen">
			<Navbar />
			<div className="pb-10">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#5E60CE"
						fill-opacity="1"
						d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,160C672,192,768,224,864,218.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
				</svg>
				<div className="bg-[#5E60CE] -mt-1">
					<div className="container mx-auto">
						{/* Accordion */}
						<div className="py-10 text-center">
							<div className="text-5xl lg:text-7xl font-bold">FAQ</div>
						</div>
						<div className="mx-5 lg:mx-32 text-white">
							<Fragment>
								<Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
									<AccordionHeader
										className="bg-[#6930C3] border-2 border-[#7400B8] p-4 lg:p-6 rounded-t-xl text-lg lg:text-xl"
										onClick={() => handleOpen(1)}>
										What is Material Tailwind?
									</AccordionHeader>
									<AccordionBody className="bg-[#5E60CE] border-2 border-[#7400B8] p-6 text-white text-sm lg:text-xl">
										We&apos;re not always in the position that we want to be at.
										We&apos;re constantly growing. We&apos;re constantly making
										mistakes. We&apos;re constantly trying to express ourselves
										and actualize our dreams.
									</AccordionBody>
								</Accordion>
								<Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
									<AccordionHeader
										className="bg-[#6930C3] border-2 border-[#7400B8] p-4 lg:p-6 text-lg lg:text-xl"
										onClick={() => handleOpen(2)}>
										What is Material Tailwind?
									</AccordionHeader>
									<AccordionBody className="bg-[#5E60CE] border-2 border-[#7400B8] p-6 text-white text-sm lg:text-xl">
										We&apos;re not always in the position that we want to be at.
										We&apos;re constantly growing. We&apos;re constantly making
										mistakes. We&apos;re constantly trying to express ourselves
										and actualize our dreams.
									</AccordionBody>
								</Accordion>
								<Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
									<AccordionHeader
										className="bg-[#6930C3] border-2 border-[#7400B8] p-4 lg:p-6  text-lg lg:text-xl"
										onClick={() => handleOpen(3)}>
										What is Material Tailwind?
									</AccordionHeader>
									<AccordionBody className="bg-[#5E60CE] border-2 border-[#7400B8] p-6 text-white text-sm lg:text-xl">
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
				<div className="-mt-1">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#5E60CE"
							fill-opacity="1"
							d="M0,64L48,64C96,64,192,64,288,80C384,96,480,128,576,149.3C672,171,768,181,864,170.7C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
					</svg>
				</div>
			</div>
			<Footer />
		</div>
	);
}
