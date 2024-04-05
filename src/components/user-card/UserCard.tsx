import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { UserType } from "../../types/types";
import s from "./UserCard.module.css";
import { selectUser, setIsEditing } from "../../redux/slices/usersSlice";

type UserCardProps = {
  user: UserType;
};

const UserCard = ({ user }: UserCardProps) => {
  const dispatch: AppDispatch = useDispatch();

  const handleUserClick = () => {
    dispatch(selectUser(user));
    dispatch(setIsEditing(true));
  };

  return (
    <div className={s.user_card} onClick={handleUserClick}>
      <p>{user.name} {user.surname} ({user.email})</p>
    </div>
  );
};

export default UserCard;
