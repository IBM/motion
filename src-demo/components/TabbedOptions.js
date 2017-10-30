"use strict";

import React from 'react';
import globals from '../views/globals.js';
import Label from './Label.js';

class TabbedOptions extends React.Component{
	constructor(){
		super();
		console.log("TabbedOptions!!!");
	}

	componentWillMount(){
		this.setState({
			selected:this.props.options[0]
		})
	}

	render(){
		return(
			<div className="TabbedOptions ibm-padding" style={{
				paddingLeft:0,
				paddingRight:0
			}}>
				<Label>Animating property</Label>
				<div className="tabbed-options-wrap"
					style={{
						display:'flex',
						flexDirection:'row',
						justifyContent:'flex-start'
					}}
				>
					{this.props.options.map( (entry, entryId) => (
						<div 
							className="tabbed-option ibm-type-c"
							style={{
								border:globals.styles.border,
								backgroundColor:this.state.selected === entry ? '#161616' : 'transparent',
								color:this.state.selected === entry ? 'white' : 'black',
								padding:'0.5rem 1rem'
							}}
						>
							<div className="label">{entry}</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default TabbedOptions;
