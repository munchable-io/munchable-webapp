import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Restaurant from "./pages/Restaurant";
import Error from "./pages/Error";
import Layout from "./features/layout/Layout";
import Unauthorized from "./pages/Unauthorized";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import RestaurantSettings from "./pages/Restaurant/RestaurantSettings";
import Dashboard from "./pages/Restaurant/Dashboard";
import Location from "./pages/Location";
import Editor from "./pages/Location/Editor";
import LocationSettings from "./pages/Location/LocationSettings";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="register" element={<Register />} />
				<Route path="login" element={<Login />} />
				<Route path="unauthorized" element={<Unauthorized />} />

				<Route path="restaurants/:restaurantName">
					<Route index element={<Restaurant />} />
					<Route element={<PersistLogin />}>
						<Route
							element={
								<RequireAuth
									allowedRoles={["admin", "manager"]}
								/>
							}
						>
							<Route
								path="settings"
								element={<RestaurantSettings />}
							/>
							<Route path="dashboard" element={<Dashboard />} />
						</Route>
					</Route>
					<Route path=":locationId">
						<Route index element={<Location />} />
						<Route element={<PersistLogin />}>
							<Route
								element={
									<RequireAuth
										allowedRoles={["admin", "manager"]}
									/>
								}
							>
								<Route path="editor" element={<Editor />} />
								<Route
									path="settings"
									element={<LocationSettings />}
								/>
							</Route>
						</Route>
					</Route>
				</Route>

				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
	);
};

export default App;
