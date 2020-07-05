import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Editor from './Components/Editor/Editor';
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home';

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" exact>
					<Editor />
				</Route>
				<Route path="/home" exact>
					<Navigation />
					<Home />
				</Route>
			</Router>
		</div>
	);
}

export default App;
