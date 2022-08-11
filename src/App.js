import { useState } from "react";
import AddUser from "./component/Users/AddUser";
import UserList from "./component/Users/UserList";

function App() {
  const [useList, setUserList] = useState([]);

  const AddUserHandler = (uName, UAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: UAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={useList} />
    </div>
  );
}

export default App;
