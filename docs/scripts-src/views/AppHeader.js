"use strict";

import React from 'react';

import './AppHeader.scss';
import IBMArrowForwardLinkDark from './ibm-arrow-forward-link-dark.svg';

class AppHeader extends React.Component{
	constructor(){
		super();
		console.log("AppHeader!!!");
	}

	render(){
		return(
			<div className="AppHeader">
				<div className="ibm">
					<div 
						className="name-wrap ibm-col-md-4 ibm-type-e"
						style={{
							display:'flex',
							flexDirection:'row',
							alignItems:'flex-end'
						}}
					>
						<div className="app-name">IBM Motion Calculator</div>
						<div className="app-version ibm-type-c color-grey-60" style={{marginLeft:'0.5rem'}}>v7.0.0</div>
					</div>
					<div className="ibm-col-md-4 link-wrap">
						<a href="https://github.com/IBM/motion" target="_blank">IBM Motion Guide <img  style={{position:'relative', top:'0.1rem'}} src={IBMArrowForwardLinkDark}/></a>
					</div>
				</div>
			</div>
		)
	}
}

export default AppHeader;
