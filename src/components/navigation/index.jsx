import { NavLink } from "react-router-dom";
import logo from "../../assets/drivelogo.svg";

function Navigation() {
	const routes = [
		{
			to: "/",
			page: "Главная",
		},
		{
			to: "/allterrain",
			page: "Вездеходы",
		},
		{
			to: "/quadbike",
			page: "Квадроциклы",
		},
		{
			to: "/snowmobiles",
			page: "Снегоходы",
		},
		{
			to: "/jetskis",
			page: "Гидроциклы",
		},
		{
			to: "/boats",
			page: "Катера",
		},
		// Engines
		{
			to: "/engines",
			page: "Двигатели",
		},
		{
			to: "/spareparts",
			page: "Запчасти",
		},
	];

	return (
		<header className="container relative mx-auto">
			<div className="relative z-50 flex items-center justify-between gap-10">
				<div className="flex items-center justify-between gap-10">
					<img src={logo} alt="" className="mb-2 h-12 w-12" />
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
