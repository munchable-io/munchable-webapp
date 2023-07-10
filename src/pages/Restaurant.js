import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	getError,
	getRestaurant,
	getRestaurantByName,
} from "../features/app/restaurantSlice";

const Restaurant = () => {
	const [status, setStatus] = useState("pending");

	const { restaurantName: name } = useParams();
	const dispatch = useDispatch();
	const restaurant = useSelector(getRestaurant);
	const error = useSelector(getError);

	useEffect(() => {
		dispatch(getRestaurantByName({ name }));
	}, [name]); // eslint-disable-line

	useEffect(() => {
		if (error && error === "404") {
			setStatus("failed");
		}
	}, [error]);

	useEffect(() => {
		if (restaurant) {
			setStatus("success");
		}
	}, [restaurant]);

	if (status === "success") {
		return (
			<>
				<h2>{restaurant?.name || name}</h2>
				{restaurant?.locations?.map((location) => {
					const { street, city, state } = location?.address;
					return (
						<Link to={location._id} key={location._id}>
							{`${street}, ${city} ${state}`}
						</Link>
					);
				})}
			</>
		);
	} else if (status === "failed") {
		return (
			<>
				<h2>Restaurant not found.</h2>
				<Link to="/">Go Home</Link>
			</>
		);
	} else {
		return <p>Loading...</p>;
	}
};

export default Restaurant;
