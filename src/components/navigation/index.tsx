import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/drivelogo.svg";
import cart from "../../assets/cart.svg";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart/selectors";
import React from "react";

function Navigation() {
	const routes = [
		{
			to: "/",
			page: "Главная",
		},

		{
			to: "/jetskis",
			page: "Гидроциклы",
		},
		{
			to: "/cart",
			// page: "Корзина",
		},
	];

	const { items, totalPrice } = useSelector(selectCart);
	const location = useLocation();
	const isMounted = React.useRef(false);

	const totalCount = items.reduce(
		(sum: number, item: any) => sum + item.count,
		0
	);

	React.useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(items);
			localStorage.setItem("cart", json);
		}
		isMounted.current = true;
	}, [items]);

	return (
		<header className="sm:container md:container sm:relative md:mx-auto">
			<div className="relative z-50 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-5 md:flex-row">
				<div className="sm:flex sm:items-center sm:justify-between sm:gap-5 md:gap-10">
					<img
						src={logo}
						alt=""
						className="sm:mb-2 sm:h-12 sm:w-12"
					/>
					<h3 className="text-slate-500">Скорость и экстрим</h3>
				</div>

				<ul className="flex justify-between gap-5">
					{routes.map((route, index) => (
						<NavLink
							key={index}
							to={route.to}
							className={({ isActive }) =>
								isActive ? "text-link-active" : "text-slate-500"
							}
						>
							{route.page}
						</NavLink>
					))}
				</ul>
				<div className="">
					{location.pathname !== "/cart" && (
						<Link
							to="/cart"
							className="flex items-center justify-between gap-2"
						>
							<span>{totalPrice} ₽</span>
							<div className="ml-3 mr-3 h-6 w-[1px] bg-orange-400"></div>
							<img className="h-5 w-5" src={cart} alt="" />
							<span>{totalCount}</span>
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}
export default Navigation;
