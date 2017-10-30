"use strict";

import React from 'react';

import globals from './globals.js';
import TabbedOptions from '../components/TabbedOptions.js';

class BodyView extends React.Component{
	constructor(){
		super();
		console.log("BodyView!!!");
	}

	render(){
		return(
			<div className="BodyView ibm ibm-height-lg-40">
				<div 
					className="left-column ibm-col-lg-6 ibm-col-md-3"
					style={{
						borderRight:globals.styles.border
					}}
				>
					<TabbedOptions
						options={['move', 'scale', 'fade', 'rotate']}
					/>
				</div>
				<div 
					className="ibm-col-lg-8 ibm-col-md-5"
					style={{
						borderRight:globals.styles.border
					}}
				>
					output
				</div>
			</div>
		)
	}
}

export default BodyView;
