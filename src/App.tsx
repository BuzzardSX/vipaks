import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Team from "./Team";

function App() {
	return <BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/team" element={<Team />} />
		</Routes>
	</BrowserRouter>;
}

export default App;
