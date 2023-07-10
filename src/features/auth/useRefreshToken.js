import { useDispatch } from "react-redux";
import { setAccessToken, setRole, setStatus } from "./loginSlice";
import axios from "../api/axios";

const useRefreshToken = () => {
	const dispatch = useDispatch();

	const refresh = async () => {
		dispatch(setStatus("loading"));
		const response = await axios.get("/auth/refresh", {
			withCredentials: true,
		});
		const { accessToken, role } = response.data;
		dispatch(setAccessToken(accessToken));
		dispatch(setRole(role));
		dispatch(setStatus("succeeded"));
		return accessToken;
	};
	return refresh;
};

export default useRefreshToken;
