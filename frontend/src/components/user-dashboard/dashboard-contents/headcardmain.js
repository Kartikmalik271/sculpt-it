import React from 'react';
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'

const Headcardmain = ({name}) => {
  return (
    <Fade top><div className="head-card-fav">
      <div className="col-12">
        <div className="row align-items-center">
          <div className="head col-12 px-4">
          <Fade bottom><h3>Welcome {name}!!!</h3></Fade>
          <Fade bottom><p >
          Sculpt-It. promises to save all your notes, ideas, thoughts, scribbles & helps to maintain your portfolio and create a professional shareable resume. All these features in a single site : Sculpt-it.
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

export default connect(mapStateToProps)(Headcardmain);
