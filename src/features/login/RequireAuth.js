import { useSelector } from "react-redux";
import { getAccessToken, getRole } from "./loginSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
	const accessToken = useSelector(getAccessToken);
	const role = useSelector(getRole);
	const location = useLocation();

	if (allowedRoles?.includes(role)) {
		return <Outlet />;
	} else {
		if (accessToken) {
			return (
				<Navigate
					to="/unauthorized"
					state={{ from: location }}
					replace
				/>
			);
		}
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
};

export default RequireAuth;
