import React, {useState, useRef, useEffect} from 'react';

import Auth from '../../utils/Auth';
import Message from '../../components/Message';
import {withRouter} from 'react-router-dom'


import Fade from 'react-reveal/Fade'

const Modal = (props) => {

    const [user, setUser] = useState({username:"",password:""});
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(()=>{
        return()=>{
            clearTimeout(timerID);
        }
    },[]);

    const OnSubmit = (e) =>{
        e.preventDefault();
        const {history:{ push }} = props;
        Auth.register(user).then(data=>{
           const { message } = data;
           setMessage(message);
           resetForm();
           if(!message.msgError){
               timerID = setTimeout(()=>{
                  push('/');
               },2000)
           } 
        });
    }

    const Onchange = (e) =>{
        
        setUser({...user,[e.target.name]: e.target.value});
        
    }

    const resetForm=()=>{
        setUser({username:"",password:""});
    }

    return ( 
    <div className="modalmain" id="FormModal">
        
          <button type="button" className="btn modal-btn-half mt-4 " data-toggle="modal" data-target="#Register">Sign-Up</button>
          <div className="row justify-content-center ">
            <div class="modal fade homepage-register" id="Register" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title" id="exampleModalLongTitle">SIGN-UP HERE</h6>
                        <button type="button" class="close" style={{color:'white'}} data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className="row justify-content-center">
                            <div className="col-8 align-self-center">
                            <form onSubmit={OnSubmit}>
                                    <input className="col-12 mb-2 signupform"type="text" onChange={Onchange} value={user.username} name="username" placeholder="Enter Username" required="required" />
                                    <input className="col-12 mb-3 signupform"type="password" onChange={Onchange} value={user.password} name="password" placeholder="Enter Password" required="required" />

                                    <button type="submit" className="btn col-6 homepagesignup-btn-half">Register</button>

                                </form>
                                {message ? <Message message={message}/> : null}
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>

        </div>
    </div>
     );
}
 
export default withRouter(Modal);