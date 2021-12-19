import React from 'react'

import './assets/css/bootstrap.min.css'
import './assets/css/default.css'
import './assets/css/LineIcons.css'
import './assets/css/magnific-popup.css'
import './assets/css/slick.css'
import './assets/css/style.css'
import './assets/images/logo.svg'

import f_image from './assets/images/f-shape-1.svg'
import climate_sol from './assets/images/solutions.jpeg'
class Solutions extends React.Component
{ 
	constructor(props){
		super(props)
		this.state = {
			  backgroundImage: `url(${climate_sol})`,
           height:'500px',
    width: '1285px',
  backgroundPosition: 'center',
  // backgroundRepeat: no-repeat,
  backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
		}
	}
	render()
	{
		return(
		<div>	
		 <div style={this.state} >
	     </div>
         <section id="services" className="features-area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="section-title text-center pb-10">
                        <h4 className="title">INDIVIDUAL SOLUTIONS TO CLIMATE CHANGE</h4>
                        
                        <p class="text_new">It may sound obvious, but powering your home with solar or wind is still one of the best ways to fight climate change. Depending on where you live, you may be able to switch to a power company that provides energy from renewables</p>
                        
                        
            
                    
                      <br></br>
                   
                      <p class="text_new"> You can make a sustainable choice every time you need to go somewhere: choose a fuel efficient vehicle when purchasing, take public transportation if it’s available, carpool to work, ride a bicycle or walk when possible. These are all ways to reduce the amount of greenhouse gases entering the atmosphere and heating our planet.</p>
                      <br></br>
                      <p class="text_new">Plant trees, to help suck carbon out of the air and stabilize the climate</p>
                     

                    </div> 
                </div>
            </div>
        </div> 
    </section>  
	    </div> 
			);
	}

}
export default Solutions;