import { useEffect, useState } from "react";
import useRefreshToken from "./useRefreshToken";
import { useSelector } from "react-redux";
import { getAccessToken } from "./loginSlice";
import { Outlet } from "react-router-dom";

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const refresh = useRefreshToken();
	const accessToken = useSelector(getAccessToken);

	useEffect(() => {
		let isMounted = true;
		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (err) {
				console.log(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!accessToken ? verifyRefreshToken() : setIsLoading(false);

		return () => (isMounted = false);
	}, []); // eslint-disable-line

	return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;
