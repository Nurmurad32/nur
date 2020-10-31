import React from 'react';
import creativeAgency from '../../images/CreativeAgency.png'
import travelGuru from '../../images/travelGuru.png'
import volunteerNetwork from '../../images/volunteerNetwork.png'
import Header from '../Header/Header';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF , faLinkedinIn , faGithub, faInstagram, faEdge} from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div class="header-intro text-black py-5" style={{ backgroundColor: '#90ACD4' }}>
	        <div class="container" style={{paddingTop: '100px' }}>
		        <h2 class="page-heading mb-3">Projects</h2>
		        <div class="page-heading-tagline">In-depth Case Studies to show you what I can offer and how I work</div>
		        
	        </div>
        </div>



        <section class="section pt-5">
        <div class="container">
	        {/* <div class="text-center">
		        <ul id="filters" class="filters mb-5 mx-auto pl-0">
	                <li class="type active" data-filter="*">All</li>
	                <li class="type" data-filter=".angular">Angular</li>
	                <li class="type" data-filter=".react">React</li>
	                <li class="type" data-filter=".python-django">Python/Django</li>
	                <li class="type" data-filter=".ruby-rails">Ruby/Rails</li>
	                <li class="type" data-filter=".php">PHP</li>
	            </ul><!--//filters-->
	        </div> */}
	        
	        <div class="project-cards row mb-5 isotope">
		        <div class="isotope-item col-12 col-lg-4 angular python-django">
					<div class="card rounded-0 border-0 shadow-sm mb-5">
						<div class="card-img-container position-relative">
							<img class="card-img-top rounded-0" src={volunteerNetwork} alt="" height="250"/>
							
							{/* <a class="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
								<h5 class="card-title font-weight-bold">Summary:</h5>
							    <p class="card-text">1.Doing a volunteer task one has to be a register using google account <br/>
                                2.register user can select a work or cancel their own work <br/>
                                3.Admin can add a new volunteer task or cancel registered volunteer task</p>
							</a> */}
						</div>
						<div class="card-body pb-0">
							<h4 class="card-title text-truncate text-center mb-0"><a href="project.html">Volunteer Network</a></h4>
                            
						</div>
						
						<div class="card-footer border-0 text-center bg-white pb-4">
							<ul class="list-inline mb-0 mx-auto">
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">React</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill" >ExpressJS</span></li>
                                <li class="list-inline-item"><span class="badge badge-secondary badge-pill">NodeJS</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">MongoDB</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">HTML/CSS</span></li>
							</ul>
					    </div>
                        <div style={{display:'flex', margin: '0 auto'}}>
                            <h1><small style={{fontSize:'small'}}> Live:</small><a href="https://volunteer-network-2ef49.web.app/"><FontAwesomeIcon icon={faEdge} /></a>|</h1>
                            <h1>|<a href=" https://github.com/Nurmurad32/volunteer-network-client"><FontAwesomeIcon icon={faGithub}  /></a><small style={{fontSize:'small'}}>:Github</small></h1>
                            
                        </div>
				    </div>
		        </div>
		        
		        <div class="isotope-item col-12 col-lg-4 ruby-rails">
					<div class="card rounded-0 border-0 shadow-sm mb-5">
						<div class="card-img-container position-relative">
							<img class="card-img-top rounded-0" src={travelGuru} alt="" height="250"/>
							
							{/* <a class="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
								<h5 class="card-title font-weight-bold">Client: Basecamp</h5>
							    <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
							</a> */}
						</div>
						<div class="card-body pb-0">
							<h4 class="card-title text-truncate text-center mb-0"><a href="project.html">Travel Guru</a></h4>
						</div>
						
						<div class="card-footer border-0 text-center bg-white pb-4">
							<ul class="list-inline mb-0 mx-auto">
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill" >React</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Firebase</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Bootstrap</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">HTML/CSS</span></li>
							</ul>
					    </div>
                        <div style={{display:'flex', margin: '0 auto'}}>
                            <h1><small style={{fontSize:'small'}}> Live:</small><a href=" https://travel-guru-1a502.web.app/"><FontAwesomeIcon icon={faEdge} /></a>|</h1>
                            <h1>|<a href="https://github.com/Nurmurad32/travel-guru"><FontAwesomeIcon icon={faGithub}  /></a><small style={{fontSize:'small'}}>:Github</small></h1>
                            
                        </div>
				    </div>
		        </div>
		        
		        <div class="isotope-item col-12 col-lg-4 react python-django">
					<div class="card rounded-0 border-0 shadow-sm mb-5">
						<div class="card-img-container position-relative">
							<img class="card-img-top rounded-0" src={creativeAgency} alt="" height="250"/>
							
							{/* <a class="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
								<h5 class="card-title font-weight-bold">Client: Airbnb</h5>
							    <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
							</a> */}
						</div>
						<div class="card-body pb-0">
							<h4 class="card-title text-truncate text-center mb-0"><a href="project.html">Creative Agency</a></h4>
						</div>
						
						<div class="card-footer border-0 text-center bg-white pb-4">
							<ul class="list-inline mb-0 mx-auto">
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">React</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">MongoDb</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">ExpressJS</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">NodeJS</span></li>
                                <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Firebase</span></li>
                                <li class="list-inline-item"><span class="badge badge-secondary badge-pill">HTML/CSS</span></li>
							</ul>
					    </div>
                        <div style={{display:'flex', margin: '0 auto'}}>
                            <h1><small style={{fontSize:'small'}}> Live:</small><a href="https://creative-agency-4e8cf.web.app/"><FontAwesomeIcon icon={faEdge} /></a>|</h1>
                            <h1>|<a href="https://github.com/Nurmurad32/Creative-Egency-client"><FontAwesomeIcon icon={faGithub}  /></a><small style={{fontSize:'small'}}>:Github</small></h1>
                            
                        </div>
				    </div>
		        </div>
		        
		        {/* <div class="isotope-item col-12 col-lg-4 react">
					<div class="card rounded-0 border-0 shadow-sm mb-5">
						<div class="card-img-container position-relative">
							<img class="card-img-top rounded-0" src="assets/images/projects/project-4-thumb.jpg" alt=""/>
							<div class="card-img-overlay overlay-logo text-center">
								<div class="project-logo"><img class="img-fluid w-50" src="assets/images/logos/logo-4-inverse.svg"/></div>
							</div>
							
						</div>
						<div class="card-body pb-0">
							<h4 class="card-title text-truncate text-center mb-0"><a href="project.html">Internal Product</a></h4>
						</div>
						
						<div class="card-footer border-0 text-center bg-white pb-4">
							<ul class="list-inline mb-0 mx-auto">
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">React</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Flux</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Babel</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">MongoDB</span></li>
							</ul>
					    </div>
				    </div>
		        </div>
		        
		        <div class="isotope-item col-12 col-lg-4 react php">
					<div class="card rounded-0 border-0 shadow-sm mb-5">
						<div class="card-img-container position-relative">
							<img class="card-img-top rounded-0" src="assets/images/projects/project-5-thumb.jpg" alt=""/>
							<div class="card-img-overlay overlay-logo text-center">
								<div class="project-logo"><img class="img-fluid w-50" src="assets/images/logos/logo-5-inverse.svg"/></div>
							</div>
							
						</div>
						<div class="card-body pb-0">
							<h4 class="card-title text-truncate text-center mb-0"><a href="project.html">Mobile App</a></h4>
						</div>
						
						<div class="card-footer border-0 text-center bg-white pb-4">
							<ul class="list-inline mb-0 mx-auto">
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">React</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">PHP</span></li>
						        <li class="list-inline-item"><span class="badge badge-secondary badge-pill">MySQL</span></li>
							</ul>
					    </div>
				    </div>
		        </div> */}
		        
		        
			    
	        </div>

        </div>
    </section>





        </div>
    );
};

export default Projects;