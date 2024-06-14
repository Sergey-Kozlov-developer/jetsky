import React from "react";
import { CartEmpty } from "../components/cart/cartEmpty";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/cart/selectors";
import { clearItems } from "../redux/cart/slice";
import CartItem from "../components/cart";
import { Link } from "react-router-dom";
// import CartItem from "../components/cart";
// import { Link } from "react-router-dom";

const Cart: React.FC = () => {
	const dispatch = useDispatch();
	const { totalPrice, items } = useSelector(selectCart);

	const totalCount = items.reduce(
		(sum: number, item: any) => sum + item.count,
		0
	);

	const tax: number = Math.ceil(totalPrice * 0.13);
	const commission: number = Math.ceil(totalPrice * 0.02);

	const onClickClear = () => {
		if (window.confirm("Очистить корзину?")) {
			dispatch(clearItems());
		}
	};

	if (!totalPrice) {
		return <CartEmpty />;
	}

	return (
		<>
			<div className="font-sans">
				<div className="grid lg:grid-cols-1">
					<div className="overflow-x-auto bg-white p-6 lg:col-span-2">
						<div className="flex gap-2 border-b pb-4">
							<h2 className="flex-1 text-2xl font-bold text-gray-800">
								Ваша корзина
							</h2>
							<h3 className="text-base text-gray-800">
								{totalCount} Товар
							</h3>
						</div>

						<table className="mt-6 w-full border-collapse divide-y">
							<thead className="whitespace-nowrap text-left">
								<tr>
									<th className="p-4 text-base text-gray-800">
										Покупки
									</th>
								</tr>
							</thead>
							<div>
								{items.map((item: any) => (
									<CartItem key={item.id} {...item} />
								))}
							</div>
						</table>
					</div>

					<div className="bg-gray-50 p-6 lg:sticky lg:top-0 lg:h-full">
						<h2 className="border-b pb-4 text-2xl font-bold text-gray-800">
							Сумма заказа
						</h2>

						<ul className="mt-6 divide-y text-gray-800">
							<li className="flex flex-wrap gap-4 py-4 text-base">
								Цена
								<span className="ml-auto font-bold">
									{totalPrice} ₽
								</span>
							</li>
							<li className="flex flex-wrap gap-4 py-4 text-base">
								Налог
								<span className="ml-auto font-bold">
									{tax} ₽
								</span>
							</li>
							<li className="flex flex-wrap gap-4 py-4 text-base">
								Комиссия сервиса
								<span className="ml-auto font-bold">
									{commission} ₽
								</span>
							</li>
							<li className="flex flex-wrap gap-4 py-4 text-base font-bold">
								Итого{" "}
								<span className="ml-auto">
									{totalPrice + tax + commission} ₽
								</span>
							</li>
						</ul>

						<button
							type="button"
							className="mt-6 w-full rounded-lg bg-gray-800 px-6 py-3 text-base text-white hover:bg-gray-900"
						>
							Купить сейчас
						</button>
						<button
							type="button"
							className="mt-6 w-full rounded-lg bg-gray-800 px-6 py-3 text-base text-white hover:bg-gray-900"
						>
							<Link to="/jetskis">Вернуться к покупкам</Link>
						</button>
						<button
							type="button"
							className="mt-6 w-full rounded-lg bg-gray-800 px-6 py-3 text-base text-white hover:bg-gray-900"
						>
							<div onClick={onClickClear}>Очистить корзину</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
