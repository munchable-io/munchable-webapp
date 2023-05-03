import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://munchable-backend.herokuapp.com";

// initial state
const initialState = {
	items: [],
	selectedItem: null,
	status: "idle", // idle | loading | succeeded | failed
	error: null,
};

// async thunks
export const fetchItems = createAsyncThunk("items/getItems", async () => {
	try {
		const response = await axios(`${BASE_URL}/items`);
		return response.data;
	} catch (err) {
		return err.message;
	}
});

// items slice
const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		setSelectedItem(state, action) {
			state.selectedItem = state.items.find(
				(item) => item._id === action.payload
			);
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchItems.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchItems.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload;
			})
			.addCase(fetchItems.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

// functions
export const getItems = (state) => state.items.items;
export const getSelectedItems = (state) => state.items.selectedItem;

// actions
export const { setSelectedItem } = itemsSlice.actions;

// export reducer
export default itemsSlice.reducer;
