import Swiper from "../components/swiper/index";
import Search from "../components/search";
import Traffics from "../components/traffics";
import { useState } from "react";
import quadbike from "../assets/img/categories/quadbike.png";
import allterrain from "../assets/img/categories/allterrain.png";
import boat from "../assets/img/categories/boat.png";
import jetski from "../assets/img/categories/jetski.png";
import moto from "../assets/img/categories/moto.png";
import snowmobiles from "../assets/img/categories/snowmobiles.png";

export const Home = () => {
    // useState для поиска
    const [value, setValue] = useState("");
    // поиск. получение значение из input
    const searchValueTarget = (event) => setValue(event.target.value);

    const technics = [
        { name: "Квадроциклы", img: quadbike },
        { name: "Гидроциклы", img: jetski },
        { name: "Катера", img: boat },
        { name: "Снегоходы", img: snowmobiles },
        { name: "Двигатели", img: moto },
        { name: "Вездеходы", img: allterrain },
    ];
    // в нижний регистр поиск
    const filteredTraffics = technics.filter((technic) => {
        return technic.name.toLowerCase().includes(value.toLowerCase());
    });

    return (
        <>
            <Swiper />
            <Search searchValueTarget={searchValueTarget} />
            <Traffics filteredTraffics={filteredTraffics} />
        </>
    );
};

export default Home;
