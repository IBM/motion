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

const I_WIDTH = 48;
const I_HEIGHT = 48;
const I_DISTANCE = 100;

const initialStateValues = {
	distance:I_DISTANCE,
	width:I_WIDTH,
	height:I_HEIGHT,
	iWidth:I_WIDTH,
	iHeight:I_HEIGHT,
	duration:getDuration(I_DISTANCE, I_WIDTH*I_HEIGHT),
	easing:getCurve(I_DISTANCE, I_WIDTH*I_HEIGHT),
	prop:constants.PROPERTY_MOVE,
	easingSelection:constants.EASE_IN_OUT,
	motionMode:constants.MOMENT_PRODUCTIVE,
	classes:getClasses(I_DISTANCE, I_WIDTH*I_HEIGHT),
	outputMode:outputModes[0]
}

class SiteBody extends React.Component{
	constructor(){
		super();

		this.state = initialStateValues;
	}

	onGetMotion(evt){

	}

	componentWillUpdate(nextProps, nextState){
		console.log('componentWillUpdate...');

		let theSize = 
			this.state.prop === constants.PROPERTY_SCALE 
			? 
				Math.abs(
					(nextState.iWidth - nextState.width || nextState.width) 
					* (nextState.iHeight - nextState.height || nextState.height)
				) 
			: 
				nextState.width * nextState.height
		;

		let duration = getDuration(
			nextState.distance,
			theSize,
			nextState.prop,
			nextState.motionMode,
			nextState.easingSelection
		);
		let easing = getCurve(
			nextState.distance,
			theSize,
			nextState.prop,
			nextState.motionMode,
			nextState.easingSelection
		);
		let classes = getClasses(
			nextState.distance,
			theSize,
			nextState.prop,
			nextState.motionMode,
			nextState.easingSelection
		);

		if(this.state.duration !== duration || this.state.easing !== easing || this.state.classes !== classes){
			console.log('onGetMotion:DIFF!!!!', duration, easing, classes);
			this.setState({
				duration, easing, classes
			});
		}
	}

	render(){
		console.log('SiteBody.render...', this.state);
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
											value:constants.MOMENT_EXPRESSIVE
										},
										{
											label:'Narrative motion',
											value:constants.MOMENT_NARRATIVE
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
											label="Init. Width (px)" 
											value={64}
											onChange={iWidth => this.setState({iWidth:parseFloat(iWidth)})}
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
											label="Init. Height (px)" 
											value={32}
											onChange={iHeight => this.setState({iHeight:parseFloat(iHeight)})}
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
												[constants.PROPERTY_MOVE]:'distance (px)',
												[constants.PROPERTY_FADE]:'Opacity change (%)',
												[constants.PROPERTY_ROTATE]:'Angle change (degrees)',
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
									label={this.state.prop === constants.PROPERTY_SCALE ? "Target width (px)" : "Width (px)" }
									value={I_WIDTH}
									onChange={width => this.setState({width:parseFloat(width)})}
								/>
							</div>
							<div className="input-set" style={inputSetStyles}>
								<Input 
									style={{
										
									}}
									label={this.state.prop === constants.PROPERTY_SCALE ? "Target height (px)" : "Height (px)" }
									value={I_HEIGHT}
									onChange={height => this.setState({height:parseFloat(height)})}
								/>
							</div>
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
									marginBottom:0
								}}
							>Motion Specs</div>
							<div style={{marginRight:'1rem', marginLeft:'1rem'}}></div>
							<div
								onClick={evt => this.setState({outputMode:outputModes[1]})}
								className={`${this.state.outputMode === outputModes[1] ? 'ibm-type-d' : 'ibm-type-c'}`}
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