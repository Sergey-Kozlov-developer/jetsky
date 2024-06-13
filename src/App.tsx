import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/index.js";
import Home from "./pages/Home.js";
import Jetskis from "./pages/Jetskis.js";
import CartItem from "./components/cart/index.js";

function App() {
	return (
		<>
			<div className="fixed left-0 top-0 z-30 w-full bg-slate-200">
				<Navigation />
			</div>
			<div className="mx-auto sm:container sm:mt-28 md:mt-20">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/jetskis" element={<Jetskis />} />
					<Route path="/cart" element={<CartItem />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
