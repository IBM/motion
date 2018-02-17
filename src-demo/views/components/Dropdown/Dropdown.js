import React from 'react';

import Label from '../Label';

class Dropdown extends React.Component {
	constructor(){
		console.log('Dropdown!');
		super();
	}

	render(){
		return(
			<div className="Dropdown input-layout-vertical">
				{this.props.label != null ? <Label text={this.props.label}/> : null}
				<select
					className="input-element"
					style={{
						...this.props.style
					}}
					onChange={ evt => {
						console.log('Dropdown.onChange...', evt.currentTarget.value);
						return this.props.onChange != null ? this.props.onChange(evt.currentTarget.value) : null}
					}
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