import { createSlice } from "@reduxjs/toolkit";
import { ListDoacaoDTO } from "types/admDTOTypes";
import { ReduxStore } from "types/reduxTypes";

const selectedDonation: ListDoacaoDTO | undefined = undefined;

const initialState = {
  selectedDonation: selectedDonation,
};

const admDonationSlice = createSlice({
  name: "adm_donation",
  initialState,
  reducers: {
    startEditDonationAdmRedux(state, action) {
      state.selectedDonation = action.payload;
    },
    endEditDonationAdmRedux(state) {
      state.selectedDonation = undefined;
    },
    selectDonationAdmRedux(state, action) {
      state.selectedDonation = action.payload;
    },
    deleteSelectDonationAdmRedux(state) {
      state.selectedDonation = undefined;
    },
  },
});

export const {
  endEditDonationAdmRedux,
  startEditDonationAdmRedux,
  selectDonationAdmRedux,
  deleteSelectDonationAdmRedux,
} = admDonationSlice.actions;

export const selectSelectedDonationObjectRedux = (
  store: ReduxStore,
) => store.adm_donation.selectedDonation;

export default admDonationSlice.reducer;
