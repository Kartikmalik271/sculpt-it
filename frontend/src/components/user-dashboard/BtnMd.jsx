import React from 'react';
import './right-sidebar/right-side-bar-style.css';
const BtnMd = (props) => {
  return (
    <React.Fragment>
      <button className="custom-btn-dash border-0">
        <span className="custom-btn-text border-0">{props.children}</span>
      </button>
    </React.Fragment>
  );
};

export default BtnMd;
