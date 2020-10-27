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
                            <Slide bottom><p>
                            By registering here you'll be able to use our services and able to create your own personal portfolio, your portfolio will be a professional one, Create Persoanlize and campare.        
                            </p></Slide>
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