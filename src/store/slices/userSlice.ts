import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { name: "", about: "", avatar: "", _id: "", cohort: ""},
    userRequest: false,
    userFailed: false,
  },
  reducers: {
    fetchUser() {},
    updateUser() {},
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
