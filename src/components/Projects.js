import React from 'react';
import { Link } from 'react-router-dom';
import Img1 from '../images/bnsWP.jpg';
import Img2 from '../images/velocity.jpg';
import Img3 from '../images/todo.jpg';
import Img4 from '../images/color.jpg';
import Img5 from '../images/weather.jpg';
import Img6 from '../images/quote.jpg';

// Styling

const container = {
	display:'flex',
	flexDirection:'column',
	flexWrap:'unwrap',
	height:'auto',
	fontFamily: 'Lato'
};

const title = {
	textAlign:'center',
	color:'white',
	fontSize:'4.5em',
	borderBottom:'solid 6.5px #3b4459',
	padding:".5em 0"
};

const main = {
	display:'flex',
	flexDirection:'row',
	flexWrap:'wrap',
	marginTop:'3em',
	justifyContent:'space-evenly',
};

const cards = {
	backgroundColor:'white',
	boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
	marginBottom:'2em',
	borderRadius:'3%',
	padding:'.4em'
}

const projects = {
	display:'inline-block',
	height:'20em',
	width:'25em',
	borderRadius:'3% 3% 0 0'
}

const backButton = {
	border: 'white 2px solid',
	padding: '6px',
	color: 'white',
	width: '12%',
	textAlign:'center',
	fontSize:'1.3em',
	boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
	margin:'3em auto'
};

const Projects = () => (
	<section style={container}>
		<header><h1 style={title} >Projects</h1></header>
		<div style={main}>
			<div style={cards}>
				<a href={'http://bodyandsoulmasso.com'}>
					<img style={projects} src={Img1} alt="WP Site for local massage parlor"></img>
				</a>
				<h4><b>Massage Therapy WP Site</b></h4>
				<p>First freelance project</p>
			</div>
			<div style={cards}>
				<a href={'https://animalinashell.github.io/Mock-Development-Agency/'}>
			   		<img style={projects} src={Img2} alt="Mock web design agency"></img>
				</a>	
				<h4><b>Responsive Mock Agency</b></h4>
				<p>Built from scratch using HTML, CSS</p>
			</div>
			<div style={cards}>
				<a href={'https://codepen.io/lucasboy/details/mMGpYJ'}>
					<img style={projects} src={Img3} alt="Todo List Project"></img>
				</a>
				<h4><b>Classic Todo List</b></h4>
				<p>First time using JQuery in a project</p>
			</div>
			<div style={cards}>
				<a href={'https://codepen.io/lucasboy/details/xLapBm'}>
					<img style={projects} src={Img4} alt="Color Game"></img>
				</a>
				<h4><b>Color Game</b></h4>
				<p>RGB game made with vanilla JS</p>
			</div><div style={cards}>
				<a href={'https://codepen.io/lucasboy/details/YxEmwE'}>
					<img style={projects} src={Img5} alt="Weather App"></img>
				</a>
				<h4><b>Weather App</b></h4>
				<p>JS and Api project from FreeCodeCamp</p>
			</div>
			<div style={cards}>
				<a href={'https://codepen.io/lucasboy/details/QMqapb'}>
					<img style={projects} src={Img6} alt=" Random Quote Machine"></img>
				</a>
				<h4><b>Random Quote Machine</b></h4>
				<p>Some cool quotes and colors made with JS</p>
			</div>
		</div>		
	    <Link style={backButton} to="/">Go Back</Link>
	</section>
);

export default Projects;
