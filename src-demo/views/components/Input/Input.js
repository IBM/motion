import React from 'react';

import Label from '../Label';

class Input extends React.Component{
	constructor(){
		super();

		this.state = {
			value:''
		}
	}

	get value(){
		return this.state.value;
	}

	onChange(evt){
		this.setState({
			value:evt.currentTarget.value
		});

		if(this.props.onChange != null) this.props.onChange(evt.currentTarget.value);

	}

	componentWillMount(){
		this.setState({
			value:this.props.value
		});
	}

	render(){

		return(
			<div className="Input input-layout-vertical">
				{this.props.label != null ? <Label text={this.props.label}/> : null}
				<input 
					className="input-element"
					style={{
						...this.props.style
					}}
					onChange={evt => this.onChange(evt)}
					placeholder={this.props.placeholder}
					value={this.props.value}
				></input>
			</div>
		)
	}
}

export default Input;