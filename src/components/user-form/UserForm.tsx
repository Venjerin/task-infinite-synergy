import { useState } from "react";
import s from "./UserForm.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setIsEditing, updateUser } from "../../redux/slices/usersSlice";
import { UserType } from "../../types/types";

type UserFormProps = {
  user: UserType;
};

const UserForm = ({ user }: UserFormProps) => {
  const [formData, setFormData] = useState(user);
  const dispatch: AppDispatch = useDispatch();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? "" : `Поле ${name} не должно быть пустым!`,
    }));
  };

  const handleSubmit = () => {
    dispatch(updateUser(formData));
    dispatch(setIsEditing(false));
  };

  return (
    <div className={s.user_form}>
      <div className={s.user_form_block}>
        <p>Имя пользователя</p>
        <input
          placeholder="Введите имя"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className={s.user_form_block}>
        <p>Фамилия пользователя</p>
        <input
          placeholder="Введите фамилию"
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </div>
      <div className={s.user_form_block}>
        <p>Возраст пользователя</p>
        <input
          placeholder="Введите возраст"
          type="string"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div className={s.user_form_block}>
        <p>Почта пользователя</p>
        <input
          placeholder="Введите почту"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default UserForm;