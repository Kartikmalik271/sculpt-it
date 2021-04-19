import React from 'react'; 

import Fade from 'react-reveal/Fade'
import { useAlert} from 'react-alert'
import {TextField} from '@material-ui/core'



const Footer = () => {
    const alert = useAlert()

    const onSubmit = e => {
        e.preventDefault();
        alert.success('feedback sent ');
   
    }
   
    
    
    return ( 
    <React.Fragment>    
        <Fade bottom><div className="footer pt-5 pb-5 p-3" id="Footer">
            <Fade bottom><div className="container footer-container ">
			    <div className="row justify-content-center ">
             
                    <div className="footer-form col-12 col-md-4 mt-4 pb-4">
                    <Fade bottom><h2 className="ml-3">FeedBack:</h2></Fade>
                            <form onSubmit={e =>onSubmit(e)}>
                            <Fade bottom><TextField label="Your name" variant="outlined"type="text" className="col-11" name="name" id="name" placeholder="Your Name" required="required"/><br/></Fade>
                            <Fade bottom><TextField label="Your E-mail" variant="outlined"type="email" className="col-11"name="email" id="email" placeholder="Your E-mail"required="required"/><br/></Fade>
                            <Fade bottom><TextField label="message"  multiline variant="outlined" rows="5" className="col-11"name="message" id="message" placeholder="Message"required="required"/><br/></Fade>
                            <Fade bottom><button type="submit" className="col-11 "className="btn footer-form-btn-half">Submit</button></Fade>
                            </form>
                    </div>
                    <div className="col-12 homepage-contact-delatils col-md-7 align-self-center mt-4 pb-4">
                        
                    <Fade bottom><p className="container">
                        
                                        <br/><i className=" fa fa-home ">Chandigarh University</i>
                                        <br/> NH-95 Chandigarh-Ludhiana Highway,
                                        <br/> Mohali, Punjab (INDIA)
                                        <br/><i className=" fa fa-envelope ">kartikmalik271@gmail.com</i>
                                        <br/><i className=" fa fa-phone ">+91 9592113381</i>
                                        </p></Fade>
                            <Fade bottom><h3><a href="#" ><i className="col-2 footerlinks fa fa-instagram fa-md"></i></a>
                            <a href="#" ><i className="col-2 footerlinks fa fa-facebook fa-md"></i></a>
                            <a href="#" ><i className="col-2 footerlinks fa fa-linkedin fa-md"></i></a>
                            <a href="#" ><i className="col-2 footerlinks fa fa-twitter fa-md"></i></a>
                            <a href="#" ><i className="col-2 footerlinks fa fa-youtube fa-md"></i></a>
                            <a href="#" ><i className="col-2 footerlinks fa fa-envelope-o fa-md"></i></a></h3></Fade>
                    </div>
                       
                            
                        
                
			    </div>
		    </div></Fade>
	    </div></Fade>
    </React.Fragment>
     );
}
 
export default Footer;