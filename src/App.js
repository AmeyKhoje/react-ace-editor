import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Editor from './Components/Editor/Editor';

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/">
					<Editor />
				</Route>
			</Router>
		</div>
	);
}

export default App;
