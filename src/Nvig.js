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




import {BrowserRouter as Router,Switch ,Route ,NavLink } from 'react-router-dom'
class Nvig extends React.Component
{ render()
	{
		return(
		<section className="navbar-area">
             <div className="container">
                <div className="row">
          			<div className="col-lg-12">
	                    <nav className="navbar navbar-expand-lg">
	                  
	                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTwo" aria-controls="navbarTwo" aria-expanded="false" aria-label="Toggle navigation">
	                                    <span className="toggler-icons"></span>
	                                    <span className="toggler-icon"></span>
	                                    <span className="toggler-icon"></span>
	                                </button>
		                     <div className="collapse navbar-collapse sub-menu-bar" id="navbarTwo">           
		                         <ul className="navbar-nav m-auto">
		              			 <li className="nav-item "><NavLink to ="/" exact activeStyle={{color:"green"}}> Home</NavLink></li>
		              			 <li className="nav-item "><NavLink to ="/Cause" activeStyle={{color:"green"}}>  Cause</NavLink></li>
		              			 <li className="nav-item "><NavLink to ="/Effects" activeStyle={{color:"green"}}> Effects </NavLink></li>
		              			 <li className="nav-item "><NavLink to ="/Solutions" activeStyle={{color:"green"}}> Solutions </NavLink></li>
		              			 </ul>
		              	     </div>
	                    </nav>
			         </div>
                </div>
            </div>    
        
      </section>
			);
	}

}
export default Nvig;