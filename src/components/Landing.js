import React from 'react';
import { NavLink } from 'react-router-dom';


// Styling
document.body.style = 'background:indianred';

const container = {
	display: 'flex',
	flexDirection:'row',
	justifyContent:'center',
	alignItems:'center',
	flexWrap:'wrap',
	margin:'0',
	padding:'0',
	fontFamily: 'Lato',
	height:'100vh'
};

const headers = {
	color:'white',
	marginBottom:'6em'
};

const title = {
	margin:'0',
	fontWeight: '700',
	fontSize: '4em'
};

const subTitle = {
	margin:'0',
	fontWeight: "300",
	fontSize:'2.5em'
};

const link1 = {
	marginTop:'0',
	color:'white',
	textAlign:'center',
	display:'inline-block',
	border: "1.5px solid white",
	padding: '7px',
	marginTop: '10px',
	marginLeft: '35px',
	width: '4.7em',
	boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
	animationDelay:".4s"
};

const link2 = {
	marginTop:'0',
	color:'white',
	textAlign:'center',
	display:'inline-block',
	border: "1.5px solid white",
	padding: '7px',
	marginTop: '10px',
	marginLeft: '35px',
	width: '4.7em',
	boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
	animationDelay:".7s"
};

const link3 = {
	marginTop:'0',
	color:'white',
	textAlign:'center',
	display:'inline-block',
	border: "1.5px solid white",
	padding: '7px',
	marginTop: '10px',
	marginLeft: '35px',
	width: '4.7em',
	boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
	animationDelay:"1s"
};


const Landing = () => (
  <section style={container}>
  	<div className="animated fadeInDownBig" style={headers}>
  		<h1 style={title}>Manuel Munoz</h1>
    	<h3 style={subTitle}>I'm a front-end developer.</h3>
  	</div>
    <div style={headers}>
		<NavLink style={link1} className="animated fadeInRightBig" to="/about">About</NavLink>
		<br />
	    <NavLink style={link2} className="animated fadeInRightBig" to="/projects">Projects</NavLink>
	    <br />
	    <NavLink style={link3} className="animated fadeInRightBig" to="/contact">Contact</NavLink>
	    <br />
	</div>
  </section>
);

export default Landing;


