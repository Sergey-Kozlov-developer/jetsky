import { useEffect, useState } from "react";

import Swiper from "../components/swiper/index";
import Search from "../components/search";
import Traffics from "../components/traffics";
import axios from "axios";
import debounce from "lodash.debounce";

export const Home = () => {
	// useState для поиска
	const [value, setValue] = useState("");

	// useState для получения данных с бэка
	const [data, setData] = useState([]);

	const searchValueTarget = debounce((event) => {
		setValue(event.target.value);
	}, 300);

	useEffect(() => {
		// const category = categoryId > 0 ? `category=${categoryId}` : "";
		axios.get(`https://91f9067365762f2e.mokky.dev/list`).then((res) => {
			setData(res.data);
		});
		window.scrollTo(0, 0);
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
