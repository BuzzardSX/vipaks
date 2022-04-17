import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Team } from '../views';

function App() {
	return <BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/team" element={<Team />} />
		</Routes>
	</BrowserRouter>;
}

export default App;
