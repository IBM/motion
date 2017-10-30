"use strict";

import React from 'react';

class Header extends React.Component{
	constructor(){
		super();
		console.log("Header!!!");
	}

	render(){
		return(
			<div 
				className="Header ibm"
				style={{
					backgroundColor:'#F3F3F3'
				}}
			>
				<div className="ibm-col-lg-14 ibm-height-lg-4 ibm-col-md-6">
					<div className="ibm-type-e">IBM Motion Generator</div>
				</div>
				<div className="ibm-col-lg-2 ibm-height-lg-4 ibm-col-md-2"
					style={{
						textAlign:'right'
					}}
				>
					<a className="ibm-type-a" href="#">IBM Motion Guide</a>
				</div>
			</div>
		)
	}
}

export default Header;
