import React from 'react';
import { Link } from 'react-router-dom';
import Img7 from '../images/me.png';

// Styling

const container = {
	display:'flex',
	flexFlow:'column wrap',
	alignContent:'center',
	justifyContent:'center',
	margin:'0',
	padding:'0',
	fontFamily: 'Lato',
	height:'auto'
};

const main = {
	display:'flex',
	flexFlow:'row unwrap',
	justifyContent:'space-evenly',
	margin:'3.5em 0 6.5em 0'
}

const title = {
	textAlign:'center',
	color:'white',
	fontSize:'2.5em',
	borderBottom:'solid 6.5px #3b4459'
};

const selfie = {
	width:'24%',
	height:'24%',
	border:'#3b4459 3.5px solid'
};

const text = {
	color: 'white',
	width:'45%'
};

const backButton = {
	border: 'white 2px solid',
	padding: '6px',
	color: 'white',
	width: '12%',
	textAlign:'center',
	fontSize:'1.3em',
	boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
	margin:'0 auto 2em auto',
};

const About = () => (
  	<section style={container}>
		<header style={title} ><h1>About Me</h1></header>
		<div style={main}>
			<img style={selfie} className="img-circle" src={Img7} alt="Picture of Manny Munoz"></img>

			<div style={text}>
				<h3>Experience With:</h3>
				<hr></hr>
				<p>Html, Css(Bootstrap, Flexbox), Javascript(jQuery), React, ES6, PHP, Git, Node.js, Wordpress, Shopify, E-Commerce </p>

				<h3>Interests:</h3>
				<hr></hr>
				<p>Web Development, UX/Ui, Machine learning, Blockchain technology, Piano, Fashion Design</p>
			</div>
		</div>
		<Link style={backButton} to="/">Go Back</Link>
	</section>
    
);

export default About;
