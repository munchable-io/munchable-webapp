import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://munchable-backend.herokuapp.com";

// initial state
const initialState = {
	categories: [],
	status: "idle", // idle | loading | succeeded | failed
	error: null,
};

// async thunks
export const fetchCategories = createAsyncThunk(
	"categories/getCategories",
	async () => {
		try {
			const response = await axios(`${BASE_URL}/categories`);
			return response.data;
		} catch (err) {
			return err.message;
		}
	}
);

// categories slice
const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCategories.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.categories = action.payload;
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

// functions
export const getCategories = (state) => state.categories.categories;

// actions

// export reducer
export default categoriesSlice.reducer;
