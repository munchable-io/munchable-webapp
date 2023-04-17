import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import Cart from "./cart/Cart";
import MainNav from "./nav/MainNav";

const Header = () => {
	return (
		<StyledHeader>
			<MainNav />
			<h2>
				<Link to="">Lucky Dynasty</Link>
			</h2>
			<Cart />
		</StyledHeader>
	);
};

export default Header;
