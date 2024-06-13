import React from "react";
import { CartEmpty } from "../components/cart/cartEmpty";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/cart/selectors";
import { clearItems } from "../redux/cart/slice";
import CartItem from "../components/cart";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
	const dispatch = useDispatch();
	const { totalPrice, items } = useSelector(selectCart);

	const totalCount = items.reduce(
		(sum: number, item: any) => sum + item.count,
		0
	);

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
			<div>
				{items.map((item: any) => (
					<CartItem key={item.id} {...item} />
				))}
			</div>
		</>
	);
};

export default Cart;
