import React from 'react';



import Typewriter from 'typewriter-effect';
import mainimg from '../../assets/homepage/img/mainbg.png'
import Roll from 'react-reveal/Roll'
import Fade from 'react-reveal/Fade'
import Navbar from './Navbar';


const Main = (props) => {
    
    return ( 
        <div className=" homepage-main"  >
            <Navbar/>
           <div className="col-12">
                <div className="row  align-items-center  ">               
                    <div className="homepage-main-display col-12 ">
                    <img className="homepage-main-mainimg d-none d-md-block " src={mainimg} alt=""/>
                        <div className="row justify-content-center align-items-center ">
                            <div className="col-12 col-lg-7 homepage-main-display-lhs">
                                <h1>
                                    Sculpt It.
                                </h1>
                                <h3>Carve your professional path with us</h3>
                            </div>

                            <Roll right><div className=" col-10 col-lg-4   homepage-main-display-rhs">
                                <form >
                                        <Fade bottom><input className="col-12 mb-2 loginform"  type="text" name="username" placeholder="Username"  required="required" autofocus/></Fade>
                                        <Fade bottom><input className="col-12 mb-3 loginform"  type="password" name="password" placeholder="Password" required="required" /></Fade>
                                        <Fade bottom><button type="submit" className="btn col-6 homepagelogin-btn-half">SignIn.</button></Fade>

                                </form>
                                
                                <p>or<br/>
                                    <a href="#JoinUs">Sign-Up now</a>
                                </p>
                            </div></Roll>
                        </div>
                    </div>              
                </div>
            </div>
            
        </div>
     );
}

export default Main;