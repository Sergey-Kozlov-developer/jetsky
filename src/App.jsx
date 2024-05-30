import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./pages/Home.jsx";
import Allterrain from "./pages/Allterrain.jsx";
import Jetskis from "./pages/Jetskis.jsx";
import Quadbike from "./pages/Quadbike.jsx";
import Engines from "./pages/Engines.jsx";
import Boats from "./pages/Boats.jsx";
import Snowmobiles from "./pages/Snowmobiles.jsx";
import Spareparts from "./pages/Spareparts.jsx";

function App() {
	return (
		<>
			<div className="wrap__nav">
				<Navigation />
			</div>
			<div className="container mx-auto mt-8">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/jetskis" element={<Jetskis />} />
					<Route path="/boats" element={<Boats />} />
					<Route path="/allterrain" element={<Allterrain />} />
					<Route path="/spareparts" element={<Spareparts />} />
					<Route path="/quadbike" element={<Quadbike />} />
					<Route path="/snowmobiles" element={<Snowmobiles />} />
					<Route path="/engines" element={<Engines />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
