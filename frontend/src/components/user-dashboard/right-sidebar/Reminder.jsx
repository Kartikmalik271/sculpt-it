import React from 'react';
import CustomButton from '../BtnMd';

const Reminder = () => {
  return (
    <React.Fragment>
      <div className=" d-flex flex-column p-3 reminders--box ">
        <h6 className="mb-4">REMINDERS</h6>
        <ol className="list-number pl-3">
          <li className="p-0">
            <p className="p-0">Counselling at 2.00 am</p>
          </li>
          <li>
            <p>Personality Results</p>
          </li>
          <li>
            <p>Dairy Review</p>
          </li>
        </ol>
        <CustomButton>MORE</CustomButton>
      </div>
    </React.Fragment>
  );
};

export default Reminder;
