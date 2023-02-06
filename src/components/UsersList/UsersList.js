import React from "react";
import styles from "./UsersList.module.css";
import User from "../User/User";
const UsersList = (props) => {
  //   const [goals, setGoals] = useState([props.Goals]);
  //   const addGoalHandler = (goal) => {
  //     if (goal?.name?.trim()?.length > 0) {
  //       setGoals((prevGoals) => {
  //         return [...prevGoals, goal];
  //       });
  //     }
  //   };

  return (
    <ul id={styles[props.id]} className={styles[props.className]}>
      {console.log("Users : mapping users \n", props.users)}
      {props.users?.map((user) => {
        if (user?.name?.trim()?.length > 0) {
          return <User name={user?.name} age={user?.age} key={user?.id} />;
        } else {
          return "";
        }
      })}
    </ul>
  );
};

export default UsersList;
