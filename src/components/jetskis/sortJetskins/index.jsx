import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../../redux/slices/filterSlice";
import { useState } from "react";

export const list = [
	{ name: "менее популярные", sortProperty: "rating" },
	{ name: "популярные", sortProperty: "-rating" },
	{ name: "недорогие", sortProperty: "price" },
	{ name: "дорогие", sortProperty: "-price" },
];
const JetskinsSort = () => {
	// redux вытаскиваем из него метод сортировки
	const dispatch = useDispatch();
	const sort = useSelector((state) => state.filter.sort);
	// useState для открытия меню сортировки
	const [open, setOpen] = useState(false);

	const onClickListItem = (obj) => {
		dispatch(setSort(obj));
		// сбрасываем открытое окно выбора pop-up
		setOpen(false);
	};
	return (
		<>
			<div className="relative sm:mt-8 md:mt-16">
				<div className="flex items-center">
					<svg
						className="mr-2"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
							fill="#2C2C2C"
						/>
					</svg>
					<b className="mr-2">Сортировка по:</b>
					<span
						className="cursor-pointer border border-dashed border-red-400 text-red-400"
						onClick={() => setOpen(!open)}
					>
						{sort.name}
					</span>
				</div>
				{/*условный рендеринг с использованием &&(логический оператор И)*/}
				{open && (
					<div className="absolute right-0 mt-4 w-56 overflow-hidden rounded-xl bg-white px-3 py-0 shadow-slate-300">
						<ul className="overflow-hidden">
							{list.map((obj, index) => (
								<li
									key={index}
									onClick={() => onClickListItem(obj)}
									className={
										sort.sortProperty === obj.sortProperty
											? "cursor-pointer px-5 py-3 font-semibold text-red-400"
											: "cursor-pointer"
									}
								>
									{obj.name}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	);
};

export default JetskinsSort;
