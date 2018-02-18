import React from 'react';
import Button from '../components/Button';
import constants from '../../../src/constants';

const unitSpace = 16;

class MotionPreview extends React.Component{
	constructor(){
		super();

		this.state = {
			left:unitSpace,
			top:100,
			rotation:0
		}
	}

	playMotion(){
		this.setState({
			left:this.state.left === unitSpace ? parseFloat(this.props.distance) + unitSpace : unitSpace,
			width:this.state.width === this.props.width2 ? this.props.width1 : this.props.width2,
			height:this.state.height === this.props.height2 ? this.props.height1 : this.props.height2,
			rotation:this.state.rotation === this.props.rotation ? 0 : this.props.rotation,
			opacity:this.state.opacity === this.props.opacity ? 0 : this.props.opacity
		})
	}

	componentWillMount(){
		this.componentWillUpdate(this.props, this.state);
	}

	componentWillUpdate(nextProps, nextState){
		if(
			nextProps.width1 !== this.state.width 
			|| nextProps.height1 !== this.state.height
			|| nextProps.rotation !== this.state.rotation
			|| nextProps.opacity !== this.state.opacity
		) this.setState({
			width:nextProps.width1,
			height:nextProps.height1,
			rotation:nextProps.rotation,
			opacity:nextProps.opacity
		})
	}

	render(){
		return(
			<div 
				className="MotionPreview"
				style={{
					marginTop:'1rem',
					position:'relative',
					width:'100%',
					height:`${Math.max(400, this.props.height1, this.props.height2)+48}px`,
					backgroundColor:'#252525'
				}}
			>
				<div
					style={{
						backgroundColor:'#171717',
						display:'flex',
						flexDirection:'row',
						alignItems:'center'
					}}
				>
					<Button label="Play"
						normalColor="#0F6FFF"
						hoverColor="#054ADA"
						color="#f3f3f3"
						label="Play this motion"
						onClick={ evt => this.playMotion()}
					/>
					<span 
						style={{
							color:'#BEBEBE',
							marginLeft:'1rem'
						}}
					>
						<span style={{fontSize:'14px'}}>Duration: {Math.round(this.props.duration)}ms</span>
						<span style={{fontSize:'14px', marginLeft:'1rem', marginRight:'1rem'}}>|</span>
						<span style={{fontSize:'14px'}}>Easing: {this.props.easing}</span>
					</span>
				</div>
				<div
					style={{
						position:'absolute',
						width:`${this.props.prop === constants.PROPERTY_SCALE ? this.state.width : this.props.width1}px`,
						height:`${this.props.prop === constants.PROPERTY_SCALE ? this.state.height : this.props.height1}px`,
						transitionPropperty:'all',
						transitionTimingFunction:this.props.easing,
						transitionDuration:`${this.props.duration}ms`,
						backgroundColor:{
							[constants.MOMENT_PRODUCTIVE]:'#F3F3F3', 
							[constants.MOMENT_EXPRESSIVE]:'#00BAB6', 
							[constants.MOMENT_NARRATIVE]:'#0F6FFF',
							[constants.MOMENT_CELEBRATORY]:'#D7306D'
						}[this.props.motionMode],
						top:'64px',
						left:`${this.props.prop === constants.PROPERTY_MOVE ? this.state.left : unitSpace}px`,
						transform:`rotate(${this.props.prop === constants.PROPERTY_ROTATE ? this.state.rotation : 0}deg)`,
						opacity:this.props.prop === constants.PROPERTY_FADE ? this.state.opacity : 1
					}}
				/>
			</div>
		)
	}
}

export default MotionPreview;