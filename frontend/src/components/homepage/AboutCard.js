import React from 'react';
import kartik from '../../assets/homepage/img/kartik.jpg'
import Roll from 'react-reveal/Roll'
import Slide from 'react-reveal/Slide'

const AboutCard = (props) => {
    return ( 
        <div className="homepage-aboutcard col-12 my-5 py-5" id="AboutUs">
                <div className="row justify-content-center">
                    <Roll left><div className="col-8 col-md-3 m-3  homepage-aboutcard-lhs">
                    <div className="row justify-content-center">
                          <Slide bottom><h5 className="homepage-about-head-circle">About</h5></Slide>
                        </div>
                        <Slide bottom><h2>About Us</h2></Slide>
                        <Slide bottom><p>portfolio.com is a all in one solution for managing and making professional and presentable portfolio of users. You can also share and compare your profile with others</p></Slide>
                    </div></Roll>
                    <Roll bottom><div className="col-8 col-md-3 m-3  homepage-aboutcard-mid">
                        <div className="row justify-content-center">
                          <img className="homepage-about-img" src={kartik}  alt=""/>
                        </div>
                        <Slide bottom><h2>Kartik Malik</h2></Slide>
                        <Slide bottom><p>I'm a CSE student of batch 2019-2013 at Chandigarh University. Till now have skill set of Full-stack web developer and two internship experience in frontend web development</p></Slide>
                    </div></Roll>
                    <Roll right><div className="col-8 col-md-3 m-3  homepage-aboutcard-rhs">
                        <div className="row justify-content-center">
                            <h5 className="homepage-about-head-circle">Project</h5>
                        </div>
                        <Slide bottom><h2>About Project</h2></Slide>
                        <Slide bottom><p>this is a project is a complete full stack web development project, techs used in this mainly React.js, bootstrap for frontend part and Node.js,MongoDB  for backend part </p></Slide>
                    </div></Roll>
            </div>
        </div>
     );
}
 
export default AboutCard;