import React from 'react';

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
			<div className="Input">
				{this.props.label != null ? <label className="ibm-type-b" style={{marginRight:'1rem'}}>{this.props.label}</label> : null}
				<input 
					style={{
						...this.props.style
					}}
					onChange={evt => this.onChange(evt)}
					placeholder={this.props.placeholder}
					value={this.state.value}
				></input>
			</div>
		)
	}
}

export default Input;