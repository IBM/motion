import React from 'react';

class Button extends React.Component{
	constructor(){
		super();

		this.state = {
			state:'normal'
		}
	}

	render(){
		return(
			<button
				style={{
					backgroundColor:this.state.state === 'hover' ? this.props.hoverColor : this.props.normalColor,
					fontSize: '14px',
					height:'48px',
					display:'flex',
					flexDirection:'row',
					alignItems:'center',
					border:'none',
					padding:'0 16px',
					WebkitAppearance: 'none',
					color:'white',
					...this.props.style
				}}
				onMouseEnter={evt => this.setState({state:'hover'})}
				onMouseLeave={evt => this.setState({state:'normal'})}
				onClick={evt => this.props.onClick != null ? this.props.onClick(evt) : null}
			>{this.props.label}</button>
		)
	}
}

export default Button;