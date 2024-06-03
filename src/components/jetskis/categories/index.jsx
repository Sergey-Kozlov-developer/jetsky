import { useProducts } from "../useProducts";

const JetskisCategories = () => {
	const categories = ["Все", "BRP", "Spark"];

	const categoryId = useProducts((state) => state.categoryId);
	const onClickCategoryId = useProducts((state) => state.onClickCategoryId);

	return (
		<>
			<div>
				<h1>Гидроциклы</h1>

				<div>
					<ul className="mt-10 flex">
						{categories.map((categoryName, i) => (
							<li
								key={i}
								onClick={() => onClickCategoryId(i)}
								className={
									categoryId === i
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
