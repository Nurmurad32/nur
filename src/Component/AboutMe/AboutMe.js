import React from 'react';
import ReactDOM from 'react-dom'
import img from '../../images/my-img.png'
import file from '../../file/Resume_Nur.pdf'
import Header from '../Header/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF , faLinkedinIn , faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div>
            <div >
                <Header></Header>
            </div>
            <section class="about-area section-padding sky-blue" id="about" style={{paddingTop:'150px'}}>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 d-lg-block">
                            <div class="profile wow slideInLeft" style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                                <div class="image">
                                    <div class="circle-1"></div>
                                    <div class="circle-2"></div>
                                    <img src={img} width="285" height="285" alt="Nur-A-Alam Khan" />
                                </div>
                            </div>
                            <div class="social_profile wow slideInLeft">
                                <div class="social-overlap process-scetion mt100">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-md-10">
                                                <div class="social-bar">
                                                    <div class="social-icons mb-3 iconpad text-center" style={{margin: '0 auto',paddingTop: '21px'}}>


                                                        <a href="https://www.facebook.com/nuraalam.murad" target="_blank" class="slider-nav-item"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                        <a href="https://www.linkedin.com/in/md-nur-a-alam-khan-murad-0024a3194/" target="_blank" class="slider-nav-item"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                                        <a href="https://github.com/Nurmurad32" target="_blank" class="slider-nav-item"><FontAwesomeIcon icon={faGithub} /></a>
                                                        <a href="https://www.instagram.com/nur.murad32/" target="_blank" class="slider-nav-item"><FontAwesomeIcon icon={faInstagram} /></a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 wow slideInRight">
                            <div class="about-details">
                                <div class="section-title mb-50">
                                    <h2>About Me</h2>
                                </div>
                                <p class="text-justify">I’m a MERN Stack Developer. I have a Passion for Developing Clean, Beautiful, Interactive, Minimalistic, Responsive, and User-Friendly websites/apps, Developed by Modular, Scalable, and Functional code.</p>
                                <ul class="about-info mt-4">
                                    <li><span>Name:</span> <span>Md. Nur-A-Alam Khan</span></li>
                                    <li><span>Date of birth:</span> <span>1998-09-15</span></li>
                                    <li><span>Address:</span> <span>Kazihata, Rajshahi, Bangladesh</span></li>
                                    <li><span>Zip code:</span> <span>6000</span></li>
                                    <li><span>Email:</span> <span>nur.murad32@gmail.com</span></li>
                                    <li><span>Phone:</span> <span>01738115440</span></li>
                                </ul>
                                <div class="download-btn mt-5">
                                    <button class="download-cv-btn"><a class="btn radius-btn" href={file} download="resume_nur.pdf" target="_blank">Download Cv</a></button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="resume-area section-padding" id="resume">
                <div class="container">
                    <div class="row mb-50">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Resume</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="page one wow fadeInRight" id="page-1">
                                <h3 class="heading">Education</h3>


                                <ul class="timeline" data-wow-duration="2s">

                                    <li>
                                        <div class="direction-r">
                                            <div class="flag-wrapper">
                                                <span class="flag">BSC in CSE</span>
                                                <span class="time-wrapper"><span class="time">2016-2020</span></span>
                                            </div>
                                            <div class="desc">Bangladesh Army University of Engineering &amp; Technology</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="direction-l">
                                            <div class="flag-wrapper">
                                                <span class="flag">HSC</span>
                                                <span class="time-wrapper"><span class="time">2013-2015</span></span>
                                            </div>
                                            <div class="desc">New Govt. Degree Collage, Rajshahi</div>
                                        </div>
                                    </li>


                                </ul>



                            </div>
                            <div class="page two wow fadeInLeft" id="page-2">
                                <h3 class="heading">Experience</h3>
                                <div class="resume-wrap transition d-flex">
                                    <div style={{transition: '0s !important'}} class="icon d-flex align-items-center justify-content-center">
                                        <span style={{transition: '0s !important'}} class="icon-briefcase"></span>
                                    </div>
                                    <div class="text pl-3" style={{transition: '0s !important'}}>
                                        <p style={{transition: '0s !important'}}>Though I am a fresher, I have done some wonderful projects using the latest web technology stack. I have done both
                            offline and online web-based tasks that really help me to enrich my professional experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="page three wow fadeInRight" id="page-3">
                                <h3 class="heading">Skills</h3>
                                <div class="row wow slideInLeft">
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>HTML 5</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'80%'}}>
                                                    <span>80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>CSS</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'75%'}}>
                                                    <span>75%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>JavaScript</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'70%'}}>
                                                    <span>70%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>NodeJs</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'60%'}}>
                                                    <span>60%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>React</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'70%'}}>
                                                    <span>70%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>Bootstrap</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'80%'}}>
                                                    <span>80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>MongoDB</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'68%'}}>
                                                    <span>68%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>ExpressJS</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'60%'}}>
                                                    <span>60%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>Firebase</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'70%'}}>
                                                    <span>70%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>Git Version Control</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'60%'}}>
                                                    <span>60%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>MySQL</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'50%'}}>
                                                    <span>50%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>PHP</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'55%'}}>
                                                    <span>55%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="progress-wrap">
                                            <h5>Wordpress</h5>
                                            <div class="progress">
                                                <div class="progress-bar color-1" style={{width:'58%'}}>
                                                    <span>58%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;