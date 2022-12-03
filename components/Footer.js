import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import logo from "../public/vercel.svg";
import Image from "next/image";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = () => {
	const servicesObj = [
		{
			service: "Clipping Path Services",
			route: "/image-clipping-path-service",
		},
		{
			service: "Photo Retouching Services",
			route: "/photo-editing-service",
		},
		{
			service: "Jewelry Image Editing",
			route: "/jewelry-retouching-service",
		},
		{
			service: "Automobiles Photo Retouching",
			route: "/automotive-photo-editing",
		},
		{
			service: "E-commerce Photo Retouching",
			route: "/ecommerce-image-editing-service",
		},
		{
			service: "Color Correction Services",
			route: "/photo-color-correction-service",
		},
		{
			service: "Background Removal Services",
			route: "/photo-background-removal-service",
		},
		{
			service: "Product Photo Retouching",
			route: "/photo-editing-service",
		},
	];
	return (
		<section className="relative flex flex-col gap-10 justify-center items-center sm:items-top text-md text-gray-300 bg-black pt-[6rem] px-20 pb-20 sm:pb-[2rem]">
			<div className="max-w-[25rem] ">
				<Image src={logo} />
			</div>
			<div className="flex sm:flex-row flex-col gap-20 justify-center sm:items-center ">
				<div className="flex flex-col">
					<h2 className="text-[#92ca49] font-bold  ">Contact Us</h2>
					<p>Phone: +91-9654548666</p>
					<p>skype : retouchingvisuals</p>
					<p>Email: info@visualsclipping.com</p>
				</div>
				<div className="flex flex-col ">
					{/* <h1 className="text-gray-100 font-bold text-lg">Services</h1> */}
					<ul className="grid grid-cols-1 sm:grid-rows-4 sm:grid-cols-2 sm:grid-flow-col gap-2 font-medium justify-around items-center">
						{servicesObj.map((item, iterator) => {
							return (
								<li
									key={iterator}
									className="flex flex-row items-center cursor-pointer hover:font-black"
								>
									<ChevronRightIcon className="h-4 inline-block text-[#92ca49]" />
									<Link href={item.route}>
										<div>{item.service}</div>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div>
					{/* <h1 className="text-gray-100 font-bold text-lg">Useful Links</h1> */}
					<ul className="flex flex-col gap-2 font-medium">
						<li className="cursor-pointer">
							<ChevronRightIcon className="h-4 inline-block text-[#92ca49] hover:font-black" />
							<Link href="/about">About Us</Link>
						</li>
						<li className="cursor-pointer">
							<ChevronRightIcon className="h-4 inline-block text-[#92ca49] hover:font-black" />
							<Link href="/contact">Contact Us</Link>
						</li>
						<li className="cursor-pointer">
							<ChevronRightIcon className="h-4 inline-block text-[#92ca49] hover:font-black" />
							<Link href="/privacy">Privacy Policy</Link>
						</li>
						<li className="cursor-pointer">
							<ChevronRightIcon className="h-4 inline-block text-[#92ca49] hover:font-black" />
							<Link href="/terms-and-conditions">Terms & Conditions</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="border-t-2 border-gray-600 w-full"></div>
			<div className="flex gap-8">
				<a
					href="https://www.linkedin.com/company/visuals-clipping"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin className="h-8 w-8 text-[#92ca49] hover:text-gray-300 cursor-pointer" />
				</a>
				<a
					href="https://www.facebook.com/VisualsClipping-105658197458565"
					target="_blank"
					rel="noreferrer"
				>
					<BsFacebook className="h-8 w-8 text-[#92ca49] hover:text-gray-300 cursor-pointer" />
				</a>
			</div>
		</section>
	);
};

export default Footer;
