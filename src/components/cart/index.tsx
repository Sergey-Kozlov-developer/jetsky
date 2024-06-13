import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/cart/slice";
import { CartItem as CartItemType } from "../../redux/cart/type";
import { Link } from "react-router-dom";
import { selectCart } from "../../redux/cart/selectors";

type CartItemProps = {
	id: string;
	name: string;
	type: string;
	// size: number;
	price: number;
	count: number;
	imageUrl: string;
};

const CartItem: React.FC<CartItemProps> = ({
	id,
	name,
	// type,
	// size,
	price,
	count,
	imageUrl,
}) => {
	const dispatch = useDispatch();
	const { totalPrice, items } = useSelector(selectCart);

	const totalCount = items.reduce(
		(sum: number, item: any) => sum + item.count,
		0
	);
	const onClickPlus = () => {
		dispatch(
			addItem({
				id,
			} as CartItemType)
		);
	};
	const onClickMinus = () => {
		dispatch(minusItem(id));
	};
	const onClickRemove = () => {
		if (window.confirm("Ты действительно хочешь удалить товар?")) {
			dispatch(removeItem(id));
		}
	};

	return (
		<>
			<div className="relative py-24">
				<div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
					<h2 className="title font-manrope mb-8 text-center text-4xl font-bold leading-10 text-black">
						Корзина
					</h2>
					<div className="hidden grid-cols-2 py-6 lg:grid">
						<div className="text-xl font-normal leading-8 text-gray-500">
							Товар
						</div>
						<p className="flex items-center justify-between text-xl font-normal leading-8 text-gray-500">
							<span className="w-full max-w-[200px] text-center">
								Стоимость
							</span>
							<span className="w-full max-w-[260px] text-center">
								Кол-во
							</span>
							<span className="w-full max-w-[200px] text-center">
								Total
							</span>
						</p>
					</div>

					<div className="grid grid-cols-1 border-t border-gray-200 py-6 min-[550px]:gap-6 lg:grid-cols-2">
						<div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-xl:max-w-xl max-xl:justify-center min-[550px]:flex-row min-[550px]:gap-6">
							<div className="img-box">
								<img
									src="https://pagedone.io/asset/uploads/1701162850.png"
									alt="perfume bottle image"
									className="xl:w-[140px]"
								/>
							</div>
							<div className="pro-data w-full max-w-sm ">
								<h5 className="text-xl font-semibold leading-8 text-black max-[550px]:text-center">
									{name}
								</h5>
								<p className="my-2 text-lg font-normal leading-8 text-gray-500 max-[550px]:text-center min-[550px]:my-3">
									Perfumes
								</p>
								<h6 className="text-lg font-medium leading-8 text-indigo-600  max-[550px]:text-center">
									${price}
								</h6>
							</div>
						</div>
						<div className="flex w-full flex-col items-center gap-2 max-xl:mx-auto max-xl:max-w-xl min-[550px]:flex-row">
							<h6 className="font-manrope w-full max-w-[176px] text-center text-2xl font-bold leading-9 text-black">
								${price}{" "}
								<span className="ml-3 whitespace-nowrap text-sm text-gray-300 lg:hidden">
									(Delivery Charge)
								</span>
							</h6>
							<div className="mx-auto flex w-full items-center justify-center">
								<button
									// onClick={onClickMinus}
									className="group flex items-center justify-center rounded-l-full border border-gray-200 px-6 py-[18px] shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-200"
								>
									<svg
										className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
										xmlns="http://www.w3.org/2000/svg"
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
									>
										<path
											d="M16.5 11H5.5"
											stroke=""
											strokeWidth="1.6"
											strokeLinecap="round"
										/>
										<path
											d="M16.5 11H5.5"
											stroke=""
											strokeOpacity="0.2"
											strokeWidth="1.6"
											strokeLinecap="round"
										/>
										<path
											d="M16.5 11H5.5"
											stroke=""
											strokeOpacity="0.2"
											strokeWidth="1.6"
											strokeLinecap="round"
										/>
									</svg>
								</button>
								<input
									type="text"
									className="w-full min-w-[80px] max-w-[118px] border-y border-gray-200 bg-transparent py-[15px] text-center text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-900"
									placeholder={String(totalCount)}
								/>
								<button
									// onClick={onClickPlus}
									className="group flex items-center justify-center rounded-r-full border border-gray-200 px-6 py-[18px] shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-200"
								>
									<svg
										className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
										xmlns="http://www.w3.org/2000/svg"
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
									>
										<path
											d="M11 5.5V16.5M16.5 11H5.5"
											stroke=""
											strokeWidth="1.6"
											strokeLinecap="round"
										/>
										<path
											d="M11 5.5V16.5M16.5 11H5.5"
											stroke=""
											strokeOpacity="0.2"
											strokeWidth="1.6"
											strokeLinecap="round"
										/>
										<path
											d="M11 5.5V16.5M16.5 11H5.5"
											stroke=""
											strokeOpacity="0.2"
											strokeWidth="1.6"
											strokeLinecap="round"
										/>
									</svg>
								</button>
							</div>
							<h6 className="font-manrope w-full max-w-[176px] text-center text-2xl font-bold leading-9 text-indigo-600">
								${totalPrice}
							</h6>
						</div>
					</div>
					{/* общее кол-во */}
					{/* <div className="mb-8 w-full rounded-xl bg-gray-50 p-6 max-lg:mx-auto max-lg:max-w-xl">
						<div className="mb-6 flex w-full items-center justify-between">
							<p className="text-xl font-normal leading-8 text-gray-400">
								Всего
							</p>
							<h6 className="text-xl font-semibold leading-8 text-gray-900">
								${totalPrice}
							</h6>
						</div>
						<div className="flex w-full items-center justify-between border-b border-gray-200 pb-6">
							<p className="text-xl font-normal leading-8 text-gray-400">
								Налог
							</p>
							<h6 className="text-xl font-semibold leading-8 text-gray-900">
								${totalPrice * 0.13}
							</h6>
						</div>
						<div className="flex w-full items-center justify-between py-6">
							<p className="font-manrope text-2xl font-medium leading-9 text-gray-900">
								Total
							</p>
							<h6 className="font-manrope text-2xl font-medium leading-9 text-indigo-500">
								$405.00
							</h6>
						</div>
					</div> */}
					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<button className="flex w-full max-w-[280px] items-center  justify-center rounded-full bg-indigo-50 py-4 transition-all duration-500 hover:bg-indigo-100">
							<Link
								to="/jetskis"
								className="px-2 text-lg font-semibold leading-8 text-indigo-600"
							>
								Вернуться к покупкам
							</Link>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								viewBox="0 0 22 22"
								fill="none"
							>
								<path
									d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
									stroke="#4F46E5"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
						<button className="flex w-full max-w-[280px] items-center justify-center rounded-full bg-indigo-600 py-4 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
							Оплатить сейчас
							<svg
								className="ml-2"
								xmlns="http://www.w3.org/2000/svg"
								width="23"
								height="22"
								viewBox="0 0 23 22"
								fill="none"
							>
								<path
									d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
									stroke="white"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
