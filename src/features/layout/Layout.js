import { Outlet } from "react-router-dom";
import { StyledLayout } from "./Layout.styled";
import Header from "./header/Header";

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
