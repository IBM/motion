import React from 'react';

class Output extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="Output"
				style={{

				}}
			>
				<div
					className="ibm-type-a"
					style={{
						marginBottom:'0px',
						color:'#8C8C8C'
					}}
				>{this.props.label}</div>
				<div 
					className="ibm-type-h"
				>{this.props.value}</div>
			</div>
		)
	}
}

export default Output;