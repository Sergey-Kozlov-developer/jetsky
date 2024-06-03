const JetskinsSort = () => {
	return (
		<>
			<form className=" mt-8 max-w-sm">
				<select
					defaultValue="DEFAULT"
					id="countries"
					className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
				>
					<option value="DEFAULT" disabled>
						Вырать фильтр
					</option>
					<option value="all">Все</option>
					<option value="motor">Двигатель</option>
					<option value="price">Цена</option>
				</select>
			</form>
		</>
	);
};

export default JetskinsSort;
