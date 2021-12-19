
import React from 'react'
import './assets/css/bootstrap.min.css'
import './assets/css/default.css'
import './assets/css/LineIcons.css'
import './assets/css/magnific-popup.css'
import './assets/css/slick.css'
import './assets/css/style.css'
import './assets/images/logo.svg'

import effect_image from './assets/images/climate_sol.jpg'

class Effects extends React.Component
{ constructor(props){
		super(props)
		this.state = {
			  backgroundImage: `url(${effect_image})`,
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
                        <h4 className="title">The effects of global climate change
</h4>
                        <p class="text_head">Extreme weather</p>
                        <br></br>
                        <p class="text_new">As the earth’s atmosphere heats up, it collects, retains, and drops more water, changing weather patterns and making wet areas wetter and dry areas drier. Higher temperatures worsen and increase the frequency of many types of disasters, including storms, floods, heat waves, and droughts.</p>
                        <br></br>
                        <p class="text_head">Dirty air</p>
                        <br></br>
                        <p class="text_new">Air pollution refers to the release of pollutants into the air that are detrimental to human health and the planet as a whole
                        .Burning fossil fuels releases gases and chemicals into the air.
                        </p>
                        <br></br>
                          <br></br>
                        <p class="text_head">Rising seas</p>
                        <br></br>
                        <p class="text_new">The Arctic is heating twice as fast as any other place on the planet. As its ice sheets melt into the seas, our oceans are on track to rise one to four feet higher by 2100, threatening coastal ecosystems and low-lying areas. Island nations face particular risk, as do some of the world’s largest cities, including New York, Miami, Mumbai, and Sydney.
                        </p>
                        <br></br>
            

                    </div> 
                </div>
            </div>
        </div> 
    </section>  
	    </div> 
			);
	}

}
export default Effects;