import React,{useState} from 'react';
import {Redirect} from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import mainimg from '../../assets/homepage/img/mainbg.png'
import Roll from 'react-reveal/Roll'
import Fade from 'react-reveal/Fade'
import Navbar from './Navbar';
import { login } from '../../actions/auth'
import {connect} from 'react-redux'
import CSRFToken from '../CSRFToken'
import { useAlert} from 'react-alert'


const Main = ({ login, isAuthenticated}) => {
    const alert = useAlert()
    const [check , setCheck]= useState(null)
    const [formData, setFormData] = useState({
        username:'',
        password:''
        
    });

    const {username, password} = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value });

    const onSubmit = e => {
        e.preventDefault();

            login(username, password);
            setCheck(true);
            
    };

    if (isAuthenticated && check){
        alert.success('LOGGED IN');
        return <Redirect to='/dashboard'/>;
    }
     if (!isAuthenticated && check){
        alert.show('IF FAILED ENTER ')
        alert.show("VALID DETAILS AFTER 10'S")
        setCheck(null);

    }

    
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
                                <form onSubmit={e =>onSubmit(e)}>
                                        <CSRFToken/>
                                        <Fade bottom><input className="col-12 mb-2 loginform"  
                                                            type="text" 
                                                            name="username" 
                                                            placeholder="Username"
                                                            onChange = {e => onChange(e)} 
                                                            value={username}  
                                                            required="required" 
                                                            /></Fade>
                                        <Fade bottom><input className="col-12 mb-3 loginform"  
                                                            type="password" 
                                                            name="password" 
                                                            placeholder="Password"
                                                            onChange = {e => onChange(e)} 
                                                            value={password} 
                                                            required="required" 
                                                            /></Fade>
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
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Main);