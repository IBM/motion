import React from 'react';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import Label from '../components/Label';

class Output extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="Output"
				style={{
					...this.props.style
				}}
			>
				<Label text={this.props.label} style={{...this.props.labelStyle}}/>
				{
					this.props.outputType === 'code'
					?(
						<div 
							style={{
								padding:'1rem',
								backgroundColor:'#171717',
								color:'#3DBB61',
								marginTop:'8px'
							}}
							className="output-content"
						>
							<div className="ibm-type-c ibm-type-mono">
								{ReactHtmlParser(this.props.value)}
							</div>
						</div>
					):(
						<div 
							className="ibm-type-h output-content"
						>{ReactHtmlParser(this.props.value)}</div>
					)
				}
			</div>
		)
	}
}

export default Output;