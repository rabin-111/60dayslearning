import { useEffect, useState } from "react";
import { User } from "./User";

const Users = () => {
  const [userData, setUserData] = useState([]);

  async function fetchUserData() {
    try {
      const resp = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=20'"
      );
      const data = await resp.json();

      if (data) {
        setUserData(data);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log("UserData", userData);

  return (
    <div>
      {userData.map((user) => (
        <User id={user.id} name={user.title} comp={user.completed} ids={user.userId}/>
      ))}
    </div>
  );
};

export default Users;
