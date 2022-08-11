import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, id) => (
          <li key={user.id}>
            Welcome 😉 {user.name} You are ({user.age}) years old.
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
