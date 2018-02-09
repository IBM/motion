import React from 'react';

class Label extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<label className="Label ibm-type-a" style={{...this.props.style}} for={this.props.for}>{this.props.text}</label>
		)
	}
}

export default Label;