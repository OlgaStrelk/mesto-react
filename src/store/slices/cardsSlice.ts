import { createSlice } from "@reduxjs/toolkit";

export interface IcardsState {
    cards: [];
    cardsRequest: boolean;
    cardsFailed: boolean;
  }
  const initialState: IcardsState = {
    cards: [],
    cardsRequest: false,
    cardsFailed: false,
  };
  
  const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {

    },
  });
  
  export const {} = cardsSlice.actions;
  
  export default cardsSlice.reducer;
  