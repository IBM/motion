import React from 'react';
import ReactDOM from 'react-dom';

import AppView from './views/AppView.js';

(function(){
	console.log('main.js...');

	window.motionCalculator = {
		init:targetElId => ReactDOM.render(
			<AppView/>,
			document.getElementById(targetElId)
		)
	}
})();
