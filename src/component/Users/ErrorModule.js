import React from "react";
import classes from "./Error.module.css";
import Card from "../UI/Card";

const ErrorModule = (props) => {
  console.log(props);
  return (
    <div>
      <div className={classes.backdrop} onClick={props.errorConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModule;
