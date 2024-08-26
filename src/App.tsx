import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Header } from "@/container";

function App() {
  return (
    <div className="App bg-my-black w-screen h-screen overflow-x-hidden">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
