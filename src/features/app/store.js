import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../menu/items.slice";
import categoriesReducer from "../categories/categories.slice";

export const store = configureStore({
	reducer: {
		items: itemsReducer,
		categories: categoriesReducer,
	},
});
