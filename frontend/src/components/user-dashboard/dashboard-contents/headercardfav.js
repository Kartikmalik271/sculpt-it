import React from 'react';
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'

const Headcardfav = ( {name}) => {
  return (
    <Fade top><div className="head-card-fav">
      <div className="col-12  px-0">
        <div className="row align-items-center px-3">
          <div className="head col-12 col-sm-8 px-4">
          <Fade bottom><h3>HELLO {name}!!!</h3></Fade>
          <Fade bottom><p >
              Une école est le lieu où nous obtenons des connaissances. C'est
              comme un lieu saint pour les élèves.Et les professeurs sont nos
              dieux. Mon école est très belle. Le nom de mon école est ABC.
            </p></Fade>
          </div>
          
        </div>
      </div>
    </div></Fade>
  );
};
const mapStateToProps = state =>({
  name: state.profile.first_name
});
export default connect(mapStateToProps)(Headcardfav);
