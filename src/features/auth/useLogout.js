import { useDispatch } from "react-redux";
import axios from "../api/axios";
import { setAccessToken, setRole } from "./loginSlice";

const useLogout = () => {
	const dispatch = useDispatch();

	const logout = async () => {
		dispatch(setAccessToken(null));
		dispatch(setRole(null));
		try {
			await axios("/auth/logout", {
				withCredentials: true,
			});
		} catch (err) {
			console.log(err);
		}
	};

	return logout;
};

export default useLogout;
