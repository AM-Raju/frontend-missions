import { useEffect, useState } from "react";
import UserList from "./UserList";

const UserContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(false);
      setData(data);
      console.log(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <UserList error={error} data={data} isLoading={isLoading}></UserList>;
};

export default UserContainer;
