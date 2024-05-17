import styles from "./Categories.module.scss";

import quadbike from "../../assets/img/categories/quadbike.png";
import allterrain from "../../assets/img/categories/allterrain.png";
import boat from "../../assets/img/categories/boat.png";
import jetski from "../../assets/img/categories/jetski.png";
import moto from "../../assets/img/categories/moto.png";
import snowmobiles from "../../assets/img/categories/snowmobiles.png";

function Categories() {
    const technics = [
        { name: "Квадроциклы", img: quadbike },
        { name: "Гидроциклы", img: jetski },
        { name: "Катера", img: boat },
        { name: "Снегоходы", img: snowmobiles },
        { name: "Двигатели", img: moto },
        { name: "Вездеходы", img: allterrain },
    ];

    return (
        <>
            <div className={styles.categories__wrapper}>
                {technics.map((technic, index) => (
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

export default Categories;
