import React,{useState} from 'react';
import {Redirect} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Navbar from './Navbar';
import { login } from '../../actions/auth'
import {connect} from 'react-redux'
import CSRFToken from '../CSRFToken'
import { useAlert} from 'react-alert'
import {TextField} from '@material-ui/core'
import logo from '../../assets/homepage/img/mainlogo.png'
import mainimg from '../../assets/homepage/img/mainimg.png'

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
            window.$("#FormModal").hide()
            
    };

    if (isAuthenticated && check){
        alert.success('LOGGED IN');
        return <Redirect to='/dashboard'/>;
    }
    else if (!isAuthenticated && check){
        alert.show('IF FAILED ENTER ')
        alert.show("VALID DETAILS AFTER 10'S")
        setCheck(null);

    }
   
    
    return ( 
        <div className=" homepage-main"  >
            <Navbar/>
           <div className="col-12">              
                    <div className="homepage-main-display col-12 pt-5">
                        <div className="row ">
                        <div className="col-12 col-md-6 homepage-main-display-rhs mt-5 pt-2 pl-md-5 order-last d-none d-md-block">
                                <div className="row justify-content-center">
                                    <img className="col-12 homepage-mainimg pl-0" src={mainimg} />

                                    
                                </div>
                            </div>
                            <div className="col-12 col-md-6 homepage-main-display-lhs mt-5  pl-md-5">
                                
                                <h6 className=" pl-2 pl-md-5">Carve your professional path with us</h6>
                                <img className="col-12 col-md-6 px-0 mb-2" src={logo} alt=""/>
                                <form onSubmit={e =>onSubmit(e)}>
                                                                <CSRFToken/>
                                                                <Fade bottom><TextField 
                                                                                    label="username" 
                                                                                    className="col-12 col-md-8 login-input my-1"   
                                                                                    type="text" 
                                                                                    name="username" 
                                                                                    placeholder="Username"
                                                                                    onChange = {e => onChange(e)} 
                                                                                    value={username}  
                                                                                    required="required" 
                                                                                    /></Fade>
                                                                <Fade bottom><TextField 
                                                                                    label="password" 
                                                                                    
                                                                                    className="col-12 col-md-8 my-1"   
                                                                                    type="password" 
                                                                                    name="password" 
                                                                                    placeholder="Password"
                                                                                    onChange = {e => onChange(e)} 
                                                                                    value={password} 
                                                                                    required="required" 
                                                                                    /></Fade>
                                                                <Fade bottom><button type="submit" className="btn col-6 login-btn-half mt-1" >SignIn.</button></Fade>

                                                        </form>

                                
                                    <div className="col-12 main-ornagebox px-0">
                                    <img className="col-12 homepage-mainimg-phone pl-4 pt-4 d-block d-md-none " src={mainimg} />
                                    </div>

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