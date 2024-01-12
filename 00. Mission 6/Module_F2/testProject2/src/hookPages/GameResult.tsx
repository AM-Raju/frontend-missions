import UserAvatar from "../compoents/UserAvatar";
import WithBorder from "../compoents/WithBorder";

const UserAvatarWithBorder = WithBorder(UserAvatar);

const GameResult = () => {
  return (
    <div className="flex space-x-5 items-center h-screen">
      <UserAvatar></UserAvatar>
      <UserAvatarWithBorder></UserAvatarWithBorder>
      <UserAvatar></UserAvatar>
      <UserAvatar></UserAvatar>
    </div>
  );
};

export default GameResult;
