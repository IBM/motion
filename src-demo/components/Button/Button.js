"use strict";

import React from 'react';
import globals from '../../views/globals.js';

class Button extends React.Component{
	constructor(){
		super();
		console.log("Button!!!");
	}

	render(){
		return(
			<div 
				className={`Button ${this.props.className}`}
				style={{
					border:globals.styles.border,
					padding:'0.5rem 1rem',
					...this.props.style,
					cursor:'pointer',
				}}
				onClick={evt => this.props.onClick ? this.props.onClick(evt) : null}
			>
				<div className="label">{this.props.children}</div>
			</div>
		)
	}
}

export default Button;
