import styles from "./Container.module.css";
const Container = (props) => {
  return (
    <div id={props.id} className={props.className + " " + styles.container}>
      {props.children}
    </div>
  );
};

export default Container;
