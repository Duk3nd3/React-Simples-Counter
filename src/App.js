import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './images/clic_me.png';
import { useState } from 'react';

function App() {
	const [numClics, setNumClics] = useState(0);

	const handleClic = () => {
		setNumClics(numClics + 1);
	};

	const resetCounter = () => {
		setNumClics(0);
	};

	return (
		<div className='App'>
			<div className='logo-contenedor'>
				<img className='logo' src={freeCodeCampLogo} alt='Logo clics' />
			</div>
			<div className='main-container'>
				<Counter numClics={numClics} />
				<Button text='Clic' isClicButton={true} handleClic={handleClic} />
				<Button text='Reset' isClicButton={false} handleClic={resetCounter} />
			</div>
		</div>
	);
}

export default App;
