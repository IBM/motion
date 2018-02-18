import React from 'react';

import Label from '../Label';

class Dropdown extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="Dropdown input-layout-vertical">
				{this.props.label != null ? <Label text={this.props.label}/> : null}
				<div 
					style={{
						position:'relative'
					}}
				>
					<select
						className="input-element"
						style={{
							...this.props.style
						}}
						onChange={ evt => this.props.onChange != null ? this.props.onChange(evt.currentTarget.value) : null}
					>
						{
							this.props.options.map( (entry, entryI) => <option disabled={entry.disabled === true} key={`option-${entryI}`} value={entry.value}>{entry.label}</option>)
						}
					</select>
					<div className="icon"/>
				</div>
			</div>
		)
	}
}

export default Dropdown;