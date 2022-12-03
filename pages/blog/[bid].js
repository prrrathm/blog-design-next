import React from "react";
import { useRouter } from "next/router";
import blogData from "../../public/data.json";
import { stringify } from "postcss";

const bid = () => {
	const router = useRouter();
	const { bid } = router.query;

	const obj = blogData?.blog.find((o) => o.id == "" + bid);

	return (
		<div className="min-h-[100vh] flex flex-col gap-5">
			<div className="h-[20vh] bg-[#92ca49]"></div>
			<div className="border-2 flex flex-col gap-5 mx-20 px-10 py-5">
				<h1 className="text-6xl">{obj?.title}</h1>
				<div className="flex gap-5">
					<img src={obj?.img} className="h-[40%] w-[40%]" />
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
		</div>
	);
};

export default bid;
