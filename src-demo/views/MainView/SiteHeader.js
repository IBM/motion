import React from 'react';

class SiteHeader extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div 
				className="SiteHeader"
				style={{
					height:'48px',
					display:'flex',
					alignItems:'center',
					justifyContent:'space-between'
				}}
			>
				<div 
					className="ibm-type-d padding-h"
					 style={{
						paddingTop:0,
						paddingBottom:0,
						margin:0
					}}
				>IBM Motion Generator</div>
				<div className="padding-h">
					<a target="_blank" href="https://github.com/IBM/motion">IBM Motion Codebase</a>
				</div>
			</div>
		)
	}
}

export default SiteHeader;