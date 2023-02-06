import styles from "./User.module.css";
// import FormControl from "../FormControl/FormControl";
const User = (props) => {
  return (
    <li className={styles.user} key={props.key}>
      {props.name} ({props.age} years old)
    </li>
  );
};

export default User;
