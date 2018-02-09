import React from 'react';

class SiteHeader extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="SiteHeader">
				<div 
					className="ibm-type-d padding-h"
					 style={{
						height:'48px',
						display:'flex',
						alignItems:'center'
					}}
				>IBM Motion Generator</div>
			</div>
		)
	}
}

export default SiteHeader;