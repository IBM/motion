"use strict";

import React from 'react';
import LeftColumnPrompt from './LeftColumnPrompt.js';
import OpenSelector from './OpenSelector.js';

class LeftColumnMove extends React.Component{
	constructor(){
		super();
		console.log("LeftColumnMove!!!");
	}

	render(){
		return(
			<div className="LeftColumnMove">
				<div className="input-wrap">
					<LeftColumnPrompt>1. Choose a property to move:</LeftColumnPrompt>
					<div className="input-wrap">
						<OpenSelector/>
					</div>
				</div>
			</div>
		)
	}
}

export default LeftColumnMove;
