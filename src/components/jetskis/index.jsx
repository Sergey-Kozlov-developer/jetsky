const JetskisCategories = () => {
	const categories = ["Полноприводные", "от 5000", "BRP", "еще"];

	return (
		<>
			<div>
				<h1>Гидроциклы</h1>
				<div className="flex justify-between">
					<div>
						<ul className="mt-10 flex">
							{categories.map((categoryName, index) => (
								<li
									key={index}
									className="mr-2 cursor-pointer rounded-lg bg-slate-200 px-7 py-1 text-sm text-slate-700 transition delay-100 ease-in-out hover:bg-slate-300"
								>
									{categoryName}
								</li>
							))}
						</ul>
					</div>
					<form className=" mt-8 max-w-sm">
						<select
							id="countries"
							className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						>
							{/* <option selected>Параметры фильтра</option> */}
							<option value="all" selected>
								Все
							</option>
							<option value="motor">Двигатель</option>
							<option value="price">Цена</option>
						</select>
					</form>
				</div>
				{/*  */}
			</div>
		</>
	);
};

export default JetskisCategories;
