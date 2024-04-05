import { createSlice } from "@reduxjs/toolkit";
import usersData from "../data/users.json";
import { UserType } from "../../types/types";

const initialUser = {
  id: 0,
  name: "Введите имя",
  surname: "Введите фамилию",
  age: 0,
  email: "Введите почту",
};

const initialState = {
  users: usersData as UserType[],
  selectedUser: initialUser,
  isEditing: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      state.users = action.payload;
    },
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state.selectedUser = initialUser;
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
  },
});

export const { loadUsers, selectUser, updateUser, setIsEditing } = usersSlice.actions;

export default usersSlice.reducer;
