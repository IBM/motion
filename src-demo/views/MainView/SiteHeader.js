import React from 'react';

class SiteHeader extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="SiteHeader">
				<div 
					className="ibm-type-e padding-h"
					 style={{
						height:'48px',
						display:'flex',
						alignItems:'center'
					}}
				>IBM Motion Demo</div>
			</div>
		)
	}
}

export default SiteHeader;