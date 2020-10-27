import React from 'react';

import ProfileCard from './ProfileCard'
import ProfileProject from './profileProjects';

const Profile = (props) => {

    return ( 
       
                <div className="col-12 dashboard-profile">
                    <div className="row justify-content-center">
                        <div className="dashboard-profile-about col-12">
                            <div className="row justify-content-center align-items-center">
                                <div className="dashboard-profile-about-info py-3 my-5 col-4 ml-md-3">
                                    <div className="row justify-content-center">
                                        <div className="col-3 mt-2 ">
                                            <img className="dashboard-profilecard-img"src={props.kartik} alt=""/>
                                        </div>
                                        <div className="col-7 px-3">
                                            <h5>{props.name}</h5>
                                            <h5 className="pl-3">{props.bloodgrp}</h5>
                                            <h5 className="pl-3">{props.height}</h5>
                                            <h5 >{props.gender}</h5>
                                        </div>
                                        <h6 className="col-12 mt-3">{props.email}</h6>
                                        <h6 className="col-12">{props.number}</h6>
                                        <div className="dashboard-profile-about-details col-12">
                                            <p>{props.para}</p>
                                        </div>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-instagram fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-facebook fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-linkedin fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-twitter fa-md"></i></a>
                                        <a href="#" ><i className="col-2 footerlinks fa fa-envelope-o fa-md"></i></a>
                                    </div>
                                </div>

                                <div className="col-6 dashboard-profile-about-resume">

                                </div>

                            </div>
                        </div>
                        <div className="dashboard-profile-main-content col-11">
                            <div className="row justify-content-center">
                                <div className="dashboard-profile-main-content-tab">
                                    <ul className="nav nav-tabs d-none d-md-inline-flex px-4 pb-2 "style={{border:'none'}}>
                                        
                                        <li className="nav-item ">
                                            <a className="nav-link active px-0 mx-4" href="#Achievements" role="tab" data-toggle="tab"><h5>ACHIEVEMENTS</h5></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link px-0 mx-4 "  href="#Blogs" role="tab" data-toggle="tab"><h5>BLOGS</h5></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link px-0 mx-4" href="#Projects" role="tab" data-toggle="tab"><h5>PROJECTS</h5></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className="tab-content d-flex col-12">
  
                                <div role="tabpanel" className="tab-pane  fade show active"  id="Achievements">
                                    <div className="row justify-content-center">
                                        <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileCard 
                                                                                                        kartik={props.kartik}
                                                                                                        title="kartik"
                                                                                                        date="10/17/2020"
                                                                                                        para={props.para}/>
                                        </div>
                                        <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileCard 
                                                                                                        kartik={props.kartik}
                                                                                                        title="kartik"
                                                                                                        date="10/17/2020"
                                                                                                        para={props.para}/>
                                        </div>
                                        <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileCard 
                                                                                                        kartik={props.kartik}
                                                                                                        title="kartik"
                                                                                                        date="10/17/2020"
                                                                                                        para={props.para}/>
                                        </div>
                                        <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileCard 
                                                                                                        kartik={props.kartik}
                                                                                                        title="kartik"
                                                                                                        date="10/17/2020"
                                                                                                        para={props.para}/>
                                        </div>
                                    </div>
                                </div>
                    
                                <div role="tabpanel" className="tab-pane fade show" id="Blogs">
                                    <div className="row justify-content-center">
                                        <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileCard 
                                                                                                            kartik={props.kartik}
                                                                                                            title="kartik"
                                                                                                            date="10/17/2020"
                                                                                                            para={props.para}/>
                                        </div>
                                        <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileCard 
                                                                                                            kartik={props.kartik}
                                                                                                            title="kartik"
                                                                                                            date="10/17/2020"
                                                                                                            para={props.para}/>
                                        </div>
                                        <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileCard 
                                                                                                            kartik={props.kartik}
                                                                                                            title="kartik"
                                                                                                            date="10/17/2020"
                                                                                                            para={props.para}/>
                                        </div>
                                        <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileCard 
                                                                                                            kartik={props.kartik}
                                                                                                            title="kartik"
                                                                                                            date="10/17/2020"
                                                                                                            para={props.para}/>
                                        </div> 
                                    </div>
                                </div>
                    
                                <div role="tabpanel" className="tab-pane fade show" id="Projects">
                                    <div className="row justify-content-center">
                                    <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileProject 
                                                                                                                
                                                                                                                title="kartik"
                                                                                                                date="10/17/2020"
                                                                                                                para={props.para}/>
                                            </div>
                                            <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileProject 
                                                                                                                
                                                                                                                title="kartik"
                                                                                                                date="10/17/2020"
                                                                                                                para={props.para}/>
                                            </div>
                                            <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileProject 
                                                                                                                
                                                                                                                title="kartik"
                                                                                                                date="10/17/2020"
                                                                                                                para={props.para}/>
                                            </div>
                                            <div className="col-5 mx-4 my-4 dashboard-profile-card"><ProfileProject 
                                                                                                                
                                                                                                                title="kartik"
                                                                                                                date="10/17/2020"
                                                                                                                para={props.para}/>
                                            </div> 
                                        </div>
                                </div>
                                
                            </div>   
                        </div>
                        
                    </div>
                </div>
          
     );
}
 
export default Profile;