import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'


const Header = () => {
	return (
		<header class="header_area">
			<div class="main_menu">
				<nav class="navbar navbar-expand-lg navbar-light">
					<div class="container">
						{/* <!-- Brand and toggle get grouped for better mobile display --> */}
						<img src={logo} alt="" height="100" />
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
						<div class="collapse navbar-collapse offset mr-auto header-nav" id="navbarSupportedContent">
							<ul class="nav navbar-nav menu_nav justify-content-end">
								<li class="nav-item"><a class="nav-link" href="/" active>Home</a></li>
								<li class="nav-item"><a class="nav-link" href="#">Services</a></li>
								<li class="nav-item"><a class="nav-link" href="/projects">Projects</a></li>
								<li class="nav-item"><a class="nav-link" href="/aboutMe">About Me</a></li>
								<li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
								<li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;