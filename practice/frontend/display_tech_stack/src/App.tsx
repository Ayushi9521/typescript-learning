import "./App.css";
import Technology from "./components/Technology";

function App() {
  const techStack = ["React", "Node", "TypeScript", "Express"];
  return (
    <>
      <Technology techStack={techStack} />
    </>
  );
}

export default App;
