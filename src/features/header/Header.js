import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import { StyledHeader } from "./Header.styled";
import useLogout from "../auth/useLogout";
import { useSelector } from "react-redux";
import { getAccessToken, getStatus } from "../auth/loginSlice";

const Header = () => {
	const logout = useLogout();
	const navigate = useNavigate();
	const accessToken = useSelector(getAccessToken);
	const status = useSelector(getStatus);

	const handleLogout = async () => {
		await logout();
		navigate("/");
	};

	return (
		<StyledHeader>
			<h1>
				<Link to="/">Munchable</Link>
			</h1>
			<section>
				{status === "loading" ? (
					<p>Loading...</p>
				) : !accessToken ? (
					<>
						<Link to="/login">
							<Button>Sign In</Button>
						</Link>
						<Link to="/register">
							<Button>Register</Button>
						</Link>
					</>
				) : (
					<Button onClick={handleLogout}>Log Out</Button>
				)}
			</section>
		</StyledHeader>
	);
};

export default Header;
