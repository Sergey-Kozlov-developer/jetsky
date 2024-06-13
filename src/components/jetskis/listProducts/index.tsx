// import imgCart from "../../../assets/img/categorie/cart.png";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemById } from "../../../redux/cart/selectors";
import { CartItem } from "../../../redux/cart/type";
import { addItem } from "../../../redux/cart/slice";

type ProductsProps = {
	id: string;
	name: string;
	price: number;
	img: string;
	// hp: PropTypes.string,
	category: number;
	rating: number;
};

const ListProducts: React.FC<ProductsProps> = ({
	id,
	name,
	price,
	img,
	rating,
}) => {
	const dispatch = useDispatch();
	const cartItem = useSelector(selectCartItemById(id));

	const addCount = cartItem ? cartItem.count : 0;

	const onClickAdd = () => {
		const item: CartItem = {
			id,
			name,
			price,
			img,

			count: 0,
		};
		dispatch(addItem(item));
	};

	return (
		<>
			<div className="h-full w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
				<img
					className="rounded-t-lg p-8 "
					src={img}
					alt="product image"
				/>
				<div className="px-5 pb-5">
					<a href="#">
						<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
							{name}
						</h5>
					</a>
					<div className="mb-5 mt-2.5 flex items-center">
						<div className="flex items-center space-x-1 rtl:space-x-reverse">
							<svg
								className="h-4 w-4 text-yellow-300"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
							<svg
								className="h-4 w-4 text-yellow-300"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
							<svg
								className="h-4 w-4 text-yellow-300"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
							<svg
								className="h-4 w-4 text-yellow-300"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
							<svg
								className="h-4 w-4 text-gray-200 dark:text-gray-600"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
						</div>
						<span className="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
							{rating}
						</span>
					</div>
					<div className="flex flex-col items-center justify-between">
						<span className="text-3xl font-bold text-gray-900 dark:text-white">
							{price} ₽
						</span>
						<button
							onClick={onClickAdd}
							className="mt-2 flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							{/* <img src={imgCart} alt="" /> */}
							<span>Добавить</span>
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
									fill="white"
								/>
							</svg>
							{/* если count 0, то не выводим бейдж */}
							{addCount > 0 && (
								<i className="relative -top-[1px] left-1 inline-block h-5 w-5 items-center justify-center rounded-3xl bg-orange-400 p-0 font-bold">
									{addCount}
								</i>
							)}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ListProducts;
