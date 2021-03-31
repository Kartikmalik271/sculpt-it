import React, {useState, useRef, useEffect} from 'react';

import Modal from './Modal';
import ReactPlayer from 'react-player';
import Slide from 'react-reveal/Slide'

const Register = (props) => {

    const opts = {
        

        playerVars: {
         
          autoplay: 0,
        },
      };
     
    return ( 
        <div className="col-12">
            <div className="row justify-content-center">
                <div className="joinus col-11 mt-5" id="JoinUs">
                    <div className="row align-items-center">
                        <div className=" col-11 col-md-4 offset-md-1 ">
                            <Slide bottom><h1>Join Us</h1></Slide>
                            <Slide bottom><form >
                                    <input className="col-12 mb-2 signupform"type="text"   name="username" placeholder="Enter Username" required="required" />
                                    <input className="col-12 mb-3 signupform"type="password"   name="password" placeholder="Enter Password" required="required" />

                                    <button type="submit" className="btn col-6 homepagesignup-btn-half">Register</button>

                                </form></Slide>
                            <Modal/>
                        </div>
                        <div className="col-12 col-md-7 mt-3">
                        <ReactPlayer className="col-12" 
                                    url=""
                                    controls="true"
                                    playing="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
    
}
 
export default Register;