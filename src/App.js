import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../store';
import Main from '../layouts/Main';
import { Home, Team } from '../views';

function App() {
	return (
		<Provider store={store}>
			<Main>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/team" element={<Team />} />
					</Routes>
				</BrowserRouter>
			</Main>
		</Provider>
	);
}

export default App;
