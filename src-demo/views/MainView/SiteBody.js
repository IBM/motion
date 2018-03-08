import React from 'react';

import constants from '../../../src/constants';

import Dropdown from '../Components/Dropdown';
import Input from '../Components/Input';
import Output from './Output.js';
import Button from '../Components/Button';

import getDuration from '../../../src/getDuration.js';
import getCurve from '../../../src/getCurve.js';
import getClasses from '../../../src/getClasses.js';

import MotionPreview from './MotionPreview.js';

const inputsStyles = {
	
}
const inputSetStyles = {
	
}
const topBorderStyle = {
	borderTop:`solid #dcdcdc 1px`,
	paddingTop:'1rem'
}

const outputModes = ['Motion Specs', 'Preview'];

const I_WIDTH1 = 16;
const I_HEIGHT1 = 4;
const I_DISTANCE = 16;
const I_WIDTH2 = 16;
const I_HEIGHT2 = 16;
const I_ROTATION = 180;
const UNIT_REM = 'rem';
const UNIT_PX = 'px';

const initialStateValues = {
	distance:I_DISTANCE,
	opacity:100,
	rotation:180,
	width2:I_WIDTH2,
	height2:I_HEIGHT2,
	width1:I_WIDTH1,
	height1:I_HEIGHT1,
	duration:getDuration(I_DISTANCE, I_WIDTH1 * I_HEIGHT1),
	easing:getCurve(I_DISTANCE, I_WIDTH1 * I_HEIGHT1),
	prop:constants.PROPERTY_MOVE,
	easingSelection:constants.EASE_IN_OUT,
	motionMode:constants.MOMENT_PRODUCTIVE,
	classes:getClasses(I_DISTANCE, I_WIDTH1 * I_HEIGHT1),
	outputMode:outputModes[1],
	unit:UNIT_REM
}

class SiteBody extends React.Component{
	constructor(){
		super();

		this.state = initialStateValues;
	}

	onGetMotion(evt){

	}

	getRightPropValue(state){
		switch(state.prop){

			case constants.PROPERTY_MOVE: return state.distance; break;

			case constants.PROPERTY_SCALE: return state.distance; break;

			case constants.PROPERTY_FADE: return state.opacity; break;

			case constants.PROPERTY_ROTATE: return state.rotation; break;

		}
	}

	componentWillUpdate(nextProps, nextState){

		let theSize = 
			nextState.prop === constants.PROPERTY_SCALE 
			? 
				Math.abs(
					nextState.width2 * nextState.height2 - nextState.width1 * nextState.height1
				) 
			: 
				nextState.width1 * nextState.height1
		;

		let duration = getDuration(
			this.getRightPropValue(nextState),
			theSize,
			nextState.prop,
			nextState.motionMode,
			nextState.easingSelection,
			nextState.unit
		);
		let easing = getCurve(
			this.getRightPropValue(nextState),
			theSize,
			nextState.prop,
			nextState.motionMode,
			nextState.easingSelection,
			nextState.unit
		);
		let classes = getClasses(
			this.getRightPropValue(nextState),
			theSize,
			nextState.prop,
			nextState.motionMode,
			nextState.easingSelection,
			nextState.unit
		);

		if(this.state.duration !== duration || this.state.easing !== easing || this.state.classes !== classes){
			this.setState({
				duration, easing, classes
			});
		}
	}

	changeProp(newProp){
		this.setState({
			prop:newProp
		});
	}

