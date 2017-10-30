"use strict";

import React from 'react';
import './Label.scss';

class Label extends React.Component{
	constructor(){
		super();
		console.log("Label!!!");
	}

	render(){
		return(
			<div className="Label ibm-type-a">{this.props.children}</div>
		)
	}
}

export default Label;
