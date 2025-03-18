import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbara from "./components/Navbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#F6F8FC] w-screen h-screen overflow-hidden">
      <Navbar />
      <Sidebar/>
    </div>
  );
}

export default App;
