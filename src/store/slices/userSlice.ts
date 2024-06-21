import { createSlice } from "@reduxjs/toolkit";
export interface IUserState {
  user: {
    name: string;
    about: string;
    avatar: string;
    _id: string;
    cohort: string;
  };
  userRequest: boolean;
  userFailed: boolean;
}
const initialState: IUserState = {
  user: { name: "", about: "", avatar: "", _id: "", cohort: "" },
  userRequest: false,
  userFailed: false,
};

const getProfile = () => {
  return fetch(`${baseUrl}/users/me`, {
    headers: headers,
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUser() {},
    updateUser() {},
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
