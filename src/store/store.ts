import { configureStore } from "@reduxjs/toolkit";
import admDonationReducer from "./admDonationSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    adm_donation: admDonationReducer,
  },
});
