// import UseStateExample from "./pages/UseStateExample";

import Select from "./compoents/Select";
// import UserContainer from "./compoents/UserContainer";
// import GameResult from "./hookPages/GameResult";
// import Profile from "./hookPages/Profile";

function App() {
  return (
    <>
      {/* <UseStateExample></UseStateExample> */}
      {/* <Profile></Profile> */}
      {/* <GameResult></GameResult> */}
      {/* <UserContainer></UserContainer> */}

      <Select>
        <Select.SelectOption value="Option1">Option 1</Select.SelectOption>
        <Select.SelectOption value="Option2">Option 2</Select.SelectOption>
        <Select.SelectOption value="Option3">Option 3</Select.SelectOption>
        <Select.SelectOption value="Option4">Option 4</Select.SelectOption>
      </Select>
    </>
  );
}

export default App;
