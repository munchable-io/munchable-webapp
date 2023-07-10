import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	getError,
	getRestaurant,
	getRestaurantByName,
} from "../features/app/restaurantSlice";

const Location = () => {
	const [status, setStatus] = useState("pending");
	const [location, setLocation] = useState(null);

	const { restaurantName: name, locationId } = useParams();
	const dispatch = useDispatch();
	const restaurant = useSelector(getRestaurant);
	const error = useSelector(getError);

	const findLocation = (id, locations) => {
		for (const location of locations) {
			if (location._id === id) {
				return location;
			}
		}
		return null;
	};

	useEffect(() => {
		if (restaurant) {
			const location = findLocation(locationId, restaurant?.locations);
			if (!location) {
				setStatus("failed");
			} else {
				setStatus("success");
				setLocation(location);
			}
		} else {
			dispatch(getRestaurantByName({ name }));
		}
	}, [restaurant, locationId, name]); // eslint-disable-line

	useEffect(() => {
		if (error && error === "404") {
			setStatus("404");
		}
	}, [error]);

	if (status === "success") {
		const { street, city, state } = location?.address;
		return (
			<>
				<h2>{restaurant?.name}</h2>
				<p>{`${street}, ${city} ${state}`}</p>
			</>
		);
	} else if (status === "404") {
		return (
			<>
				<h2>Restaurant not found.</h2>
				<Link to="/">Go home</Link>
			</>
		);
	} else if (status === "failed") {
		return (
			<>
				<h2>Location not found.</h2>
				<Link to="/">Go home</Link>
			</>
		);
	} else {
		return <p>Loading...</p>;
	}
};

export default Location;
