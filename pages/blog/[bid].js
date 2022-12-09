import React from "react";
import { useRouter } from "next/router";
import blogData from "../../public/data.json";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

const Bid = () => {
	const router = useRouter();
	// const { bid } = router.query;
	// console.log()
	const obj = blogData?.blog.find((o) => o.id == "" + router.query.Bid);
	return (
		<div className="min-h-[100vh] flex flex-col md:flex-row gap-20 py-32 justify-around items-start">
			<div className="h-[15vh] w-[100%] bg-[#92ca49] absolute top-0 inset-x-0"></div>
			{/* Article Box */}
			<div className="flex flex-col gap-5 px-10 md:pr-20 py-5 md:ml-[8rem] basis-4/5">
				<h1 className="text-6xl font-bold ">{obj?.title}</h1>
				<h2 className="text-xl text-gray-500 font-normal">
					By {obj?.user.name}
				</h2>
				<div className="flex flex-col gap-5">
					<img src={obj?.img} className="shadow-xl" />
					<div className="flex flex-col gap-2 text-justify">
						{obj?.content.map((item, iter) => {
							return (
								<p key={iter} className="">
									{item}
								</p>
							);
						})}
					</div>
				</div>
			</div>

			{/* More Articles */}
			<div className="basis-1/5 md:mt-[15rem] md:mr-10 sticky top-0 flex flex-col justify-center items-center ">
				<h2>More Articles</h2>
				<div className="container flex flex-col py-5 items-center gap-5 sticky">
					{blogData["blog"].map(
						(items, iter) => {
							// when working with real data
							// if (router.query.Bid !== items.id) {
							return (
								<Link href={"/blog/" + items.id} key={iter}>
									<div className="flex flex-col md:items-center bg-white border-2 rounded-lg md:max-w-4xl hover:bg-gray-50 cursor-pointer text-sm p-2 mx-20 md:m-0 overflow-hidden">
										<h5 className="mb-2 font-bold tracking-tight text-gray-900 basis-1/4">
											{items.title}
										</h5>
										{/* <img
										class="basis-1/2"
										src={items.img}
										alt=""
									/> */}
										<p className="">{items.description}</p>
									</div>
								</Link>
							);
						}
						// }
					)}
				</div>
			</div>
		</div>
	);
};

export default Bid;
