import React from 'react';
import Profileheadcard from './dashboard-contents/profileheadcard';
import Resume from './dashboard-contents/resume';


const currDate = new Date().getDate();
const currYear = new Date().getFullYear();
const currMonth = new Date().toLocaleDateString('default', { month: 'short' });
const currDay = new Date().getDay('default', { day: 'long' });
var day = '';
switch (currDay) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;

  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;

  default:
    day = 'sunday';
    break;
}
var hrs = new Date().getHours();

var greet;

if (hrs < 12) greet = 'Good Morning!!!!!';
else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon!!!!!';
else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening!!!!!';

const Profile = () => {
  return (
    <div className="App">
      <div className="col-12 align-self-center">
        <div className="row">
          <div className="date">
            <h7 className=" content-tag d-none d-sm-block">PROFILE</h7>
            <p>
              {currDate} {currMonth} {currYear} ,{day}
            </p>
          </div>
          <Profileheadcard greet={greet} />
          <Resume/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
