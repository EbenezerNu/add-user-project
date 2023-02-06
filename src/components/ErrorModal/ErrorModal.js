// import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Button from "../UI/Button";
import Container from "../UI/Container";
import Wrapper from "../Helper/Wrapper";

const ErrorModal = (props) => {
  //   const [showModal, setShowModal] = useState(true);
  const removeErrorModalHandler = (e) => {
    e.preventDefault();
    // console.log("Okay is clicked");
    props.onButtonClick(e);
  };

  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <div
          className={styles.backdrop}
          onClick={removeErrorModalHandler}
        ></div>,
        document.getElementById("backdrop--root")
      )}
      {ReactDOM.createPortal(
        <div className={styles["error-modal"]}>
          <Container className={styles["modal-container"]}>
            <header className={styles.header}>
              <h2>{props.title}</h2>
            </header>
            <div className={styles.message}>
              <p>{props.message}</p>
            </div>
            <footer className={styles.footer}>
              <Button onClick={removeErrorModalHandler}>Okay</Button>
            </footer>
          </Container>
        </div>,
        document.getElementById("overlay--root")
      )}
    </Wrapper>
  );
};

export default ErrorModal;
