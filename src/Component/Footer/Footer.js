import React from 'react';
import logo from '../../images/logo.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF , faLinkedinIn , faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
// import { } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <footer class="footer_area">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div class="footer_top flex-column">
						<div class="footer_logo">
							<a href="#">
								<img src={logo} alt="" height="200"/>
							</a>
							<h4>Follow Me</h4>
						</div>
						<div class="footer_social">
							<a href="#" class= "fa fa-facebook"><FontAwesomeIcon  icon={faFacebookF} /></a>
							<a href="#" class= "fa fa-linkedIn"><FontAwesomeIcon  icon={faLinkedinIn} /></a>
							<a href="#" class= "fa fa-github"><FontAwesomeIcon  icon={faGithub} /></a>
							<a href="#" class= "fa fa-instagram"><FontAwesomeIcon  icon={faInstagram} /></a>
						</div>
					</div>
				</div>
			</div>
			<div class="row footer_bottom justify-content-center">
				<p class="col-lg-8 col-sm-12 footer-text">
					
Copyright © All rights reserved | This portfolio is made by <FontAwesomeIcon icon={faHeart} /><a href="#" target="_blank">N.Alam</a>
</p>
			</div>
		</div>
	</footer>
        </div>
    );
};

export default Footer;