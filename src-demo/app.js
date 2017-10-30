import ready from 'document-ready-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import motion from '../dist';

import MotionGeneratorView from './views/MotionGeneratorView.js';

ready().then( () => {

	ReactDOM.render(
		<MotionGeneratorView/>,
		document.getElementById('app')
	);

	window.motion = motion;

});

