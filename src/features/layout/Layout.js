import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { StyledLayout } from "./Layout.styled";

const Layout = () => {
	return (
		<>
			<Header />
			<StyledLayout>
				<Outlet />
			</StyledLayout>
		</>
	);
};

export default Layout;
