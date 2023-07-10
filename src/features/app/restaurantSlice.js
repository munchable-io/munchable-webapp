import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialState = {
	restaurant: null,
	status: "idle",
	error: null,
};

export const getRestaurantByName = createAsyncThunk(
	"restaurant/getRestaurantByName",
	async (payload) => {
		const { name } = payload;
		try {
			const response = await axios.get(`/restaurants/name/${name}`, {
				withCredentials: true,
			});
			return response?.data;
		} catch (err) {
			throw err?.response?.status;
		}
	}
);

const restaurantSlice = createSlice({
	name: "restaurant",
	initialState,
	reducers: {
		setRestaurant: (state, action) => {
			state.restaurant = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getRestaurantByName.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(getRestaurantByName.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.restaurant = action.payload;
			})
			.addCase(getRestaurantByName.rejected, (state, action) => {
				state.status = "failed";
				state.error = action?.error?.message;
			});
	},
});

export const { setRestaurant } = restaurantSlice.actions;

export const getRestaurant = (state) => state.restaurant.restaurant;
export const getError = (state) => state.restaurant.error;

export default restaurantSlice.reducer;
