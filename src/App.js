import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

// in this component we are fetching users
function App() {

  //managing users
  const [userList, setUserList]= useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUserList((prevUserList) =>{
      return [...prevUserList, {name:uName , age:uAge, id:Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
