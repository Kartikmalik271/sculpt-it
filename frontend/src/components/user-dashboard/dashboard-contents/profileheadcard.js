import React from 'react';
import Headlogo from '../../../assets/user-dashboard-img/dream.jpg';

const Profileheadcard = ({ greet }) => {
  return (
    <div className="profile-head-card">
      <div className="col-12 px-0">
        <div className="row align-items-center">
          <div className="head col-12 px-3">
            <h3>{greet}</h3>
            <p class="d-none d-md-block">
              Une école est le lieu où nous obtenons des connaissances. C'est
              comme un lieu saint pour les élèves.Et les professeurs sont nos
              dieux. Mon école est très belle. Le nom de mon école est ABC.
              C'est dans la ville XYZ. C'est avoir 150 chambres.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profileheadcard;
