import {ReactElement} from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductAdd from "./pages/ProductAdd/ProductAdd";

function App(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/product-detail/:id" element={<ProductDetail />}></Route>
				<Route path="/products/new" element={<ProductAdd/>} />		
			</Routes>
		</BrowserRouter>
	);
}

export default App;
