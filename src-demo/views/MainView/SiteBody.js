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

const I_WIDTH1 = 48;
const I_HEIGHT1 = 48;
const I_DISTANCE = 100;
const I_WIDTH2 = 64;
const I_HEIGHT2 = 128;
const I_ROTATION = 180;

const initialStateValues = {
	distance:I_DISTANCE,
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
		console.log('componentWillUpdate...', nextProps, nextState);

		let theSize = 
			nextState.prop === constants.PROPERTY_SCALE 
			? 
				Math.abs(
					nextState.width2 * nextState.height2 - nextState.width1 * nextState.height1
				) 
			: 
				nextState.width1 * nextState.height1
		;

		console.log('componentWillUpdate:theSize===', theSize);

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
			console.log('componentWillUpdate:DIFF!!!!', duration, easing, classes);
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
											onChange={distance => this.setState({distance: distance || 0})}
										/>
									</div>
								):null
							}
							<div className="input-set" style={inputSetStyles}>
								<Input 
									style={{
										
									}}
									label={this.state.prop === constants.PROPERTY_SCALE ? "Initial Width (px)" : "Width (px)" }
									value={I_WIDTH1}
									onChange={width => this.setState({width1:parseFloat(width) || 0})}
								/>
							</div>
							<div className="input-set" style={inputSetStyles}>
								<Input 
									style={{
										
									}}
									label={this.state.prop === constants.PROPERTY_SCALE ? "Initial Height (px)" : "Height (px)" }
									value={I_HEIGHT1}
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
											label="Target Width (px)" 
											value={I_WIDTH2}
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
											label="Target Height (px)" 
											value={I_HEIGHT2}
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