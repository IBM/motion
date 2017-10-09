"use strict";

import React from 'react';

class LeftColumnPrompt extends React.Component{
	constructor(){
		super();
		console.log("LeftColumnPrompt!!!");
	}

	render(){
		return(
			<div className="LeftColumnPrompt ibm-type-c"
				style={{
					maxWidth:'100000px'
				}}
			>{this.props.children}</div>
		)
	}
}

export default LeftColumnPrompt;
