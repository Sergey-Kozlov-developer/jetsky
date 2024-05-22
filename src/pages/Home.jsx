import { useEffect, useState } from "react";
import axios from "axios";

import Swiper from "../components/swiper/index";
import Search from "../components/search";
import Traffics from "../components/traffics";

export const Home = () => {
    // useState для поиска
    const [value, setValue] = useState("");
    // useState для получения данных с бэка
    const [data, setData] = useState([]);
    // поиск. получение значение из input
    const searchValueTarget = (event) => setValue(event.target.value);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://91f9067365762f2e.mokky.dev/items"
                );
                setData(response.data);
            } catch (error) {
                console.log("Error fetching", error);
            }
        };
        fetchData();
    }, []);

    // в нижний регистр поиск
    const filteredTraffics = data.filter((technic) => {
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
