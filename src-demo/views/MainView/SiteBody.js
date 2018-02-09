import React from 'react';

import constants from '../../../src/constants';

import Dropdown from '../Components/Dropdown';
import Input from '../Components/Input';
import Output from './Output.js';
import Button from '../Components/Button';

import getDuration from '../../../src/getDuration.js';
import getEasing from '../../../src/getCurve.js';
import getClasses from '../../../src/getClasses.js';

const inputsStyles = {
	
}
const inputSetStyles = {
	
}
const topBorderStyle = {
	borderTop:`solid #dcdcdc 1px`,
	paddingTop:'1rem'
}

const initialStateValues = {
	distance:100,
	width:128,
	height:32,
	iWidth:64,
	iHeight:32,
	duration:getDuration(100, 128*32),
	easing:getEasing(100, 128*32),
	prop:constants.PROPERTY_MOVE,
	easingSelection:constants.EASE_IN_OUT,
	motionMode:constants.MOMENT_PRODUCTIVE,
	classes:getClasses(100, 128*32)
}

class SiteBody extends React.Component{
	constructor(){
		super();

		this.state = initialStateValues;
	}

	onGetMotion(evt){

		let theSize = this.state.prop === constants.PROPERTY_SCALE ? Math.abs((this.state.iWidth - this.state.width || this.state.width) * (this.state.iHeight - this.state.height || this.state.height)) : this.state.width * this.state.height;

		console.log(`onGetMotion:${theSize}`);

		this.setState({
			duration:getDuration(
				this.state.distance,
				theSize,
				this.state.prop,
				this.state.motionMode,
				this.state.easingSelection
			),
			easing:getEasing(
				this.state.distance,
				theSize,
				this.state.prop,
				this.state.motionMode,
				this.state.easingSelection
			),
			classes:getClasses(
				this.state.distance,
				theSize,
				this.state.prop,
				this.state.motionMode,
				this.state.easingSelection
			)
		})
	}

	render(){
		return(
			<div className="SiteBody">
				<div className="padding-h ibm-type-c" style={{marginBottom:0}}>
					<p>Duo Motion comprises several unique concepts - use this tool to get the right motion parameters for your element.</p>
				</div>
				<div 
					className="padding-v padding-h"
					style={{
						backgroundColor:'#f3f3f3'
					}}
				>
					<div
						className=""
					>
						<div className="ibm-type-d">Input</div>
						<div className="inputs"
							style={inputsStyles}
						>
							<div className="input-set input-set-first" style={inputSetStyles}>
								<Dropdown
									style={{
										
									}}
									label="Property"
									options={[
										{
											label:'Move',
											value:constants.PROPERTY_MOVE
										},
										{
											label:'Scale',
											value:constants.PROPERTY_SCALE
										},
										{
											label:'Fade',
											value:constants.PROPERTY_FADE
										},
										{
											label:'Rotate',
											value:constants.PROPERTY_ROTATE
										}
									]}
									onChange={ value => this.setState({prop:value})}
								/>
							</div>
							<div className="input-set" style={inputSetStyles}>
								<Dropdown
									style={{
										
									}}
									label="Easing"
									options={[
										{
											label:'Ease in out',
											value:constants.EASE_IN_OUT
										},
										{
											label:'Ease in',
											value:constants.EASE_IN
										},
										{
											label:'Ease out',
											value:constants.EASE_OUT
										}
									]}
									onChange={ value => this.setState({easingSelection:value})}
								/>
							</div>
							<div className="input-set" style={inputSetStyles}>
								<Dropdown
									style={{
										
									}}
									label="Motion mode"
									options={[
										{
											label:'Productive motion',
											value:constants.MOMENT_PRODUCTIVE
										},
										{
											label:'Expressive motion',
											value:constants.MOMENT_CELEBRATORY
										}
									]}
									onChange={ value => this.setState({motionMode:value})}
								/>
							</div>
						</div>
						<div className="inputs"
							style={inputsStyles}
						>
							{
								this.state.prop === constants.PROPERTY_SCALE
								?(
									<div className="input-set" style={inputSetStyles}>
										<Input 
											style={{
												
											}}
											label="Init. Width" 
											value={64}
											onChange={iWidth => this.setState({iWidth})}
										/>
									</div>
								):null
							}
							{
								this.state.prop === constants.PROPERTY_SCALE
								?(
									<div className="input-set" style={inputSetStyles}>
										<Input 
											style={{
												
											}}
											label="Init. Height" 
											value={32}
											onChange={iHeight => this.setState({iHeight})}
										/>
									</div>
								):null
							}
							{
								this.state.prop !== constants.PROPERTY_SCALE
								?(
									<div className="input-set input-set-first" style={inputSetStyles}>
										<Input 
											style={{
												
											}}
											label={{
												[constants.PROPERTY_MOVE]:'distance',
												[constants.PROPERTY_FADE]:'Opacity change',
												[constants.PROPERTY_ROTATE]:'Angle change in degrees',
											}[this.state.prop]}
											value={100}
											onChange={distance => this.setState({distance})}
										/>
									</div>
								):null
							}
							<div className="input-set" style={inputSetStyles}>
								<Input 
									style={{
										
									}}
									label="Width" 
									value={128}
									onChange={width => this.setState({width})}
								/>
							</div>
							<div className="input-set" style={inputSetStyles}>
								<Input 
									style={{
										
									}}
									label="height" 
									value={32}
									onChange={height => this.setState({height})}
								/>
							</div>
						</div>
						<div className="inputs"
							style={{
								...inputsStyles,
								height:'auto',
								marginBottom:0
							}}
						>
							<div style={{
								...inputSetStyles,
								height:'auto',
								padding:'0 0 0',
								marginTop:'32px'
							}}>
								<Button
									style={{
										width:`256px`
									}}
									normalColor="#0F6FFF"
									hoverColor="#054ADA"
									label="Get motion"
									onClick={ evt => this.onGetMotion(evt)}
								/>
							</div>
						</div>
					</div>
				</div>
				<div 
					className="padding-v padding-h"
				>
					<div
						className="outputs"
					>
						<div className="ibm-type-d">Motion Specs</div>
						<Output
							label="Easing"
							contentStyle={{maxWidth:'100%'}}
							value={this.state.easing}
						/>
						<Output
							label="Duration"
							value={`${Math.round(this.state.duration)} ms`}
						/>
					</div>
				</div>
				<div
					className="padding-v"
				>
					<div
						className="outputs"
					>
						<Output
							label="Classes"
							labelStyle={{marginLeft:'16px'}}
							outputType="code"
							style={{width:'100%'}}
							value={this.state.classes.replace(' ', '<br/>')}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default SiteBody;