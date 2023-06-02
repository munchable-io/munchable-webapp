import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Restaurant from "./pages/Restaurant";
import Error from "./pages/Error";
import RestaurantSettings from "./pages/Restaurant/RestaurantSettings";
import Dashboard from "./pages/Restaurant/Dashboard";
import Location from "./pages/Location";
import Editor from "./pages/Location/Editor";
import LocationSettings from "./pages/Location/LocationSettings";

const App = () => {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path="register" element={<Register />} />
				<Route path="login" element={<Login />} />
				<Route path="restaurants/:restaurantName">
					<Route index element={<Restaurant />} />
					<Route path="settings" element={<RestaurantSettings />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path=":locationId">
						<Route index element={<Location />} />
						<Route path="editor" element={<Editor />} />
						<Route path="settings" element={<LocationSettings />} />
					</Route>
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default App;
