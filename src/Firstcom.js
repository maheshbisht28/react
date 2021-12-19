import React from 'react';
import Solutions from './Solutions'
import Cause from './Cause'
import Effects from './Effects' 
import Home from './Home' 
import './assets/css/bootstrap.min.css'
import './assets/css/default.css'
import './assets/css/LineIcons.css'
import './assets/css/magnific-popup.css'
import './assets/css/slick.css'
import './assets/css/style.css'
import './assets/images/logo.svg'
import Slider from './Slider'
import Nvig from './Nvig';
import back from './assets/images/back_g.jpg'
// import './assets/css/_navbar.scss'

import {BrowserRouter as Router,Switch ,Route ,NavLink } from 'react-router-dom'
class Firstcom extends React.Component
{ render()
	{return (	
			<Router>
	    <div>	
           
          <Nvig/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
    			<Switch>
    			<Route exact path="/" component = {Home}/>
    			<Route exact path="/Cause" component = {Cause}/>
    			<Route  exact path="/Effects" component = {Effects}/>
    			<Route  exact path="/Solutions" component = {Solutions}/>
    			</Switch>
	    </div>		
			
			</Router>

     
           );
 	}

} 

export default Firstcom;