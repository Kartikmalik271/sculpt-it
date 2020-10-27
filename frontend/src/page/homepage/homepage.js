import React from 'react';
import './homepage.css'
import Main from '../../components/homepage/Main';
import AboutCard from '../../components/homepage/AboutCard';
import Register from '../../components/homepage/Register';
import Footer from '../../components/homepage/footer';




const Homepage = () => {
    return ( 
        <div>
           
            <Main/> 
            <Register/>
            <AboutCard/>
            <Footer/>     
            
        </div>
     );
}
 
export default Homepage;