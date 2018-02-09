import React from 'react';

class Dropdown extends React.Component {
	constructor(){
		console.log('Dropdown!');
		super();
	}

	render(){
		return(
			<div className="Dropdown">
				{this.props.label != null ? <label className="ibm-type-b" style={{marginRight:'1rem'}}>{this.props.label}</label> : null}
				<select
					style={{
						...this.props.style,
						fontSize:'12px'
					}}
					onChange={ evt => this.props.onChange != null ? this.props.onChange(evt.currentTarget.value) : null}
				>
					{
						this.props.options.map( (entry, entryI) => <option key={`option-${entryI}`} value={entry.value}>{entry.label}</option>)
					}
				</select>
			</div>
		)
	}
}

export default Dropdown;