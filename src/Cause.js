import React from 'react';
import Solutions from './Solutions'

import Effects from './Effects' 
import Home from './Home' 
import './assets/css/bootstrap.min.css'
import './assets/css/default.css'
import './assets/css/LineIcons.css'
import './assets/css/magnific-popup.css'
import './assets/css/slick.css'
import './assets/css/style.css'
import './assets/images/logo.svg'

import f_image from './assets/images/f-shape-1.svg'
import causes_image from './assets/images/cause1.jpg'
class Cause extends React.Component
{
	constructor(props){
		super(props)
		this.state = {
			  backgroundImage: `url(${causes_image})`,
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
                        <h4 className="title">CAUSES OF CLIMATE CHANGE</h4>
                        <p class="text_head">Greenhouse gases</p>
                        <br></br>
                        <p class="text_new">The main driver of climate change is the greenhouse effect. Some gases in the Earth's atmosphere act a bit like the glass in a greenhouse, trapping the sun's heat and stopping it from leaking back into space and causing global warming.</p>
                        <br></br>
                        <p class="text_new">Many of these greenhouse gases occur naturally, but human activity is increasing the concentrations of some of them in the atmosphere, in particular:</p>
                        <br></br> 
                        <br></br>
                        <p class="text_new">carbon dioxide (CO2)</p>
                        
            
                        <p class="text_new">methane</p>
                        
                        <p class="text_new">nitrous oxide</p>
                        
                        <p class="text_new">fluorinated gases</p>
                       <br></br>	
                      <h4 className="title">Causes for rising emissions</h4>
                      <br></br> 
                      <p class="text_new">Burning coal, oil and gas produces carbon dioxide and nitrous oxide.s</p>
                      <br></br>
                      <p class="text_new">Cutting down forests (deforestation). Trees help to regulate the climate by absorbing CO2 from the atmosphere. When they are cut down, that beneficial effect is lost and the carbon stored in the trees is released into the atmosphere, adding to the greenhouse effect.</p>
                      <br></br>
                      <p class="text_new">Increasing livestock farming. Cows and sheep produce large amounts of methane when they digest their food.</p>
                      <br></br>
                      <p class="text_new">Fertilisers containing nitrogen produce nitrous oxide emissions.</p>
                      

                    </div> 
                </div>
            </div>
        </div> 
    </section>  
	    </div> 
			);
	}

}
export default Cause;