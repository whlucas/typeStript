import React from 'react';
import { ChessType } from './types/enums';
import { BoardComp } from './components/BoardComp';
import { GameComp } from './components/GameComp';

function App() {
	return (
		<div className="App">
			<GameComp />
		</div>
	);
}

export default App;
