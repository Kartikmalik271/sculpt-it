import React from 'react';


const Profileheadcard = (props) => {
  var google = 'http://google.com'
  const Google = () => {
    window.open(google)
  }
  return (
    <div className="profile-head-card col-12 py-4">
        <div className="row align-items-center">
          <div className="profile-head-card-main col-12 col-lg-5 " style={{textAlign:'center'}}>
            <h1>kartik malik</h1>
            <h4>student</h4>
          </div>
          <div className="profile-head-card-contacts-1  col-12 col-lg-3" style={{}}>
            <p>kartikmalik271@gmail.com</p>
            <p>xxxx-xxx-xxx</p>
            <p>xxxx-xxx-xxx</p>

          </div>         
          <div className="profile-head-card-contacts-2  col-12 col-lg-3" style={{}}>
            
            <p>xxxxxxxx</p>
            <p onClick={Google}>xxxxxxxxxxx</p>
          </div>         
        </div>
    </div>
  );
};

export default Profileheadcard;
