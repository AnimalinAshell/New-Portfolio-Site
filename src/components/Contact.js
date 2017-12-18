import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

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

const title = {
	textAlign:'center',
	color:'white',
	fontSize:'4.5em',
	borderBottom:'solid 6.5px #3b4459',
	padding:'.5em 0'
};
const info = {
	color:'white',
	textAlign:'center',
	fontSize:'1.8em',
	marginTop:'2em'
};

const social = {
	fontSize:'3em',
	textAlign:'center',
	margin:'1em 0'
}

const addSpace = {
	marginLeft:'.45em',
	color:'white'
}

const backButton = {
	border: 'white 2px solid',
	padding: '6px',
	color: 'white',
	width: '12%',
	textAlign:'center',
	fontSize:'1.3em',
	boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
	margin:'2em auto',
};

const Contact = () => (
  <section style={container}>
  	<header><h1 style={title} >Contact</h1></header>
  	<div style={info}>
  		<p><i className="fa fa-thumb-tack" aria-hidden="true"></i>  Cleveland, Ohio</p>
	  	<p><i className="fa fa-envelope-o" aria-hidden="true"></i>  munoz.jeffrey95@yahoo.com</p>
	  	<p><i className="fa fa-phone" aria-hidden="true"></i>  (216)-357-8651</p>
  	</div>
  	<div style={social}>
  		<a style={addSpace} href="https://github.com/AnimalinAshell" target="_blank" ><i className="fa fa-github" aria-hidden="true"></i></a>
  		<a style={addSpace} href="https://www.linkedin.com/in/manny-munoz-107336b4/" target="_blank" ><i className="fa fa-linkedin" aria-hidden="true"></i></a>
  		<a style={addSpace} href="https://www.freecodecamp.org/animalinashell" target="_blank" ><i className="fa fa-free-code-camp" aria-hidden="true"></i></a>
  	</div>
  	<Link style={backButton} to="/">Go Back</Link>
  </section>
);

export default Contact;


