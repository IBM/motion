import motion from '../dist';
import ready from 'document-ready-promise';

ready().then( () => {

	console.log('app.js!');

	window.motion = motion;

});

