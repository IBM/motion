"use strict";

import React from 'react';
import globals from '../views/globals.js';
import Label from './Label.js';
import Button from './Button';

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
						<Button
							key={`tab-option-${entryId}`}
							className="tabbed-option ibm-type-c"
							style={{
								backgroundColor:this.state.selected === entry ? '#161616' : 'transparent',
								color:this.state.selected === entry ? 'white' : 'black',
							}}
							onClick={ evt => this.setState({
								selected:entry
							})}
						>{entry}</Button>
					))}
				</div>
			</div>
		)
	}
}

export default TabbedOptions;
