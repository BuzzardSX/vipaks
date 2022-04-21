import { BrowserRouter, Link as RouterLink, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppBar, Container, CssBaseline, Link, Toolbar } from '@mui/material';
import { Home, Team } from './pages';
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
				<Container>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/team" element={<Team />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
