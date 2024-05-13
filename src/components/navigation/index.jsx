import { NavLink } from "react-router-dom";
import logo from "../../assets/drivelogo.svg";
import style from "./Navigation.module.scss";

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
        <header className={style.header}>
            <div className={style.nav}>
                <div className={style.logo}>
                    <img src={logo} alt="" className={style.nav__logo} />
                    <h3 className={style.logo__text}>Скорость и экстрим</h3>
                </div>

                <ul className={style.nav__list}>
                    {routes.map((route, index) => (
                        <NavLink
                            key={index}
                            to={route.to}
                            className={({ isActive }) =>
                                isActive ? style.active : ""
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
