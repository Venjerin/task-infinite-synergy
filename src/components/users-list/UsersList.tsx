import React from "react";
import s from "./UserList.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { UserType } from "../../types/types";
import UserCard from "../user-card/UserCard";

const UsersList = () => {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <div className={s.user_list}>
      {users.map((user: UserType) => (
        <UserCard key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default UsersList;
