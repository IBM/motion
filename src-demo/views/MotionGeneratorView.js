"use strict";

import React from 'react';

import Header from './Header.js';
import BodyView from './BodyView.js';
import globals from './globals.js';

class MotionGeneratorView extends React.Component{
	constructor(){
		super();
		console.log("MotionGeneratorView!!!");
	}

	render(){
		return(
			<div 
				className="MotionGeneratorView"
				style={{
					display:'flex',
					flexDirection:'column',
					borderBottom:globals.styles.border
				}}
			>
				<Header/>
				<BodyView/>
			</div>
		)
	}
}

export default MotionGeneratorView;
