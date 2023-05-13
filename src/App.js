import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import "./style/App.css";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
