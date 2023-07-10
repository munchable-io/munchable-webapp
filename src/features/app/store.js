import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../auth/loginSlice";
import restaurantReducer from "./restaurantSlice";

export const store = configureStore({
	reducer: {
		login: loginReducer,
		restaurant: restaurantReducer,
	},
});
