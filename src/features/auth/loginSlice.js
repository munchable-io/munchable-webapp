import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../util/constants";

const initialState = {
	accessToken: null,
	role: null,
	status: "idle",
	error: null,
};

export const handleLogin = createAsyncThunk(
	"login/handleLogin",
	async (payload) => {
		const { email, password } = payload;
		try {
			const response = await axios.post(
				`${URL}/auth/login`,
				{
					email,
					password,
				},
				{
					withCredentials: true,
				}
			);
			return response?.data;
		} catch (err) {
			throw err?.response?.status;
		}
	}
);

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		setStatus: (state, action) => {
			state.status = action.payload;
		},
		setRole: (state, action) => {
			state.role = action.payload;
		},
		logOut: (state, action) => {
			state.user = null;
			state.accessToken = null;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(handleLogin.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(handleLogin.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.accessToken = action.payload?.accessToken;
				state.role = action.payload?.role;
			})
			.addCase(handleLogin.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export const { setAccessToken, setStatus, setRole, logOut } =
	loginSlice.actions;

export const getAccessToken = (state) => state.login.accessToken;
export const getRole = (state) => state.login.role;
export const getStatus = (state) => state.login.status;
export const getError = (state) => state.login.error;

export default loginSlice.reducer;
