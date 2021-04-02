import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const currDate =new Date().getDate();
const currYear =new Date().getFullYear();
const currMonth =new Date().toLocaleDateString('default',{month:'short'});
const currDay = new Date().getDay('default',{day:'long'});
var day=''
switch (currDay) {
  case 0:
    day='Sunday';
    break;
    case 1:
      day='Monday';
      break;

      case 2:
        day='Tuesday';
        break;
        case 3:
          day='Wednesday';
          break;
          case 4:
            day='Thursday';
            break;
            case 5:
              day='Friday';
              break;
              case 6:
                day="Saturday"
                 break;
                               
  default: day="sunday";
    break;
}
  return (
    <nav className="navbar main-navbar navbar-expand-md navbar-dark  fixed-top" >
      <div className="row align-items-center">
        <h5 className="pl-4 py-2">{currDate} {currMonth} {currYear} ,{day}</h5>
      </div>
      
    </nav>
  );
};

export default Navbar;