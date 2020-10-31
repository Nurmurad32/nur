import React from 'react';
import img from '../../images/my-img.png';
import './Banner.css';
import file from '../../file/Resume_Nur.pdf'

const Banner = () => {
    return (
        <section class="home_banner_area">
		<div class="banner_inner">
			<div class="container">
				<div class="row">
					<div class="col-lg-7" style={{marginTop: '125px'}}>
						<div class="banner_content" style={{width:"74%"}}>
							<h5 class="text-uppercase" style={{color: '#000A2D'}}>Hello I am</h5>
							<h1 class="text-uppercase">Nur-A-Alam Khan</h1>
							{/* <h5 class="text-uppercase" style={{color: "#90ACD4"}}>Web Designer and Developer</h5> */}
                            <div class="text-uppercase" style={{color: "#90ACD4"}}>
                                I'm a <span class="txt-rotate" data-period="2000"
                                    data-rotate='["Web Designer.", "Developer."]'></span>
                            </div>
                            <small style={{color: "#9CA2BA"}}>I'm a MERN stack developer in frontend and backend development. I have the passion and strong determination to prove myself as a professional web developer. Want to know how I may help your project? Check out my project case studies and resume. I am waiting for your response..</small>
							<div class="d-flex align-items-center" style={{marginTop:'15px'}}>
                                <button class="hire-btn"><span>Hire Me</span></button>
                                <button class="cv-btn"><a href={file} download="resume_nur.pdf" target="_blank">Get CV</a></button>
                                
							</div>
						</div>
					</div>
					<div class="col-lg-5">
						<div class="home_right_img">
							<img class="" src={img} alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
};

export default Banner;