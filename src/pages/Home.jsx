import { useEffect } from "react";

import Swiper from "../components/swiper/index";
import Search from "../components/search";
import Traffics from "../components/traffics";
import { useBack, useSearch } from "../store/useBack";

export const Home = () => {
    // для получения данных с бэка
    const fetchData = useBack((state) => state.fetchData);
    const data = useBack((state) => state.data);
    // значение из инпута поиска
    const value = useSearch((state) => state.value);

    useEffect(() => {
        fetchData();
    }, []);

    // в нижний регистр поиск
    const filteredTraffics = data.filter((technic) => {
        return technic.name.toLowerCase().includes(value.toLowerCase());
    });

    return (
        <>
            <Swiper />
            <Search />
            <Traffics filteredTraffics={filteredTraffics} />
        </>
    );
};

export default Home;
