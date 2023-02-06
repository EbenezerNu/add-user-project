import React from "react";
import styles from "./FormControl.module.css";
const FormControl = (props) => {
  return (
    <div className={styles["form-control"] + " " + props.className}>
      {props.children}
    </div>
  );
};

export default FormControl;
