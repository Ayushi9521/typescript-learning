import Welcome from "./components/Welcome";
import type { User } from "./types/User.ts";
import "./App.css";

function App() {
  const user: User = {
    name: "Ayushi",
    age: 23,
  };

  return (
    <>
      <Welcome user={user} />
    </>
  );
}

export default App;
