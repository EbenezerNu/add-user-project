import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import FormControl from "../FormControl/FormControl";
// import Container from "../UI/Container";
import Button from "../UI/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);
  const [errorObj, setErrorObj] = useState({ title: "", message: "" });

  // const usernameChangeHandler = (e) => {
  //   e.preventDefault();
  //   if (e.target.value.trim().length > 0) {
  //     setUsername(e.target.value.trim());
  //   }
  // };

  // const ageChangeHandler = (e) => {
  //   e.preventDefault();
  //   if (+e.target.value > 0) {
  //     setAge(e.target.value);
  //   }
  // };

  const addUserHandler = (e) => {
    e.preventDefault();
    let username = usernameInputRef.current.value.trim();
    let age = ageInputRef.current.value;

    if (username?.length > 0 && +age > 0) {
      console.log("Adding user");
      props.onAddUserToList({ name: username, age: age });
      // setAge("");
      // setUsername("");
      usernameInputRef.current.value = "";
      ageInputRef.current.value = "";
      setErrorObj({
        title: "",
        message: "",
      });
    } else {
      if (username?.trim()?.length > 0 && +age <= 0) {
        setErrorObj({
          title: "Invalid Age",
          message: "Age must be greater than 0",
        });
      } else if (username?.length === 0 && +age > 0) {
        setErrorObj({
          title: "Empty Username",
          message: "Username cannot be null",
        });
      } else if (username?.length === 0 && +age <= 0) {
        setErrorObj({
          title: "Invalid Username and Age",
          message: "Username cannot be null and Age cannot be 0",
        });
      }
      setIsInputValid(false);
    }
  };

  const errorModalClickHandler = (e) => {
    e.preventDefault();
    setIsInputValid(true);
  };

  return (
    <Wrapper>
      <form id={props.id}>
        <FormControl>
          <label className={styles.label}>Username</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Username"
            ref={usernameInputRef}
          />
        </FormControl>
        <FormControl className={styles["form-control"]}>
          <label className={styles.label}>Age (Years)</label>
          <input
            type="number"
            className={styles.input}
            placeholder="Age"
            ref={ageInputRef}
          />
        </FormControl>
        <FormControl>
          <Button
            type="button"
            onClick={addUserHandler}
            className={styles.button}
          >
            Add User
          </Button>
        </FormControl>
      </form>
      {!isInputValid && (
        <ErrorModal
          title={errorObj.title}
          message={errorObj.message}
          onButtonClick={errorModalClickHandler}
        ></ErrorModal>
      )}
    </Wrapper>
  );
};

export default AddUser;
