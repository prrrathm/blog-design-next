import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/vercel.svg";
// import ReactCSSTransitionGroup from "react-transition-group";
import { useState, useEffect, useRef } from "react";
import {
	Bars3Icon,
	XMarkIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/solid";

export const Navbar = () => {
	const [navDropdown, setNavDropdown] = useState(true);
	let listener = null;
	var dropDownListener = null;
	const [scrollState, setScrollState] = useState(false);
	const [mobileServiceDropdown, setMobileServiceDropdown] = useState(true);

	const [mobileNavTrigger, setMobileNavTrigger] = useState("hidden");

	useEffect(() => {
		listener = document.addEventListener("scroll", (e) => {
			var scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 120) {
				setScrollState(true);
			} else {
				setScrollState(false);
			}
		});
		return () => {
			document.removeEventListener("scroll", listener);
		};
	}, [scrollState]);

	useEffect(() => {
		dropDownListener = document
			.getElementById("dropdown-trigger")
			.addEventListener("mouseenter", (e) => {
				setNavDropdown(false);
			});
		dropDownListener = document
			.getElementById("dropdown-trigger")
			.addEventListener("mouseleave", (e) => {
				setNavDropdown(true);
				// console.log(navDropdown);
			});
	}),
		[navDropdown];

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('email')
	};

	return (
		<nav
			className="transition ease-in-out p-2 fixed flex top-0 right-0 left-0 bg-white drop-shadow-md px-10 gap-5 justify-around items-center z-[100] text-lg"
			style={{
				transition: "background-color 600ms",
				backgroundColor: scrollState? 'white':'transparent',
				color: scrollState? 'black':'white',
			}}
		>
			<Link href="/">
				<div className="max-w-[12rem] cursor-pointer">
					<Image src={logo} />
				</div>
			</Link>

			{/* SCREEN NAVBAR */}
			<ul className="main-nav hidden sm:flex sm:flex-rows gap-12 justify-end">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li id="dropdown-trigger" className="relative bg-inherit">
					<button className="button">
						Services
						<ChevronDownIcon className="h-3 inline-block" />
					</button>
					<ul
						className="service-dropdown ease-in flex-col items-center gap-2 w-[450%] py-4 px-[0] absolute top-7 left-[-6rem] rounded-b-lg drop-shadow-sm bg-white text-black"
						style={{
							transition: "ease-in",
							top: navDropdown ? "-1000px" : "1.5rem",
						}}
					>
						<li>
							<Link href="/photo-background-removal-service">
								Background Removal
							</Link>
						</li>
						<li>
							<Link href="/ecommerce-image-editing-service">
								Ecommerce Photo Editing
							</Link>
						</li>
						<li>
							<Link href="/image-clipping-path-service">Clipping Paths</Link>
						</li>
						<li>
							<Link href="/invisible-ghost-mannequin-photo-editing">
								Ghost Mannequin
							</Link>
						</li>
						<li>
							<Link href="/photo-color-correction-service">Color Matching</Link>
						</li>
						<li>
							<Link href="/photo-editing-service">Photo Retouching</Link>
						</li>
						<li>
							<Link href="/automotive-photo-editing">
								Automotive Photo Editing
							</Link>
						</li>
						<li>
							<Link href="/jewelry-retouching-service">
								Jewellery Photo Editing
							</Link>
						</li>
					</ul>
				</li>
				{/* <li>
					<Link href="/">Pricing</Link>
				</li> */}
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
			<form
				className="hidden sm:flex p-2 gap-2 justify-center"
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<input
					type="text"
					placeholder="Email Address*"
					className="border border-gray-100 p-2 !drop-shadow-lg placeholder:text-gray-300 rounded-md"
					name="email"
					required
				/>
				<button
					className="bg-green-600 text-gray-50 px-2 py-1 hover:bg-gray-50 hover:text-green-600 transition-[300ms] border-2 border-green-600 font-semibold rounded-md"
					type="submit"
				>
					Get Started
				</button>
			</form>

			{/* MOBILE NAVBAR */}
			<div className="h-10 w-10 flex sm:hidden">
				<Bars3Icon
					onClick={() => {
						setMobileNavTrigger("flex");
					}}
				/>
			</div>
			<div
				style={{ transition: "display 300ms" }}
				className={`absolute h-screen w-screen left-0 top-0 bg-black/40 ${mobileNavTrigger} sm:hidden flex-col p-5`}
			>
				<ul className="mobile-nav flex flex-col gap-5 justify-start items-start h-[100%] bg-white px-5 py-10 text-xl relative">
					<XMarkIcon
						className="h-10 w-10 absolute right-5 top-5"
						onClick={() => {
							setMobileNavTrigger("hidden");
						}}
					/>
					<li
						onClick={() => {
							setMobileNavTrigger("hidden");
							setMobileServiceDropdown(false);
						}}
					>
						<Link href="/">Home</Link>
					</li>
					<li
						onClick={() => {
							setMobileNavTrigger("hidden");
							setMobileServiceDropdown(false);
						}}
					>
						<Link href="/about">About</Link>
					</li>
					<li className="relative bg-inherit">
						<button
							className="button"
							onClick={() => {
								setMobileServiceDropdown(mobileServiceDropdown ? false : true);
							}}
						>
							Services
							<ChevronDownIcon className="h-3 w-3 inline-block" />
						</button>
						<ul
							className={`service-dropdown ease-in flex flex-col items-center gap-2 py-1 px-[0] rounded-b-lg drop-shadow-sm bg-white overflow-hidden ${
								mobileServiceDropdown ? "h-0" : "h-full"
							}`}
							style={{
								transition: "height 200ms",
							}}
						>
							<li
								onClick={() => {
									setMobileServiceDropdown(false);
									setMobileNavTrigger("hidden");
								}}
							>
								<Link href="/photo-background-removal-service">
									Background Removal
								</Link>
							</li>
							<li
								onClick={() => {
									setMobileNavTrigger("hidden");
									setMobileServiceDropdown(false);
								}}
							>
								<Link href="/ecommerce-image-editing-service">
									Ecommerce Photo Editing
								</Link>
							</li>
							<li
								onClick={() => {
									setMobileNavTrigger("hidden");
									setMobileServiceDropdown(false);
								}}
							>
								<Link href="/image-clipping-path-service">Clipping Paths</Link>
							</li>
							<li
								onClick={() => {
									setMobileNavTrigger("hidden");
									setMobileServiceDropdown(false);
								}}
							>
								<Link href="/invisible-ghost-mannequin-photo-editing">
									Ghost Mannequin
								</Link>
							</li>
							<li
								onClick={() => {
									setMobileNavTrigger("hidden");
									setMobileServiceDropdown(false);
								}}
							>
								<Link href="/photo-color-correction-service">
									Color Matching
								</Link>
							</li>
							<li
								onClick={() => {
									setMobileNavTrigger("hidden");
									setMobileServiceDropdown(false);
								}}
							>
								<Link href="/photo-editing-service">Photo Retouching</Link>
							</li>
							<li
								onClick={() => {
									setMobileServiceDropdown(false);
									setMobileNavTrigger("hidden");
								}}
							>
								<Link href="/automotive-photo-editing">
									Automotive Photo Editing
								</Link>
							</li>
							<li
								onClick={() => {
									setMobileNavTrigger("hidden");
									setMobileServiceDropdown(false);
								}}
							>
								<Link href="/jewelry-retouching-service">
									Jewellery Photo Editing
								</Link>
							</li>
						</ul>
					</li>
					{/* <li>
					<Link href="/">Pricing</Link>
				</li> */}
					<li
						onClick={() => {
							setMobileNavTrigger("hidden");
							setMobileServiceDropdown(false);
						}}
					>
						<Link href="/contact">Contact</Link>
					</li>
					<li>
						<form
							className="hidden sm:flex p-2 gap-2 justify-center"
							onSubmit={(e) => {
								handleSubmit(e);
							}}
						>
							<input
								type="text"
								placeholder="Enter your Email"
								className="border border-gray-700 p-2 !drop-shadow-none"
								name="email"
							/>
							<button
								className="bg-black text-gray-50 px-2 py-1 hover:bg-gray-50 hover:text-black transition-[300ms] border-2 border-black font-black"
								type="submit"
							>
								Get Started
							</button>
						</form>
					</li>
				</ul>
			</div>
			{/* <MobileDropdown /> */}
		</nav>
	);
};

export default Navbar;
