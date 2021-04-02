import React, {useState, useRef, useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import Modal from './Modal';
import ReactPlayer from 'react-player';
import Slide from 'react-reveal/Slide';
import { register } from '../../actions/auth'
import {connect} from 'react-redux'
import CSRFToken from '../CSRFToken'

const Register = ({register, isAuthenticated}) => {

    const opts = {
        

        playerVars: {
         
          autoplay: 0,
        },
      };
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        re_password:''
    });

    const {username, password, re_password} = formData;

    const [accountCreated, setAccountCreated] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            register(username, password, re_password);
            setAccountCreated(true);
        }
    };

    if(isAuthenticated)
        return <Redirect to='/dashboard'/>;
    else if (accountCreated)
        return <Redirect to='/'/>;

    return ( 
        <div className="col-12">
            <div className="row justify-content-center">
                <div className="joinus col-11 mt-5" id="JoinUs">
                    <div className="row align-items-center">
                        <div className=" col-11 col-md-4 offset-md-1 ">
                            <Slide bottom><h1>Join Us</h1></Slide>
                            <Slide bottom><form onSubmit={e =>onSubmit(e)}>
                                            <CSRFToken/>
                                            <input className="col-12 mb-2 signupform"
                                                type="text"   
                                                name="username" 
                                                placeholder="Enter Username" 
                                                onChange = {e => onChange(e)} 
                                                value={username}
                                                required="required" />

                                            <input className="col-12 mb-3 signupform"
                                                type="password"   
                                                name="password" 
                                                placeholder="Enter Password" 
                                                onChange={e => onChange(e)} 
                                                value={password}
                                                minLength='6'
                                                required="required" />
                                                
                                            <input className="col-12 mb-3 signupform"
                                                type="password"   
                                                name="re_password" 
                                                placeholder="Enter Password" 
                                                onChange={e => onChange(e)} 
                                                value={re_password}
                                                minLength='6'
                                                required="required" />

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
    
};
const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
});
 
export default connect(mapStateToProps, {register} )(Register);