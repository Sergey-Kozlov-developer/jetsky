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
	img: string;
};

const CartItem: React.FC<CartItemProps> = ({
	id,
	name,
	// type,
	// size,
	price,
	count,
	img,
}) => {
	const dispatch = useDispatch();
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
			<tbody className="divide-y whitespace-nowrap">
				<tr className="w-full ">
					<td className="p-4">
						<div className="flex w-max items-center  gap-4">
							<div className="h-32 shrink-0">
								<img
									src={img}
									className="h-full w-full rounded-lg object-contain"
								/>
							</div>
							<div>
								<p className="text-base font-bold text-gray-800">
									{name}
								</p>
								<button
									onClick={onClickRemove}
									type="button"
									className="mt-2 text-sm font-semibold text-red-400"
								>
									Удалить
								</button>
							</div>
						</div>
					</td>
					<td className="p-4">
						<div className="flex w-max divide-x overflow-hidden rounded-lg border">
							<button
								disabled={count === 1}
								onClick={onClickMinus}
								type="button"
								className="flex h-10 w-10 items-center justify-center bg-gray-100 font-semibold"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-3 fill-current"
									viewBox="0 0 124 124"
								>
									<path
										d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
										data-original="#000000"
									></path>
								</svg>
							</button>
							<button
								type="button"
								className="h-10 w-10 bg-transparent text-base font-semibold text-gray-800"
							>
								{count}
							</button>
							<button
								onClick={onClickPlus}
								type="button"
								className="flex h-10 w-10 items-center justify-center bg-gray-800 font-semibold text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-3 fill-current"
									viewBox="0 0 42 42"
								>
									<path
										d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
										data-original="#000000"
									></path>
								</svg>
							</button>
						</div>
					</td>
					<td className="p-4">
						<h4 className="text-base font-bold text-gray-800">
							{price * count} ₽
						</h4>
					</td>
				</tr>
			</tbody>
		</>
	);
};

export default CartItem;
