import React, { useState,useContext} from 'react';

import {withRouter} from 'react-router-dom'
import Auth from '../../utils/Auth';
import Message from '../../components/Message';
import {AuthContext} from '../../context/AuthContext';

import Typewriter from 'typewriter-effect';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slider1 from '../../assets/homepage/img/slider1.png'
import slider2 from '../../assets/homepage/img/slider2.png'
import slider3 from '../../assets/homepage/img/slider3.png'
import slider4 from '../../assets/homepage/img/slider4.png'
import Roll from 'react-reveal/Roll'
import Fade from 'react-reveal/Fade'
import Navbar from './Navbar';


const Main = (props) => {
    const [user, setUser] = useState({username:"",password:""});
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const OnSubmit = (e) =>{
        e.preventDefault();
        Auth.login(user).then(data=>{
            const {history:{ push }} = props;
            const { isAuthenticated,user,message} = data;
        
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(true);
                push('/Dashboard');
            }
            else
                setMessage(message);
        })
    }

    const Onchange = (e) =>{
        
        setUser({...user,[e.target.name]: e.target.value});
       
    }

    return ( 
        <div className=" homepage-main " >
            <Navbar/>
           <div className="col-12" >
                <div className="row justify-content-center align-items-center  ">
                     <OwlCarousel   
                                items={1}
                                autoplay ={true}
                                loop={true} 
                               
                                style={{textAlign:'center'}}>  

                    <div className="col-12 item px-0 py-0"> <img className="mainimage" src={slider1}  alt=""/></div>
                    <div className="col-12 item px-0 py-0"> <img className="mainimage" src={slider2}  alt=""/></div>
                    <div className="col-12 item px-0 py-0"> <img className="mainimage" src={slider3}  alt=""/></div>
                    <div className="col-12 item px-0 py-0"> <img className="mainimage" src={slider4}  alt=""/></div>

                </OwlCarousel>
               
                    <div className="homepage-main-display flex col-12 col-md-7 mt-5 pt-5 pt-md-0 mt-xl-0  pb-5 mb-md-3">
                        <div className="row justify-content-center align-items-center ">
                            <div className="col-12 col-md-7 homepage-main-display-lhs">
                                <h1 className="d-none d-md-block">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString("portfolio.com")            
                                                .pauseFor(1500)
                                                .deleteChars(13)
                                                typewriter.typeString("WELCOME'S YOU!!") 
                                                .pauseFor(1500)
                                                .deleteChars(15)
                                                typewriter.typeString("HAPPY SURFING") 
                                                .pauseFor(1500)
                                                .deleteChars(13)
                                                typewriter.typeString("portfolio.com") 
                                                .start();
                                        }}
                                    /> 
                                </h1>
                                <h2 className="d-md-none d-block">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString("portfolio.com")            
                                                .pauseFor(1500)
                                                .deleteChars(13)
                                                typewriter.typeString("WELCOME'S YOU!!") 
                                                .pauseFor(1500)
                                                .deleteChars(15)
                                                typewriter.typeString("HAPPY SURFING") 
                                                .pauseFor(1500)
                                                .deleteChars(13)
                                                typewriter.typeString("portfolio.com") 
                                                .start();
                                            }}
                                    /> 
                                </h2>
                            </div>

                            <Roll right><div className=" col-10 col-md-5 homepage-main-display-rhs">
                                <form onSubmit={OnSubmit}>
                                        <Fade bottom><input className="col-12 mb-2 loginform" onChange={Onchange} type="text" name="username" placeholder="Username"  required="required" autofocus/></Fade>
                                        <Fade bottom><input className="col-12 mb-3 loginform" onChange={Onchange} type="password" name="password" placeholder="Password" required="required" /></Fade>
                                        <Fade bottom><button type="submit" className="btn col-6 homepagelogin-btn-half">SignIn.</button></Fade>

                                </form>
                                {message ? <Message message={message}/> : null}
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

export default withRouter(Main);