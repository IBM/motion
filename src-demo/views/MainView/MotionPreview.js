import React from 'react';
import Button from '../components/Button';
import constants from '../../../src/constants';

const unitSpace = 16;

class MotionPreview extends React.Component{
	constructor(){
		super();

		this.state = {
			left:unitSpace,
			top:100
		}
	}

	playMotion(){
		this.setState({
			left:this.state.left === unitSpace ? parseFloat(this.props.distance) + unitSpace : unitSpace
		})
	}

	render(){
		console.log('MotionPreview.render...', this.props);
		return(
			<div>
				<div className=""
				>
					<div
						
					>
						<div 
							style={{
								position:'relative',
								width:'100%',
								height:`${Math.max(400, this.props.height, this.props.iHeight)}px`,
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
									width:`${this.props.width}px`,
									height:`${this.props.height}px`,
									transitionPropperty:'all',
									transitionTimingFunction:this.props.easing,
									transitionDuration:`${this.props.duration}ms`,
									backgroundColor:{
										[constants.MOMENT_PRODUCTIVE]:'#F3F3F3', 
										[constants.MOMENT_EXPRESSIVE]:'#00BAB6', 
										[constants.MOMENT_NARRATIVE]:'#D7306D'
									}[this.props.motionMode],
									top:'64px',
									left:`${this.state.left}px`
								}}
							/>
						</div>
					</div>	
				</div>
			</div>
		)
	}
}

export default MotionPreview;