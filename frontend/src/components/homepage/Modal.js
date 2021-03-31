import React, {useState, useRef, useEffect} from 'react';


import Fade from 'react-reveal/Fade'

const Modal = (props) => {

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
 
export default Modal;