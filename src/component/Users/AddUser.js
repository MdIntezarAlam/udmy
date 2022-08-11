// import React, { useState } from "react";
// import Button from "../UI/Button";
// import Card from "../UI/Card";
// import classes from "./AddUser.module.css";
// import ErrorModule from "./ErrorModule";

// const AddUser = (props) => {
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredrage, setEnteredAge] = useState("");
//   const [error, setError] = useState();
//   const addUserhandler = (e) => {
//     e.preventDefault();
//     //validation
//     if (
//       enteredUsername.trim().length === 0 ||
//       enteredrage.trim().length === 0
//     ) {
//       setError({
//         title: "Invalid Input",
//         message: "pleases Enter a valid name and age",
//       });
//     }
//     if (+enteredrage < 1) {
//       setError({
//         title: "Invalid age",
//         message: "pleases Enter a valid age (> 0).",
//       });
//     }
//     props.onAddUser(enteredUsername, enteredrage);
//     setEnteredUsername("");
//     setEnteredAge("");
//   };
//   const usenameChangeHandler = (e) => {
//     setEnteredUsername(e.target.value);
//   };
//   const ageChangeHandler = (e) => {
//     setEnteredAge(e.target.value);
//   };
//   const errorHandler = (props) => {
//     setError(null);
//   };

//   return (
//     <div>
//       {error && (
//         <ErrorModule
//           title={error.title}
//           message={error.message}
//           onConfirm={errorHandler}
//         />
//       )}
//       <Card className={classes.input}>
//         <form onSubmit={addUserhandler}>
//           <label htmlFor="uername">User Name </label>
//           <input
//             type="text"
//             onChange={usenameChangeHandler}
//             value={enteredUsername}
//           />
//           <label htmlFor="age">Age</label>
//           <input
//             type="number"
//             id="age"
//             onChange={ageChangeHandler}
//             value={enteredrage}
//           />
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default AddUser;
import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModule from "./ErrorModule";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <h1 style={{textAlign:'center'}}>Add Magic 😉</h1>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