	render(){
		return(
			<div className="SiteBody">
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
									onChange={ value => this.changeProp(value)}
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
											label:'Productive motion (UI)',
											value:constants.MOMENT_PRODUCTIVE
										},
										{
											label:'Expressive motion (UI)',
											value:constants.MOMENT_EXPRESSIVE
										},
										{
											label:'- - - - - - - - - - - - - - -',
											value:'',
											disabled:true
										},
										{
											label:'Narrative motion (Animation)',
											value:constants.MOMENT_NARRATIVE
										},
										{
											label:'Celebratory motion (Animation)',
											value:constants.MOMENT_CELEBRATORY
										}
									]}
									onChange={ value => this.setState({motionMode:value})}
								/>
							</div>
							<div className="input-set" style={inputSetStyles}>
								<Dropdown
									style={{
										
									}}
									label="Unit"
									options={[
										{
											label:'Root Em (rem)',
											value:UNIT_REM
										},
										{
											label:'Pixels',
											value:UNIT_PX
										}
									]}
									onChange={ value => {
										this.setState({
											distance: this.state.distance * (value === UNIT_REM ? 1 / 16 : 16),
											width1: this.state.width1 * (value === UNIT_REM ? 1 / 16 : 16),
											height1: this.state.height1 * (value === UNIT_REM ? 1 / 16 : 16),
											width2: this.state.width2 * (value === UNIT_REM ? 1 / 16 : 16),
											height2: this.state.height2 * (value === UNIT_REM ? 1 / 16 : 16),
											unit:value
										})
									}}
								/>
							</div>
						</div>
						<div className="inputs"
							style={inputsStyles}
						>
							{
								this.state.prop === constants.PROPERTY_MOVE
								?(
									<div className="input-set input-set-first" style={inputSetStyles}>
										<Input 
											style={{
												
											}}
											label={`distance (${this.state.unit})`}
											value={this.state.distance}
											onChange={distance => this.setState({distance: distance || 0})}
										/>
									</div>
								):null
							}
							{
								this.state.prop === constants.PROPERTY_FADE
								?(
									<div className="input-set input-set-first" style={inputSetStyles}>
										<Input 
											style={{
												
											}}
											label='Opacity change (%)'
											value={this.state.opacity}
											onChange={opacity => this.setState({opacity: opacity || 0})}
										/>
									</div>
								):null
							}
							{
								this.state.prop === constants.PROPERTY_ROTATE
								?(
									<div className="input-set input-set-first" style={inputSetStyles}>
										<Input 
											style={{
												
											}}
											label='Angle change (degrees)'
											value={this.state.rotation}
											onChange={rotation => this.setState({rotation: rotation || 0})}
										/>
									</div>
								):null
							}
							<div className="input-set" style={inputSetStyles}>
								<Input 
									style={{
										
									}}
									label={this.state.prop === constants.PROPERTY_SCALE ? `Initial Width (${this.state.unit})` : `Width (${this.state.unit})` }
									value={this.state.width1}
									onChange={width => this.setState({width1:parseFloat(width) || 0})}
								/>
							</div>
							<div className="input-set" style={inputSetStyles}>
								<Input 
									style={{
										
									}}
									label={this.state.prop === constants.PROPERTY_SCALE ? `Initial Height (${this.state.unit})` : `Height (${this.state.unit})` }
									value={this.state.height1}
									onChange={height => this.setState({height1:parseFloat(height) || 0})}
								/>
							</div>
							{
								this.state.prop === constants.PROPERTY_SCALE
								?(
									<div className="input-set" style={inputSetStyles}>
										<Input 
											style={{
												
											}}
											label={`Target Width (${this.state.unit})`}
											value={this.state.width2}
											onChange={width => this.setState({width2:parseFloat(width) || 0})}
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
											label={`Target Height (${this.state.unit})`}
											value={this.state.height2}
											onChange={height => this.setState({height2:parseFloat(height) || 0})}
										/>
									</div>
								):null
							}
						</div>
						{/*
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
						*/}
					</div>
				</div>
				<div 
					className="padding-h"
					style={{
						marginTop:'2rem'
					}}
				>
					<div
						className="outputs"
					>
						<div className=""
							style={{
								display:'flex',
								flexDirection:'row'
							}}
						>
							<div
								onClick={evt => this.setState({outputMode:outputModes[0]})}
								className={`${this.state.outputMode === outputModes[0] ? 'ibm-type-d' : 'ibm-type-c'}`}
								style={{
									marginBottom:0,
									cursor:'pointer'
								}}
							>Motion Specs</div>
							<div style={{marginRight:'1rem', marginLeft:'1rem'}}></div>
							<div
								onClick={evt => this.setState({outputMode:outputModes[1]})}
								className={`${this.state.outputMode === outputModes[1] ? 'ibm-type-d' : 'ibm-type-c'}`}
								style={{
									marginBottom:0,
									cursor:'pointer'
								}}
							>Preview</div>
						</div>
					</div>
				</div>
				{
					this.state.outputMode === outputModes[0]
					? (
						<div>
							<div
								className="padding-v padding-h"
							>
								<div
									className="outputs"
								>
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
					: (
						<MotionPreview {...this.state} />
					)
				}
			</div>
		)
	}
}

export default SiteBody;