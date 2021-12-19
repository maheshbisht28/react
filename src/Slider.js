import React from 'react'
import './assets/css/bootstrap.min.css'
import './assets/css/default.css'
import './assets/css/LineIcons.css'
import './assets/css/magnific-popup.css'
import './assets/css/slick.css'
import './assets/css/style.css'
import './assets/images/logo.svg'
// import first_image from './assets/images/slider/1.png'
import './assets/images/slider/2.png'
import './assets/images/slider/3.png'

class Slider extends React.Component
{  render()
	{  return(
		<div>
       <section id="home" className="slider_area">
          <div id="carouselThree" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
                <li data-target="#carouselThree" data-slide-to="0" className="active"></li>
                <li data-target="#carouselThree" data-slide-to="1"></li>
                <li data-target="#carouselThree" data-slide-to="2"></li>
               </ol>

             <div className="carousel-inner">
                            <div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="slider-content">
                                                    <h1 className="title">Business is Now Digital</h1>
                                                    <p class="text">We blend insights and strategy to create digital products for forward-thinking organisations.</p>
                                                    <ul className="slider-btn rounded-buttons">
                                                        <li><a className="main-btn rounded-one" href="#/">GET STARTED</a></li>
                                                        <li><a className="main-btn rounded-two" href="#/">DOWNLOAD</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                             
                                 
                                     <div class="slider-image-box d-none d-lg-flex align-items-end">
                                        <div class="slider-image">
                                            
                                        </div> 
                                    </div>
                             </div>
                              
                            
               </div>
                  <a class="carousel-control-prev" href="#carouselThree" role="button" data-slide="prev">
                        <i class="lni lni-arrow-left"></i>
                    </a>
                  <a class="carousel-control-next" href="#carouselThree" role="button" data-slide="next">
                        <i class="lni lni-arrow-right"></i>
                    </a>  
          </div>     
         </section>

		</div>



		);


	}


}

export default Slider;