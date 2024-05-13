import { NavLink } from "react-router-dom";
import logo from "../../assets/mis.svg";
import style from "./Navigation.module.scss";

function Navigation() {
    const routes = [
        {
            to: "/",
            page: "Главная",
        },
        {
            to: "/company",
            page: "Компания MIS",
        },
        {
            to: "/products",
            page: "Продукция",
        },
        {
            to: "/publication",
            page: "Публикации",
        },
        {
            to: "/contacts",
            page: "Контакты",
        },
    ];

    return (
        <header className={style.header}>
            <div className={style.nav}>
                <div className={style.logo}>
                    <img src={logo} alt="" className={style.nav__logo} />
                    <h3 className={style.logo__text}>Implants Technologies</h3>
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
