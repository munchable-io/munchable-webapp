import { Link } from "react-router-dom";

const Restaurant = () => {
	return (
		<>
			<div>Restaurant Home</div>
			<Link to="settings">Restaurant Settings</Link>
			<br></br>
			<Link to="dashboard">Restaurant Dashboard</Link>
		</>
	);
};

export default Restaurant;
