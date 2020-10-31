import React from 'react';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF , faLinkedinIn , faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Blog = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <div class="header-intro theme-bg-primary  py-5" style={{ backgroundColor: '#90ACD4' }}>
                    <div class="container position-relative">
                        <div class="media flex-column flex-md-row">
                            <img class="profile-medium d-inline-block rounded-circle mr-md-4 align-self-center mb-2 mb-lg-0" src="assets/images/profile.jpg" alt="" />
                            <div class="media-body align-self-center" style={{paddingTop: '100px' }}>
                                <h2 class="page-heading mb-2">Nur-A-Alam Khan's Blog</h2>
                                <div class="page-heading-tagline mb-3">I write about web development and life as a developer. <br class="d-lg-block d-none" />You can follow me via the various channels below:</div>
                                <ul class="social-list-square list-inline mb-0">
                                    <li class="list-inline-item mb-3 mb-lg-0"><a href="#"><i class="fab fa-twitter fa-fw "></i></a></li>

                                    <li class="list-inline-item mb-3 mb-lg-0"><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li class="list-inline-item mb-3 mb-lg-0"><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
                                    <li class="list-inline-item mb-3 mb-lg-0"><a href="#"><i class="fab fa-stack-overflow fa-fw "></i></a></li>
                                    <li class="list-inline-item mb-3 mb-lg-0"><a href="#"><i class="fab fa-medium-m fa-fw "></i></a></li>
                                    <li class="list-inline-item mb-3 mb-lg-0"><a href="#"><i class="fab fa-codepen fa-fw "></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h2 style={{textAlign:'center', margin:'100px 0'}}>Blogs are comming soon... from <a href="https://medium.com/@nur.murad32/about">Nur Murad</a> </h2>





            <section class="section py-5 "  style={{ backgroundColor: '#90ACD4' }}>
                <div class="container">
                    <div class="text-center">
                        <img class="profile-small d-inline-block mx-auto rounded-circle mb-2" src="assets/images/profile.jpg" alt="" />
                    </div>
                    <h3 class="section-title font-weight-bold text-center mb-2">Interested in hiring me for your project?</h3>
                    <div class="section-intro mx-auto text-center mb-3">
                        Looking for an experienced full-stack developer to build your web app or ship your software product? To start an initial chat, just drop me an email at <a class="link-on-bg" href="#">nur.murad32@gmail.com</a> or use the <a class="link-on-bg" href="/contact">form on the contact page</a>.
		    </div>
                    <div class="text-center">
                        <button class="btn btn-light"><a class="theme-btn-on-bg btn" href="/contact">Let's Talk</a></button>
                        
                    </div>
                </div>
            </section>

            <footer class="footer bg-sky-blue" >
                <div class=" text-center footer-bottom justify-content-center">
                    <p class="col-lg-8 col-sm-12 footer-text" style={{margin:'0 auto'}}>
                        
        Copyright ©2020 All rights reserved | This portfolio is made by <i class="fa fa-heart-o" aria-hidden="true"></i> <span>N.Alam</span> 
                        </p>
                </div>
            </footer>
        </div>
    );
};

export default Blog;