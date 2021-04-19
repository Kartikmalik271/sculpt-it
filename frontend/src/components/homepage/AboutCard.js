import React, {useEffect} from 'react';
import Counter from './counter';
import {allUser} from '../../actions/article'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Roll from 'react-reveal/Roll'
import Slide from 'react-reveal/Slide'

const AboutCard = ({loaduser}) => {
    useEffect(() =>{
        allUser();
        
        
     },[]);

    const count = loaduser.length;
    return ( 
        <div className="homepage-aboutcard col-12 my-md-5 " id="AboutUs">
            <div className="row justify-content-center">
                <div className="aboutus-ournumbs col-12 col-md-10 mb-5 pb-5 pt-5">
                    <div className="row justify-content-center">
                        <Roll left><div className="col-12 col-md-4 m-3  homepage-aboutcard-lhs">
                        <div className="row justify-content-center">
                            <Slide bottom><h5 className="homepage-about-head-circle">About</h5></Slide>
                            </div>
                            <Slide bottom><h2>About Us</h2></Slide>
                            <Slide bottom><p>Sculpt-it. is a all in one solution for managing and making professional/presentable portfolio. You can create your professional resume and download it, the feature of writing and sharing different articles makes it different from the other resume generatoor websites.</p></Slide>
                        </div></Roll>
                        <Roll right><div className="col-12 col-md-4 m-3  homepage-aboutcard-rhs">
                            <div className="row justify-content-center">
                                <h5 className="homepage-about-head-circle">Project</h5>
                            </div>
                            <Slide bottom><h2>About Project</h2></Slide>
                            <Slide bottom><p>this project is a complete full stack web development project, techs used in making of this are React.js & bootstrap for frontend, django & rest api for backend, MongoDB for Database and Redux for making api calls between react and django </p></Slide>
                        </div></Roll>
                    </div>
                </div>  
            </div>
                <div className="row justify-content-center">
                        <div className="aboutus-ournumbs-counters col-12 col-md-6 mb-5">
                            <div className="row justify-content-center align-items-center">
                                <div className="aboutus-ournumbs-counter1 col-6 px-0">
                                    <h2 >
                                        <Counter timer={20}/>
                                            
                                        <br/>Posts
                                    </h2>
                                </div>
                                <div className="aboutus-ournumbs-counter2 col-6 px-0">
                                    <h2 >
                                    <Counter timer={count}/>
                                        <br/>Users
                                    </h2>
                                </div>
                                <div className="aboutus-ournumbs-counter3 col-6 px-0">
                                    <h2 >
                                    <Counter timer={4}/>
                                        <br/>Team Members
                                    </h2>
                                </div>

                            </div>
                        </div>
        </div>
        </div>
     );
}
AboutCard.propTypes={
    loaduser: PropTypes.array.isRequired
 }

const mapStateToProps = state =>({
    loaduser: state.article.loaduser
});
export default connect(mapStateToProps, { allUser })(AboutCard);