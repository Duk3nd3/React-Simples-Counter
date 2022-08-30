import React from 'react';
import '../stylesheets/Button.css';

function Button({ text, isClicButton, handleClic }) {
	return (
		<button
			className={isClicButton ? 'clic-button' : 'reset-button'}
			onClick={handleClic}
		>
			{text}
		</button>
	);
}

export default Button;
