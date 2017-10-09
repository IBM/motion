"use strict";

import React from 'react';
import './OpenSelector.scss';

const Option = props => (
	<div className={`option ibm-col-md-1 ${'hello'}`} data-option-value="1">Option 1</div>
)

class OpenSelector extends React.Component{
	constructor(){
		super();
		console.log("OpenSelector!!!");

		this.state = {
			selectedId:0
		}
	}

	render(){
		return(
			<div className="OpenSelector" style={{
				display:'flex',
				flexDirection:'row'
			}}>
				
				<div className="option ibm-col-md-1" data-option-value="1">Option 1</div>
				<div className="option ibm-col-md-1" data-option-value="1">Option 1</div>
			</div>
		)
	}
}

export default OpenSelector;
