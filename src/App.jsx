import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Contacts from "./pages/Contacts.jsx";
import Publication from "./pages/Publications.jsx";
import Company from "./pages/Company.jsx";

function App() {
    return (
        <>
            <div className="wrap__nav">
                <Navigation />
            </div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/publication" element={<Publication />} />
                    <Route path="/company" element={<Company />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
