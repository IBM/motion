"use strict";

import React from 'react';

import './AppBody.scss';

import LeftColumnMove from './LeftColumnMove.js';

const
	PROPERTY_MOVE = 'move',
	PROPERTY_SCALE = 'scale',
	PROPERTY_FADE = 'fade'
;	

class AppBody extends React.Component{
	constructor(){
		super();
		console.log("AppBody!!!");

		this.state = {
			property:'move'
		}
	}

	render(){

		let LeftColumn;
		switch(this.state.property){

			default:
			case PROPERTY_MOVE:{
				LeftColumn = <LeftColumnMove/>
				break;
			}
		}
		return(
			<div className="AppBody ibm">
				<div className="left-column ibm-col-md-3">
					{LeftColumn}
				</div>
				<div className="right-column ibm-col-md-5">
					right
				</div>
			</div>
		)
	}
}

export default AppBody;
