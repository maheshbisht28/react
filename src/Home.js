import React from 'react'
import back from './assets/images/climate-change.png'

import './assets/css/bootstrap.min.css'
import './assets/css/default.css'
import './assets/css/LineIcons.css'
import './assets/css/magnific-popup.css'
import './assets/css/slick.css'
import './assets/css/style.css'
import './assets/images/logo.svg'

import f_image from './assets/images/f-shape-1.svg'

class Home extends React.Component
{ 
	constructor(props){
		super(props)
		this.state = {
			  backgroundImage: `url(${back})`,
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
                        <h4 className="title">What is climate?</h4>
                        <p class="text_new">Climate is the average weather in a 
                        place over many years. To describe the regional climate of a place, people often tell what the temperatures are like over the seasons, how windy it is, and how much rain or snow falls. The climate of a region depends on many factors including the amount of sunlight it receives, its height above sea level, the shape of the land, and how close it is to oceans.Climate takes hundreds, thousands, even millions of years to change.</p>
                    </div> 
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="section-title text-center pb-10">
                        <h4 className="title">Are weather and climate  the same thing?</h4>
                        <p class="text_new">Weather is what the forecasters on the TV news predict each day. They tell people about the temperature, cloudiness, humidity, and whether a storm is likely in the next few days. That’s weather! It is the mix of events that happens each day in our atmosphere. Weather is not the same everywhere. It may be hot and sunny in one part of the world, but freezing and snowy in another.</p>
                    </div> 
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="section-title text-center pb-10">
                        <h4 className="title">What is climate change?</h4>
                        <p class="text_new">Climate change is the long-term alteration of
                         temperature and typical weather patterns in a place. Climate change
                          could refer to a particular location or the planet as a whole. Climate 
                          change may cause weather patterns to be less predictable. These unexpected
                           weather patterns can make it difficult to maintain and grow crops in 
                           regions that rely on farming because expected temperature and rainfall 
                           levels can no longer be relied on. Climate change has also been connected 
                           with other damaging weather events such as more frequent and more intense 
                           hurricanes, floods, downpours, and winter storms.
                           </p><br></br>

<p class="text_new">
﻿In polar regions, the warming global temperatures associated with climate change have meant 
ice sheets and glaciers are melting at an accelerated rate from season to season. 
This contributes to sea levels rising in different regions of the planet.
 Together with expanding ocean waters due to rising temperatures, the resulting rise in sea 
 level has begun to damage coastlines as a result of increased flooding and erosion.
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
export default Home;