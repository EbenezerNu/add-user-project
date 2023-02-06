import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
// import Container from "./components/UI/Container";
import UsersList from "./components/UsersList/UsersList";

const App = () => {
  const [usersList, SetUsersList] = useState([]);

  const addToUsersListHandler = (user) => {
    console.log("User : ", user);
    SetUsersList((prevUsers) => {
      return [
        ...prevUsers,
        {
          name: user.name,
          age: user.age,
          id:
            prevUsers[prevUsers.length - 1]?.id == null
              ? 1
              : +prevUsers[prevUsers.length - 1].id + 1,
        },
      ];
    });
  };

  return (
    <div>
      <AddUser id="user-form" onAddUserToList={addToUsersListHandler} />
      <UsersList id="users" users={usersList}></UsersList>
    </div>
  );
};

export default App;
