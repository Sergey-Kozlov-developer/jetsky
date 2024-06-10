import { NavLink } from "react-router-dom";
import logo from "../../assets/drivelogo.svg";

function Navigation() {
	const routes = [
		{
			to: "/",
			page: "Главная",
		},
		// {
		// 	to: "/allterrain",
		// 	page: "Вездеходы",
		// },
		// {
		// 	to: "/quadbike",
		// 	page: "Квадроциклы",
		// },
		// {
		// 	to: "/snowmobiles",
		// 	page: "Снегоходы",
		// },
		{
			to: "/jetskis",
			page: "Гидроциклы",
		},
		// {
		// 	to: "/boats",
		// 	page: "Катера",
		// },
		// // Engines
		// {
		// 	to: "/engines",
		// 	page: "Двигатели",
		// },
		// {
		// 	to: "/spareparts",
		// 	page: "Запчасти",
		// },
	];

	return (
		<header className="sm:container md:container sm:relative md:mx-auto">
			<div className="relative z-50 sm:flex sm:items-center sm:justify-center sm:gap-5">
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
			</div>
		</header>
	);
}
export default Navigation;
