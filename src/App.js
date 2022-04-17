import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../store';
import { Home, Team } from '../views';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/team" element={<Team />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
