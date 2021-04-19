import React from 'react';
import Slide from 'react-reveal/Slide'
import kartik from '../../assets/homepage/img/kartik.PNG'
import one from '../../assets/homepage/img/one.PNG'
import two from '../../assets/homepage/img/two.PNG'
import three from '../../assets/homepage/img/three.PNG'


const Team = () => {
    return ( 
        <div className="col-12">
            <div className="row justify-content-center">
                <div className="team col-11 mt-5" >
                    <div className="row align-items-center">
                        <div className="team-heading  col-12">
                            <Slide bottom><h1>Our Team</h1>
                                <p>Meet the developers behind this channel. Sculpt-It is possible because of their hardwork and dedication.</p>
                            </Slide>
                        </div>
                        <div className="team-section col-12 col-lg-6 pt-5">
                            <div className="row justify-content-center align-items-center">
                                <div className="team-lhs col-7 col-md-4">
                                    <img className="col-12 col-md-10 px-0" src={kartik} alt=""/>
                                </div>
                                <div className="team-rhs col-12 col-md-6">
                                    <h2 className="team-name col-12 col-md-10">Kartik Malik</h2>
                                    <h4 className="team-position col-12 col-md-10">Frontend & Backend & ui/ux developer</h4>
                                    <p>I'm a student of BE-CSE of batch 2019-23 having interest in programming. Currently having gold star in C++ and sliver in DS & Algo on 'hackerank' and also some hands on experience in fullstack web-development</p>
                                    <h5 className="team-position col-12 col-md-9"><a onClick = {() => {window.open('https://instagram.com/thekartikmalik?igshid=4ixqd4u3xkz3')}}  ><i className="col-2 footerlinks fa fa-instagram fa-md"></i></a>
                                        <a onClick = {() => {window.open('https://m.facebook.com/kartik.malik.94617?ref=bookmarks')}}  ><i className="col-2 footerlinks fa fa-facebook fa-md"></i></a>
                                        <a onClick = {() => {window.open('https://github.com/Kartikmalik271')}} ><i className="col-2 footerlinks fa fa-github fa-md"></i></a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="team-section col-12 col-lg-6 pt-5">
                            <div className="row justify-content-center align-items-center">
                                <div className="team-lhs col-7 col-md-4 order-md-last">
                                    <img className="col-12 col-md-10 px-0" src={one} alt=""/>
                                </div>
                                <div className="team-rhs col-12 col-md-6">
                                    <h2 className="team-name col-12 col-md-10">Suman</h2>
                                    <h4 className="team-position col-12 col-md-10">ui/ux designing & content writing</h4>
                                    <p>I'm a student of BE-CSE of batch 2019-23 at Chandigarh University.An active team member of Chandigarh University content Writing team. Also having certifications in web-development specilization courses.  </p>
                                    <h5 className="team-position col-12 col-md-9"><a href="#" ><i className="col-2 footerlinks fa fa-instagram fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-facebook fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-twitter fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-envelope-o fa-md"></i></a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="team-section col-12 col-lg-6 pt-5">
                            <div className="row justify-content-center align-items-center">
                                <div className="team-lhs col-7 col-md-4">
                                    <img className="col-12 col-md-10 px-0" src={two} alt=""/>
                                </div>
                                <div className="team-rhs col-12 col-md-6">
                                    <h2 className="team-name col-12 col-md-10">Stakshi</h2>
                                    <h4 className="team-position col-12 col-md-10">ui/ux designing & content writing</h4>
                                    <p>I'm a student of BE-CSE of batch 2019-23 at Chandigarh University.An active team member of Chandigarh University WIE dept. Also having certification in React.js specilization course.</p>
                                    <h5 className="team-position col-12 col-md-9"><a href="#" ><i className="col-2 footerlinks fa fa-instagram fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-facebook fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-twitter fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-envelope-o fa-md"></i></a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="team-section col-12 col-lg-6 pt-5">
                            <div className="row justify-content-center align-items-center">
                                <div className="team-lhs col-7 col-md-4 order-md-last">
                                    <img className="col-12 col-md-10 px-0" src={three} alt=""/>
                                </div>
                                <div className="team-rhs col-12 col-md-6">
                                    <h2 className="team-name col-12 col-md-10">Priya </h2>
                                    <h4 className="team-position col-12 col-md-10">Research work & content writing</h4>
                                    <p>I'm a student of BE-CSE of batch 2019-23 at Chandigarh University.An active team member of Chandigarh University Dept of student welfare. Also having certification in python specilization course.</p>
                                    <h5 className="team-position col-12 col-md-9"><a href="#" ><i className="col-2 footerlinks fa fa-instagram fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-facebook fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-twitter fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-envelope-o fa-md"></i></a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Team;