import { BrowserRouter, Link as RouterLink, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppBar, CssBaseline, Link, Toolbar } from '@mui/material';
import { Home } from './pages';
import Team from './Team';
import store from '../store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<CssBaseline />
				<AppBar position="sticky">
					<Toolbar>
						<Link component={RouterLink} to="/" color="primary">Home</Link>
						<Link component={RouterLink} to="/team">Team</Link>
					</Toolbar>
				</AppBar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/team" element={<Team />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
