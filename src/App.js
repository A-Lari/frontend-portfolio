import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import Home from "./pages/Home";
import ProjectList from "./pages/ProjectList";

function App() {
  return (
    <div className="App">
      <h1>portfolio</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectList />} />
      </Routes>
      <NavBar/>
    </div>
  );
}

export default App;
