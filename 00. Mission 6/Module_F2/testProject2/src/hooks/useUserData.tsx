import { useEffect, useState } from "react";
const useUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const controller = new AbortController();

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url, { signal: controller.signal });
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

    return () => {
      controller.abort();
    };
  }, []);
  return { isLoading, error, data };
};

export default useUserData;
