import React from 'react';
import './App.css';
import UsersList from './components/users-list/UsersList';
import UserForm from './components/user-form/UserForm';
import { RootState } from './redux/store';
import { useSelector } from 'react-redux';

function App() {
  const selectedUser = useSelector((state:RootState) => state.users.selectedUser);
  const isEditing = useSelector((state:RootState) => state.users.isEditing);

  return (
    <div className="App">
     <UsersList></UsersList>
     {isEditing && selectedUser.id !== 0 && <UserForm user={selectedUser}></UserForm>}
    </div>
  );
}

export default App;

