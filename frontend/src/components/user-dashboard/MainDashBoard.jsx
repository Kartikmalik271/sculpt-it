import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import Headcardmain from './dashboard-contents/headcardmain';
import { update_profile } from '../../actions/profile';
import Fade from 'react-reveal/Fade'
import  Article from './dashboard-contents/article';



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

const MainDashBoard = () => {

 



  return (
    <div className="App">
      <div className=" ">
        <div className="row">
          <div className="date">
            <h7 className="content-tag d-none d-sm-block">DASHBOARD</h7>
            <p>
              {currDate} {currMonth} {currYear} ,{day}
            </p>
          </div>
          <Headcardmain />
         
          
              <Article/>
              
              
        </div>
      </div>
    </div>
  );
};

export default MainDashBoard;
