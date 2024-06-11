import React, { useEffect, useRef } from "react";
import ListProducts from "../components/jetskis/listProducts";
// import Parametrs from "../components/jetskis/parametrs";
import JetskinsSort, { list } from "../components/jetskis/sortJetskins";
import JetskisCategories from "../components/jetskis/categories";
import { useSelector, useDispatch } from "react-redux";
import {
	setCategoryId,
	setCurrentPage,
	setFilters,
} from "../redux/filter/slice";
import Pagination from "../components/pagination";
import Skeleton from "../components/jetskis/skeleton";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { fetchJetskis } from "../redux/jetskis/asyncActions";
import { selectFilter } from "../redux/filter/selectors";
import { selectJetskisData } from "../redux/jetskis/selectors";

export const Jetskis: React.FC = () => {
	const navigate = useNavigate();
	// если есть в url данные
	const isSearch = useRef(false);
	// первый рендер
	const isMounted = useRef(false);
	// hook redux вытаскиваем определенное из state фильтра
	const { categoryId, sort, currentPage } = useSelector(selectFilter);
	// hook redux вытаскиваем hook redux вытаскиваем items status jetskisSlice
	const { items, status } = useSelector(selectJetskisData);

	const dispatch = useDispatch();
	// выбор категории
	const onClickCategory = (id: number) => {
		dispatch(setCategoryId(id));
	};
	// данные с бэка
	const fetchProducts = async () => {
		const sortBy = sort.sortProperty;
		const category = categoryId > 0 ? `category=${categoryId}` : "";
		// получаем и сохраняем данные бэка из jetskisSlice
		dispatch(
			fetchJetskis({
				sortBy,
				category,
				currentPage: String(currentPage),
			})
		);
		window.scrollTo(0, 0);
	};

	// если изминили параметры и был первый рендер
	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				currentPage,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, currentPage, sort.sortProperty]);

	// если был первый рендер, то проверяем URL-параметры и сохраняем в redux
	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = list.find(
				(obj) => obj.sortProperty === params.sortProperty
			);
			dispatch(setFilters({ ...params, sort }));
			isSearch.current = true;
		}
	}, []);

	// back data
	// если был первый рендер, то запрашивыем products
	useEffect(() => {
		window.scrollTo(0, 0);
		// один запрос на серв, проверка
		if (!isSearch.current) {
			fetchProducts();
		}
		isSearch.current = false;
	}, [categoryId, currentPage, sort.sortProperty]);

	const onChangePage = (number: number) => {
		dispatch(setCurrentPage(number));
	};

	const products = items.map((element: any) => (
		<ListProducts key={element.id} {...element} />
	));
	const skeletons = [...new Array(3)].map((_, index) => (
		<Skeleton key={index} />
	));

	return (
		<>
			<div className="sm:grid md:flex md:justify-between">
				<JetskisCategories
					value={categoryId}
					onClickCategory={onClickCategory}
				/>

				<JetskinsSort />
			</div>
			<div className="mt-8 flex justify-between">
				{/* <Parametrs /> */}
				<div className="mx-auto grid w-4/5 gap-5 sm:grid-cols-1 md:grid-cols-3">
					{status === "error" ? (
						<div className="mx-auto mt-5">
							<h1 className="text-xl font-bold">
								Произошла ошибка 😕
							</h1>
							<p>Попробуйте повторить попытку позже.</p>
						</div>
					) : status === "loading" ? (
						skeletons
					) : (
						products
					)}
				</div>
			</div>
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</>
	);
};

export default Jetskis;
