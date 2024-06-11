// import { useProducts } from "../useProducts";
import React from "react";

type CategoriesProps = {
	value: number;
	onClickCategory: (i: number) => void;
};
const JetskisCategories: React.FC<CategoriesProps> = ({
	value,
	onClickCategory,
}) => {
	const categories = ["Все", "BRP", "Spark"];
	return (
		<>
			<div>
				<h1>Гидроциклы</h1>

				<div>
					<ul className="mt-10 flex sm:pl-10 md:pl-0">
						{categories.map((categoryName, i) => (
							<li
								key={i}
								onClick={() => onClickCategory(i)}
								className={
									value === i
										? "mr-2 cursor-pointer rounded-lg bg-slate-300 px-7 py-1 text-sm text-slate-700 transition delay-100 ease-in-out"
										: "mr-2 cursor-pointer rounded-lg bg-slate-200 px-7 py-1 text-sm text-slate-700 transition delay-100 ease-in-out hover:bg-slate-300"
								}
							>
								{categoryName}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default JetskisCategories;
