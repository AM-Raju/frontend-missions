import UserList from "./UserList";
import useUserData from "../hooks/useUserData";

const UserContainer = () => {
  const { isLoading, error, data } = useUserData();

  return <UserList error={error} data={data} isLoading={isLoading}></UserList>;
};

export default UserContainer;
