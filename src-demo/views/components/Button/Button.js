import React from 'react';

class Button extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<button
				onClick={evt => this.props.onClick != null ? this.props.onClick(evt) : null}
			>{this.props.label}</button>
		)
	}
}

export default Button;