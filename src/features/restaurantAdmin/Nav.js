import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<Link to="settings">Restaurant Settings</Link>
			<br />
			<Link to="dashboard">Restaurant Dashboard</Link>
		</>
	);
};

export default Nav;
