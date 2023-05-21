import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PlayQuiz } from "./pages/PlayQuiz";
import { HowTo } from "./pages/HowTo";
import { Leaderboard } from "./pages/Leaderboard";
import { AboutUs } from "./pages/AboutUs";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/play" element={<PlayQuiz />} />
			<Route path="/howto" element={<HowTo />} />
			<Route path="/leaderboard" element={<Leaderboard />} />
			<Route path="/aboutus" element={<AboutUs />} />
		</Routes>
	);
}

export default App;
