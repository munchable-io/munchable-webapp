import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./features/layout/Layout";
import HomePage from "./pages/HomePage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	);
};

export default App;
