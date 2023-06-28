import { Link } from "react-router-dom";
import Button from "../ui/button/Button";
import { StyledHeader } from "./Header.styled";

const Header = () => {
	return (
		<StyledHeader>
			<h1>
				<Link to="/">Munchable</Link>
			</h1>
			<section>
				<Link to="/login">
					<Button>Sign In</Button>
				</Link>
				<Link to="/register">
					<Button>Register</Button>
				</Link>
			</section>
		</StyledHeader>
	);
};

export default Header;
