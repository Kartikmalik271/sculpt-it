import React from 'react';
import CustomButton from '../BtnMd';
import UpdateSVG from './UpdateSVG';
const UpdateApp = () => {
  return (
    <React.Fragment>
      <div className="reminders--box px-3 pb-3 d-flex flex-column ml-0">
        <div className="d-flex justify-content-center mt-n3">
          <UpdateSVG className="update-svg" />
        </div>
        <h6 className="my-3 text-center update-heading">
          UPDATE FOR NEW VERSIONS
        </h6>
        <CustomButton>INSTALL</CustomButton>
      </div>
    </React.Fragment>
  );
};

export default UpdateApp;
