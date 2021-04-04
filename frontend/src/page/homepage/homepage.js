import React from 'react';
import './homepage.css'
import Main from '../../components/homepage/Main';
import AboutCard from '../../components/homepage/AboutCard';
import Register from '../../components/homepage/Register';
import Footer from '../../components/homepage/footer';
import Team from '../../components/homepage/Team';
import Alert from '../../components/alerts'




const Homepage = () => {
    return ( 
        <div>
            <Alert/>
            <Main/> 
            <AboutCard/>
            <Register/>
            <Team/>
            <Footer/>     
            
        </div>
     );
}
 
export default Homepage;