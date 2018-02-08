"use strict";

import React from 'react';
import './colors.scss';
import './AppView.scss';

import AppHeader from './AppHeader.js';
import AppBody from './AppBody.js';

class AppView extends React.Component{
	constructor(){
		super();
		console.log("AppView!!!");
	}

	render(){
		return(
			<div className="AppView">
				<AppHeader/>
				<AppBody/>
			</div>
		)
	}
}

export default AppView;
