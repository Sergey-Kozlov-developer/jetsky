// import { useState } from "react";
// import { useState } from "react";
import { useState } from "react";
import styles from "./Search.module.scss";
import quadbike from "../../assets/img/categories/quadbike.png";
import allterrain from "../../assets/img/categories/allterrain.png";
import boat from "../../assets/img/categories/boat.png";
import jetski from "../../assets/img/categories/jetski.png";
import moto from "../../assets/img/categories/moto.png";
import snowmobiles from "../../assets/img/categories/snowmobiles.png";
// import Traffics from "../traffics";

function Search() {
    const [value, setValue] = useState("");

    const technics = [
        { name: "Квадроциклы", img: quadbike },
        { name: "Гидроциклы", img: jetski },
        { name: "Катера", img: boat },
        { name: "Снегоходы", img: snowmobiles },
        { name: "Двигатели", img: moto },
        { name: "Вездеходы", img: allterrain },
    ];

    const filteredTraffics = technics.filter((technic) => {
        return technic.name.toLowerCase().includes(value.toLowerCase());
    });
    return (
        <>
            <div className={styles.searh}>
                <span>
                    <input
                        className={styles.basic__slide}
                        id="search"
                        type="text"
                        placeholder="Введите марку"
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <label htmlFor="search">Поиск</label>
                </span>
            </div>
            <div className={styles.categories__wrapper}>
                {filteredTraffics.map((technic, index) => (
                    <div key={index} className={styles.categories}>
                        <div className={styles.categories__text}>
                            <span>{technic.name}</span>
                            <button>Подробнее</button>
                        </div>
                        <img src={technic.img} alt="" />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Search;
