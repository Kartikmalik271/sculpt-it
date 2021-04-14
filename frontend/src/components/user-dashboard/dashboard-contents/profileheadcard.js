import React from 'react';
import Fade from 'react-reveal/Fade'


const Profileheadcard = (props) => {
 
  return (
    <Fade top><div className="profile-head-card col-12 py-4">
        <div className="row align-items-center">
          <div className="profile-head-card-main col-12 col-lg-6 py-4" style={{textAlign:'center'}}>
          <Fade bottom><h1>{props.name}</h1></Fade>
          <Fade bottom><h4>{props.status}</h4></Fade>
          </div>
          <div className="profile-head-card-contacts-1  col-12 col-lg-6" style={{textAlign:'right'}}>
          <Fade bottom><p>{props.email}  <i className="fas fa-envelope "/></p></Fade>
          <Fade bottom><p>{props.phone} <i className="fas fa-phone "/></p></Fade>
          <Fade bottom><p>{props.city} <i className="fas fa-map-marker "/></p></Fade>
          <Fade bottom><p>{props.linkedin} <i className="fa fa-linkedin "/></p></Fade>
           
          </div>         
        </div>
    </div></Fade>
  );
};

export default Profileheadcard;
